<template>
    <div class="box">
        <div class="bb">
          <p>elm后台管理系统</p>
        </div>
        <div class="content">
          <input type="text" placeholder="用户名" v-model="name">
          <input type="text" placeholder="密码" v-model="pass">
          <button @click="submit()">登录</button>
          <div class="aa">
            <p>温馨提示</p>
            <p>未登陆过的新用户,自动注册</p>
            <p>注册过的用户,可凭账号密码登陆</p>
          </div>
        </div>
      </div>
</template>

<script>
  import axios from "axios"
  export default {
    name: 'manage',
    data(){
      return{
        name:"",
        pass:""
      }
    },
    methods:{
      submit(){
        let data={
          user_name:this.name,
          password:this.pass
        }
        axios.post('https://elm.cangdu.org/admin/login',data).then((res)=>{
           console.log(res)
         if(res.data.status==1){
           this.$router.push('/shopList')
         }
        })
      }
    }
  }
</script>

<style scoped>
.box{
  width: 100%;
  height:800px;
  background: #324057;
  margin-top: -80px;
}
  .bb p{
    color: white;
    margin: 0 auto;
    font-size: 35px;
    padding: 150px 0 20px 0;
  }
  .content{
    width: 400px;
    height: 270px;
    border-radius: 10px;
    background: white;
    border: 1px solid white;
    margin: 0 auto;
    margin-top: 200px;
    position: relative;
  }
  .content input{
    width: 300px;
    height: 30px;
    outline: none;
    margin-top: 20px;
  }
  .content button{
    width: 300px;
    height: 30px;
    margin-top: 20px;
    background: #20A0FF;
    border: none;
    color: white;
    line-height: 30px;
    border-radius: 5px;
  }
  .aa{
    margin-top: 18px;
  }
  .content p{
    font-size: 12px;
    color: red;
   margin-top: 10px;
  }
</style>
