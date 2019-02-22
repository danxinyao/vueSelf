<template>
  <div class="box">
    <h1 class="title">我是详情页面</h1>
    <div class="content">
        <div class="list">
            <div class="img_box">
                <img :src="des.mainImgUrl" alt="">
                <!-- <img src="~assets/images/logo.png" alt=""> -->
            </div>
            <div class="des">
                <div class="name">我是上个页面传递过来的名称-{{des.merchantsName}}</div>
                <div class="price"><span>$</span> {{des.salePrice}}</div>
            </div>
        </div>
    </div>
  </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .content {
        .list {
            display: block;
            width: 800px;
            border: 1px solid #e6e6e6;
            margin: 0 auto;
            color: #333;
            .img_box {
                width: 600px;
                height: 600px;
                margin: 0 auto;
                img {
                    width: 100%;
                    height: 100%;
                }
            }
            .des {
                padding: 30px 10px;
                font-size: 16px;
                line-height: 16px;
                .name {
                    float: left;
                    display: inline-block;
                }
                .price {
                    display: inline-block;
                    float: right;
                    color: red;
                    span {
                        font-size: 24px;
                    }
                }
            }
        }
    }
</style>
<script type="text/babel">
	import index from './index'
	export default {
		...index
	}
</script>
