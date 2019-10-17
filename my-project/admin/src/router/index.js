import Vue from 'vue'
import Router from 'vue-router'
import store from "../store/index";

Vue.use(Router)

const routes=[
  {
      path: '/login',
      name: 'login',
      component: resolve=>require(['../views/login/index'],resolve)
  },{
    path: '/register',
    name: 'register',
    component: resolve=>require(['../views/login/register'],resolve)
    },{
    path:'/',
    name:'index',
    component: resolve => require(['../views/list'],resolve),
    children:[
        {
            path:'/bar',
            name:'bar',
            component:resolve => require(['../views/Bar'],resolve)
        },{
            path:'/foo',
            name:'foo',
            component:resolve => require(['../views/Foo'],resolve),
            meta:{
                requiresAuth:true
            }
        },{
            path:'/todo',
            name:'todo',
            component:resolve => require(['../views/todo-list/App'],resolve)
        },{
            path:'/chart',
            name:'chart',
            component:resolve => require(['../views/echart/App'],resolve)
        }
    ]
}
];

const originalPush = Router.prototype.push;
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err);
};

const router = new Router({routes});
router.beforeEach((to,from,next)=>{
  let token=store.state.user;

  console.log('-----dirname----'+__filename);
  console.log("token------------"+JSON.stringify(store.state.user));
  
  if(to.meta.requiresAuth){
    if(token.username){
        console.log('111');
        
        next();
    }else{
        console.log('2222');
        next({name:'login'});
    }
  }else{
   next();
  }
});
export default router;
