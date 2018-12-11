<template>
  <el-main>
    <section class="app-main">
      <!-- {{ $route.meta.keepAlive }} -->
      <!-- <transition name="fade-transform" mode="out-in"> -->
        <!-- <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive> -->
        <!-- <router-view v-if="!$route.meta.keepAlive"></router-view> -->
      <router-view></router-view>
      <!-- </transition> -->
    </section>
  </el-main>
</template>

<script>
export default {
  name: 'AppMain'
}
</script>
