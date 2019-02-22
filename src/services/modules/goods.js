/**
 * 商品相关
 */

import ajax from '../fetch'

export default {
    /**
     * 商品列表(商城首页)
     * @param  {Boolean} auth [description]
     */
    getGoodsPageList(data, localLoading = 'getGoodsPageList') {
        return ajax({
            url: '/Goods/QueryGoodsPageList',
            method: 'post',
            body: data
        })
    },
    //商品详情的客户端调用方法为/api/Goods/QueryGood
    getGoodsDetail(goodsID,  isShowFullLoading = 'getGoodsDetail') {
        return ajax({
            url: '/Goods/QueryGoodsDetail?id=' + goodsID,
            method: 'get'
        })
    },
    /**
     * 获取后台商品分页列表
     */
    getPageList(page, pageSize, data, auth = true, localLoading = 'getGoodsPageList') {
        return ajax({
            url: '/Goods/GetPageList',
            method: 'post',
            auth,
            localLoading,
            body: {
                pageSize: pageSize,
                page: page,
                condition: data
            }
        })
    },
}