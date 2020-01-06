<template>
	<div>
		<div class="rotate">
			<ipage v-show='sh'></ipage>
			<div class="container">
				<span class="ban" v-show='shows'>

				</span>
				<div class="hamermo" :class='{fail:hameran}' style="top:-230px;left:130px">
					<img src="../../static/img/gamepage/golden_eggs/image_5.png" alt="" />
				</div>
				<!--计算每个img对应的弧度,Math.cos()为纵坐标,Math.sin()为横坐标-->
				<div class="eggs" :class='{beat:index == ranEgg}' :style="{top : Math.cos((360/items) * Math.PI/180 * index + ainhd)*b + disTop + 'px',
							left : Math.sin((360/items) * Math.PI/180 * index + ainhd) * a + disLeft  + 'px',
							width : Math.max(0.1,(Math.cos((360/items * Math.PI/180 * index+ainhd))*60+400)/500)*200 + 'px',
							height : Math.max(0.1,(Math.cos((360/items * Math.PI/180 * index+ainhd))*90+450)/500)*300  + 'px',
							'z-index': Math.ceil(((Math.cos(((360/items *  Math.PI/180) * index+ainhd))*b+0)/100)*10)*2,
						}"  v-for='(i,index) in items' >
						<!--dotTop中心点位置
						totop总高度-->
					<div v-if='index == indexs ? true:false'>
						<!--<img class="ham fail"   src="../../static/img/gamepage/golden_eggs/image_5.png"  alt="" />-->
						<audio src="../../../static/za1.mp3" autoplay="autoplay" ></audio>
					</div>
					<img @click='fail(index)' v-bind:class='{imgurl : index == indexs}' class="egg" ref='asd' src="../../static/img/gamepage/golden_eggs/egg.png" alt=""  />
					<div class="award"  v-if='ranEgg == index ? showss:""'>
						<div class="dialog">
							<img class="dialogs" src="../../static/img/gamepage/golden_eggs/image_6.png" alt="" />
							<span class="dialogs">一直盯着我哦!</span>
						</div>
						<img class="eye" src="../../static/img/gamepage/golden_eggs/image_1.png" alt="" />
					</div>
				</div>
			</div>
			<nothing ref='chil' :residue='residue'></nothing>
			<towin v-show='winshow' :prize='prize'></towin>

			<!--<img src="../../../static/img/egg2.png"/>-->
		</div>
		<div class="tadytime">
				今日还有{{residue}}次砸蛋机会
		</div>
	</div>
</template>

<script>
	import Ipage from '../invite/invite.vue'
	import Nothing from '../nothing.vue'
	import Towin from '../towin.vue'

    export default {
        name:'eggs',
        props:['sellers'],
        data(){
            return {
            	winshow:false,
            	aa:{
            		type:Number
            	},
            	prize:{
            		type:Number
            	},

//          		蛋的总数量
            	items:5,
            	angle:2230,

//          		ban的状态
            	shows:true,

//          		award的状态
            	showss:true,
				radius:200,

//					椭圆长边
				a:300,

//					椭圆短边
				b:15,

//					运动的速度
				sleep:2,
//				初始位移
				speed:0,

//					运动的距离
				ainhd:{
					type:Number
				},
//					增加离顶部距离
				disTop:80,

//					增加离左边框距离
				disLeft:410,
//				点击得到的index
				indexs:{
					type:Number
				},
				sport:{
					type:Function
				},

//				随机地金蛋index
				ranEgg:{
					type:Number
				},
//				限制点击次数
				clicks:{
					type:Number
				},
				dian:0,
//				保存缓存数据
				residue:{
					type:Number
				},
//				得到缓存数据
				res:{
					type:Number
				},
				sh:false,
				imgurl:require('../../../static/img/egg2.png'),

//				锤子获取蛋的位置
				htop:{
					type:Number
				},
				hleft:{
					type:Number
				},
				hameran:false,
				time:10,
            }
       	},
       	methods:{
//     			点中哪个做哪个操作
       		fail(index){
         			this.hameran = true;
         			let self = this
//     			显示锤子
				let lis = document.getElementsByClassName('eggs')[index];
				this.hleft = lis.style.left;
				this.htop = lis.style.top;
				let hamer = document.getElementsByClassName('hamermo')[0];
				hamer.style.zIndex = Number(lis.style.zIndex) + 1;
				let haml = parseInt(hamer.style.left.split('px')[0]);
				let hamt = parseInt(hamer.style.top.split('px')[0]);
				let subleft = this.hleft.split('px')[0];
				let subtop = this.htop.split('px')[0] ;
//				锤子下落的动画
				zz()
				function zz(){
					setTimeout(function(){
						if(subleft == haml || subtop == hamt){
							
						}else{
							haml = haml + (Number(subleft) - haml)/100;
							hamt = hamt + (Number(subtop) - hamt)/100;
							hamer.style.left = haml + 'px';
							hamer.style.top = hamt + 'px';
							zz()
						}
					},1)
				}



				if(this.clicks > this.dian){
					this.indexs = index;
       				let opt = document.getElementsByClassName('egg')[this.indexs];
//     				锤子落下之后,蛋变碎
					let self = this;
       				setTimeout(function(){
       					opt.src = self.imgurl;
       				},1000);

       				this.shows = true;
       				setTimeout(function(){
//     						显示中奖信息
						if(index == self.ranEgg){
							alert('恭喜你抽中了' + self.prize + '元');
							self.showss = true;
							self.dian = 7;
							self.winshow = true;
							sessionStorage.setItem('res',self.dian);
							sessionStorage.setItem('money',self.prize);
						}else{
							self.$refs.chil.isshow = true;
							self.dian = Number(self.dian) + 1;
							sessionStorage.setItem("res",self.dian);
						}
					},2500)
				}else{
       				alert('你不能再点了');
       			}
	       	},
	    },
		mounted(){

			this.clicks = 5;
//			计算剩余砸蛋数判断是否继续还是弹出相应的框
			this.dian = sessionStorage.getItem("res");
//			剩余的次数
			this.residue = this.clicks - this.dian;
			let self = this;
			if(this.residue > 0 || this.residue === null){
//				运动计时器函数
				this.ainhd = -0.045;
//				-0.04
//				能够定义几秒钟后开始旋转
					setTimeout(function(){
							bb()
							function bb(){
								setTimeout(function(){
	//							self.speed = self.speed < 360 ? self.speed:2;
								self.speed += self.sleep;
								self.ainhd = self.speed * Math.PI/180;
								if(self.speed > 0 && self.speed < 1000 && self.time > 1){
									self.time = self.time - 0.05
								}else if(self.speed > 1800 && self.speed < self.angle && self.time < 9){
									self.time += 0.05
								}
	//								计算并判断在那停下来
	//								2160是转了6圈停下 -2是修正位置
									if(self.speed == self.angle){
										clearTimeout(bb)
										self.shows = false;
									}else{
										bb()
									}
								},self.time)
							}

//							在旋转时不能点击
							self.shows = true;
					},2500);



//				随机金蛋有奖
				this.ranEgg = Math.floor(Math.random() * this.items);

//					开始旋转时,金蛋描述变为none
//					显示眼睛和提示
				setTimeout(function(){
					self.showss = !self.showss;
				},2100)


	//			计算中奖概率和对应的中奖金额
				this.aa = Math.floor(Math.random()*100)
				if(0 < this.aa && this.aa < 30){
					this.prize = 20;
				}else if(30 < this.aa && this.aa < 50){
					this.prize = 50;
				}else{
					this.sleep = 2;
				}

			}else if(this.residue == -2){
				this.winshow = true;
			}else{
				alert('您的次数已经用完')
				this.$refs.chil.isshow = true;
			}
		},
		components:{
   			Ipage,
   			Nothing,
   			Towin
   		}
   }

</script>

<style>
*{
	margin:0;
	padding:0;
}
.beat{
	animation:beat 1.5s;
}
.rotate{
	margin-top:45px;
	position:relative;
	top: 30px;
	z-index: 50;
}
.accept{
	top:0
}
.again{
	top:100px
}
.invite{
	top:200px
}
.container{
	width:100%;
	height: 100%;
	margin:0 auto;
	font-size: 50px;
 	position: relative;
	z-index:-30;
}
.eggs{
	display: inline-block;
	height: 250px;
	width: 170px;
}
.egg{
	height: 100%;
	width:100%;
	background:none;
	color:#FFFFFF;
	font-size:16px;
}
.ham{
	position:absolute;
	width: 100px;
	height: 100px;
	z-index: 99;
}
.container>div{
	position:absolute;
	background:none;
	color:#FFFFFF;
	font-size:16px;
}
.ban{
	position: absolute;
	top:-100px;
	z-index: 999;
	width: 100%;
	height:600px;
}
.award{
	position: relative;
	top:0;
	font-size: 25px;
	width:100px;
	height:100px;
	text-align: center;
	color: indianred;
	line-height: 100px;
}
.award>.eye{
	position: absolute;
	top:-190px;
}
.award>.dialog{
	position: absolute;
	top: -350px;
	left: -70px;
}
.dialogs{
	position: absolute;
	width: 200px;
	line-height: 80px;
}
.hamermo{
	position: absolute;
	top:-190px;
	left:160px;
	z-index: 10;
}
.hamermo>img{
	width:160px;
}
.tadytime{
	margin:0 14% 0 14%;
	font-size: 40px;
	border-radius: 50px;
	height: 90px;
	width:70%;
	background-color: #EA4344;
	display: inline-block;
	color: #fadfd0;
	text-align: center;
	line-height: 90px;
	position: relative;
    margin-top: 690px; 
    height: 90px;
    clear:both;
}

@keyframes beat{
	0%{transform: translateY(-60px)};
	15%{transform: translateY(0px)};
	30%{transform: translateY(-60px)};
	45%{transform: translateY(0px)};
	60%{transform: translateY(-60px)};
	75%{transform: translateY(0px)};
	90%{transform: translateY(-60px)};
	100%{transform: translateY(0px)};
}
.imgurl{
	animation: ng 2s;
}
@keyframes ng{
	0%{transform: rotate(0deg)};
	15%{transform: rotate(-5deg)};
	30%{transform: rotate(5deg)};
	45%{transform: rotate(-5deg)};
	60%{transform: rotate(5deg)};
	75%{transform: rotate(-5deg)};
	90%{transform: rotate(5deg)};
	100%{transform: rotate(0deg)};
}
.fail{
	animation: fff 2.5s;
}
@keyframes fff{
	0%{transform: rotate(0deg)};
	25%{transform: rotate(0deg)};
	50%{transform: rotate(30deg)};
	60%{transform: rotate(0deg)};
	70%{transform: rotate(30deg)};
	80%{transform: rotate(0deg)};
	90%{transform: rotate(30deg)};
	100%{transform: rotate(0deg)};
}
</style>
