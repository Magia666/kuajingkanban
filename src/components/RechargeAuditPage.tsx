import React, { useState } from 'react';
import { Table, Button, Tabs, Card, Space } from 'antd';
import type { TabsProps, TableColumnsType } from 'antd';
import { ReloadOutlined, SearchOutlined } from '@ant-design/icons';

interface RechargeAuditData {
  key: string;
  rechargeAmount: number;
  currency: string;
  rechargeAccount: string;
  account: string;
  paymentMethod: string;
  auditStatus: string;
  rechargeTime: string;
}

const RechargeAuditPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('audit');

  const columns: TableColumnsType<RechargeAuditData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { 
      title: '充值金额', 
      dataIndex: 'rechargeAmount', 
      key: 'rechargeAmount',
      render: (val, record) => <span className="font-semibold text-slate-800">{record.currency} {Number(val).toLocaleString('zh-CN', { minimumFractionDigits: 2 })}</span>
    },
    { title: '币种', dataIndex: 'currency', key: 'currency' },
    { title: '商户充值主体', dataIndex: 'rechargeAccount', key: 'rechargeAccount' },
    { title: '登录商户账号', dataIndex: 'account', key: 'account' },
    { title: '充值渠道', dataIndex: 'paymentMethod', key: 'paymentMethod' },
    { 
      title: '审核状态', 
      dataIndex: 'auditStatus', 
      key: 'auditStatus',
      render: (status) => {
        const colorMap: Record<string, string> = {
          '待财务审核': 'bg-amber-50 text-amber-700 border-amber-200',
          '审核通过已入账': 'bg-emerald-50 text-emerald-700 border-emerald-200',
          '已驳回': 'bg-rose-50 text-rose-700 border-rose-200',
        };
        return (
          <span className={`inline-block px-2 py-0.5 rounded text-xs border ${colorMap[status] || 'bg-slate-50 text-slate-600'}`}>
            {status}
          </span>
        );
      }
    },
    { title: '提交时间', dataIndex: 'rechargeTime', key: 'rechargeTime' },
    { title: '付款水单', key: 'screenshot', render: () => <Button type="link" size="small" icon={<SearchOutlined />}>查看凭证</Button> },
    { 
      title: '操作', 
      key: 'operation', 
      render: (_, record) => (
        record.auditStatus === '待财务审核' ? (
          <Space size="small">
            <a className="text-emerald-600 hover:text-emerald-800 text-xs font-medium">通过</a>
            <a className="text-rose-600 hover:text-rose-800 text-xs font-medium">驳回</a>
          </Space>
        ) : (
          <span className="text-xs text-slate-400">已归档</span>
        )
      ) 
    },
  ];

  const dataSource: RechargeAuditData[] = [
    {
      key: "1",
      rechargeAmount: 20000.00,
      currency: "CNY",
      rechargeAccount: "深圳市极智数码进出口有限公司",
      account: "seller_jizhi@sz.com",
      paymentMethod: "企业对公网银电汇 (招商银行)",
      auditStatus: "待财务审核",
      rechargeTime: "2024-10-24 10:20:15"
    },
    {
      key: "2",
      rechargeAmount: 5000.00,
      currency: "USD",
      rechargeAccount: "广州汇智跨境电商合伙企业",
      account: "seller_huizhi@gz.com",
      paymentMethod: "万里汇 WorldFirst 对公结算",
      auditStatus: "审核通过已入账",
      rechargeTime: "2024-10-24 09:12:00"
    },
    {
      key: "3",
      rechargeAmount: 15000.00,
      currency: "CNY",
      rechargeAccount: "杭州云海出海网络科技有限公司",
      account: "seller_yunhai@hz.com",
      paymentMethod: "企业支付宝大额扫码",
      auditStatus: "审核通过已入账",
      rechargeTime: "2024-10-23 18:45:30"
    },
    {
      key: "4",
      rechargeAmount: 3500.00,
      currency: "USD",
      rechargeAccount: "义乌晨星供应链管理中心",
      account: "seller_chenxing@yw.com",
      paymentMethod: "PingPong 对公全球收付",
      auditStatus: "审核通过已入账",
      rechargeTime: "2024-10-23 15:20:10"
    },
    {
      key: "5",
      rechargeAmount: 10000.00,
      currency: "CNY",
      rechargeAccount: "厦门创宇跨境贸易有限公司",
      account: "seller_chuangyu@xm.com",
      paymentMethod: "连连支付 LianLian Pay",
      auditStatus: "已驳回",
      rechargeTime: "2024-10-23 11:05:44"
    },
    {
      key: "6",
      rechargeAmount: 50000.00,
      currency: "CNY",
      rechargeAccount: "东莞市宏达物流供应链有限公司",
      account: "seller_hongda@dg.com",
      paymentMethod: "大额对公转账 (工商银行)",
      auditStatus: "审核通过已入账",
      rechargeTime: "2024-10-22 16:30:00"
    }
  ];

  const topTabs: TabsProps['items'] = [
    { key: 'home', label: '首页' },
    { key: 'audit', label: '充值审核' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <Tabs activeKey={activeTab} onChange={setActiveTab} items={topTabs} className="mb-4 bg-white px-4" />
      
      <Card>
        <div className="mb-4">
          <Button icon={<ReloadOutlined />}>刷新</Button>
        </div>
        <Table 
          columns={columns} 
          dataSource={dataSource} 
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default RechargeAuditPage;
