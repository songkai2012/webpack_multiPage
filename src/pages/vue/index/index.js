import {common as _} from "resource/scripts/index.js";


new vue({
    el:"#app",
    data:{
        msg:"this is a vue data"
    },
    created:function () {
        $.ajax({
            url:'/',
            data:{
                wd:"11112"
            },
            type:"get",
            dataType:'json',
            success:function (res) {
                console.log(res);
            },
            err:(err)=>{
                console.log(err)
            }
        });
    },
    mounted:()=>{
        console.log(_)
        axios({
            url:'/',
            params:{
                data:{
                    wd:"wew"
                }
            },
            method:"get",
        })
            .then((res)=>{console.log(res)})
            .catch((err)=>{console.log(err)})
    }
});

