var _ = require("resourceDirTest/scripts/index.js")._;

new vue({
    el:"#app",
    data:{
        msg:1
    },
    created:function () {
        this.msg=_.add(1,2,3,4);
    }
})