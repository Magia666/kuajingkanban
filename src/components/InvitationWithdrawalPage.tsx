import React from 'react';
import { Table, Button, Card, Space } from 'antd';
import type { TableColumnsType } from 'antd';
import { PlusOutlined, FileTextOutlined } from '@ant-design/icons';

interface InvitationWithdrawalData {
  key: string;
  withdrawTime: string;
  withdrawAmount: string;
  accountType: string;
  withdrawAccount: string;
  status: string;
}

const InvitationWithdrawalPage: React.FC = () => {
  const columns: TableColumnsType<InvitationWithdrawalData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '提现时间', dataIndex: 'withdrawTime', key: 'withdrawTime' },
    { title: '提现金额', dataIndex: 'withdrawAmount', key: 'withdrawAmount' },
    { title: '账号类型', dataIndex: 'accountType', key: 'accountType' },
    { title: '提现账号', dataIndex: 'withdrawAccount', key: 'withdrawAccount' },
    { title: '状态', dataIndex: 'status', key: 'status' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">邀请提现</h1>
      
      <Card className="mb-4">
        <Space>
            <Button type="primary" icon={<PlusOutlined />}>立即提现</Button>
            <Button icon={<FileTextOutlined />}>查看规则</Button>
        </Space>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              withdrawTime: "2024-10-24 10:20:15",
              withdrawAmount: "1,250.00",
              accountType: "企业支付宝",
              withdrawAccount: "pay_alipay@sz-trade.com",
              status: "已到账"
            },
            {
              key: "2",
              withdrawTime: "2024-10-22 15:30:00",
              withdrawAmount: "2,800.00",
              accountType: "招商银行企业账户",
              withdrawAccount: "6214 **** **** 8821",
              status: "已到账"
            },
            {
              key: "3",
              withdrawTime: "2024-10-18 11:15:20",
              withdrawAmount: "950.00",
              accountType: "微信商户号转账",
              withdrawAccount: "wx_merchant_gz",
              status: "已到账"
            },
            {
              key: "4",
              withdrawTime: "2024-10-24 11:00:00",
              withdrawAmount: "1,500.00",
              accountType: "企业支付宝",
              withdrawAccount: "pay_alipay@sz-trade.com",
              status: "审核中"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default InvitationWithdrawalPage;
