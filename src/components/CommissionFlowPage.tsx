import React from 'react';
import { Table, Button, Card, Select, Space } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';

interface CommissionFlowData {
  key: string;
  flowType: string;
  amount: string;
  remainingAmount: string;
  remark: string;
  createTime: string;
}

const CommissionFlowPage: React.FC = () => {
  const columns: TableColumnsType<CommissionFlowData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { 
      title: '流水类型', 
      dataIndex: 'flowType', 
      key: 'flowType',
      render: (val) => {
        const isIncome = val.includes('提成') || val.includes('返佣') || val.includes('奖励');
        return <span className={`px-2 py-0.5 text-xs rounded border ${isIncome ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-rose-50 text-rose-700 border-rose-200'} font-medium`}>{val}</span>;
      }
    },
    { 
      title: '变动金额', 
      dataIndex: 'amount', 
      key: 'amount',
      render: (val) => <span className={`font-semibold ${val.startsWith('+') ? 'text-emerald-600' : 'text-slate-800'}`}>{val}</span>
    },
    { title: '变动后账户余额', dataIndex: 'remainingAmount', key: 'remainingAmount', render: (val) => <span className="font-semibold text-slate-700">¥{val}</span> },
    { title: '交易明细及备注', dataIndex: 'remark', key: 'remark' },
    { title: '结算时间', dataIndex: 'createTime', key: 'createTime' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">佣金流水</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
            <Select 
              placeholder="流水类型" 
              style={{ width: 220 }} 
              allowClear 
              options={[
                { label: '全部类型', value: 'all' },
                { label: '分销商品订单提成', value: 'order_commission' },
                { label: '下级商户首单返佣', value: 'first_order' },
                { label: '邀请商户入驻奖励', value: 'invite_reward' },
                { label: '佣金余额提现出账', value: 'withdraw' }
              ]}
            />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
        </Space>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              flowType: "分销商品订单提成 (+)",
              amount: "+28.50",
              remainingAmount: "34,680.50",
              remark: "分销商【广州汇智】完成订单 DIS-20241024-8801 结算分润 (5%)",
              createTime: "2024-10-24 10:45:00"
            },
            {
              key: "2",
              flowType: "分销商品订单提成 (+)",
              amount: "+42.00",
              remainingAmount: "34,652.00",
              remark: "分销商【杭州云海】完成订单 DIS-20241024-8802 结算分润 (8%)",
              createTime: "2024-10-24 10:15:30"
            },
            {
              key: "3",
              flowType: "佣金提现出账 (-)",
              amount: "-1,250.00",
              remainingAmount: "34,610.00",
              remark: "发起提现申请至企业支付宝 (工单 WDL-20241024-001 已打款)",
              createTime: "2024-10-24 09:30:00"
            },
            {
              key: "4",
              flowType: "下级商户首单返佣 (+)",
              amount: "+100.00",
              remainingAmount: "35,860.00",
              remark: "邀请好友【义乌晨星优选】完成入驻后首笔订单发货奖励",
              createTime: "2024-10-23 16:30:15"
            },
            {
              key: "5",
              flowType: "邀请商户入驻奖励 (+)",
              amount: "+50.00",
              remainingAmount: "35,760.00",
              remark: "邀请商户【厦门飞途户外】通过企业资质认证激活奖励",
              createTime: "2024-10-22 14:20:00"
            },
            {
              key: "6",
              flowType: "分销商品订单提成 (+)",
              amount: "+36.80",
              remainingAmount: "35,710.00",
              remark: "分销商【义乌晨星】完成订单 DIS-20241023-7921 结算提成",
              createTime: "2024-10-22 11:10:00"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default CommissionFlowPage;
