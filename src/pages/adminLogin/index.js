import {add} from "root/src/pages/vendor/jsMain"

new vue({
    el:"#app",
    data:{
        userName:"",
        userPwd:""
    },
    created:function () {

        console.log(add(1,2))
    },
    methods:{
        submit:function () {
            const _this = this;

            _this.$http.post("/admin/adminLogin",{
                userName:_this.userName,
                userPwd:_this.userPwd
            },function (data) {
                if(data){
                    console.log(data);
                }else{
                    _this.$message("no data")
                }
            });
        }
    }
});