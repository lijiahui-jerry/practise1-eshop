<template>
 <div class="register-container">
  <!-- 注册内容 -->
  <div class="register">
   <h3>
    注册新用户
    <span class="go">
     我有账号，去 <a href="login.html" target="_blank">登陆</a>
    </span>
   </h3>

   <div class="content">
    <label>手机号:</label>
    <input type="text" placeholder="请输入你的手机号" v-model="phone" name="phone"
           v-validate="{required:true,regex:/^1\d{10}$/}"
           :class="{invalid:errors.has('phone')}"/>
    <span class="error-msg">{{errors.first('phone')}}</span>
   </div>

   <div class="content">
    <label>验证码:</label>
    <input type="text" placeholder="请输入验证码" v-model="passcode" name="passcode"
           v-validate="{required:true,regex:/^\d{6}$/}"
           :class="{invalid:errors.has('passcode')}"/>
    <button @click="getPasscode">获取验证码</button>
    <span class="error-msg">{{errors.first('passcode')}}</span>
   </div>

   <div class="content">
    <label>登录密码:</label>
    <input type="password" placeholder="请输入你的登录密码" v-model="password"
           name="password"
           v-validate="{required:true,regex:/^[0-9A-Za-z]{8,20}$/}"
           :class="{invalid:errors.has('password')}"/>
    <span class="error-msg">{{errors.first('password')}}</span>
   </div>

   <div class="content">
    <label>确认密码:</label>
    <input type="password" placeholder="请输入确认密码" v-model="confirmPassword"
           name="confirmPassword"
           v-validate="{required:true,is:password}"
           :class="{invalid:errors.has('password')}"/>
    <span class="error-msg">{{errors.first('confirmPassword')}}</span>
   </div>

   <div class="controls">
    <input type="checkbox" v-model="ifAgree"
           name="ifAgree" :checked="ifAgree"
           v-validate="{required:true,agree:true}"
           :class="{invalid:errors.has('ifAgree')}"/>
    <span>同意协议并注册《尚品汇用户协议》</span>
    <span class="error-msg">{{errors.first('ifAgree')}}</span>
   </div>

   <div class="btn">
    <button @click="userRegister">完成注册</button>
   </div>
  </div>

  <!-- 底部 -->
  <div class="copyright">
   <ul>
    <li>关于我们</li>
    <li>联系我们</li>
    <li>联系客服</li>
    <li>商家入驻</li>
    <li>营销中心</li>
    <li>手机尚品汇</li>
    <li>销售联盟</li>
    <li>尚品汇社区</li>
   </ul>

   <div class="address">
    地址：北京市昌平区宏福科技园综合楼6层
   </div>

   <div class="beian">
    京ICP备19006430号
   </div>
  </div>
 </div>
</template>

<script>
import {mapState} from "vuex"

export default {
  name:'Register',

  methods:{
    //获取验证码
    async getPasscode(){
      const {phone}=this

      try{
        //&&前为真才会执行&&后面的代码
        phone && (await this.$store.dispatch('getPasscode',phone))
        this.passcode=this.code
      }catch(e){
        alert(e.message)
      }
    },

    //注册用户
    async userRegister(){
      const ifSucceed=await this.$validator.validateAll()

      if(ifSucceed){
        const {phone,passcode,password,confirmPassword,ifAgree}=this

        try{
          await this.$store.dispatch('userRegister',
            {phone,password,code:passcode})
          this.$router.push('/login')
        }catch(e){
          alert(e.message)
        }
      }
    },
  },

  computed:{
    //mapGetters是getters名数组，mapState是对象，因为getters中已经有了明确的返回值
    ...mapState({
      code:state=>state.user.code,
    }),
  },

  data(){
    return {
      phone:'',
      passcode:'',
      password:'',
      confirmPassword:'',
      ifAgree:true,
    }
  },
}
</script>

<style lang="less" scoped>
.register-container{
  .register{
    width:1200px;
    height:445px;
    border:1px solid rgb(223, 223, 223);
    margin:0 auto;

    h3{
      background:#ECECEC;
      margin:0;
      padding:6px 15px;
      color:#333333;
      border-bottom:1px solid #DFDFDF;
      font-size:20.04px;
      line-height:30.06px;

      span{
        font-size:14px;
        float:right;

        a{
          color:#E1251B;
        }
      }
    }

    div:nth-of-type(1){
      margin-top:40px;
    }

    .content{
      padding-left:390px;
      margin-bottom:18px;
      position:relative;

      > button{
        height:38px;
        margin-left:2px;
      }

      label{
        font-size:14px;
        width:96px;
        text-align:right;
        display:inline-block;
      }

      input{
        width:270px;
        height:38px;
        padding-left:8px;
        box-sizing:border-box;
        margin-left:5px;
        outline:none;
        border:1px solid #999999;
      }

      img{
        vertical-align:sub;
      }

      .error-msg{
        position:absolute;
        top:100%;
        left:495px;
        color:red;
      }
    }

    .controls{
      text-align:center;
      position:relative;

      input{
        vertical-align:middle;
      }

      .error-msg{
        position:absolute;
        top:100%;
        left:495px;
        color:red;
      }
    }

    .btn{
      text-align:center;
      line-height:36px;
      margin:17px 0 0 55px;

      button{
        outline:none;
        width:270px;
        height:36px;
        background:#E1251B;
        color:#FFFFFF !important;
        display:inline-block;
        font-size:16px;
      }
    }
  }

  .copyright{
    width:1200px;
    margin:0 auto;
    text-align:center;
    line-height:24px;

    ul{
      li{
        display:inline-block;
        border-right:1px solid #E4E4E4;
        padding:0 20px;
        margin:15px 0;
      }
    }
  }
}
</style>