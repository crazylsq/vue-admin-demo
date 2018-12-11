<template>
  <!-- 如果hiddle为false and item存在children -->
  <div v-if="!item.hidden && item.children" class="menu-wrapper">
    <!-- 如果item children的长度为1 -->
    <template v-if="hasOneShowingChild(item.children, item)">
      <!-- index=basePath + child的path -->
      <el-menu-item :index="resolvePath(onlyOneChild.path)">
        <i :class="onlyOneChild.meta.icon"></i>
        <!-- <span slot="title">{{ onlyOneChild.name }}</span> -->
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </template>
    <!-- item children的长度大于1 -->
    <el-submenu v-else :index="resolvePath(item.path)">
      <template slot="title" v-if="item.meta">
        <i :class="item.meta.icon"></i>
        {{ item.meta.title }}
      </template>
      <!-- 遍历item children大于1 的children ,并且hidden为false-->
      <template v-for="child in item.children" v-if="!child.hidden">
        <!-- 如果child 的长度大于1, 采用组件递归 -->
        <sidebar-item
          v-if="child.children && child.children.length>1"
          :item="child"
          :key="child.path"
          :base-path="resolvePath(child.path)"
          class="nest-menu"
        ></sidebar-item>
        <!-- 如果child的长度等于1, 单独处理 , 跟上面根菜单 的不一样 -->
        <template v-else-if="child.children && child.children.length===1">
          <el-submenu :index="child.children[0].path" :key="child.children[0].name">
            <template slot="title">{{ child.meta.title }}</template>
            <el-menu-item :index="resolvePath(child.path + '/' +child.children[0].path)">{{ child.children[0].name }}</el-menu-item>
          </el-submenu>
        </template>
        <!-- 如果child的长度等于0, 就是一个单独的菜单选项 -->
        <template v-else>
          <el-menu-item v-bind:index="resolvePath(child.path)" :key="child.name">{{ child.name }}</el-menu-item>
        </template>
      </template>
    </el-submenu>
  </div>
</template>

<script>
import path from 'path'
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    },
    basePath: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      onlyOneChild: null
    }
  },
  methods: {
    hasOneShowingChild (children, parent) {
      // var _this = this
      const showingChildren = children.filter(item => {
        if (item.hidden) {
          return false
        } else {
          // this.onlyOneChild = item
          return true
        }
      })
      if (showingChildren.length === 1) {
        this.onlyOneChild = children[ 0 ]
        return true
      }
      return false
    },
    // 将路径或路径片段处理成绝对路径 path.resolve('/foo/bar', './baz') ==> /foo/bar/baz
    resolvePath (routePath) {
      return path.resolve(this.basePath, routePath)
    }
  }
}
</script>
