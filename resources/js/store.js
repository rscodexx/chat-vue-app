import Vuex, {createStore} from 'vuex';
import createPersistedState from 'vuex-persistedstate';

export default createStore({
    state: {
        user: {}
    },
    mutations: {
        setUserState(state, value) {
            state.user = value
        },
    },
    actions: {
        userStateAction: ({commit}) => {
            axios.get('api/user').then(response => {
                commit('setUserState', response.data);
            })
        }
    },
    plugins: [createPersistedState()]
})
