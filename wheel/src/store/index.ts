import Vue from 'vue';
import Vuex from 'vuex';
import createLogger from "vuex/dist/logger";

import wheel from './modules/wheel'

Vue.use(Vuex);

export default new Vuex.Store({
    modules:{
        wheel
    },
    plugins:[createLogger()]
});