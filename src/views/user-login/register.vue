<template>
  <div class="login-section">
    <!-- :rules="rules" -->
    
  </div>
</template>
<script>
import {register} from '@/service/api';
export default {
  
}
</script>

<style lang="stylus">
.login-section
  padding 0px 20px
</style>

  function newFunction(data) {
    localStorage.setItem('token', data.data.token);
  }
