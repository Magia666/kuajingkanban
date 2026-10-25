import React, { useState } from 'react';
import { Table, Input, Button, Space, Card, Tabs } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';

interface StockPushRuleData {
  key: string;
  ruleName: string;
  productSku: string;
  storeName: string;
  warehouse: string;
  time: string;
  status: string;
}

const StockPushPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('push');

  const columns: TableColumnsType<StockPushRuleData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '规则名称', dataIndex: 'ruleName', key: 'ruleName' },
    { title: '商品sku', dataIndex: 'productSku', key: 'productSku' },
    { title: '店铺名称', dataIndex: 'storeName', key: 'storeName' },
    { title: '仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '时间', dataIndex: 'time', key: 'time' },
    { title: '状态', dataIndex: 'status', key: 'status' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  const tabItems: TabsProps['items'] = [
    { key: 'push', label: '库存推送' },
    { key: 'log', label: '推送记录' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">库存推送</h1>
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />

        <div className="flex flex-wrap gap-4 mt-4 items-center">
            <Input placeholder="SKU名称" prefix="SKU名称:" style={{ width: 250 }} />
            <Input placeholder="规则名称" prefix="规则名称:" style={{ width: 250 }} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
        </div>
      </Card>
      
      <Card>
        <Space className="mb-4">
          <Button type="primary">添加推送规则</Button>
          <Button type="primary">手动推送</Button>
        </Space>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    ruleName: "2024新款智能手表监控防水运动手环",
    productSku: "2024新款智能手表监控防水运动手环",
    storeName: "跨境小店 US",
    warehouse: "美西一仓",
    time: "2024-05-10 14:10:00",
    status: "处理中"
  },
  {
    key: "2",
    ruleName: "无线蓝牙耳机降噪入耳式长续航",
    productSku: "无线蓝牙耳机降噪入耳式长续航",
    storeName: "跨境小店 UK",
    warehouse: "深圳总仓",
    time: "2024-05-11 14:15:00",
    status: "已发货"
  },
  {
    key: "3",
    ruleName: "纯棉短袖T恤男夏季宽松百搭",
    productSku: "纯棉短袖T恤男夏季宽松百搭",
    storeName: "跨境小店 SG",
    warehouse: "义乌中转仓",
    time: "2024-05-12 14:20:00",
    status: "待付款"
  },
  {
    key: "4",
    ruleName: "户外便携运动水杯大容量防漏",
    productSku: "户外便携运动水杯大容量防漏",
    storeName: "跨境小店 MY",
    warehouse: "美东二仓",
    time: "2024-05-13 14:25:00",
    status: "已完成"
  },
  {
    key: "5",
    ruleName: "家用多功能颈椎按摩仪护颈",
    productSku: "家用多功能颈椎按摩仪护颈",
    storeName: "跨境小店 PH",
    warehouse: "法兰克福仓",
    time: "2024-05-14 14:30:00",
    status: "已取消"
  },
  {
    key: "6",
    ruleName: "2024新款智能手表监控防水运动手环",
    productSku: "2024新款智能手表监控防水运动手环",
    storeName: "跨境小店 US",
    warehouse: "美西一仓",
    time: "2024-05-15 14:35:00",
    status: "退款中"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default StockPushPage;
