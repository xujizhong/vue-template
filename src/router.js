import Vue from 'vue';
import VueRouter from 'vue-router';
import login from '@/package/login/router';
Vue.use(VueRouter, {});

const getPathPrefix = function() {
    let url = process.env && process.env.PATH_PREFIX;
    if (url && url !== 'undefined') {
        if (/^\/|http/.test(url)) {
            url = url;
        } else {
            url = '/' + url;
        }
    } else {
        url = '/';
    }
    return url;
};
export default new VueRouter({
    mode: 'history',
    base: getPathPrefix(),
    routes: [
        {
            path: '*',
            redirect: '/'
        },
        {
            path: '/',
            redirect: '/login'
        },
        ...login
    ]
});
