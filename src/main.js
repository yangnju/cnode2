import Vue from 'vue'
import App from './App.vue'
import router from './router'
import Axios from 'axios'

Vue.prototype.$http = Axios
Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

Vue.filter('tabFormatter',function (post){
  if (post.good === true){
    return '精华'
  }else if(post.top === true){
    return '置顶'
  }else if(post.tab === 'ask'){
    return  '问答'
  }else if(post.tab === 'share'){
    return '分享'
  }else {
    return '招聘'
  }
})