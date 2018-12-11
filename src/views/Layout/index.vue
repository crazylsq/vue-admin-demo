<template>
  <div class="app-wrapper">
    <sidebar />
    <div class="main-container">
      <nav-bar class="header"></nav-bar>
      <app-main></app-main>
    </div>
  </div>
</template>

<script>
import { AppMain, Sidebar, NavBar } from './components'
export default {
  name: 'Layout',
  components: {
    AppMain,
    Sidebar,
    NavBar
  }
}
</script>

<style>
.app-wrapper {
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
.main-container {
  position: relative;
  left: 200px;
  height: 100%;
}
.header {
  background-color:#fff;
  position: fixed;
  left: 200px;
  color: #333;
  right: 0;
  padding: 0px;
  line-height: 60px;
  border-bottom: solid 1px #e6e6e6;
}
/* sidebar css */
.el-scrollbar {
  width: 200px;
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
  overflow: auto;
  background-color: rgb(48, 65, 86);
}
.el-menu-item {
  background-color: rgb(48, 65, 86);
  color: rgb(191, 203, 217);
}
.el-submenu__title {
  background-color: rgb(48, 65, 86);
  color: rgb(191, 203, 217);
}
/* AppMain css */
.el-main {
  position:relative;
  top: 60px;
  height: 100%;
}
.app-main {
  height: 100%;
  padding: 10px;
}
/* NavBar css */
.span {
  margin-right: 35px;
}
</style>
