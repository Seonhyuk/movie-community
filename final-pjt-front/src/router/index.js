import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '@/store'

import BefView from '@/views/BefView.vue'
import HomeView from '../views/HomeView.vue'
import LoginView from '@/views/LoginView.vue'
import SignupView from '@/views/SignupView.vue'
import ProfileView from '@/views/ProfileView.vue'
import changeNicknameView from '@/views/changeNicknameView.vue'
import PasswordChangeView from '@/views/PasswordChangeView.vue'
import ExampleView from '@/views/ExampleView.vue'


import SearchView from '@/views/SearchView.vue'
import MovieDetailView from '@/views/MovieDetailView.vue'
import RoundSelectView from '@/views/RoundSelectView.vue'
import WorldCupView from '@/views/WorldCupView.vue'
import SelectGenreView from '@/views/SelectGenresView.vue'
import CustomCardView from '@/views/CustomCardView.vue'


import ArticleListView from '@/views/community/ArticleListView.vue'
import ArticleDetailView from '@/views/community/ArticleDetailView.vue'
import ArticleNewView from '@/views/community/ArticleNewView'
import ArticleEditView from '@/views/community/ArticleEditView'

import PageNotFound from '@/views/PageNotFoundView.vue'



Vue.use(VueRouter)

const routes = [
  {
    path:'/',
    name:'bef',
    component: BefView
  },
  {
    path: '/home',
    name: 'home',
    component: HomeView
  },
  {
    path: '/login',
    name: 'login',
    component: LoginView
  },
  {
    path: '/signup',
    name: 'signup',
    component: SignupView
  },
  {
    path: '/profile/:username',
    name: 'profile',
    component: ProfileView
  },
  {
    path: '/search',
    name: 'search',
    component: SearchView
  },
  {
    path: '/moviedetail/:moviePk',
    name: 'moviedetail',
    component: MovieDetailView
  },
  // login Required
  {
    path: '/roundselect',
    name: 'roundselect',
    component: RoundSelectView
  },
  {
    path: '/worldcup',
    name: 'worldcup',
    component: WorldCupView
  },
  {
    path: '/changepassword',
    name: 'changepassword',
    component: PasswordChangeView,
  },
  {
    path: '/community', 
    name: 'articles',
    component: ArticleListView
  },
  {
    path: '/articles/new',
    name: 'articleNew',
    component: ArticleNewView
  },
  {
    path: '/articles/:articlePk',
    name: 'article',
    component: ArticleDetailView
  },
  {
    path: '/articles/:articlePk/edit',
    name: 'articleEdit',
    component: ArticleEditView
  },
  {
    path: '/genres',
    name: 'genres',
    component: SelectGenreView
  },
  {
    path: '/nickname',
    name: 'changeNickname',
    component: changeNicknameView
  },
  {
    path: '/customcard',
    name: 'customCard',
    component: CustomCardView
  },

  {
    path: '*',
    redirect: '/404'
  },
  {
    path: '/404',
    component: PageNotFound
  },
  {
    path: '/example',
    component: ExampleView
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  scrollBehavior() { 
    return { x: 0, y: 0 } 
  },
  routes
})

router.beforeEach((to, from, next) => {
  const { isLoggedIn } = store.getters
  const authPages = [
    'changepassword', 
    'articles', 
    'articleNew', 
    'article', 
    'articleEdit', 
    'genres', 
    'changeNickname', 
    'share',
    'customCard',
    'roundselect',
    'worldcup'
  ]
  const unAuthPages = [
    'login',
    'signup',
  ]

  const isAuthRequired = authPages.includes(to.name)
  const NotAuthentication = unAuthPages.includes(to.name)

  if (NotAuthentication && isLoggedIn) {
    next({ name: 'home' })
  } else {
    next()
  }

  if (isAuthRequired && !isLoggedIn) {
    next({ name: 'login'})
  } else {
    next()
  }
})

export default router
