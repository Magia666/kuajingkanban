import React, { useState } from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select, Radio } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface SettlementData {
  key: string;
  orderNumber: string;
  platformType: string;
  storeName: string;
  estimatedAmount: number;
  completionTime: string;
}

const PlatformSettlementPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const columns: TableColumnsType<SettlementData> = [
    { title: '订单编号', dataIndex: 'orderNumber', key: 'orderNumber' },
    { title: '平台类型', dataIndex: 'platformType', key: 'platformType' },
    { title: '店铺名称', dataIndex: 'storeName', key: 'storeName' },
    { title: '预计结算金额', dataIndex: 'estimatedAmount', key: 'estimatedAmount' },
    { title: '完成时间', dataIndex: 'completionTime', key: 'completionTime' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">平台对账</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">平台类型:</span>
            <Radio.Group defaultValue="all">
              <Radio.Button value="all">全部</Radio.Button>
              <Radio.Button value="shopee">Shopee</Radio.Button>
              <Radio.Button value="lazada">Lazada</Radio.Button>
              <Radio.Button value="tiktok">tiktok</Radio.Button>
            </Radio.Group>
          </div>
          <Input placeholder="店铺名称" prefix="店铺名称:" style={{ width: 250 }} />
          <div className="flex items-center gap-2">
            <span className="text-gray-600">时间范围:</span>
            <RangePicker showTime />
          </div>
          <Input placeholder="订单编号" prefix="搜索信息:" style={{ width: 250 }} />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
          <Button icon={<ExportOutlined />}>导出</Button>
        </Space>
      </Card>
      
      <Card>
        <Radio.Group value={activeTab} onChange={(e) => setActiveTab(e.target.value)} className="mb-4">
          <Radio.Button value="pending">待结算</Radio.Button>
          <Radio.Button value="completed">已结算</Radio.Button>
          <Radio.Button value="withdrawalLog">拨款记录</Radio.Button>
        </Radio.Group>
        
        <div className="mb-4 flex items-center justify-between p-3 bg-emerald-50 border border-emerald-200 rounded">
          <span className="text-emerald-900 font-medium">平台待结算概览</span>
          <div className="space-x-6 text-sm">
            <span>待结算笔数: <strong className="text-emerald-800">6</strong> 笔</span>
            <span>总预计回款金额: <strong className="text-emerald-800 text-base">¥14,635.80</strong></span>
            <span>平均回款周期: <strong className="text-emerald-800">T+7 天</strong></span>
          </div>
        </div>

        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              orderNumber: "SP-MY-2410220912K",
              platformType: "Shopee",
              storeName: "Shopee 马来西亚1号旗舰店",
              estimatedAmount: 2840.50,
              completionTime: "2024-10-29 18:00:00"
            },
            {
              key: "2",
              orderNumber: "TT-ID-2410218820P",
              platformType: "TikTok Shop",
              storeName: "TikTok Shop 印尼官方美妆店",
              estimatedAmount: 4120.00,
              completionTime: "2024-10-28 12:00:00"
            },
            {
              key: "3",
              orderNumber: "LZ-TH-2410224419T",
              platformType: "Lazada",
              storeName: "Lazada 泰国时尚生活馆",
              estimatedAmount: 1950.30,
              completionTime: "2024-10-29 14:30:00"
            },
            {
              key: "4",
              orderNumber: "SP-PH-2410231908S",
              platformType: "Shopee",
              storeName: "Shopee 菲律宾数码精选",
              estimatedAmount: 3245.00,
              completionTime: "2024-10-30 18:00:00"
            },
            {
              key: "5",
              orderNumber: "SP-SG-2410235512D",
              platformType: "Shopee",
              storeName: "Shopee 新加坡3C专营店",
              estimatedAmount: 1180.00,
              completionTime: "2024-10-30 15:00:00"
            },
            {
              key: "6",
              orderNumber: "TT-VN-2410229983M",
              platformType: "TikTok Shop",
              storeName: "TikTok 越南流行服饰店",
              estimatedAmount: 1300.00,
              completionTime: "2024-10-29 10:00:00"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default PlatformSettlementPage;
