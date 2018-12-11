<template>
  <el-header style="text-align: right; font-size: 12px">
    <breadcrumb></breadcrumb>
    <el-dropdown>
      <i class="el-icon-setting" style="margin-right: 15px"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>查看</el-dropdown-item>
        <el-dropdown-item>新增</el-dropdown-item>
        <el-dropdown-item>删除</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
    <span class="span">于大宝</span>
  </el-header>
</template>

<script>
import Breadcrumb from '@/components/Breadcrumb'
export default {
  name: 'NavBar',
  components: {
    Breadcrumb
  }
}
</script>
