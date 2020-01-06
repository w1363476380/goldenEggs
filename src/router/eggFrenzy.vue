<template>
	<div class="eggFrenzy">
		<div v-show='isLoading' class="loading">
			<img src="../../static/img/loading.gif" alt="" />
		</div>
		<!--<load ref='loadshow'></load>-->
		<div class="eggrouter">
			<rules ref='rulchil'>

			</rules>
			<div class="bonus-top">
				<img @click='ruls' class="rule egg-rule" src="../static/img/golden_eggs/start/btn_tag.png" alt="" />
				<div class="bonus">
					砸到TA，最高可以获得价值100元礼品券
					<!--砸到TA，最高可以获得价值{{max}}元礼品券-->
				</div>
				<!--<img class="hammer" src="../static/img/gamepage/golden_eggs/image_5.png" alt="" />-->
			<div class="initial">
				<span class="f-dialog">
					看好哦! <br/>
					砸中即可中奖
				</span>
				<img style="width: 300px;" src="../static/img/gamepage/golden_eggs/image_6.png" alt="" />
			</div>
			</div>
	        <eggs ></eggs>
	        <!--:sellers='sellers'-->
        </div>
	</div>

</template>

<script>
import Eggs from '@/components/eggs/eggs.vue'

export default {
	props:['sellers'],
	data(){
		return {
			hammer:[],
			isLoading:true,
			isShow:false,
			residue:'',
			max:'',
		}
	},
	methods:{
		ruls(){
				this.$refs.rulchil.rulshow = true
		}
	},
	created(){
		this.hammer = document.getElementsByClassName("hammer")
	},
	mounted(){
			this.max = this.sellers.max;
			this.isLoading = false
//			this.isShow = true
	},
	components:{
		Eggs
	}
}
</script>

<style>
    .eggFrenzy{
    	height: 100%;
    	width:100%;
       	background: url(../static/img/gamepage/golden_eggs/bg2.jpg) no-repeat 0px 0px;
        background-size: cover;
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
	.eggrouter{
		height:1500px;
		width:100%;
		padding-top:250px ;
	}
    .bonus-top{
       	margin: 0 auto;
		font-size: 55px;
		color:#f0dfc0;
		width:625px;
    }
    .bonus{
        text-align: center;
    }
    .initial{
/*        position:absolute;*/
		margin: 70px 0 0 160px;;
        top: 200px;
        left: -40px;
        animation: aa 3s;
    }
    @keyframes aa{
    	0%{
    		opacity: 0;
    	}
    	50%{
    		opacity: 0;
    	}
    	100%{
    		opacity: 1;
    	}
    }
    .f-dialog{
    	display: inline-block;
    	width:265px;
    	position: absolute;
    	top:475px;
    	left:355px;
    	text-align: center;
    	font-size:35px;
    	color: darkred;
    	font-weight: 600;
    }
    .initial img{
        width:150px;
    }
    /*.hammer{
        display: inline-block;
        position: relative;
        width:150px;
        top:70px;
        left: 0;
    }*/
    .egg-rule{
		width:250px;
		position:absolute;
		right: 40px;
		top: 80px;
    }
</style>