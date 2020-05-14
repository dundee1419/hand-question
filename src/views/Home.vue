<template>
  <div class="home flex-column flex-bavg">
    <NavBarTop title="我的科目" />
    <div class="flex-bavg">
      <div class="course-cell">
        <van-cell title="单元格" is-link value="练习" />
      </div>
      <div class="course-cell">
        <van-cell title="单元格" is-link value="练习" />
      </div>
      <div class="course-cell">
        <van-cell title="单元格" is-link value="练习" />
      </div>
    </div>
    <NavBarFoot :active="active" />

    <!-- 弹窗提示 -->
    <van-dialog
      v-model="showDialog"
      title="真题模考介绍"
      show-cancel-button
      confirm-button-text="开始做题"
    >
      <div class="pd-20">
        <div>
          <b>1.单选题:</b><br />
          <span class="f-small">
            在每小题列出的四个备法项中.只有-一个是符合题日要求的正确答案。选错无分。
          </span>
        </div>
        <div class="mt-20">
          <b> 2.多选题:</b><br />
          <span class="f-small">
            在每小题列出的五个备选项中.至少有两个是符合题目要求的，错选、多选。少选均无分。
          </span>
        </div>
        <div class="mt-20">
          <b> 3. (简答)等客观题:</b><br />
          <span class="f-small">
            不支持作答。可以交卷后查看答案和解析.
          </span>
        </div>
      </div>
    </van-dialog>
  </div>
</template>

<script>
import NavBarTop from "@/components/NavBarTop.vue";
import NavBarFoot from "@/components/NavBarFoot.vue";
export default {
  name: "",
  components: { NavBarTop, NavBarFoot },
  props: {},
  data() {
    return {
      active: 0,
      showDialog: true
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
.course-cell {
  margin: 15px 10px;
  border-radius: 5px;
  overflow: hidden;
}
</style>
