import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/axios'
import './plugins/bootstrap-vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import 'v-markdown-editor/dist/v-markdown-editor.css'
import Editor from 'v-markdown-editor'
import MediumEditor from 'vuejs-medium-editor'
import 'medium-editor/dist/css/medium-editor.css'
import 'vuejs-medium-editor/src/themes/default.css'
import 'highlight.js/styles/ocean.css'

Vue.component('medium-editor', MediumEditor)

Vue.use(Editor)

Vue.config.productionTip = false

new Vue({
  router,
  render: function (h) { return h(App) }
}).$mount('#app')
