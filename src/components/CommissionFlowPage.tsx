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
    { title: '流水类型', dataIndex: 'flowType', key: 'flowType' },
    { title: '金额', dataIndex: 'amount', key: 'amount' },
    { title: '剩余金额', dataIndex: 'remainingAmount', key: 'remainingAmount' },
    { title: '备注', dataIndex: 'remark', key: 'remark' },
    { title: '创建时间', dataIndex: 'createTime', key: 'createTime' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">佣金流水</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
            <Select placeholder="流水类型" style={{ width: 250 }} allowClear />
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
    flowType: "电子产品",
    amount: "128.00",
    remainingAmount: "128.00",
    remark: "客户要求加急发货",
    createTime: "2024-05-10 14:10:00"
  },
  {
    key: "2",
    flowType: "服装服饰",
    amount: "194.50",
    remainingAmount: "194.50",
    remark: "商品存在轻微瑕疵",
    createTime: "2024-05-11 14:15:00"
  },
  {
    key: "3",
    flowType: "家居日用",
    amount: "261.00",
    remainingAmount: "261.00",
    remark: "包裹外包装破损",
    createTime: "2024-05-12 14:20:00"
  },
  {
    key: "4",
    flowType: "户外运动",
    amount: "327.50",
    remainingAmount: "327.50",
    remark: "尺码拍错，要求换货",
    createTime: "2024-05-13 14:25:00"
  },
  {
    key: "5",
    flowType: "美妆个护",
    amount: "394.00",
    remainingAmount: "394.00",
    remark: "地址填写错误，已更正",
    createTime: "2024-05-14 14:30:00"
  },
  {
    key: "6",
    flowType: "电子产品",
    amount: "460.50",
    remainingAmount: "460.50",
    remark: "客户要求加急发货",
    createTime: "2024-05-15 14:35:00"
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
