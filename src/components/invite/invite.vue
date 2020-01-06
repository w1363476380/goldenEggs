<template>
	<div class="cInvite"  v-show='sh'>
		<input class="black" type="button" value="<" @click='show'/>
		<div class="i_img">
			<img class="ranking" src="../../static/img/gamepage/golden_eggs/image_4.png"/>
			<div class="friends">
				<ul>
					<li v-for='(seller,i) in sellers'>
						<span> 
							{{seller.name}}
						</span>
						&nbsp;
						<span>
							{{seller.tel}}
						</span>
						&nbsp;
						<span>
							{{seller.score}}
						</span>
					</li>
				</ul>
			</div>
		</div>
	</div>
</template>

<script>
	export default{
		name:"ipage",
		data(){
			return {
				sellers:{
					type:Array
				},
				sh:false
			}
		},
		methods:{
			show(){
				this.sh = !this.sh
			}
		},
//		created(){
//			this.$http.get('../../../static/frends.json').then(response => {
//     	 		this.sellers = response.data.frends
//   	},response => {
//   	 		}
//   		)
//		}
	}
</script>

<style>
	.cInvite{
		position: fixed;
		top:0;
		width: 100%;
		height: 100%;
		background-color: rgba(0,0,0,0.8);
		z-index: 100;
	}
	.i_img{
		margin:0 auto;
		/*width:5*/
	}
	.ranking{
		display: inline-block;
		margin-top:200px;
		margin-left:15%;
		width:700px;
		/*height:200px;*/
	}
	.friends>ul>li{
		margin: 20px 0;
		text-align: center;
		font-size: 30px;
		color:#fff;
	}
	.black{
		position: absolute;
		top:50px;
		left:30px;
		border-radius: 30px;
		width:200px;
		height:100px;
		font-size:60px;
		border: none;
		background-color: #5e543f;
	}
</style>