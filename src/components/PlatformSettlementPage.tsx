import React, { useState } from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select, Radio } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface SettlementData {
  key: string;
  batchNumber: string;
  orderCount: number;
  platformType: string;
  storeName: string;
  grossAmount: number;
  platformFee: number;
  logisticsFee: number;
  estimatedAmount: number;
  completionTime: string;
  status: string;
}

const PlatformSettlementPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const columns: TableColumnsType<SettlementData> = [
    { 
      title: '结算账单批次号', 
      dataIndex: 'batchNumber', 
      key: 'batchNumber',
      render: (text) => <span className="font-mono font-medium text-blue-600">{text}</span>
    },
    { 
      title: '妥投订单数', 
      dataIndex: 'orderCount', 
      key: 'orderCount',
      render: (count) => <span>{count} 笔</span>
    },
    { title: '电商平台', dataIndex: 'platformType', key: 'platformType' },
    { title: '结算店铺', dataIndex: 'storeName', key: 'storeName' },
    { 
      title: '订单销售毛额', 
      dataIndex: 'grossAmount', 
      key: 'grossAmount',
      render: (val) => <span>¥{val.toFixed(2)}</span>
    },
    { 
      title: '平台扣费 (佣金+交易费)', 
      dataIndex: 'platformFee', 
      key: 'platformFee',
      render: (val) => <span className="text-rose-600">-¥{val.toFixed(2)}</span>
    },
    { 
      title: '物流服务代扣', 
      dataIndex: 'logisticsFee', 
      key: 'logisticsFee',
      render: (val) => <span className="text-amber-600">-¥{val.toFixed(2)}</span>
    },
    { 
      title: '预估回款净额 (CNY)', 
      dataIndex: 'estimatedAmount', 
      key: 'estimatedAmount',
      render: (val) => <strong className="text-emerald-600">¥{val.toFixed(2)}</strong>
    },
    { title: '预计到账时间', dataIndex: 'completionTime', key: 'completionTime' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-bold text-slate-800">平台回款对账</h1>
          <p className="text-xs text-slate-500 mt-1">跨境电商平台（Shopee、TikTok Shop、Lazada）已妥投订单资金周期性回款明细</p>
        </div>
      </div>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm">平台类型:</span>
            <Radio.Group defaultValue="all">
              <Radio.Button value="all">全部</Radio.Button>
              <Radio.Button value="shopee">Shopee</Radio.Button>
              <Radio.Button value="lazada">Lazada</Radio.Button>
              <Radio.Button value="tiktok">TikTok Shop</Radio.Button>
            </Radio.Group>
          </div>
          <Input placeholder="店铺名称" prefix="店铺名称:" style={{ width: 220 }} />
          <div className="flex items-center gap-2">
            <span className="text-gray-600 text-sm">账单周期:</span>
            <RangePicker showTime />
          </div>
          <Input placeholder="账单批次号" prefix="批次号:" style={{ width: 220 }} />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
          <Button icon={<ExportOutlined />}>导出对账单</Button>
        </Space>
      </Card>
      
      <Card>
        <Radio.Group value={activeTab} onChange={(e) => setActiveTab(e.target.value)} className="mb-4">
          <Radio.Button value="pending">待结算批次 (6)</Radio.Button>
          <Radio.Button value="completed">已回款到账 (28)</Radio.Button>
          <Radio.Button value="withdrawalLog">提现拨款记录</Radio.Button>
        </Radio.Group>
        
        <div className="mb-4 flex items-center justify-between p-3.5 bg-emerald-50 border border-emerald-200 rounded-lg">
          <span className="text-emerald-900 font-medium">平台待结算概览</span>
          <div className="space-x-6 text-sm">
            <span>待回款批次: <strong className="text-emerald-800">6</strong> 批 (共 68 笔订单)</span>
            <span>销售总额: <strong className="text-slate-700">¥16,631.60</strong></span>
            <span>平台代扣: <strong className="text-rose-600">-¥1,995.80</strong></span>
            <span>预计实际到账: <strong className="text-emerald-800 text-base">¥14,635.80</strong></span>
          </div>
        </div>

        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              batchNumber: "STL-SP-241022-01",
              orderCount: 12,
              platformType: "Shopee",
              storeName: "Shopee 马来西亚1号旗舰店",
              grossAmount: 3180.00,
              platformFee: 254.40,
              logisticsFee: 85.10,
              estimatedAmount: 2840.50,
              completionTime: "2024-10-29 18:00:00",
              status: "待平台划款"
            },
            {
              key: "2",
              batchNumber: "STL-TT-241021-03",
              orderCount: 18,
              platformType: "TikTok Shop",
              storeName: "TikTok Shop 印尼官方美妆店",
              grossAmount: 4680.00,
              platformFee: 421.20,
              logisticsFee: 138.80,
              estimatedAmount: 4120.00,
              completionTime: "2024-10-28 12:00:00",
              status: "待平台划款"
            },
            {
              key: "3",
              batchNumber: "STL-LZ-241022-02",
              orderCount: 9,
              platformType: "Lazada",
              storeName: "Lazada 泰国时尚生活馆",
              grossAmount: 2210.00,
              platformFee: 198.90,
              logisticsFee: 60.80,
              estimatedAmount: 1950.30,
              completionTime: "2024-10-29 14:30:00",
              status: "待平台划款"
            },
            {
              key: "4",
              batchNumber: "STL-SP-241023-04",
              orderCount: 15,
              platformType: "Shopee",
              storeName: "Shopee 菲律宾数码精选",
              grossAmount: 3680.00,
              platformFee: 331.20,
              logisticsFee: 103.80,
              estimatedAmount: 3245.00,
              completionTime: "2024-10-30 18:00:00",
              status: "待平台划款"
            },
            {
              key: "5",
              batchNumber: "STL-SP-241023-08",
              orderCount: 6,
              platformType: "Shopee",
              storeName: "Shopee 新加坡3C专营店",
              grossAmount: 1340.00,
              platformFee: 120.60,
              logisticsFee: 39.40,
              estimatedAmount: 1180.00,
              completionTime: "2024-10-30 15:00:00",
              status: "待平台划款"
            },
            {
              key: "6",
              batchNumber: "STL-TT-241022-05",
              orderCount: 8,
              platformType: "TikTok Shop",
              storeName: "TikTok 越南流行服饰店",
              grossAmount: 1541.60,
              platformFee: 169.58,
              logisticsFee: 72.02,
              estimatedAmount: 1300.00,
              completionTime: "2024-10-29 10:00:00",
              status: "待平台划款"
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
