new vue({
    el:"#app",
    data:{
        msg:"this is a vue data"
    },
    created:function () {
        $(".container").css({"width":'100px',"height":'100px',"background":"red"});
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

