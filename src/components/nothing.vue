<template>
	<div v-show='isshow' class="nothing">
		
		<rules ref='rulchil'>
			
		</rules>
		<img @click='ruls' class="rule" src="../static/img/golden_eggs/start/btn_tag.png" alt="" />
		<audio src="../../static/fail.mp3"></audio>
		<div class="nomess">
			太可惜了您居然没抽中
		</div>
		<div class="nospeek" v-if='residue - 1 == 0 || residue - 1 == -1?false:true'>
			你还有{{residue - 1}}次机会！
		</div>
		<div class="nospeek" v-else>
			您的机会用完了
		</div>
		<div class="option">
			<img src="../static/img/gamepage/golden_eggs/icon_1.png" alt="" />
			<div v-if='residue - 1 == 0 || residue - 1 == -1?false:true'>
				<img @click='shows' src="../static/img/gamepage/golden_eggs/icon_3.png" alt="" />
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:'nothing',
		props:['residue'],
		data(){
			return{
				isshow:	false,
				res:{
					type:Number
				}
			}
		},
		methods:{
			shows(){
				this.isshow = !this.isshow
				window.history.go(-1)
			},
			ruls(){
				this.$refs.rulchil.rulshow = true
			},
		},
		mounted(){
			
		}
	}
</script>

<style>
	.nothing{
		position: fixed;
		z-index: 100;
		top:0;
		width: 100%;
		height: 100%;
		background-color: #fff;
		background: url(../static/img/gamepage/golden_eggs/bg4.jpg) no-repeat;
		background-size:cover ;
		
	}
	.nomess{
		position: absolute;
		width:555px;
		height: 150px;
		top: 250px;
		left: 200px;
		font-size: 50px;
		text-align: center;
		color: #a92726;
	}
	.nospeek{
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
	.option img{
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