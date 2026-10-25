import React from 'react';
import { Table, Input, Button, Space, Card, Statistic } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined, QuestionCircleOutlined } from '@ant-design/icons';

interface DistributionAccountData {
  key: string;
  transactionNumber: string;
  amount: number;
  applicationTime: string;
  paymentTime: string;
  status: string;
}

const DistributionAccountPage: React.FC = () => {
  const columns: TableColumnsType<DistributionAccountData> = [
    { title: '交易单号', dataIndex: 'transactionNumber', key: 'transactionNumber' },
    { title: '提现金额', dataIndex: 'amount', key: 'amount' },
    { title: '申请时间', dataIndex: 'applicationTime', key: 'applicationTime' },
    { title: '打款时间', dataIndex: 'paymentTime', key: 'paymentTime' },
    { title: '状态', dataIndex: 'status', key: 'status' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">分销账款</h1>
      
      <div className="flex gap-4 mb-4">
        <Card className="flex-1 shadow-xs">
          <Statistic title={<span>保证金冻结 <QuestionCircleOutlined /></span>} value={8450.00} precision={2} prefix="¥" valueStyle={{ color: '#d97706' }} />
        </Card>
        <Card className="flex-1 shadow-xs">
          <Statistic title={<span>可提现分销利润 <QuestionCircleOutlined /></span>} value={34680.50} precision={2} prefix="¥" valueStyle={{ color: '#16a34a' }} />
        </Card>
        <Card className="flex-1 shadow-xs">
          <Statistic title={<span>累计已提现到账 <QuestionCircleOutlined /></span>} value={128500.00} precision={2} prefix="¥" valueStyle={{ color: '#2563eb' }} />
        </Card>
        <div className="flex items-center">
            <Button type="primary">设置提现账户</Button>
        </div>
      </div>
      
      <Card className="mb-4">
        <div className="flex items-center gap-4 flex-wrap">
          <span className="font-medium text-gray-600">交易状态:</span>
          <Space>
            {['全部', '待审核', '银行处理中', '已打款', '已拒绝'].map(status => (
              <Button key={status} type="text" size="small">{status}</Button>
            ))}
          </Space>
        </div>
        <div className="flex items-center gap-4 mt-4">
             <span className="font-medium text-gray-600">交易单号:</span>
             <Input placeholder="输入交易单号" style={{ width: 200 }} />
             <Button type="primary" icon={<SearchOutlined />}>查询</Button>
             <Button icon={<ReloadOutlined />}>重置</Button>
             <Button type="primary" icon={<PlusOutlined />}>申请提现</Button>
        </div>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              transactionNumber: "WD-20241024-0081",
              amount: 12500.00,
              applicationTime: "2024-10-24 09:20:15",
              paymentTime: "2024-10-24 11:45:00",
              status: "已打款"
            },
            {
              key: "2",
              transactionNumber: "WD-20241023-0074",
              amount: 8800.00,
              applicationTime: "2024-10-23 14:10:00",
              paymentTime: "2024-10-23 16:30:20",
              status: "已打款"
            },
            {
              key: "3",
              transactionNumber: "WD-20241022-0059",
              amount: 25000.00,
              applicationTime: "2024-10-22 17:05:30",
              paymentTime: "2024-10-23 09:15:00",
              status: "已打款"
            },
            {
              key: "4",
              transactionNumber: "WD-20241021-0043",
              amount: 6200.00,
              applicationTime: "2024-10-21 10:40:00",
              paymentTime: "2024-10-21 14:10:00",
              status: "已打款"
            },
            {
              key: "5",
              transactionNumber: "WD-20241020-0032",
              amount: 15000.00,
              applicationTime: "2024-10-20 15:30:00",
              paymentTime: "2024-10-20 18:20:00",
              status: "已打款"
            },
            {
              key: "6",
              transactionNumber: "WD-20241024-0090",
              amount: 5000.00,
              applicationTime: "2024-10-24 11:15:00",
              paymentTime: "-",
              status: "待审核"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default DistributionAccountPage;
