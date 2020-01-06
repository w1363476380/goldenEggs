<template>
	<div class="spoil">
		<div class="spoliload">
			<img src="../../static/img/loading.gif"/>
		</div>
		<div class="spoil-rul">
			<ul>
				<li v-if='pshow'>
					<div class="spoli-i" >
						<img style="width: 50%;height: 100%;" src="../../static/egg2.png" alt="" />
					</div>
					<div class="spoli-p">
						<span>{{thr}}</span>
						<br />
						<span>价值{{mon}}元的礼品券</span>
						<br />
						<span></span>
					</div>
				</li>
				<li v-else style='text-align: center;font-size: 50px;'>
					您还没有中奖哦！
				</li>
			</ul>
			
		</div>
	</div>	
</template>

<script>
	export default{
		data(){
			return{
				mon:{
					type:Number
				},
				thr:{
					type:String
				},
				pshow:true,
			}
		},
		created(){
//			for(let i = 0;i<<>.length;i++){
//				
//			}
			this.mon = sessionStorage.getItem('money')
			if(this.mon == 10){
				this.thr = '三等奖'
			}else if(this.mon == 20){
				this.thr = '二等奖'
			}else if(this.mon == 50){
				this.thr = '一等奖'
			}else{
				this.pshow = false
			}
			
		}
	}
</script>

<style>
	li{
		list-style:none;
	}
	.spoil-rul{
		width:800px;
		position: absolute;
		left: 130px;
		top: 220px;
		font-size: 35px;
		color:#4E260A;
		z-index: 102;
	}
	.spoil li{
		display: inline-block;
		width: 650px;
		height: 240px;
		border-radius:30px;
		background-color: #FDDF9F;
		padding: 30px;
		display: flex;
	}
	.spoli-i{
		flex: 0.7;
		width:200px;
		display: inline-block;
	}
	.spoli-p{
		flex: 1;
		height: 100%;
		padding-top: 50px;
	}
	.spoliload{
		
	}
</style>