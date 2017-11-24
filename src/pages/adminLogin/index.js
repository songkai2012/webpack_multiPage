import {add} from "root/src/pages/vendor/jsMain"

new vue({
    el:"#app",
    data:{
        msg:"12121"
    },
    created:function () {

        console.log(add(1,2))
    }
});