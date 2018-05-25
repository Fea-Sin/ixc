// using with vue-i18n in CDN
/*eslint-disable */
import Vue from 'vue';
const isServer = Vue.prototype.$isServer;

export default function (lang) {
    if (!isServer) {
        if (typeof window.ixc !== 'undefined') {
            if (!('langs' in ixc)) {
              ixc.langs = {};
            }
            ixc.langs[lang.i.locale] = lang;
        }
    }
};
/*eslint-enable */
