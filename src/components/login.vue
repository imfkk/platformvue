<template>
  <div id="user">
    <index></index>
    <div><span>登录</span></div>
    <div>账号：<input v-model="name"/></div>
    <div>密码：<input v-model="pwd"/></div>
    <div><input type="button" value="登录" @click="dologin()"/></div>
  </div>
</template>

<script>
  import index from './index.vue'
  export default {
    name: "login",
    data() {
      return {
        name: "",
        pwd: ""
      }
    },
    methods: {
      dologin() {
        this.$http({
          method: "post",
          url: "/vueApi/helloworld/login",
          headers: {
            'Content-type': 'application/x-www-form-urlencoded'
          },
          data: {
            name: this.name,
            pwd: this.pwd,
          }
        })
          .then(function (ret) {
            //alert(this)
            this.$router.push({path:'/index'})
          })
          .catch(function (ret) {

          })
      },

      dologin2() {
        var url = "/vueApi/helloworld/login";
        var data = {};
        data.name = this.name;
        data.pwd = this.pwd;
        this.$axios.post(url, data).then(value => {
            console.log("asdada");
            this.$router.push({path: 'index'})
          }
        ).catch(function (reason) {
          console.log(reason);
        })
      }

    },
    components:{
     index
    }
  }
</script>

<style scoped>


</style>
