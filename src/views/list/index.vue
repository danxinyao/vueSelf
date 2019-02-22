<template>
  <div class="box">
    <h2 class="title">我是列表页面啊</h2>
    <div class="search">
      <el-form :inline="true" :model="query" label-width='100px'>
        <el-form-item label="审批人">
          <el-input v-model="query.condition.title" placeholder="审批人"></el-input>
        </el-form-item>
        <el-form-item label="价格排序">
          <el-select v-model="query.condition.isDesc" placeholder="价格排序">
            <el-option v-for="item in options" :label="item.label" :value="item.value"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item style="margin-left: 50px;">
          <el-button type="primary" @click="search()">查询</el-button>
          <el-button type="primary" @click="reset()">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
    <pg-table :list="goodsList" @deleteRow="deleteRowByIndex"></pg-table>
    <div class="page">
      <el-pagination background layout="prev, pager, next" :total="total" @current-change="handleCurrentChange">
      </el-pagination>
    </div>
  </div>
</template>
<style type="text/css" scoped>
.title {
  color: green;
}
.page {
    margin: 30px;
}

</style>
<script type="text/babel">
  import index from './index'
  export default {
    ...index
  }
</script>
