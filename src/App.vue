<template>
	<div id="app" v-loading="isShowFullLoading"
        element-loading-text="加载中">
		<pg-header></pg-header>
		<router-view></router-view>
	</div>
</template>
<script>
	import { mapGetters, mapActions } from 'vuex'
	export default {
        computed: {
            ...mapGetters([
                'isShowFullLoading'
            ])
        }
	}

</script>