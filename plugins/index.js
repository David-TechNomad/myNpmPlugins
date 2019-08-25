//先引入组件
import msg from './msg/msg.vue'

let plugin = {};
plugin.install = function (Vue,options){
    //Vue是实例 options是选项
    //添加全局属性 
    Vue.prototype.$msg = "我是鲲鲲老师，我会唱跳rap";
    Vue.prototype.$myMethod = function (e){
        console.log('鲲鲲老师好帅');
        //do something
    }
    //全局自定义指令 权限控制也可以这么处理
    Vue.directive('focus',{
        bind:function(){

        },
        //获取焦点
        inserted:function(el,binding,vnode,oldVnode){
            el.focus();
        }
    })
    //全局引入
    Vue.mixin({
        methods: {
            mixinFn() {
                console.log('我是mixinFn方法');
            }
        }
    });

    //添加组件  name,是msg属性的name属性
    Vue.component(msg.name,msg);  
}

export default plugin