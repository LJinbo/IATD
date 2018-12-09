import Vue from 'vue'
import Router from 'vue-router'
import loginView from '../pages/login/index'
import staffView from '../pages/login/staffLogin'
import dealerView from '../pages/login/dealerLogin'
import userView from '../pages/login/userLogin'
import memberView from '../pages/member/index'

import receiverIndex from '../pages/receiver/index'
import receiverView from '../pages/receiver/receiver'
import editReceiver from '../pages/receiver/editReceiver'
import addReceiver from '../pages/receiver/addReceiver'
import fillOrder from '../pages/pay/fillOrder'
import success from '../pages/pay/success'
import orders from '../pages/order/index'
import approvalDetail from '../pages/approval/approvalDetail'
import approval from '../pages/approval/approval'
import sampleView from '../pages/sample/index'
import hot from '../pages/sample/hot'
import integral from '../pages/sample/integral'
import search from '../pages/sample/search'
import detail from '../pages/sample/detail'
import memberInfo from '../pages/member/memberInfo'
import history from '../pages/member/historyIntegral'
Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      redirect: 'login/',
    },
    {
      path: '/member',
      name: 'member',
      component: memberView,
    },
    {
      path: '/memberInfo',
      name: 'memberInfo',
      component: memberInfo
    },
    {
      path: '/history',
      name: 'history',
      component: history
    },
    {
      path: '/login',
      component: loginView,
      children: [
        {
          path: '',
          redirect: '/login/staff'
        },
        {
          path: 'staff',
          name: 'staffView',
          component: staffView,
        },
        {
          path: 'dealer',
          name: 'dealerView',
          component: dealerView,
        },
        {
          path: 'user',
          name: 'userView',
          component: userView,
        },
      ]
    },
    {
      path: '/receiver',
      component: receiverIndex,
      children: [
        {
          path: '',
          redirect: '/receiver/index'
        },
        {
          path: 'index',
          name: 'receiver',
          component: receiverView,
          meta: {
            title: '3M IATD 选择收货人'
          }
        },
        {
          path: 'edit',
          name: 'editReceiver',
          component: editReceiver,
          meta: {
            title: '3M IATD 编辑收货人'
          }
        },
        {
          path: 'add',
          name: 'addReceiver',
          component: addReceiver,
          meta: {
            title: '3M IATD 新增收货人'
          }
        },
      ]
    },
    {
      path: '/sample',
      component: sampleView,
      children: [
        {
          path: '',
          redirect: '/sample/hot'
        },
        {
          path: 'hot',
          name: 'hot',
          component: hot
        },
        {
          path: 'integral',
          name: 'integral',
          component: integral
        },
        {
          path: 'search',
          name: 'search',
          component: search
        }
      ]
    },
    {
      path: '/fillOrder',
      name: 'fillOrder',
      component: fillOrder,
    },
    {
      path: '/success',
      name: 'success',
      component: success,
    },
    {
      path: '/orders',
      name: 'orders',
      component: orders,
    },
    {
      path: '/approvalDetail',
      name: 'approvalDetail',
      component: approvalDetail,
    },
    {
      path: '/approval',
      name: 'approval',
      component: approval,
    },
    {
      path: '/detail',
      name: 'detail',
      component: detail
    }
  ]
})
