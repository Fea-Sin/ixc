import XIcon from './components/icon'
import {XRow, XCol} from './components/grid'
import locale from './locale/index'

const components = {
  XCol,
  XIcon,
  XRow
}

const ixc = {
  ...components
}

const install = function(Vue, opts = {}) {
  if (install.installed) return
  locale.use(opts.locale)
  locale.i18n(opts.i18n)

  Object.keys(ixc).forEach(key => {
    Vue.component(key, ixc[key])
  })
}

// auto install
if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

const API = {
  // version: process.env.VERSION,
  locale: locale.use,
  i18n: locale.i18n,
  install,
  ...components
}

API.lang = (code) => {
  const langObject = window['ixc/locale'].default
  if (code === langObject.i.locale) locale.use(langObject)
  else console.log(`The ${code} language pack is not loaded`)
}

module.exports.default = module.exports = API
