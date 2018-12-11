<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index) in levelList" v-if="item.meta.title" :key="item.path">
        <span v-if="index!==levelList.length-1" class="no-redirect">{{ item.meta.title }}</span>
        <span v-else class="redirect">{{ item.meta.title }}</span>
      </el-breadcrumb-item>
    </transition-group>
  </el-breadcrumb>
</template>

<script>
// import pathToRegexp from 'path-to-regexp'
export default {
  data () {
    return {
      levelList: null
    }
  },
  watch: {
    $route () {
      this.getBreadcrumb()
    }
  },
  created () {
    this.getBreadcrumb()
  },
  methods: {
    getBreadcrumb () {
      let matched = this.$route.matched.filter(item => {
        if (item.name) {
          return true
        }
      })
      console.log('tag', matched)
      const first = matched[0]
      if (first && first.name !== 'dashboard') {
        matched = [{path: '/dashboard', meta: {title: 'Dashboard'}}].concat(matched)
      }
      this.levelList = matched
      console.log('tag-levellist', this.levelList)
    }
  }
}
</script>

<style>
.app-breadcrumb {
  display: inline-block;
  font-size: 14px;
  left: 200px;
  top: 0;
  line-height: 60px;
  margin-left: 10px;
  position: fixed;
}
.no-redirect {
  color: #303133;
  cursor: text;
  font-weight: 700;
}
.redirect {
  color: #303133;
  cursor: text;
}
</style>
