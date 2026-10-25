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
              ruleName: "Shopee马来西亚现货定时推仓",
              productSku: "3C-ANC08-BLK",
              storeName: "Shopee 马来西亚1号旗舰店",
              warehouse: "深圳宝安保税总仓",
              time: "2024-10-24 10:15:00",
              status: "推送成功"
            },
            {
              key: "2",
              ruleName: "TikTok印尼美妆货盘库存实时同步",
              productSku: "3C-GAN65-SLV",
              storeName: "TikTok Shop 印尼官方美妆店",
              warehouse: "东莞虎门跨境集运仓",
              time: "2024-10-24 10:12:30",
              status: "推送成功"
            },
            {
              key: "3",
              ruleName: "Lazada泰国智能穿戴自动推仓",
              productSku: "3C-SMW09-TGR",
              storeName: "Lazada 泰国时尚生活馆",
              warehouse: "曼谷1号海外仓 (TH-01)",
              time: "2024-10-24 09:40:00",
              status: "待同步"
            },
            {
              key: "4",
              ruleName: "Shopee菲律宾日用美妆货位同步",
              productSku: "BE-HYA50-CRE",
              storeName: "Shopee 菲律宾数码精选",
              warehouse: "东莞虎门跨境集运仓",
              time: "2024-10-24 09:20:15",
              status: "推送成功"
            },
            {
              key: "5",
              ruleName: "Shopee新加坡保税库存自动更新",
              productSku: "HM-THM900-WHT",
              storeName: "Shopee 新加坡3C专营店",
              warehouse: "雪兰莪海外仓 (MY-01)",
              time: "2024-10-24 08:50:00",
              status: "推送异常(重试中)"
            },
            {
              key: "6",
              ruleName: "TikTok越南潮电库存限额推送",
              productSku: "HM-DRY18-PUR",
              storeName: "TikTok 越南流行服饰店",
              warehouse: "深圳宝安保税总仓",
              time: "2024-10-24 08:30:00",
              status: "推送成功"
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
