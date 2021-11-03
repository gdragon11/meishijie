<template>
  <div class="menu-detail">
    <detail-header :info="menuInfo"></detail-header>
    <detail-content :info="menuInfo"></detail-content>
    <Comment :info="menuInfo"></Comment>
  </div>
</template>
<script>
import DetailHeader from './detail-header'
import DetailContent from './detail-content'
import Comment from './comment'
import {menuInfo} from '@/service/api';
export default {
  components: {DetailHeader, DetailContent, Comment},
  data(){
    return {
      menuInfo:{
        userInfo:{}, 
        raw_material:{
        main_material:[],
        accessories_material:[]
        },
        steps:[]
      } //接收菜谱的详细信息
    }
  },
  watch:{
    $route:{
      handler(){
          let {menuId} = this.$route.query;
          if(menuId){//发送请求
          menuInfo({menuId}).then(({data}) =>{
          console.log(data)
          //  返回值有两种 true：   未收藏转已收藏
                      // false：   
          this.menuInfo = data.info;
        })
          }else{
            this.$message({
              message:"重进",
              type:"warrning"
            })
          }
      },
      immediate:true
      }
  }
}
</script>

