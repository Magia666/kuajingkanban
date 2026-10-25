import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';
import {
  RobotOutlined,
  ShoppingOutlined,
  ProfileOutlined,
  AccountBookOutlined,
  InboxOutlined,
  SettingOutlined,
  CarOutlined,
  AppstoreOutlined,
  LeftOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

const pageGroups = [
  {
    title: 'AI与数据分析',
    icon: <RobotOutlined className="text-blue-500" />,
    pages: [
      { path: '/ai-selection', name: 'AI选品' },
      { path: '/ai-customer-service', name: 'AI客服' },
      { path: '/ad-analysis', name: '广告分析' },
      { path: '/data-monitoring', name: '数据监控' },
    ]
  },
  {
    title: '商品管理',
    icon: <ShoppingOutlined className="text-purple-500" />,
    pages: [
      { path: '/product-collection', name: '产品采集' },
      { path: '/product-match', name: '商品匹配' },
      { path: '/local-product', name: '本地商品' },
      { path: '/merchandise-page', name: '商品页' },
      { path: '/distribution-product', name: '分销商品' },
    ]
  },
  {
    title: '订单管理',
    icon: <ProfileOutlined className="text-green-500" />,
    pages: [
      { path: '/order-management', name: '订单管理' },
      { path: '/shipped-order-management', name: '已发货订单' },
      { path: '/return-order-management', name: '退货订单管理' },
      { path: '/issue-order', name: '问题件' },
      { path: '/create-order', name: '创建订单' },
      { path: '/distribution-order', name: '分销订单' },
    ]
  },
  {
    title: '财务与结算',
    icon: <AccountBookOutlined className="text-orange-500" />,
    pages: [
      { path: '/balance-recharge', name: '余额充值' },
      { path: '/consumption-record', name: '消费记录' },
      { path: '/recharge-audit', name: '充值审核' },
      { path: '/recharge-record', name: '充值记录' },
      { path: '/store-withdrawal', name: '店铺提现' },
      { path: '/compensation-claim', name: '理赔申请' },
      { path: '/express-claim', name: '快递理赔' },
      { path: '/distribution-account', name: '分销账户' },
      { path: '/platform-settlement', name: '平台结算' },
      { path: '/profit-statistics', name: '利润统计' },
      { path: '/exchange-rate', name: '汇率设置' },
      { path: '/commission-flow', name: '佣金流水' },
    ]
  },
  {
    title: '库存与仓储',
    icon: <InboxOutlined className="text-indigo-500" />,
    pages: [
      { path: '/inventory', name: '库存查询' },
      { path: '/inventory-sync', name: '库存同步' },
      { path: '/inventory-warning', name: '库存预警' },
      { path: '/inventory-log', name: '库存日志' },
      { path: '/inventory-age', name: '库龄分析' },
      { path: '/warehouse-inbound', name: '仓库入库' },
      { path: '/slot-management', name: '库位管理' },
      { path: '/stock-push', name: '库存推送' },
      { path: '/procurement-record', name: '采购记录' },
      { path: '/distribution-log', name: '分销日志' },
    ]
  },
  {
    title: '系统与用户',
    icon: <SettingOutlined className="text-slate-500" />,
    pages: [
      { path: '/employee-management', name: '员工管理' },
      { path: '/role-management', name: '角色管理' },
      { path: '/user-profile', name: '个人资料' },
      { path: '/common-address', name: '常用地址' },
      { path: '/authorization-1688', name: '1688授权' },
      { path: '/invitation-list', name: '邀请列表' },
      { path: '/invitation-withdrawal', name: '邀请提现' },
      { path: '/recycle-bin', name: '回收站' },
    ]
  },
  {
    title: '物流与发货',
    icon: <CarOutlined className="text-teal-500" />,
    pages: [
      { path: '/logistics-channel', name: '物流渠道' },
      { path: '/freight-trial', name: '运费试算' },
      { path: '/auto-shipping', name: '自动发货' },
      { path: '/return-application', name: '退件申请' },
      { path: '/refusal-sign', name: '拒签件' },
      { path: '/package-claim', name: '包裹认领' },
    ]
  },
  {
    title: '其他',
    icon: <AppstoreOutlined className="text-pink-500" />,
    pages: [
      { path: '/file-download-task', name: '文件下载任务' },
    ]
  }
];

export default function NavigationPage() {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-slate-50 p-6">
      <div className="max-w-[1600px] mx-auto animate-fade-in">
        <div className="mb-8">
          <div 
            className="inline-flex items-center gap-2 text-slate-500 hover:text-blue-600 cursor-pointer mb-4 transition-colors"
            onClick={() => navigate('/')}
          >
            <LeftOutlined /> 返回首页
          </div>
          <Title level={2} className="!mb-1">系统页面导航</Title>
          <Text type="secondary" className="text-base">全系统功能地图，点击即可快速访问各个业务模块页面。</Text>
        </div>

        <Row gutter={[24, 24]}>
          {pageGroups.map((group, idx) => (
            <Col xs={24} md={12} lg={8} xl={6} key={idx}>
              <Card 
                title={<span className="flex items-center gap-2 text-base font-medium">{group.icon}{group.title}</span>} 
                className="h-full shadow-sm hover:shadow-md transition-shadow border-slate-200"
              >
                <div className="flex flex-col gap-1">
                  {group.pages.map(page => (
                    <div 
                      key={page.path}
                      className="text-slate-700 hover:text-blue-600 hover:bg-blue-50 px-3 py-2 rounded-md cursor-pointer transition-colors duration-200 flex items-center justify-between"
                      onClick={() => navigate(page.path)}
                    >
                      {page.name}
                      <span className="text-xs text-slate-300 transform scale-75 opacity-0 group-hover:opacity-100 transition-opacity">
                        {page.path}
                      </span>
                    </div>
                  ))}
                </div>
              </Card>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}
