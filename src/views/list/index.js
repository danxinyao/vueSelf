import PgTable from './components/table/index.vue'
import { goods as ajax } from 'services'
export default {
    components: {
        PgTable
    },
	data() {
		return {
            query: {
                condition: {
                    deptId: 'f46bc4fb-d5d9-4d25-bcf3-16c059871fde',
                    title: '',
                    orderType: 0,
                    isDesc: true
                },
                pageSize: 5,
                page: 1,
            },
            options: [
                {
                    label: '升序',
                    value: false
                },
                {
                    label: '降序',
                    value: true
                },
            ],
            goodsList: [],
            total: 0,
		}
	},
    //监控 
    watch: {
        'query.condition.isDesc'() {
            this.getGoodsPageList()
        }
    }, 
    mounted() {
        this.getGoodsPageList()
    },
    methods: {
        //查询商品列表接口
        getGoodsPageList() {
            ajax.getGoodsPageList(this.query).then((result) => {
                this.goodsList = result.data
                this.total = result.totalCount
            })
        },
        search() {
            this.getGoodsPageList()
        },
        //重置
        reset() {
            this.query.condition.title = ''
            this.query.condition.isDesc = true
        },
        //删除 
        deleteRowByIndex(index) {
            this.goodsList.splice(index, 1);
        },
        handleCurrentChange(val) {
            this.query.page = val
            this.getGoodsPageList()
            console.log(`当前页: ${val}`);
        }
    }
}