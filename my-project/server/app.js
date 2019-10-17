import Koa from 'koa'
import ip from "ip";
import conf from "./config";
import router from "./router";
import func from "./func/index";
import bodyParser from 'koa-bodyparser'
import Send from "./send/index";

const app =new Koa();
app.use(bodyParser({
    enableTypes:['json','form','text']
}));

// logger
app.use(async (ctx, next) => {
    const start = new Date()
    await next()
    const ms = new Date() - start
    console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
  })  

app.use(func())
app.use(Send())
app.use(router.routes(), router.allowedMethods())
app.on('error', (err,ctx)=>{
    console.error('错误=============='+err+ctx);
    
})
app.listen(conf.port,'0.0.0.0',()=>{
    console.log("sddsdsd=========="+JSON.stringify(conf));
    
    console.log(`服务器启动于 http://${ip.address()}:${conf.port}`);
    
})

module.exports = app;