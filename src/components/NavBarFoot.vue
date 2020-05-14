<template>
  <div class="bar">
    <van-tabbar :active="active" placeholder v-model="tabbarIndex">
      <van-tabbar-item icon="edit">真题练习</van-tabbar-item>
      <van-tabbar-item icon="newspaper-o">学习资料</van-tabbar-item>
      <van-tabbar-item icon="contact">我的帐号</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: "NavBarFoot",
  components: {},
  props: {
    active: Number
  },
  data() {
    return {};
  },
  computed: {
    tabbarIndex() {
      return this.active;
    }
  },
  methods: {},
  created() {},
  mounted() {},
  watch: {}
};
</script>
<style lang="less" scoped></style>
