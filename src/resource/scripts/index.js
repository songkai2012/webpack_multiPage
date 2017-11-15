/*
export navHeader from 'resourceDir/components/header/header.vue';
export navFooter from 'resourceDir/components/footer/footer.vue';*/

/*此为所有页面公共加载模块入口*/
require("./vueInit");
require("../style/style.js");
import common from "./common.js";


export {
    common,
};