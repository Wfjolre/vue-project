const router = require('koa-router')()
const controller = require('../controller/user')

router.get('/', async (ctx, next) => {
  ctx.body = "hello world"
})
router.post("/api/user/login", controller.login) // 用户登录
router.post("/api/user/add", controller.add) // 用户登录
 
module.exports = router
// export default app =>{
//     router.get('/',async (ctx, next)=>{
//         ctx.body ='Hello world'
//     })
//     router.post('/api/user/login', app.user.login)
// }