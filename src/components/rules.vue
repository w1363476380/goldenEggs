<template>
	<div class="rules" v-show='rulshow'>
			<div class="rul-box">
				<img @click='rulshow = false' class="rul-clos" src="../../static/btm-close.png" alt="" />
				<img class="rul-box-img" src="../../static/dikuang1.png" alt="" />
				<img @click='tab = true' :class='{flo:tab}' class="rul-act" src="../../static/btm-shm.png" alt="" />
				<img @click='tab = false' :class='{flo:!tab}' class="rul-my" src="../../static/btm-jp.png" alt="" />
				<detail v-show='tab'></detail>
				<spoil v-show='!tab'></spoil>
			</div>	
	</div>
</template>

<script>
	import Detail from '@/components/detail.vue'
	import Spoil from '@/components/spoil.vue'
	export default{
		name:"rules",
		data(){
			return{
				rulshow:false,
				tab:true
			}
		},
		components:{
			Detail,
			Spoil
		}
	}
</script>

<style>
	.rules{
		position: fixed;
		height: 100%;
		width:100%;
		top: 0;
		left: 0;
		background-color: rgba(0,0,0,0.8);
		z-index: 100;
	}
	.rul-box{
		margin: 70px 40px;
	}
	.rul-box>img{
		display: inline-block;
		position:absolute ;
	}
	.rul-box-img{
		margin: 0 auto;
		width: 900px;
		height:1500px;
	}
	.rul-clos{
		z-index: 101;
		top:60px;
		right: 40px;
		width: 80px;
	}
	.rul-act,.rul-my{
		width:320px;
	}
	.rul-act{
		left: 150px;
		top: 74px;
	}
	.rul-my{
		right: 150px;
		top: 65px;
	}
	.flo{
		top:45px;
	}

	/*.myrul-enter,.fade-leave-to{
		opacity: 0;
	}*/
</style>