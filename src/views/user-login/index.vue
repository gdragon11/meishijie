<template>
  <div class="login-page">
    
  </div>
</template>
<script>
import Login from './login'
import Register from './register'
export default {
  components: {Login, Register},
  data(){
    return {
      activeName: 'login'
    }
  }
}
</script>
<style lang="stylus">
.login-page
  width 500px
  background-color #fff
  margin 0 auto
  box-shadow: 0 0 25px #cac6c6;
  border-radius: 10px;
</style>

