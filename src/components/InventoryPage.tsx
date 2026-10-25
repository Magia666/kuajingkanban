import React, { useState } from 'react';
import { Table, Input, Button, Space, Card, Select, Tabs } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ExportOutlined, PrinterOutlined, SettingOutlined } from '@ant-design/icons';

interface InventoryData {
  key: string;
  warehouse: string;
  productInfo: string;
  category: string;
  dimensions: string;
  stock: number;
  available: number;
  frozen: number;
  damaged: number;
  safetyStock: number;
  sales: string;
  inTransit: number;
  costInfo: string;
}

const InventoryPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('inventory');

  const columns: TableColumnsType<InventoryData> = [
    { title: '系统/自定义/仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '商品信息', dataIndex: 'productInfo', key: 'productInfo' },
    { title: '商品分类', dataIndex: 'category', key: 'category' },
    { title: '尺寸/体积', dataIndex: 'dimensions', key: 'dimensions' },
    { title: '库存数量', dataIndex: 'stock', key: 'stock' },
    { title: '可用数量', dataIndex: 'available', key: 'available' },
    { title: '冻结数量', dataIndex: 'frozen', key: 'frozen' },
    { title: '破损数', dataIndex: 'damaged', key: 'damaged' },
    { title: '安全库存', dataIndex: 'safetyStock', key: 'safetyStock' },
    { title: '销量(7天/15天/30天)', dataIndex: 'sales', key: 'sales' },
    { title: '在途数量', dataIndex: 'inTransit', key: 'inTransit' },
    { title: '成本/总成本/可用成本', dataIndex: 'costInfo', key: 'costInfo' },
    { title: '操作', key: 'operation', render: () => <a>操作</a>, fixed: 'right' },
  ];

  const tabItems: TabsProps['items'] = [
    { key: 'inventory', label: '现有库存' },
    { key: 'warning', label: '预警SKU' },
    { key: 'distribution', label: '分销库存' },
    { key: 'distributionWarning', label: '分销预警' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">现有库存</h1>
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />

        <div className="flex flex-wrap gap-4 mt-4 items-center">
            <Input placeholder="sku" prefix="sku:" style={{ width: 200 }} />
            <Input placeholder="规格" prefix="规格:" style={{ width: 200 }} />
            <Input placeholder="产品名称" prefix="产品名称:" style={{ width: 200 }} />
            <Input placeholder="系统编码" prefix="系统编码:" style={{ width: 200 }} />
            <Input placeholder="自定义编码" prefix="自定义编码:" style={{ width: 200 }} />
            <Select placeholder="仓库" style={{ width: 200 }} allowClear />
            <Select placeholder="商品分类" style={{ width: 200 }} allowClear />
            <Input placeholder="备注" prefix="备注:" style={{ width: 200 }} />
            
            <Space>
              <Button type="primary" icon={<SearchOutlined />}>查询</Button>
              <Button icon={<ExportOutlined />}>导出</Button>
            </Space>
        </div>
      </Card>
      
      <Card>
        <Space className="mb-4">
          <Button type="primary" icon={<PrinterOutlined />}>打印标签</Button>
          <Button icon={<SettingOutlined />}>编辑安全库存</Button>
        </Space>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              warehouse: "深圳宝安保税总仓 [A-02-14]",
              productInfo: "智选高配版真无线主动降噪蓝牙耳机 (3C-ANC08-BLK)",
              category: "3C数码",
              dimensions: "9.5x9.5x3.8 cm (0.16kg)",
              stock: 1240,
              available: 1150,
              frozen: 85,
              damaged: 5,
              safetyStock: 200,
              sales: "142 / 310 / 680",
              inTransit: 500,
              costInfo: "¥42.50 / ¥52,700 / ¥48,875"
            },
            {
              key: "2",
              warehouse: "东莞虎门跨境集运仓 [B-01-08]",
              productInfo: "65W GaN氮化镓三口超级快充头 (3C-GAN65-SLV)",
              category: "3C数码",
              dimensions: "7.5x5.2x3.4 cm (0.22kg)",
              stock: 2850,
              available: 2680,
              frozen: 165,
              damaged: 5,
              safetyStock: 300,
              sales: "290 / 620 / 1450",
              inTransit: 1000,
              costInfo: "¥26.80 / ¥76,380 / ¥71,824"
            },
            {
              key: "3",
              warehouse: "深圳宝安保税总仓 [A-04-03]",
              productInfo: "智能高清心率血氧监测运动手表 (3C-SMW09-TGR)",
              category: "智能穿戴",
              dimensions: "12.0x7.5x4.5 cm (0.18kg)",
              stock: 680,
              available: 620,
              frozen: 58,
              damaged: 2,
              safetyStock: 100,
              sales: "65 / 152 / 340",
              inTransit: 300,
              costInfo: "¥68.00 / ¥46,240 / ¥42,160"
            },
            {
              key: "4",
              warehouse: "义乌国际小商品中转仓 [C-03-21]",
              productInfo: "玻尿酸密集水润舒缓修护面霜 (BE-HYA50-CRE)",
              category: "美妆个护",
              dimensions: "6.8x6.8x5.6 cm (0.21kg)",
              stock: 3500,
              available: 3260,
              frozen: 230,
              damaged: 10,
              safetyStock: 500,
              sales: "380 / 840 / 1920",
              inTransit: 2000,
              costInfo: "¥14.20 / ¥49,700 / ¥46,292"
            },
            {
              key: "5",
              warehouse: "马来西亚雪兰莪海外仓 [MY-01-D4]",
              productInfo: "304不锈钢双饮保温保冷吸管杯 (HM-THM900-WHT)",
              category: "家居日用",
              dimensions: "10.5x10.5x24.0 cm (0.48kg)",
              stock: 1820,
              available: 1690,
              frozen: 125,
              damaged: 5,
              safetyStock: 250,
              sales: "175 / 390 / 890",
              inTransit: 800,
              costInfo: "¥18.50 / ¥33,670 / ¥31,265"
            },
            {
              key: "6",
              warehouse: "泰国曼谷海外仓 [TH-01-A2]",
              productInfo: "负离子便携轻量折叠电吹风机 (HM-DRY18-PUR)",
              category: "个护小家电",
              dimensions: "18.0x12.0x7.5 cm (0.58kg)",
              stock: 940,
              available: 875,
              frozen: 62,
              damaged: 3,
              safetyStock: 150,
              sales: "92 / 215 / 510",
              inTransit: 400,
              costInfo: "¥32.00 / ¥30,080 / ¥28,000"
            },
            {
              key: "7",
              warehouse: "东莞虎门跨境集运仓 [B-02-19]",
              productInfo: "超轻防泼水双肩徒步旅行折叠包 (OD-BP20L-ARM)",
              category: "户外运动",
              dimensions: "15.0x10.0x4.0 cm (0.15kg)",
              stock: 4120,
              available: 3950,
              frozen: 162,
              damaged: 8,
              safetyStock: 600,
              sales: "410 / 920 / 2240",
              inTransit: 1500,
              costInfo: "¥11.80 / ¥48,616 / ¥46,610"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
          scroll={{ x: 1500 }}
        />
        <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded text-slate-600 text-sm flex items-center justify-between">
          <span className="font-medium text-slate-800">库存指标汇总</span>
          <div className="space-x-4">
            <span>SKU总数: <strong className="text-slate-800">7</strong> 个</span>
            <span>总在库件数: <strong className="text-slate-800">15,150</strong> 件</span>
            <span>可用在库件数: <strong className="text-emerald-700">14,225</strong> 件</span>
            <span>待出库冻结: <strong className="text-amber-700">887</strong> 件</span>
            <span>在途采购量: <strong className="text-indigo-700">6,500</strong> 件</span>
            <span>在库资产总值: <strong className="text-slate-800">¥337,386.00</strong></span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InventoryPage;
