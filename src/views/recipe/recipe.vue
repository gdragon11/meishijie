<template>
    <div class="recipe">
        <!-- 菜谱分类 start -->
        
        <!-- 菜谱分类 end -->
        <h2>家常好味道，给你家一般的温暖</h2>
      
        <!-- 容器 -->
            <!-- 左侧列表 -->
            <!-- 右侧显示 -->
        <!-- 容器 -->
       
    </div>
</template>
<script>
   
</script>
<style lang="stylus">
    .recipe-link
        font-size 0;
        margin-top 5px
        a
            display inline-block
            font-size 12px
            padding 0px 8px
            height 28px
            line-height 28px
        .active
            background #ff3232
            color #fff
    .recipe
        h2
            text-align center
            line-height 150px
        .el-main
            padding 0

        .filter-box
            background #fff
            padding 10px
            width 100%
            float left
            box-sizing border-box
    .filter-tags
        display flex
        flex-wrap wrap
        justify-content space-around
        .tag-selected
            background-color #ff3232 !important
            color #fff !important
    .menu-empty
        width 100%
        text-align center
        font-size 20px
</style>
