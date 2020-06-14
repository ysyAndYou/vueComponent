import Vue from 'vue'

export default function create(Component,props){
    //先创建实力
    const vm = new Vue({
        render(h){
             // h就是createElement，它返回VNode
            return h(Component,{props});
        }
    }).$mount();

   //手动挂载 vm.$el正式dom
   document.body.appendChild(vm.$el)
   //销毁
   const comp = vm.$children[0];
   comp.remove = function(){
       document.body.removeChild(vm.$el);
       vm.$destroy();
   }
   return comp;
}