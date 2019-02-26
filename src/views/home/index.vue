<template>
  <div class="box">
    <div class="nav">我是首页1234</div>
    <h2 class="title">我是列表页面啊</h2>
    <div class="content">
      <div class="dan">我是视频1</div>
      <div class="vied0">
        <video-player  class="video-player vjs-custom-skin"
                 ref="videoPlayer"
                 :options="playerOptions"
                 :playsinline="true"
                 customEventName="customstatechangedeventname">
        </video-player>
        <!-- <video src="../../assets/images/dan.mp4" controls="controls" autoplay loop preload width="60%"></video> -->
        <!-- <video src="http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400" controls="controls" autoplay loop preload width="60%"></video> -->
      </div>
    	<div class="dan">我是内容</div>
    	<img src="~assets/images/logo.png" alt="">
    </div>
    <router-link :to="{ path: '/list'}" class="icon iconfont icon-icon_zhengquetishi">去list</router-link>
  </div>
</template>

<style rel="stylesheet/less" lang="less" scoped>
  .nav {
    color: red;
  }
  .content {
    .dan {
      color: red;
    }
  }
  .vjs-big-play-button{
    width: 500px;
  }
</style>
<script type="text/babel">
	import index from './index'
	export default {
		...index
	}
</script>
