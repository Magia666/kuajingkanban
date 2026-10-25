import React, { useState } from 'react';
import { Card, Button, Tabs, Typography } from 'antd';
import type { TabsProps } from 'antd';

const { Title, Text } = Typography;

const SlotManagementPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('slot');

  const tabItems: TabsProps['items'] = [
    { key: 'home', label: '首页' },
    { key: 'slot', label: '仓位管理' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} className="mb-4 bg-white px-4" />
      
      <div className="p-4">
        <Title level={4}>仓位管理</Title>
        <Card style={{ width: 300 }}>
          <div className="space-y-2">
            <Title level={2}>0元</Title>
            <Text type="secondary">扣费周期：每月</Text><br />
            <Text type="secondary">计费方式：固定收费</Text><br />
            <Text type="secondary">免费天数：0</Text><br />
            <Text type="secondary">下次扣费：2026-05-31</Text><br />
            <div className="mt-2">
              <Text>马来仓</Text> <Text type="success">已租用</Text>
            </div>
            <Button type="primary" className="mt-4">立即租用</Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default SlotManagementPage;
