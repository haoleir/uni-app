<template>
	<view class="list-box">
		<view class="title space-between center">
			<view class="center">
				<text class="name">热门推荐</text>
				<text class="word">HOT</text>
			</view>
			<view class="all">
				<text>全部</text>
				<text class="iconfont icon-right"></text>
			</view>
		</view>
		<swiper class="list-swiper" :indicator-dots="false" next-margin="30rpx">
			<swiper-item class="swiper-item" v-for="(n,index) in swiperItemList" :key="index">
				<course-item v-for="(item,i) in n" :key="i" :item="item"></course-item>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	import courseItem from "@/components/common/course-item.vue";
	export default {
		components: {
			courseItem
		},
		data() {
			return {
				swiperItemList: [
					[{
							id: 1,
							mainImage: '/static/images/it01.png',
							totalTime: '00:59:38',
							title: 'Vue3 源码解析',
							nickName: '小慕慕',
							isFree: 0, // 是否收费 0收费 1 免费
							priceOriginal: 999, //原价
							priceDiscount: 599, //优惠价
							studyTotal: 399
						},
						{
							id: 2,
							mainImage: '/static/images/it02.png',
							totalTime: '00:59:38',
							title: 'NestJs入门及实战',
							nickName: '小慕慕',
							isFree: 1, // 是否收费 0收费 1 免费
							priceOriginal: 999, //原价
							priceDiscount: 599, //优惠价
							studyTotal: 399
						},
						{
							id: 3,
							mainImage: '/static/images/it03.png',
							totalTime: '00:59:38',
							title: 'SpringBoot全栈项目实战',
							nickName: '小慕慕',
							isFree: 0, // 是否收费 0收费 1 免费
							priceOriginal: 999, //原价
							priceDiscount: 599, //优惠价
							studyTotal: 399
						},
						{
							id: 4,
							mainImage: '/static/images/it04.png',
							totalTime: '00:59:38',
							title: 'uni-app开发企业级小程序',
							nickName: '小慕慕',
							isFree: 0, // 是否收费 0收费 1 免费
							priceOriginal: 999, //原价
							priceDiscount: 599, //优惠价
							studyTotal: 399
						}
					],
					[{
							id: 5,
							mainImage: '/static/images/it05.png',
							totalTime: '00:59:38',
							title: '微信小程序入门与实战',
							nickName: '小慕慕',
							isFree: 1, // 是否收费 0收费 1 免费
							priceOriginal: 999, //原价
							priceDiscount: 599, //优惠价
							studyTotal: 399
						},
						{
							id: 6,
							mainImage: '/static/images/it06.jpg',
							totalTime: '00:59:38',
							title: 'JavaScript进阶',
							nickName: '小慕慕',
							isFree: 0, // 是否收费 0收费 1 免费
							priceOriginal: 999, //原价
							priceDiscount: 599, //优惠价
							studyTotal: 399
						},
						{
							id: 7,
							mainImage: '/static/images/it07.png',
							totalTime: '00:59:38',
							title: 'CRMEB uniapp 二次开发',
							nickName: '小慕慕',
							isFree: 0, // 是否收费 0收费 1 免费
							priceOriginal: 999, //原价
							priceDiscount: 599, //优惠价
							studyTotal: 399
						},{
							id: 8,
							mainImage: '/static/images/it08.jpg',
							totalTime: '00:59:38',
							title: '鸿蒙开发快速入门',
							nickName: '小慕慕',
							isFree: 0, // 是否收费 0收费 1 免费
							priceOriginal: 999, //原价
							priceDiscount: 599, //优惠价
							studyTotal: 399
						}
					]
				]
			}
		}
	}
</script>

<style lang="scss">
	// @import "~@/uni.scss";

	.list-box {
		margin-top: 60rpx;

		.name {
			font-size: 38rpx;
			font-weight: 500;
			color: #303133;
			margin-right: 10rpx;
		}

		.word {
			font-size: 20rpx;
			background-image: linear-gradient(to right, $jing-color-orange, red);
			color: #fff;
			padding: 0 10rpx;
			border-radius: 30rpx 30rpx 30rpx 0;
		}

		.all {
			fontweight: normal;
			color: $jing-text-color-grey;
			font-size: 28rpx;

			.iconfont {
				font-size: 25rpx;
			}
		}

		.list-swiper {
			height: 800rpx;
		}
	}
</style>