import jwt from "jsonwebtoken";
import conf from "../config";
import userModel from "../models/user";

module.exports = {
    async login (ctx , next){
        console.log('----------------登录接口 user/login-----------------------');
        console.log('====================='+JSON.stringify(ctx.request.body));
        
        let {username, password} = ctx.request.body;
        console.log(username+"+++++++"+userModel+"+---------------")
        try {
            let data = await ctx.findOne(userModel, {username: username});
            console.log('--------'+data+"--------pwd"+password)
            if (!data) {
                return ctx.sendError('用户名不存在！');
            }
            if (password !== data.password) {
                return ctx.sendError('密码错误,请重新输入！');
            }
            await ctx.update(userModel, {_id: data._id}, {$set:{loginTime: new Date()}}) //更新登陆时间

            let payload = {
                _id: data._id,
                username: data.username,
                name: data.name,
                roles: data.roles
            }
            let token = jwt.sign(payload, conf.auth.admin_secret, {expiresIn: '24h'})  //token签名 有效期为24小时
            ctx.cookies.set(conf.auth.tokenKey, token, {
                httpOnly: false,  // 是否只用于http请求中获取
            });
            console.log('登陆成功')
            ctx.send({message: '登录成功'});
        } catch (e) {
            if (e === '暂无数据') {
                console.log('用户名不存在')
                return ctx.sendError('用户名不存在');
            }
            ctx.throw(e);
            ctx.sendError(e)
        }
        
    },
    async add (ctx, next) {
        console.log('----------------添加管理员 user/add-----------------------');
        let paramsData = ctx.request.body;
        try {
            let data = await ctx.findOne(userModel, {name: paramsData.username})
            if (data) {
                ctx.sendError('数据已经存在, 请重新添加!')
            }else{
                let data = await ctx.add(userModel, paramsData);
                ctx.send(paramsData)
            }
        }catch(e) {
            ctx.sendError(e)
        }
    },
}