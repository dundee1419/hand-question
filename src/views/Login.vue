<template>
  <div class="login mt-40">
    <div class="pd-20">
      <div class="f-larger f-bold text-center flex-bavg">登录</div>
      <div class="mt-20">
        <van-field v-model="value1" left-icon="phone" placeholder="请输入手机号" />
        <van-field class="mt-10" v-model="value2" clearable left-icon="closed-eye" placeholder="请输入密码" />
        <van-button class="mt-10" type="info" size="normal" block>登录</van-button>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "login",
  data () {
    return {
      courseList: null
    };
  },
  created () { },
  mounted () { },
  methods: {}
};
</script>
