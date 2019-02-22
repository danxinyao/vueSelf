<template>
  <el-table :data="list" v-loading="localLoading === 'getGoodsPageList'"  border stripe style="width: 100%">
    <el-table-column type='index' label="序号"></el-table-column>
    <el-table-column prop="sex" align="center" label="价格排序" width="180">
      <template slot-scope="scope">
        <el-tag :type="scope.row.sex == 1 ? 'success' : 'danger'">{{scope.row.sex == 1 ? '男' : '女'}}</el-tag>
      </template>
    </el-table-column>
    <el-table-column prop="name" align="center" label="审批人">
    </el-table-column>
    <el-table-column prop="salePrice" align="center" label="售价" width="60">
    </el-table-column>
    <el-table-column prop="imageUrls" align="center" label="图片" width="200">
      <template slot-scope="scope">
        <div class="img_box">
          <img :src="scope.row.imageUrls" alt="">
        </div>
      </template>
    </el-table-column>
    <el-table-column fixed="right" label="操作" width="120">
      <template slot-scope="scope">
        <el-button @click="see(scope.row)" type="text" size="small">查看</el-button>
        <el-button @click="deleteRow(scope.$index)" type="text" size="small">
          移除
        </el-button>
      </template>
    </el-table-column>
  </el-table>
</template>
<style rel="stylesheet/less" lang="less" scoped>
.title {
  color: green;
}

.page {
  margin: 30px;
}
.img_box {
  width: 150px;
  height: 150px;
  img {
    width: 100%;
    height: 100%;
  }
}

</style>
<script type="text/babel">
  import index from './index'
  export default {
    ...index
  }
</script>
