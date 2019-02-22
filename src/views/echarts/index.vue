<template>
  <div class="box">
    <h2 class="title">我是折线图 </h2>
    <div class="echarts" id='bar'></div>
    <h2 class="title">我是圆饼图  </h2>
    <div class="echarts" id='line'></div>
  </div>
</template>
<style type="text/css" scoped>
    .title {
        color: green;
    }
    .echarts {
      width: 100%;
      height: 500px;
    }
</style>
<script type="text/babel">
	import index from './index'
	export default {
		...index
	}
</script>
