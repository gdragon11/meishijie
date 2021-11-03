<template>
  <el-row class="menu-card" type="flex" justify="start">
    
  </el-row>
</template>
<script>
export default {
  name: 'menu-card',
  props:{
    marginLeft: {
      type: Number,
      default: 22
    },
    info:{
      type: Array,
      default:() => []
    }
  },
  methods:{
    add(item){
      this.$store.dispatch('set_gwc',{
        img:item.product_pic_url,
        title:item.title,
        name:item.name,
        commentsLen:item.comments_len,
        id:item._id
      })
    }
  }
}
</script>
<style lang="stylus">
.menu-card 
  flex-wrap wrap
  .el-col-24
    width auto
    margin-bottom 20px
    margin-left: 22px
    
  .menu-card-detail
    > *
      display block
    strong 
      height 24px
      line-height 24px
      font-size 14px
      font-weight bold
      color #333
    span 
      height 26px
      line-height 26px
      font-size 12px
      color #999
    em 
      height 23px
      line-height 23px
      font-size 12px
      color #ff3232
</style>


