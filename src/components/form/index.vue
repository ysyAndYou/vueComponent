<template>
    <div>
       <h3>Element表单</h3>
       <k-form :model="model" :rules="rules" ref="loginForm">
           <k-formItem label="用户名">
               <k-input v-model="model.username" autocomplete="off" placeholder="输入用户名"></k-input>
           </k-formItem>
            <k-formItem label="密码" prop="password">
              <k-input type="password" v-model="model.password" autocomplete="off" placeholder="请输入密码"></k-input>
           </k-formItem>
            <k-form-item>
             <button @click="submitForm('loginForm')">提交</button>
            </k-form-item>
       </k-form>
    </div>
</template>
<script>
import KForm from './kFrom';
import KFormItem from './kFormItem';
import kInput from './kInput';
import KNotice from '@/components/notice/Knotice'
export default {
    components:{
        KForm,
        KFormItem,
        kInput
    },
    data(){
      return {
          model:{username:"",password: ""},
          rules:{
            username: [{ required: true, message: "请输入用户名" }],
            password: [{ required: true, message: "请输入密码" }]
          }
      }
    },
    methods:{
        submitForm(form){
            this.$refs[form].validate(valid =>{
                const notice = this.$create(KNotice,{
                   title: "社会你杨哥喊你来搬砖",
                   message: valid ? "请求登录!" : "校验失败!",
                   duration: 1000
                })
                notice.show();
            })
        }
    },
}
</script>