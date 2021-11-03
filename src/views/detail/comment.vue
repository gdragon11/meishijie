<template>
  <div>

  </div>
</template>
<script>

</script>
<style lang="stylus">
.comment-box
  background-color #ffffff
  margin-top 20px
  padding 0 20px
  h2
    font-size 24px
    color #333
    height 66px
    line-height 66px
    border-bottom 1px solid #eee
  .comment-text
    margin-top 20px
    .useravatar
      margin-right 20px
      img 
        vertical-align top
        width 36px
        height 36px
    .comment-right 
      display inline-block
      width 80%
      .comment-button
        text-align right 
        margin-top 10px
        .send-comment
          background #ff3232
          border none
  .comment-list-box
    border-top 1px solid #eee
    margin-top 20px
    padding-top 30px

    ul li 
      border-bottom 1px solid #eee
      margin-bottom 20px
      .avatar
        height 82px
        width 50px
        overflow hidden
        display inline-block
        h5
          white-space nowrap
        img 
          height 50px
          width 50px
      .comment-detail
        display inline-block
        vertical-align top
        margin-left 20px
        width 80%
        p 
          margin 0
          font-size 14px
        .info
          margin-top 10px
          color #999
          .thumbs
            cursor pointer
            
            font-size 18px
          .thumbs-actve
            color red
      

</style>