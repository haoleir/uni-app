<template>
	<view class="search-box">
		<input class="search-input" type="text" placeholder="搜索你的内容">
			
		</input>
	</view>
</template>

<script>
</script>

<style lang="scss">
	.search-box {
		position: absolute;
		left: 0;
		top: 40rpx;
		width: 100%;
		z-index: 9999;
		.search-input{
			background: #f8f8f8;
			height: 71rpx;
			line-height: 40rpx;
			text-align: center;
			border-radius: 30rpx;
			margin: 0 20rpx;
			
		}
	}
</style>