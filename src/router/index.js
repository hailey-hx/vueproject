import Vue from 'vue'
import Router from 'vue-router'
import Login from '../pages/login/Login'
import UserList from '../pages/settings/UserList'
import BasicLayout from '../layouts/BasicLayout'
import ParameterSettings from '../pages/settings/ParameterSettings'
import MerchantList from '../pages/merchant/MerchantList'
import BalanceSettings from '../pages/merchant/BalanceSettings'
import AgentList from '../pages/agent/AgentList'
import PaymentList from '../pages/pay/PaymentList'
import PlatformList from '../pages/pay/PlatformList'
import PaymentInspection from '../pages/pay/PaymentInspection'
import RechargeMerchantDistribution from '../pages/pay/RechargeMerchantDistribution'
import RemoteCustomerList from '../pages/pay/RemoteCustomerList'
import WithdrawalMerchantDistribution from '../pages/pay/WithdrawalMerchantDistribution'
import RechargeOrder from '../pages/trade-info/RechargeOrder'
import WithdrawalOrder from '../pages/trade-info/WithdrawalOrder'
import ArtificialPayment from '../pages/trade-info/ArtificialPayment'
import AccountChange from '../pages/trade-info/AccountChange'
import Profit from '../pages/report/Profit'
import MerchantReport from '../pages/report/MerchantReport'
import RechargeAmount from '../pages/report/RechargeAmount'
import RechargeRate from '../pages/report/RechargeRate'
import Achievement from '../pages/report/Achievement'
import PersonalSetting from '../pages/personal/PersonalSetting'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Login
    },
    {
      path: '/index',
      name: 'index',
      component: BasicLayout,
      meta: {
        requireAuth: true
      },
      children: [
        {
          path: '',
          name: 'userList',
          component: UserList,
          meta: {
            requireAuth: true,
            menuName: 'settings'
          }
        },
        {
          path: 'userList',
          name: 'userList',
          component: UserList,
          meta: {
            requireAuth: true,
            menuName: 'settings'
          }
        },
        {
          path: 'parameterSettings',
          name: 'parameterSettings',
          component: ParameterSettings,
          meta: {
            requireAuth: true,
            menuName: 'settings'
          }
        },
        {
          path: 'merchantList',
          name: 'merchantList',
          component: MerchantList,
          meta: {
            requireAuth: true,
            menuName: 'merchant'
          }
        },
        {
          path: 'balanceSettings',
          name: 'balanceSettings',
          component: BalanceSettings,
          meta: {
            requireAuth: true,
            menuName: 'merchant'
          }
        },
        {
          path: 'agentList',
          name: 'agentList',
          component: AgentList,
          meta: {
            requireAuth: true,
            menuName: 'agent'
          }
        },
        {
          path: 'platformList',
          name: 'platformList',
          component: PlatformList,
          meta: {
            requireAuth: true,
            menuName: 'pay'
          }
        },
        {
          path: 'paymentList',
          name: 'paymentList',
          component: PaymentList,
          meta: {
            requireAuth: true,
            menuName: 'pay'
          }
        },
        {
          path: 'paymentInspection',
          name: 'paymentInspection',
          component: PaymentInspection,
          meta: {
            requireAuth: true,
            menuName: 'pay'
          }
        },
        {
          path: 'remoteCustomerList',
          name: 'remoteCustomerList',
          component: RemoteCustomerList,
          meta: {
            requireAuth: true,
            menuName: 'pay'
          }
        },
        {
          path: 'rechargeMerchantDistribution',
          name: 'rechargeMerchantDistribution',
          component: RechargeMerchantDistribution,
          meta: {
            requireAuth: true,
            menuName: 'pay'
          }
        },
        {
          path: 'withdrawalMerchantDistribution',
          name: 'withdrawalMerchantDistribution',
          component: WithdrawalMerchantDistribution,
          meta: {
            requireAuth: true,
            menuName: 'pay'
          }
        },
        {
          path: 'rechargeOrder',
          name: 'rechargeOrder',
          component: RechargeOrder,
          meta: {
            requireAuth: true,
            menuName: 'trade-info'
          }
        },
        {
          path: 'withdrawalOrder',
          name: 'withdrawalOrder',
          component: WithdrawalOrder,
          meta: {
            requireAuth: true,
            menuName: 'trade-info'
          }
        },
        {
          path: 'artificialPayment',
          name: 'artificialPayment',
          component: ArtificialPayment,
          meta: {
            requireAuth: true,
            menuName: 'trade-info'
          }
        },
        {
          path: 'accountChange',
          name: 'accountChange',
          component: AccountChange,
          meta: {
            requireAuth: true,
            menuName: 'trade-info'
          }
        },
        {
          path: 'profit',
          name: 'profit',
          component: Profit,
          meta: {
            requireAuth: true,
            menuName: 'report'
          }
        },
        {
          path: 'merchantReport',
          name: 'merchantReport',
          component: MerchantReport,
          meta: {
            requireAuth: true,
            menuName: 'report'
          }
        },
        {
          path: 'rechargeAmount',
          name: 'rechargeAmount',
          component: RechargeAmount,
          meta: {
            requireAuth: true,
            menuName: 'report'
          }
        },
        {
          path: 'rechargeRate',
          name: 'rechargeRate',
          component: RechargeRate,
          meta: {
            requireAuth: true,
            menuName: 'report'
          }
        },
        {
          path: 'achievement',
          name: 'achievement',
          component: Achievement,
          meta: {
            requireAuth: true,
            menuName: 'report'
          }
        },
        {
          path: 'personalSetting',
          name: 'personalSetting',
          component: PersonalSetting,
          meta: {
            requireAuth: true,
            menuName: 'personal'
          }
        }
      ]
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
    }
  ]
})
