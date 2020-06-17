import VueSocketIO from 'vue-socket.io'
import VueResoutce from 'vue-resource'
import stroe from './store'
import { url } from './utils/config'

//Socket config
Vue.use(new VueSocketIO({
  debug: true,
  connection: `${url}/video-chat`,
  vuex: {
    store, //Attach the store
    actionPrefix: 'SOCKET_',
    mutationPrefix: 'SOCKET_',
  },
}))

//Vue instance
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')


