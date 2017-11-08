<template>
    <div class="test">
        <button @click="test">sure</button>
        <span>{{msg}}</span>
    </div>
</template>
<script>
    export default {
        name:'footer',
        data:()=>{
            return{
                msg:1
            }
        },
        methods:{
            test:()=>{alert("111")}
        }
    }
</script>
<style type="text/scss">
    button{
        width:50px;
        height: 25px;
        background: wheat;
        color: black;
    }
</style>