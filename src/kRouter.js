import Vue from "vue"
import Home from "./views/Home";
import About from "./views/About";

class VueRouter{
    constructor(options){
      this.$options = options;
      this.routeMap={};

      //由于响应式
      this.app = new Vue({
          data:{
              current:"/"
          }
      });
    }

    init(){
        this.bindEvents();//监听url变化；
        this.createRouteMap(this.$options);//解析路由配置
        this.initComponent();//实现两个组件
    }

    bindEvents(){
        window.addEventListener("load",this.onHashChange.bind(this));
        window.addEventListener("hashchange",this.onHashChange.bind(this))
    }
    onHashChange(){
       this.app.current = window.location.hash.slice(1) || "/";
    }

    createRouteMap(options){
        options.routes.forEach(item => {
            this.routeMap[item.path] = item.component;
        });
    }

    initComponent(){
        Vue.component("router-link",{
            props:{to:String},
            render(h){
                return h("a",{attrs:{href:"#" + this.to}},[
                    this.$slots.default
                ]);
            }
        });

        Vue.component("router-view",{
            render:h=>{
                const comp = this.routeMap[this.app.current];
                return h(comp)
            }
        });
    }
}

VueRouter.install = function(Vue){
   Vue.mixin({
       beforeCreate(){
            //this是vue实例
            console.log("his.$options.router==",this.$options.router);
            if(this.$options.router){ //this.$options.router哪里来的
                 // 仅在根组件执行一次
              Vue.prototype.$router = this.$options.router;
              this.$options.router.init();
            }
       }
      
   })
}
Vue.use(VueRouter);
export default new VueRouter({
    routes:[{ path: "/", component: Home }, { path: "/about", component: About }]
})