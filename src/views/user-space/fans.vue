<template>
  <div class="fans">
		<div class="info-empty" v-if="!info.length">
			<div>
				
			</div>
		</div>
 
		<ul class="fans clearfix">
			
		</ul>
	</div>
</template>
<script>
export default {
	props:{
		info:{
			type:Array,
			default:()=>[]
		},
		activeName:{
			type:String,
			default:'fans'
		}
	}
}
</script>
 
<style lang="stylus">
.fans 
  font-size 12px
 
.fans li 
	height 80px
	width 950px
	border-bottom 1px solid #eee
	padding 20px 20px
	position relative
 
 
.fans lihover 
	background #fafafa
 
 
.fans li a.img 
	float left
	height 80px
	width 80px
	position relative
 
 
.fans li a.img img 
	height 80px
	width 80px
	display block
 
 
.fans li div.c 
	float left
	height 80px
	width 850px
	padding-left 14px
 
 
.fans li div.c strong.name 
	display block
	height 32px
	line-height 32px
	font-size 14px
	color #333
	font-weight bold
 
 
.fans li div.c strong.name a 
	color #333
 
 
.fans li div.c strong.name a span 
	color #ff3232
 
 
.fans li div.c strong.name ahover 
	color #ff3232
	text-decoration underline
 
 
.fans li div.c p 
	font-size 14px
	color #666
	line-height 24px
	height 48px
	overflow hidden
 
 
.fans li div.c p a 
	color #666
 
 
.fans li div.c p ahover 
	color #ff3232
	text-decoration underline
 
 
.fans li div.c p strong 
	font-size 12px
	padding-right 10px
 
 
.fans li div.c p strong em 
	color #ff3232
	padding-right 4px
 
 
.fans li div.c span.time 
	position absolute
	height 20px
	line-height 20px
	right 20px
	top 20px
	color #999
 
 
.fans li div.c span.time a 
	color #999
	padding-left 10px
	display none
 
 
.fans li div.c span.time ahover 
	color #ff3232
 
 
.fans li div.c em.info 
	height 24px
	line-height 24px
	display block
	color #999
 
 
.fans li div.c em.info span 
	color #666
 
 
</style>
 