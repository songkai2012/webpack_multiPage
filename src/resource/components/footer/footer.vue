<template>
    <footer>
        <p>{{title}}</p>
        <h1 class="test">test111</h1>
        <div class="test2">this test the autoprefixer</div>
    </footer>
</template>
<script>
    export  default {
        name:'navHeader',
        data:()=>{
            return{
                title:'i am footer'
            }
        }
    }
</script>
<style lang="scss" type="text/scss" scoped>
    h1.test{color: #ffec46;}
    footer{
        display: flex;
        width: 100%;
        height: 50px;
        text-align: center;
        line-height: 50px;
        font-size: 20px;
        p{
            color: red;
            display: flex;
        }
        .test2{
            display: flex;
        }
    }
</style>