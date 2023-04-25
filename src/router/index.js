import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import LoginView from '../views/LoginView.vue'
import GradeLineView from '../views/GradeLine.vue'
import PostView from '../views/PostView.vue'
import RegisterView from '../views/RegisterView.vue'
import TimeLineView from '../views/TimelineView.vue'
import NotFoundView from '../views/NotFoundView.vue'
import MathView from'../views/Papers/MathView.vue'
import EnglishView from'../views/Papers/EnglishView.vue'
import PoliticsView from'../views/Papers/PoliticsView.vue'
import ComputerView from'../views/Papers/ComputerView.vue'
import SchoolListView from'../views/SchoolListView.vue'

const routes = [
  // 主页
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  // 34所高校
  {
    path: '/schoolList',
    name: 'schoolList',
    component: SchoolListView
  },
  // 注册
  {
    path: '/Login',
    name: 'Login',
    component: LoginView
  }, 
  // 分数线
  {
    path: '/GradeLine',
    name: 'GradeLine',
    component: GradeLineView
  },
  // 帖子
  {
    path: '/Post',
    name: 'Post',
    component: PostView
  },
  // 注册
  {
    path: '/Register',
    name: 'Register',
    component: RegisterView
  },
  // 时间线
  {
    path: '/TimeLine',
    name: 'TimeLine',
    component: TimeLineView
  },
  // ---
  // 数学真题
  {
    path: '/Math',
    name: 'Math',
    component: MathView
  },
  // 英语真题
  {
    path: '/English',
    name: 'English',
    component: EnglishView
  },
  // 政治真题
  {
    path: '/Politics',
    name: 'Politics',
    component: PoliticsView
  },
  // 408真题
  {
    path: '/Computer',
    name: 'Computer',
    component: ComputerView
  },
  // ---
  {
    path: '/404/',
    name: '404',
    component: NotFoundView
  },
  // 重定向到404
  {// 配置任意字符，.表示匹配任意字符，*表示匹配任意多个.
    path:'/:catchAll(.*)',
    redirect:'/404/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
