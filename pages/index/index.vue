<template>
	<view class="index-box">
		<!-- 搜索组件 -->
		<!-- #ifdef MP -->
		<search-input></search-input>
		<!-- #endif -->
		<!-- 轮播图组件 -->
		<jing-banner></jing-banner>
		<!-- 分类组件 -->
		<category-box></category-box>
		<!-- 热门推荐 -->
		<swiper-course></swiper-course>
	</view>
</template>

<script>
	import searchInput from "../../components/common/search-input.vue";
	import jingBanner from "@/components/common/jing-banner.vue"
	import categoryBox from "./components/category-box.vue";
	import swiperCourse from "./components/swiper-course.vue";
	export default {
		components: {
			searchInput,
			jingBanner,
			categoryBox,
			swiperCourse
		},
		data() {
			return {
				title: 'Hello'
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style>
</style>