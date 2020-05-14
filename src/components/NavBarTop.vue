<template>
  <div class="bar">
    <van-nav-bar
      left-text="返回"
      :title="title"
      right-text="按钮"
      left-arrow
      fixed
      placeholder
      @click-left="onClickLeft"
      @click-right="onClickRight"
    >
      <template #right>
        <van-icon name="home-o" />
      </template>
    </van-nav-bar>
  </div>
</template>

<script>
export default {
  name: "TopBar",
  components: {},
  props: {
    title: String
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    onClickLeft() {},
    onClickRight() {}
  },
  created() {},
  mounted() {},
  watch: {}
};
</script>
<style lang="less" scoped></style>
