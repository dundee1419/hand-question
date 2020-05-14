import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import {
  Button,
  Cell,
  CellGroup,
  Field,
  NavBar,
  Icon,
  Tab,
  Tabs,
  Search,
  RadioGroup,
  Radio,
  Checkbox,
  CheckboxGroup,
  Tabbar,
  TabbarItem,
  Dialog
} from "vant";

Vue.use(Button)
  .use(Cell)
  .use(CellGroup)
  .use(Field)
  .use(NavBar)
  .use(Icon)
  .use(Tab)
  .use(Tabs)
  .use(Search)
  .use(RadioGroup)
  .use(Radio)
  .use(Checkbox)
  .use(CheckboxGroup)
  .use(Tabbar)
  .use(TabbarItem)
  .use(Dialog);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
