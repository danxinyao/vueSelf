import { goods as ajax } from 'services'
import { mapActions } from 'vuex'
export default {
	data() {
		return {
			goodsList: [],
            query: {
                condition: {
                    deptId: 'f46bc4fb-d5d9-4d25-bcf3-16c059871fde',
                    title: '',
                    orderType: 0,
                    isDesc: false
                },
                pageSize: 21,
                page: 1,
            },
		}
	},
    mounted() {
        this.getGoodsPageList()
    },
    methods: {
        ...mapActions ([
            'setGoodList'
        ]),
        //列表跳转详情页面
        goList(item) {
            this.$router.push({
                path: '/detail',
                query: item
            })
        },
        //查询商品列表接口
        getGoodsPageList() {
            ajax.getGoodsPageList(this.query).then((result) => {
                this.goodsList = result.data
                this.setGoodList(this.goodsList)
            })
        }
    }
}