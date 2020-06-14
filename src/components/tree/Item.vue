<template>
    <div>
        <li>
            <div @click="toggle">
                {{model.title}}
                <span v-if="isFolder">[{{open ? '-':'+' }}]</span>
            </div>
            <ul v-show="open" v-if="isFolder">
                <item v-for="model in model.children" :model="model" :key="model.title"></item>
            </ul>
        </li>
    </div>
</template>
<script>
export default {
    name:"Item",
    props:{
        model:{
            type:Object,
            required:true,
        },
    },
    computed:{
       isFolder(){
           return this.model.children && this.model.children.length;
       }
    },
    data(){
        return{
            open:false,
        }
    },
    methods:{
        toggle(){
            if(this.isFolder){
                this.open = !this.open;
            }
        }
    }
}
</script>