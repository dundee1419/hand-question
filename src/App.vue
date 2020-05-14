<template>
  <div id="app">
    <router-view />
  </div>
</template>

<style lang="less">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  min-height: 100vh;
  background-color: #f7f7f7;
}

.flex {
  display: flex;
  flex-direction: row;
  display: -webkit-flex; /* Safari */
  -webkit-flex-direction: row;
}

/*flex自动换行*/

.flex-wrap {
  display: flex;
  flex-wrap: wrap;
  display: -webkit-flex; /* Safari */
  -webkit-flex-wrap: wrap;
}

.flex-column {
  display: flex;
  justify-content: column;
  flex-direction: column;
  display: -webkit-flex; /* Safari */
  -webkit-justify-content: column;
  -webkit-flex-direction: column;
}

.flex-center {
  display: flex;
  justify-content: center; /*横向居中*/
  align-items: center; /*纵向居中*/
  display: -webkit-flex; /* Safari */
  -webkit-justify-content: center; /*横向居中*/
  -webkit-align-items: center; /*纵向居中*/
}

.flex-align {
  display: flex;
  align-items: center; /*纵向居中*/
  display: -webkit-flex; /* Safari */
  -webkit-align-items: center; /*纵向居中*/
}

.flex-between {
  display: flex;
  justify-content: space-between;
  display: -webkit-flex; /* Safari */
  -webkit-justify-content: space-between;
}

.flex-bavg {
  flex: 1;
  -webkit-flex: 1;
  position: relative;
}

.text-over {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  align-content: center;
}

.text-over-2 {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  align-content: center;
}

.text-over-3 {
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  align-content: center;
}

.text-left {
  text-align: left !important;
}

.text-right {
  text-align: right !important;
}

.text-center {
  text-align: center;
}

.text-break {
  word-wrap: break-word;
  word-break: break-all;
  white-space: pre-line;
}

.clearfix {
  position: relative;
  overflow: hidden;
}

.f-small {
  font-size: small;
}
.f-xsmall {
  font-size: x-small;
}
.f-bold {
  font-weight: bold;
}
.f-larger {
  font-size: larger;
}
.mt-10 {
  margin-top: 10px;
}
.mt-20 {
  margin-top: 20px;
}
.mt-40 {
  margin-top: 40px;
}
.pd-20 {
  padding: 20px;
}
</style>
