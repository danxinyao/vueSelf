import * as types from '../mutationTypes'

export default {
    setDemo: ({ commit }, data) => {
        commit(types.DEMO_SET, data)
    },
    setGoodList: ({ commit }, data) => {
        commit(types.SET_GOOD_LIST, data)
    },    
}