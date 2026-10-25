import React, { useState } from 'react';
import { Table, Input, Button, Space, Card, Tabs, Tag, Image } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ReloadOutlined, CheckCircleOutlined, EyeOutlined } from '@ant-design/icons';

interface ExpressClaimData {
  key: string;
  expressNumber: string;
  express: string;
  warehouse: string;
  status: string;
  receiveTime: string;
  photo: string;
}

const ExpressClaimPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const columns: TableColumnsType<ExpressClaimData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { 
      title: '包裹照片', 
      dataIndex: 'photo', 
      key: 'photo',
      width: 90,
      render: (photo: string) => (
        <div className="w-12 h-12 rounded border border-slate-200 overflow-hidden bg-slate-100 flex items-center justify-center">
          <Image 
            src={photo} 
            alt="包裹实物面单"
            width={48} 
            height={48} 
            className="object-cover"
          />
        </div>
      )
    },
    { 
      title: '快递单号', 
      dataIndex: 'expressNumber', 
      key: 'expressNumber',
      render: (text: string) => <span className="font-mono font-medium text-blue-600">{text}</span>
    },
    { title: '承运快递', dataIndex: 'express', key: 'express' },
    { title: '签收仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { 
      title: '招领状态', 
      dataIndex: 'status', 
      key: 'status',
      render: (status: string) => {
        if (status === '待认领') return <Tag color="orange">待认领</Tag>;
        if (status === '审核中') return <Tag color="processing">审核中</Tag>;
        if (status === '已认领入库') return <Tag color="success">已认领入库</Tag>;
        return <Tag>{status}</Tag>;
      }
    },
    { title: '仓库签收时间', dataIndex: 'receiveTime', key: 'receiveTime' },
    {
      title: '操作',
      key: 'action',
      render: (_, record) => (
        <Space size="middle">
          {record.status === '待认领' ? (
            <Button type="link" size="small" icon={<CheckCircleOutlined />}>立即认领</Button>
          ) : (
            <Button type="link" size="small" icon={<EyeOutlined />}>查看详情</Button>
          )}
        </Space>
      )
    }
  ];

  const tabItems: TabsProps['items'] = [
    { key: 'pending', label: '待认领包裹 (3)' },
    { key: 'confirm', label: '审核中/已认领 (2)' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-bold text-slate-800">快递招领</h1>
          <p className="text-xs text-slate-500 mt-1">集运仓收到无主件或条码破损包裹，商户可通过快递运单号及包裹面单实物照认领入库</p>
        </div>
      </div>
      
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
        
        <div className="flex flex-wrap gap-4 mt-4 items-center">
            <Input placeholder="输入中通/顺丰/跨越快递单号" prefix="快递单号:" style={{ width: 280 }} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
        </div>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              expressNumber: "ZT772918392102",
              express: "中通快运",
              warehouse: "东莞虎门跨境集运仓",
              status: "待认领",
              receiveTime: "2024-10-24 10:15:00",
              photo: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&q=80"
            },
            {
              key: "2",
              expressNumber: "SF1428938192831",
              express: "顺丰速运",
              warehouse: "深圳宝安保税总仓",
              status: "审核中",
              receiveTime: "2024-10-24 09:30:10",
              photo: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&q=80"
            },
            {
              key: "3",
              expressNumber: "KY202408192819",
              express: "跨越速运",
              warehouse: "东莞虎门跨境集运仓",
              status: "已认领入库",
              receiveTime: "2024-10-23 16:40:00",
              photo: "https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&q=80"
            },
            {
              key: "4",
              expressNumber: "JD00291823910",
              express: "京东快递",
              warehouse: "义乌国际小商品中转仓",
              status: "待认领",
              receiveTime: "2024-10-23 14:15:20",
              photo: "https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=150&q=80"
            },
            {
              key: "5",
              expressNumber: "YT991820391029",
              express: "圆通速递",
              warehouse: "深圳宝安保税总仓",
              status: "待认领",
              receiveTime: "2024-10-22 11:20:00",
              photo: "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?w=150&q=80"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default ExpressClaimPage;
