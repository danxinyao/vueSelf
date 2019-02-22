<template>
  <div class="box">
    <h2 class="title">我轮播图 </h2>
    <div class="echarts" id='bar'>
      <swiper :options="swiperOption">
        <swiper-slide v-for="slide in swiperSlides">I'm Slide {{ slide }}</swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
    </div>
  </div>
</template>
<style type="text/css" scoped>
.title {
  color: green;
}
.swiper-slide {
  height: 100px;
  width: 100%;
  background: #ccc;
  font-size: 18px;
  text-align: center;
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
