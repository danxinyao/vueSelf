import { mapGetters } from 'vuex'
export default {
  data() {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'goodList'
    ])
  },
  mounted() {
    console.log(this.goodList)
    console.log('localStorage',localStorage.getItem('name'))
  },
  methods: {
    //列表跳转详情页面
    goList(item) {
      this.$router.push({
        path: '/detail',
        query: item
      })
    }
  }
}
