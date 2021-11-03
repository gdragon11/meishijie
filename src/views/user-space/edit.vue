<template>
  <div class="edit">
    
  </div>
</template>
<script>
import UploadImg from '@/components/upload-img'
import {userEdit} from '@/service/api'
export default {
  components: {UploadImg},
  data(){
    const userInfo=this.$store.state.userInfo
    return {
      avatar:userInfo.avatar,
      name:userInfo.name,
      sign:userInfo.sign
    }
  },
  methods:{
    async save(){
      let data=await userEdit({
        /*
          为啥用this，而不用userInfo的数据
          return '',return true/false 的返回会对当前函数有啥影响
        */
        avatar:this.avatar,
        name:this.name,
        sign:this.sign
      });
      if(data.code === 0){
        this.$router.push({
          name:'space'
        })
      }
    }
  }
}
</script>
<style lang="stylus">
.edit
  background-color #fff
  padding 10px 0 20px 20px
  .edit-item 
    display flex
    margin-bottom 20px
    .label
      margin-right 10px
</style>
