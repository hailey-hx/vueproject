const siderMenuList = [
  {
    id: 'settings',
    name: '系统设置',
    icon: 'setting',
    child: [
      {
        id: 'userList',
        name: '用户列表'
      },
      {
        id: 'parameterSettings',
        name: '参数设置'
      }
    ]
  },
  {
    id: 'merchant',
    name: '商户管理',
    icon: 'shop',
    child: [
      {
        id: 'merchantList',
        name: '系统商户列表',
        icon: ''
      },
      {
        id: 'balanceSettings',
        name: '商户余额调整',
        icon: ''
      }
    ]
  },
  {
    id: 'agent',
    name: '代理管理',
    icon: 'cluster',
    child: [
      {
        id: 'agentList',
        name: '代理列表',
        icon: ''
      }
    ]
  },
  {
    id: 'pay',
    name: '支付平台',
    icon: 'qrcode',
    child: [
      {
        id: 'platformList',
        name: '支付平台列表',
        icon: ''
      },
      {
        id: 'paymentList',
        name: '支付方式列表',
        icon: ''
      },
      {
        id: 'paymentInspection',
        name: '支付方式检验',
        icon: ''
      },
      {
        id: 'remoteCustomerList',
        name: '远程客户列表',
        icon: ''
      },
      {
        id: 'rechargeMerchantDistribution',
        name: '充值商户号分配',
        icon: ''
      },
      {
        id: 'withdrawalMerchantDistribution',
        name: '提现商户号分配',
        icon: ''
      }
    ]
  },
  {
    id: 'trade-info',
    name: '交易信息',
    icon: 'dollar',
    child: [
      {
        id: 'rechargeOrder',
        name: '充值订单',
        icon: ''
      },
      {
        id: 'withdrawalOrder',
        name: '提现订单',
        icon: ''
      },
      {
        id: 'artificialPayment',
        name: '人工出款',
        icon: ''
      },
      {
        id: 'accountChange',
        name: '交易帐变',
        icon: ''
      }
    ]
  },
  {
    id: 'report',
    name: '报表',
    icon: 'bar-chart',
    child: [
      {
        id: 'profit',
        name: '分润明细',
        icon: ''
      },
      {
        id: 'merchantReport',
        name: '商户日报表',
        icon: ''
      },
      {
        id: 'rechargeAmount',
        name: '当天充值金额',
        icon: ''
      },
      {
        id: 'rechargeRate',
        name: '充值成功率',
        icon: ''
      },
      {
        id: 'achievement',
        name: '业绩报表',
        icon: ''
      }
    ]
  },
  {
    id: 'personal',
    name: '个人中心',
    icon: 'user',
    child: [
      {
        id: 'personalSetting',
        name: '个人设置',
        icon: ''
      }
    ]
  }
]

export default siderMenuList
