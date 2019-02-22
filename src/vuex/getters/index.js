export default {
    demoList: (state) => state.demo.demoList,
    goodList: (state) => state.demo.goodList,
    isShowFullLoading: (state) => state.loading.isShowFullLoading, // 显示全局加载动画
    localLoading: (state) => state.loading.localLoading, // 显示局部加载动画
    authToken: (state) => state.auth.authToken, // 登录token
    account: (state) => state.auth.account,
}