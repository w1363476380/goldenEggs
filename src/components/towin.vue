<template>
	<div class="win">
		<audio src="../../static/win.mp3" autoplay="autoplay"></audio>
		<rules ref='rulchil' class='rul'>
			
		</rules>
		<img @click='ruls' class="rule" src="../static/img/golden_eggs/start/btn_tag.png" alt="" />
		<div class="winmess" v-if='money == null'>
			恭喜你抽中了价值{{prize}}元的代金礼品券
		</div>
		<div class="winmess" v-else>
			恭喜你抽中了价值{{money}}元的代金礼品券
		</div>
		<div class="winspeek">
			眼力很好吗，居然砸中了！
		</div>
		<div class="option">
			<img @click='inv' src="../static/img/gamepage/golden_eggs/icon_1.png" alt="" />
			<img @click='get' src="../static/img/gamepage/golden_eggs/icon_2.png" alt="" />
		</div>
		<!--<invite ref='invchil'></invite>-->
	</div>
</template>

<script>
//import Invite from '@/components/invite/invite.vue'
	export default{
		name:'towin',
		props:['prize'],
		data(){
			return{
				isshow:	{},
				money:{
					type:Number
				}
			}
		},
		methods:{
			inv(){
				this.$refs.invchil.sh = true
			},
			get(){
				this.money = sessionStorage.getItem("money")
				alert('您领取了' + this.money + '元')
			},
			ruls(){
				this.$refs.rulchil.rulshow = true
			}
		},
		created(){
			this.money = sessionStorage.getItem("money")
		},
		mounted(){
			
		}
//		components:{
//			Invite
//		}
	}
</script>

<style>
	.win{
		position: fixed;
		z-index: 100;
		top:0;
		width: 100%;
		height: 100%;
		background-color: #fff;
		background: url(../static/img/gamepage/golden_eggs/bg3.jpg) no-repeat;
		background-size:cover ;
		
	}
	.winmess{
		position: absolute;
		width:555px;
		height: 150px;
		top: 250px;
		left: 200px;
		font-size: 50px;
		text-align: center;
		color: #a92726;
	}
	.winspeek{
		position: absolute;
		top: 480px;
		right: 190px;
		width:200px;
		font-size: 30px;
		color: darkred;
	}
	.option{
		margin-top: 1200px;
		height: 300px;
	}
	.option>img{
		display: block;
		margin:30px auto;
	}
	.rule{
		width:250px;
		position:absolute;
		right: 40px;
		top: 80px;
	}
</style>