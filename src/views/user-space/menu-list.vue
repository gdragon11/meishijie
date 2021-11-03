<template>
  <div class="menu-list">
    <div class="info-empty" v-if="!info.length">
			
	</div>
    <div class="info-empty" v-if="!info.length">
			
	</div>
    <menu-card :margin-left="13" :info="info"></menu-card>
  </div>
  
</template>
<script>
import MenuCard from '@/components/menu-card.vue'
export default {
  components: {MenuCard},
  props: {
    info:{
			type:Array,
			default:()=>[]
		},
		activeName:{
			type:String,
			default:'works'
		}
  }
}
</script>