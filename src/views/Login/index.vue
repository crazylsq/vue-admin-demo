<template>
  <div class="login-container">
    <el-form class="login-form">
      <div class="title-container">
        <h3 class="title">系统登录</h3>
      </div>
      <el-form-item>
        <el-input
          placeholder="输入账号"
          name="username"
          type="input"
          autocomplete="on"
          v-model="usernameInput"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-input
          placeholder="输入密码"
          name="password"
          type="password"
          autocomplete="on"
          v-model="passwdInput"
          @keyup.enter.native="handleClickLogin"
        ></el-input>
      </el-form-item>
      <el-button type="primary" v-on:click="handleClickLogin">登陆</el-button>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      usernameInput: '',
      passwdInput: ''
    }
  },
  methods: {
    handleClickLogin: function () {
      var _this = this
      if (this.usernameInput === '' || this.passwdInput === '') {
        this.$message.warning('用户名密码不能为空~~')
      } else if (this.passwdInput.length < 6) {
        this.$message.warning('密码不能少于6位')
      } else {
        this.$store.dispatch('Login', {
          username: this.usernameInput,
          password: this.passwdInput
        }).then(
          function (res) {
            if (res.status !== 200) {
              _this.$message.error(res.data.msg)
            } else {
              _this.$message.success('登陆成功~')
              _this.$router.push({
                path: _this.$route.query.redirect || '/'
              })
            }
          }
        ).catch(
          function (error) {
            console.log(error)
          }
        )
      }
    }
  }
}
</script>

<style>
div.el-input input {
  height: 47px;
}
</style>

<style lang="scss" scoped>
$bg: #2d3a4b;
.login-container {
  width: 100%;
  height: 100%;
  background-color: $bg;
  position: fixed;
  .login-form {
    position: relative;
    margin: 120px auto;
    padding: 15px 15px;
    width: 480px;
    .title-container {
      text-align: center;
    }
    .el-button.el-button--primary {
      width: 100%;
    }
    .el-alert--error {
      height: 30px;
    }
  }
}
</style>
