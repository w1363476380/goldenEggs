<template>
	<div class="rul-rul">
				<h3>活动奖品</h3>
				<p>一等奖：100元</p>
				<p>二等奖：50元</p>
				<p>一等奖：10元</p>
				<h3>活动时间</h3>
				<p>2017年04月-12月~2017年07月-12月</p>
				<h3>活动规则</h3>
				<p>1、开始游戏后点击“我要砸金蛋”</p>
				<p>2、进入页面后，有五个金蛋进行旋转</p>
				<p>3、当金蛋停下来，点击想要砸的金蛋</p>
				<p>4、若刚好在开的是有奖品的金蛋，活动举办方开启助力领奖</p>
	</div>
</template>

<script>
	export default{
		name:"detail",
		data(){
			return{

			}
		}
	}
</script>

<style>
	.rul-rul{
		position: absolute;
		left: 130px;
		top: 220px;
		width:720px;
		height: 1200px;
		font-size: 35px;
		color:#4E260A;
		z-index: 102;
		overflow: auto;

	}
	.rul-rul>h3{
		margin: 20px 0;
		display: inline-block;
		font-size: 35px;
		width:200px;
		height: 45px;
		line-height: 45px;
		text-align: center;
		padding:15px 20px;
		color:#000;
		background-color:orange ;
		border-radius:35px;
	}
	.rul-rul>p{
		margin: 0;
		padding-left: 20px;
		line-height: 70px;
	}
</style>
