<template>
    <div>
        <label v-if="label">{{label}}</label>
        <slot></slot>
        <p v-if="errorMessage">{{errorMessage}}</p>
    </div>
</template>
<script>
import Schema from 'async-validator'
export default {
    inject: ["form"],
    props:{
       label:{
           type:String,
           default:""
       },
       prop:{
           type:String,
       }
    },
    data(){
      return {
          errorMessage:"",
      }
    },
    mounted(){
       
    },
    methods:{
        validate(){
            const value = this.form.model[this.prop];
            const rulues = this.form.rules[this.prop];
            const desc = {[this.prop]:rulues};
            const schema = new Schema(desc);
            // return 的是校验结果Promise
            return schema.validate({[this.prop]:value},errors=>{
                if(errors){
                    this.errorMessage = errors[0].message;
                }else{
                    this.errorMessage = "";
                }
            })

        }
    }
}
</script>