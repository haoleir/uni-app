<template>
	<view class="banner-box">
		<view :style="{'background-image':`linear-gradient(${bannerBackground || '#009B8C'} 50%, #FFF)`}"
			class="banner-bg"></view>
		<swiper :current="current" @change="swiperChange" class="banner-swiper" indicator-dots
			indicator-color="rgba(255,255,255,0.5)" indicator-active-color="#FFFFFF" :autoplay="true" interval="4000">
			<swiper-item class="swiper-item" v-for="(item,index) in bannerList" :key="index">
				<view class="image-box">
					<image :src="item.imageUrl" class="img"></image>
				</view>
			</swiper-item>
		</swiper>
	</view>
</template>

<script>
	export default {
		props: {
			bannerList: {
				type: Array,
				default: () => [{
					id: 1,
					imageUrl: "/static/images/it01.png",
					background: "#009B8C",
					adverUrl: "/pages/course/course-details"

				}, {
					id: 2,
					imageUrl: "/static/images/it02.png",
					background: "#6E3DE6",
					adverUrl: "/pages/course/course-details"

				}, {
					id: 3,
					imageUrl: "/static/images/it03.png",
					background: "#0D81ED",
					adverUrl: "/pages/course/course-details"

				}]
			}
		},
		data() {
			return {
				current: 0,
				bannerBackground: ""
			}
		},
		methods: {
			swiperChange(e) {
				// console.log('e', e.detail.current);
				this.current = e.detail.current
				this.bannerBackground = this.bannerList[this.current].background
			}
		}
	}
</script>

<style lang="scss">
	.banner-box {
		padding-top: 120rpx;
		/* #ifdef APP-PLUS */
		padding-top: calc(var(--status-bar-height) + 80rpx);
		/* #endif */

		.banner-bg {
			position: absolute;
			top: 0rpx;
			width: 100%;
			height: 470rpx;
			transform: .5s;
		}

		.banner-swiper {
			width: 100%;
			height: 350rpx;

			.swiper-item {
				width: 100%;
				height: 100%;

				.image-box {
					padding: 0 30rpx;
					width: auto;
					height: 100%;

					.img {
						width: 100%;
						height: 100%;
						border-radius: 15rpx;
					}
				}


			}
		}
	}
</style>