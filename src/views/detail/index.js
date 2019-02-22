import { goods as ajax } from 'services'
export default {
	data() {
		return {
			des: {},
            goodsID: ''
		}
	},
    mounted() {
        //接受上个页面传递过来的参数 
        this.goodsID = this.$route.query.goodsID
        console.log(this.$route.query)
        this.getDetail()
    },
    methods: {
        //查询商品详情 
        getDetail() {
            ajax.getGoodsDetail(this.goodsID).then((res) => {
                this.des = res
            })
        }
    }
}