import React from 'react';
import { Table, Input, Button, Space, Card, DatePicker } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface RechargeRecordData {
  key: string;
  orderNumber: string;
  transactionAmount: number;
  remainingPoints: number;
  description: string;
  transactionTime: string;
}

const RechargeRecordPage: React.FC = () => {
  const columns: TableColumnsType<RechargeRecordData> = [
    { title: '订单号', dataIndex: 'orderNumber', key: 'orderNumber' },
    { title: '交易金额', dataIndex: 'transactionAmount', key: 'transactionAmount' },
    { title: '剩余积分', dataIndex: 'remainingPoints', key: 'remainingPoints' },
    { title: '描述', dataIndex: 'description', key: 'description' },
    { title: '交易时间', dataIndex: 'transactionTime', key: 'transactionTime' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">充值记录</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
          <Input placeholder="订单号" prefix="订单号:" style={{ width: 250 }} />
          <div className="flex items-center gap-2">
            <span className="text-gray-600">日期:</span>
            <RangePicker />
          </div>
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
              orderNumber: "RCG-20241024-0081",
              transactionAmount: "20,000.00",
              remainingPoints: 48250,
              description: "招商银行企业对公转账充值 (财务已审核入账)",
              transactionTime: "2024-10-24 10:20:15"
            },
            {
              key: "2",
              orderNumber: "RCG-20241022-0052",
              transactionAmount: "15,000.00",
              remainingPoints: 28250,
              description: "企业支付宝大额扫码充值 (即时到账)",
              transactionTime: "2024-10-22 14:15:00"
            },
            {
              key: "3",
              orderNumber: "RCG-20241019-0038",
              transactionAmount: "35,500.00",
              remainingPoints: 13250,
              description: "万里汇 WorldFirst 美元结汇入账 (5,000 USD)",
              transactionTime: "2024-10-19 11:30:20"
            },
            {
              key: "4",
              orderNumber: "RCG-20241015-0021",
              transactionAmount: "10,000.00",
              remainingPoints: 8500,
              description: "连连支付 LianLian Pay 商户后台自动扣款充值",
              transactionTime: "2024-10-15 16:40:00"
            },
            {
              key: "5",
              orderNumber: "RCG-20241010-0015",
              transactionAmount: "50,000.00",
              remainingPoints: 50000,
              description: "工商银行企业网银大额充值 (月初统一入库准备款)",
              transactionTime: "2024-10-10 09:10:00"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default RechargeRecordPage;
