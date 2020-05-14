<template>
  <div class="login flex-bavg ">
    <div class="pd-20 mt-40">
      <div class="f-larger f-bold text-center flex-bavg">登录</div>
      <div class="mt-20">
        <van-field v-model="userInfo.phone" left-icon="phone" placeholder="请输入手机号" />
        <van-field type="password" class="mt-10" v-model="userInfo.psw" left-icon="closed-eye" placeholder="请输入密码" />
        <van-button class="mt-30" type="info" size="normal" block>登录</van-button>
        <div class="text-center mt-10"><a href="javascript:;" class="color-info f-small">帐号注册</a></div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data () {
    return {
      userInfo: {}
    };
  },
  created () { },
  mounted () { },
  methods: {}
};
</script>
