<template>
  <div class="home flex-column">
    <NavBarTop :title="title" />
    <van-search
      v-model="keyWord"
      show-action
      placeholder="请输入搜索关键词"
      @search="onSearch"
    >
      <template #action>
        <div @click="onSearch">搜索</div>
      </template>
    </van-search>
    <van-tabs v-model="active" color="#1989fa">
      <van-tab title="公共科目">
        <van-checkbox-group v-model="courseNum">
          <van-cell-group>
            <van-cell
              v-for="(item, index) in list"
              clickable
              :key="item"
              :title="item"
              @click="toggle(index)"
            >
              <template #right-icon>
                <van-checkbox :name="item" ref="checkboxes" />
              </template>
            </van-cell>
          </van-cell-group>
        </van-checkbox-group>
      </van-tab>
      <van-tab title="专业科目">内容 2</van-tab>
    </van-tabs>
    <div class="flex-bavg"></div>
  </div>
</template>

<script>
// @ is an alias to /src
import NavBarTop from "@/components/NavBarTop.vue";

export default {
  name: "ChoseCourse",
  data() {
    return {
      active: 0,
      keyWord: "",
      title: "选择自考科目",
      list: ["计算机网络基础", "马克思主义基本原理", "英语(二)"],
      courseNum: [] //选择的科目列表
    };
  },
  components: {
    NavBarTop
  },
  methods: {
    onSearch() {},
    toggle(index) {
      this.$refs.checkboxes[index].toggle();
    }
  }
};
</script>
