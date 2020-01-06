<template>
	<div class="home">
		<div class="loading" v-show='isLoading'>
			<img src="../../static/img/loading.gif" alt="" />
		</div>
		<div v-show='isShow'>
			<!--<load ref='loadshow'></load>-->
			<audio src="../../static/music.mp3" autoplay="autoplay">
			</audio>
				<rules ref='rulchil'>
				
				</rules>
			<div class="h-box">
				<div class="h-top">
					<transition name='spin' appear>
						<img class="logo" src="../../static/img/golden_eggs/start/title.png" alt="" />
					</transition>
					<transition name='fade' appear>
						<img @click='ruls' class="rule" src="../static/img/golden_eggs/start/btn_tag.png" alt="" />
					</transition>
				</div>
				<div class="part">
					已有<span>{{456}}</span>人参加游戏
				</div>
				<router-link to='/eggFrenzy' class='start'>
					<transition appear name='bounce'>
						<img  src="../static/img/golden_eggs/start/btn_begin.png" alt="" />
					</transition>
				</router-link>
			</div>
		</div>
	</div>
</template>

<script>
	export default {
		props:['sellers'],
		data(){
			return {
				url:'../static/music.mp3',
				tt:'',
				isLoading:true,
				isShow:false,
				people:""
			}
		},
		methods:{
			ruls(){
				this.$refs.rulchil.rulshow = true;
			}
		},
		created(){
			let lo = this;
			this.people = this.sellers.people
//			console.log(123)
//			console.log(this.isLoading)
   		},
		mounted(){
//			console.log(this.isLoading)
				this.isLoading = false;
//			console.log(this.isLoading)
				this.isShow = true;
		}
	}
</script>

<style>
	*{
		margin:0;
		padding:0;
	}
	html{
		height: 100%;
		background-color:#510205;
		background: #510205 url(../../static/img/loading.gif) no-repeat 50% 50%;
		background-size: 100px 100px;
		z-index: 222;
	}
	.loading{
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.7);
		z-index: 102;
	}
	.loading>img{
		position: fixed;
		top: 40%;
		left: 45%;
	}
	.home{
		height: 100%;
		background: url(../../static/img/golden_eggs/start/start_bg.jpg) no-repeat scroll 0 -100px;
		background-size: cover;
	}
	.h-box{
		display: flex;
		height:1500px;
		width:72%;
		margin: 0 auto;
		flex-direction: column;
		padding-top:140px;
	}
	.h-top{
		height:500px;
	}
	.logo{
		width: 100%;
		display: inline-block;
	}
	.rule{
		width:250px;
		position:absolute;
		right: 60px;
		top: 80px;
	}
	.part{
		font-size: 20px;
		width: 55%;
		height: 50px;
		border-radius:50px ;
		color: limegreen;
		text-align: center;
		margin: 0 auto;
		margin-top:500px;
		background-color: rgba(255,255,255,0.6);
		font-size: 35px;
	}
	.part>span{
		color:red;
	}
	.start{
		margin: 0 auto;
		
	}
	.start>img{
		height:250px;
		width:700px;
	}

	.fade-enter-active{
  		transition: opacity 1s
	}
	.fade-enter{
  		opacity: 0
	}
	.bounce-enter-active{
		animation:bounce-in .5s;
	}
	.spin-enter-active{
		animation:spin-in .5s;
	}
	.logo{
		left: 22%;
		top:13%;
	}
	@keyframes bounce-in {
  		0% {
    		transform: scale(0);
  		}
  		50% {
    		transform: scale(1.5);
  		}
  		100% {
    		transform: scale(1);
  		}
	}
	@keyframes spin-in{
		0%{
			transform:scale(0);
		}
		25%{
			transform: scale(1.5);
		}
		50% {
    		transform: scale(1);
  		}
  		75%{
  			transform: scale(1.5);
  		}
  		100% {
    		transform: scale(1);
  		}
	}
</style>