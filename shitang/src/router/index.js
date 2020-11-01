import Vue from 'vue'
import VueRouter from 'vue-router'


import index from "../components/index";
import login from "../components/login";
import outFood from "../components/outFood";
import foodManage from "../components/foodManage";
import opinions from "../components/opinions";
import ordersRecord from "../components/ordersRecord";
import sales from "../components/sales";
import salesFood from "../components/salesFood";
import updateFood from "../components/updateFood";

Vue.use(VueRouter)

const routes = [
  { path: '/' ,component: index},
  { path: '/login' ,component: login},
  { path: '/outFood' ,component: outFood},
  { path: '/sales' ,component: sales},
  { path: '/salesFood' ,component: salesFood},
  { path: '/foodManage' ,component: foodManage},
  { path: '/opinions' ,component: opinions},
  { path: '/ordersRecord' ,component: ordersRecord},
  { path: '/updateFood' ,component: updateFood},




]

const router = new VueRouter({
  routes
})

export default router
