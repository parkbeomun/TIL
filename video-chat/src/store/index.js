import Vue from 'vue'
import Vuex from 'vuex'
import { STATUS_OPTION } from './utils/config'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    room: undefined, //Current Room
    username: undefined, // Username
    status: STATUS_OPTION.available, //User status
    rooms: [] //Avaiable rooms in the whole chat
  },
  mutations: {
    // Mutation per action (joinRoom, changeRoom, setRooms, leaveChat, changeStatus)
  },
  actions: {
    //Here we difine all the actions that will get triggered when :
    //joinRoom, changeRoom, setRooms, leaveChat, changeStatus
  },
  modules: {
  }
})
