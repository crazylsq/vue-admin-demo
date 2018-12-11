<template>
  <div>
    <h1>{{ content }}</h1>
    <el-button type="primary" v-on:click="handleLogoutClick">退出</el-button>
  </div>
</template>

<script>
import { removeToken } from '@/utils/auth'
export default {
  name: 'Dashboard',
  data () {
    return {
      content: 'this is dashboard 2'
    }
  },
  methods: {
    handleLogoutClick: function () {
      removeToken()
      this.$router.push({
        path: '/login'
      })
    }
  }
}
</script>
