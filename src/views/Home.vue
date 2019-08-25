<template>
  <div class="home">
    <input placeholder="请输入姓名" v-model="value" v-focus />
    <button @click="submit">提交</button>
    <vue-msg ref="msg"></vue-msg>
  </div>
</template>

<script>
export default {
  name: 'home',
  data(){
    return{
      value:null,
    }
  },
  created(){
    this.mixinFn();
    // console.log(Vue.$name);
  },
  methods:{
    submit(){
      if(!this.value){
        //太low了
        //第一时间，我可以写个弹窗，再深入一点，想的周到一点，
        //封装一个组件组件，在没有封装组件之前，如果不使用第三方插件，
        //那么很多情况下我们会编写几个常用的组件来提供给页面使用，如Alert/Loading组件，
        //而你可能需要在很多页面中引入并且通过components注册组件，
        //但是像这样使用率很高的组件一般我们希望全局注册后直接就可以在相应页面使用，
        //因此我们需要将他们封装成插件，比如像vux这样的组件库，即提供了组件功能也提供了某些全局注册的插件。
        //用一句话简单概括两者的关系就是：插件可以封装组件，组件可以暴露数据给插件。
        
        // alert('请填写内容');

        this.$nextTick(()=>{
          //调用
          this.$myMethod();
          console.log(this.$msg);
          this.$refs.msg.msgPlugin('请填写内容',5000);
        })
      }
    }
  }
}
</script>
