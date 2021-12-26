import Vue from "vue"
import VeeValidate from "vee-validate"
import zh_CN from 'vee-validate/dist/locale/zh_CN'

Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN',{
  messages:{
    ...zh_CN.messages,
    is:(field)=>`${field}必须与密码相同`,
  },
  attributes:{
    phone:'手机号',
    passcode:'验证码',
    password:'密码',
    confirmPassword:'确认密码',
    ifAgree:'协议',
  },
})

//自定义校验规则
VeeValidate.Validator.extend('agree',{
  validate:(value)=>value,
  getMessage:(filed)=>filed+'必须同意',
})