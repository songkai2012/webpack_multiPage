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
            axios({
                url:"/admin/adminLogin",
                method:"post",
                //headers:{'Content-Type': 'application/x-www-form-urlencoded'},
                headers:{'Content-Type': 'application/json'},
                data:{
                    userName:_this.userName,
                    userPwd:_this.userPwd
                }
            })
/*            axios.post("/admin/adminLogin",{
                params:{
                    userName:_this.userName,
                    userPwd:_this.userPwd
                }
            })*/
                .then((res)=>{console.log(res)})
                .catch((err)=>{console.log(err)})
        }
    }
});