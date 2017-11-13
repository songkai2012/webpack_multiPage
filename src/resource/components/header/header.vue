<template>
    <header>
        <p>{{title}}</p>
        <h1 class="test">test111</h1>
    </header>
</template>
<script>
    export  default {
        name:'navHeader',
        data:()=>{
            return{
                title:'i am header'
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    h1.test{color: aqua;}
    header{
        p{
            color: red;
        }
    }
</style>