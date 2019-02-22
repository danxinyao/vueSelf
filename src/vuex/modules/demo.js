import * as types from '../mutationTypes'

const state = {
    demoList: [],
    goodList: []//商品列表 
}

const mutations = {
    [types.DEMO_SET](state, data){
        state.demoList = data
    },
    [types.SET_GOOD_LIST](state, data){
        state.goodList = data
    },
}

export default{
    state,
    mutations
}