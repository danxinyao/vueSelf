import { mapGetters } from 'vuex'
export default {
    //接受上个页面传递的数据
    props: {
        list: Array
    },
	data() {
		return {
            tableData: [
                 {
                    name: '淡心芜',
                    sex: 0,
                    address: '北京路'
                },
            ]
		}
	},
    computed: {
     ...mapGetters([
       'localLoading'
     ])
    }, 
    methods: {
        see(row) {
            this.$message.success('查看'+ row.name+'的个人信息成功！')
        },
        deleteRow(index) {
            this.$emit('deleteRow', index)
        }
    },
}