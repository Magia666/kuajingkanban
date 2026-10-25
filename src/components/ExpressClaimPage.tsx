import React, { useState } from 'react';
import { Table, Input, Button, Space, Card, Tabs } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';

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
    { title: '快递单号', dataIndex: 'expressNumber', key: 'expressNumber' },
    { title: '快递', dataIndex: 'express', key: 'express' },
    { title: '仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '状态', dataIndex: 'status', key: 'status' },
    { title: '签收时间', dataIndex: 'receiveTime', key: 'receiveTime' },
    { title: '照片', dataIndex: 'photo', key: 'photo' },
  ];

  const tabItems: TabsProps['items'] = [
    { key: 'pending', label: '待录单' },
    { key: 'confirm', label: '待认领' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">快递招领</h1>
      
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
        
        <div className="flex flex-wrap gap-4 mt-4 items-center">
            <Input placeholder="快递单号" prefix="快递单号:" style={{ width: 250 }} />
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
              status: "已认领入库",
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
