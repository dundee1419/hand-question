<template>
  <div class="flex-bavg">
    <div class="pd-20 mt-40">
      <div class="f-larger f-bold text-center flex-bavg">用户注册</div>
      <div class="mt-20">
        <van-field v-model="userInfo.phone" left-icon="phone" placeholder="请输入手机号" />
        <van-field
          class="mt-10"
          v-model="userInfo.psw"
          clearable
          left-icon="closed-eye"
          placeholder="请输入密码"
        />
        <van-field
          class="mt-10"
          v-model="userInfo.psw"
          clearable
          left-icon="closed-eye"
          placeholder="请确认密码"
        />
        <van-button class="mt-30" type="info" size="normal" block>注册</van-button>
        <div class="text-center mt-10">
          <a href="javascript:;" class="color-info f-small">帐号登录</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  props: {},
  data() {
    return {
      userInfo: {}
    };
  },
  computed: {},
  methods: {},
  created() {},
  mounted() {},
  watch: {}
};
</script>
<style lang="less" scoped>
</style>