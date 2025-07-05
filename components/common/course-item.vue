<template>
	<view class="course-item">
		<view class="item-left">
			<image :src="item.mainImage" class="course-img" lazy-load></image>
			<view class="course-time">{{item.totalTime}}</view>
		</view>
		<view class="item-right">
			<view class="title">{{item.title}}</view>
			<view class="info">
				<view class="nickname iconfont icon-laoshi2">{{item.nickName}}</view>
				<view class="count">
					<view v-if="item.isFree" class="isFree">免费</view>
					<view v-else class="money iconfont icon-moneybag">
						{{item.priceDiscount || item.priceOriginal}}
					</view>
					<view class="iconfont icon-video">{{item.studyTotal}}人在学</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			item: {
				type: Object,
				default: () => ({
						id: 1,
						mainImage: '/static/images/it01.png',
						totalTime: '00:59:38',
						title: 'Vue3 源码解析',
						nickName: '小慕慕',
						isFree: 0, // 是否收费 0收费 1 免费
						priceOriginal: 999, //原价
						priceDiscount: 599, //优惠价
						studyTotal: 399
					})
			}
		},
	}
</script>

<style lang="scss">
	.course-item {
		display: flex;
		width: 100%;
		padding: 20rpx 0;
		box-sizing: border-box;
		border-bottom: 1rpx solid #f1f1f1;

		.item-left {
			position: relative;
			width: 290rpx;
			height: 160rpx;
			margin-right: 20rpx;
			box-sizing: border-box;

			.course-img {
				width: 290rpx;
				height: 160rpx;
				border-radius: 10rpx;
			}

			.course-time {
				position: absolute;
				bottom: 5rpx;
				right: 5rpx;
				font-size: 22rpx;
				color: #fff;
				background: rgba(51, 51, 51, 0.4);
				border-radius: 20rpx;
				padding: 0 8rpx;
			}
		}

		.item-right {
			display: flex;
			flex-direction: column;
			justify-content: space-between;
			height: 160rpx;
			padding-top: 5rpx;
			padding-left: 5rpx;

			.title {
				max-width: 365rpx;
				height: 70rpx;
				line-height: 35rpx;
				font-size: 28rpx;
				font-weight: bold;
				// 显示2行， 超出部分... 显示
				overflow: hidden;
				text-overflow: ellipsis; //显示省略号
				-webkit-line-clamp: 2; //最多2行
				display: -webkit-box;
				-webkit-box-orient: vertical;
				white-space: normal;
			}

			.info {
				.nickname {
					font-size: 23rpx;
					color: #999;
				}

				.count {
					display: flex;
					align-items: center;
					margin-top: 15rpx;

					.isFree {
						width: 130rpx;
						font-size: 24rpx;
						color: #222;
					}

					.iconfont {
						font-size: 23rpx;
						color: #222;
					}

					.money {
						color: $jing-color-orange;
						width: 130rpx;
						font-size: 28rpx;
					}
				}
			}
		}
	}
</style>