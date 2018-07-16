<template>
    <div class="signin">
     <div class="signin_body">
         <div class="signin_body_header">
         <h2>SkyWalker</h2>
         </div>
         <div class="signin_body_main">
             <input type="text" placeholder="账号/邮箱/电话号码">
             <br>
             <input type="password" placeholder="密码">
             <button v-on:click="Signin">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
         </div>
         <div class="signin_body_footer">
             <h2>
                 <span>没有账号?</span>
                             |      
                 <a href="#">创建一个账号</a>
             </h2>
             
         </div>
     </div>
    </div>
</template>
<script>
export default {
    data(){
        return{ 'result':'成功'}
    },
    methods:{
        Signin(){
            var params=new URLSearchParams();
            params.append("username","yemobai");
            params.append( "password","123");
            params.append("client_id","pc");
            params.append( "client_secret","yemobai");
            params.append("grant_type","password");
           this.$ajax.post("http://localhost:63894/connect/token",
            params
           , {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
           ).then(function(response){
               console.log(response);
           }).catch(function(error){
               console.log(error);
           })
        },
        SignIn2(){
            this.$ajax.get("http://localhost:56454/api/user/1"
               
            ).then(function(response){
                console.log(response);
            }).catch(function(error){
                console.log(error);
            })
        }
    }
}
</script>
<style>
.signin{
    background-color:#ccc;
    width: 100%;
    height: 1000px;
    font-family:"Microsoft YaHei";
}
.signin_body{
    width: 400px;
    height: 450px;
    background-color: white;
    margin: 0  auto;
}
.signin_body_header{
    height: 50px;
    width: 400px;
}
.signin_body h2{
   margin: 0;
     font-family: Consolas;
    line-height: 50px;
    text-align: center;
    font-size: 30px;
    color: #333333;
}
.signin_body_main{
    width: 300px;

    height: 300px;
    margin: 0 auto;
}
.signin_body_main input{
    margin-top: 20px;
    height: 50px;
    width: 100%;
    border-radius: 3px;
    outline: 0px;
    border: 0px;
    background-color: #f2f2f2;
    font-size: 15px;
    text-indent: 10px;
}
.signin_body_main button{
   margin-top: 20px;
    height: 50px;
    width: 100%; 
    border-radius: 3px;
    font-size: 20px;
    background-color: #ef5b00;
    border:  none;
    outline: none;
     color: white;
}
.signin_body_footer h2{
    font-size: 20px;
    font-family:"Microsoft YaHei";
}
.signin_body_footer span{
   color: #b3b3b3;
}
.signin_body_footer a{
    color: #EF3B3A;
    text-decoration: none;
}
</style>
