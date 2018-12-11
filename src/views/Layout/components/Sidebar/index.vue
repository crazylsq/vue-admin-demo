<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      :default-active="$route.path"
      :unique-opened=true
      router
    >
    <sidebar-item v-for="route in routes" :key="route.path" :item="route" :base-path="route.path"></sidebar-item>
    </el-menu>
  </el-scrollbar>
</template>

<script>
import SidebarItem from './SidebarItem'
export default {
  components: {
    SidebarItem
  },
  computed: {
    routes () {
      return this.$router.options.routes
    }
  }
}
</script>
