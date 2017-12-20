require("resource/style/style")

import vue from "vue"
import ElementUI from 'element-ui'
import  'element-ui/lib/theme-chalk/index.css'

import navHeader from "resource/components/header/header.vue"
import navFooter from "resource/components/footer/footer.vue"
import axios from "./axios"

vue.prototype.$http = axios;

vue.use(ElementUI);

vue.component('nav-header',navHeader);
vue.component('nav-footer',navFooter);

/*

if(process.env.NODE_ENV=='server'){
    if(module.hot) {
        module.hot.accept();
    }
}*/
