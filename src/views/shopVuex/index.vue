<template>
  <div class="box">
    <h1 class="title">我是Vuex缓存过来的商品列表</h1>
    <div class="content">
        <a href="javascript:;" class="list" v-for="item in goodList" @click="goList(item)">
            <div class="img_box">
                <img :src="item.imageUrls"alt="">
            </div>
            <div class="des">
                <div class="name">缓存 - {{item.merchantsName}}</div>
                <div class="price"><span>$</span> {{item.salePrice}}</div>
            </div>
        </a>
    </div>
  </div>
</template>
<style rel="stylesheet/less" lang="less" scoped>
    .content {
        flex-wrap: wrap;
        display: flex;
        justify-content: space-between;
        .list {
            display: block;
            width: 300px;
            border: 1px solid #e6e6e6;
            margin: 10px;
            color: #333;
            &:hover {
                border-color: red;
            }
            .img_box {
                width: 200px;
                margin: 0 auto;
                height: 200px;
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
