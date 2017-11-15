<template>
    <header id="header">
        <h1>i am header</h1>
    </header>
</template>
<script>
    export default {
        name:'navHeader',
        data:()=>{
            return{
                msg:222222,
                show:true,
            }
        },
        methods:{
            test:function () {
                this.msg = "1111"
            }
        },
        mounted:function(){
            var _this = this;
            this.test();
        }
    }

</script>
<style lang="scss" type="text/scss" scoped>

</style>