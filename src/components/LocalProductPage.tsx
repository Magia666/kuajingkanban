import React, { useState } from 'react';
import { Tabs, Table, Input, Button, Select, Space, Card, Alert } from 'antd';
import type { TabsProps, TableColumnsType } from 'antd';
import { SearchOutlined, PlusOutlined, UploadOutlined, DownloadOutlined, ExportOutlined } from '@ant-design/icons';

interface ProductData {
  key: string;
  localCode: string;
  productName: string;
  sku: string;
  matchedSku: string;
  dimensions: string;
  cost: number;
}

const LocalProductPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('single');

  const columns: TableColumnsType<ProductData> = [
    { title: '本地/自定义/分类/分销', dataIndex: 'localCode', key: 'localCode' },
    { title: '产品名称', dataIndex: 'productName', key: 'productName' },
    { title: 'sku/规格', dataIndex: 'sku', key: 'sku' },
    { title: '已匹配店铺SKU', dataIndex: 'matchedSku', key: 'matchedSku' },
    { title: '尺寸/体积/重量', dataIndex: 'dimensions', key: 'dimensions' },
    { 
      title: '成本', 
      dataIndex: 'cost', 
      key: 'cost',
      render: (val) => <span className="text-slate-700 font-medium">¥{Number(val).toFixed(2)}</span> 
    },
    { 
      title: '操作', 
      dataIndex: 'operation', 
      key: 'operation', 
      render: () => (
        <Space size="middle">
          <a className="text-indigo-600 hover:text-indigo-800 text-xs font-medium">编辑</a>
          <a className="text-slate-600 hover:text-slate-800 text-xs font-medium">库存详情</a>
        </Space>
      ) 
    },
  ];

  const dataSource: ProductData[] = [
    {
      key: "1",
      localCode: "LOC-3C-ANC08",
      productName: "智选高配版真无线主动降噪蓝牙耳机",
      sku: "3C-ANC08-BLK",
      matchedSku: "SP-MY-EAR-BLK / TT-ID-EAR-BLK",
      dimensions: "9.5x9.5x3.8 cm (0.16kg)",
      cost: 42.50
    },
    {
      key: "2",
      localCode: "LOC-3C-GAN65",
      productName: "65W GaN氮化镓三口超级快充头 (银灰折叠)",
      sku: "3C-GAN65-SLV",
      matchedSku: "TT-ID-GAN65-SLV / LZ-TH-GAN65",
      dimensions: "7.5x5.2x3.4 cm (0.22kg)",
      cost: 26.80
    },
    {
      key: "3",
      localCode: "LOC-3C-SMW09",
      productName: "智能高清心率血氧监测运动手表 (钛空灰)",
      sku: "3C-SMW09-TGR",
      matchedSku: "LZ-TH-WATCH-GRY",
      dimensions: "12.0x7.5x4.5 cm (0.18kg)",
      cost: 68.00
    },
    {
      key: "4",
      localCode: "LOC-BE-HYA50",
      productName: "玻尿酸密集水润舒缓修护面霜 (50g滋润型)",
      sku: "BE-HYA50-CRE",
      matchedSku: "SP-PH-CREAM-50G / SP-MY-HYA-50",
      dimensions: "6.8x6.8x5.6 cm (0.21kg)",
      cost: 14.20
    },
    {
      key: "5",
      localCode: "LOC-HM-THM90",
      productName: "304不锈钢双饮保温保冷吸管杯 (900ml哑光奶白)",
      sku: "HM-THM900-WHT",
      matchedSku: "SP-SG-CUP-900W",
      dimensions: "10.5x10.5x24.0 cm (0.48kg)",
      cost: 18.50
    },
    {
      key: "6",
      localCode: "LOC-HM-DRY18",
      productName: "负离子便携轻量折叠电吹风机 (极光紫欧标插)",
      sku: "HM-DRY18-PUR",
      matchedSku: "TT-VN-DRY-PUR / LZ-MY-DRY18",
      dimensions: "18.0x12.0x7.5 cm (0.58kg)",
      cost: 32.00
    },
    {
      key: "7",
      localCode: "LOC-OD-BP20L",
      productName: "超轻防泼水双肩徒步旅行折叠包 (20L军绿色)",
      sku: "OD-BP20L-ARM",
      matchedSku: "SP-MY-BAG-20-GRN",
      dimensions: "15.0x10.0x4.0 cm (0.15kg)",
      cost: 11.80
    }
  ];

  const items: TabsProps['items'] = [
    { key: 'single', label: '单sku' },
    { key: 'bundle', label: '组合sku' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">本地商品</h1>
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={items} type="card" className="mb-4" />
        
        <Space wrap className="w-full mb-4">
          <Input placeholder="本地编码" className="w-48" />
          <Input placeholder="自定义编码" className="w-48" />
          <Input placeholder="sku" className="w-48" />
          <Input placeholder="产品名称" className="w-48" />
          <Select placeholder="商品分类" className="w-48" />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
        </Space>
        
        <Space>
          <Button type="primary" icon={<PlusOutlined />}>新增</Button>
          <Button icon={<ExportOutlined />}>导出</Button>
          <Button icon={<UploadOutlined />}>从线上导入</Button>
          <Button icon={<DownloadOutlined />}>excel导入</Button>
        </Space>
      </Card>
      
      <Card>
        <Alert 
          title="*本地sku不可重复，否则会影响sku的自动对应和批量库存发货，请卖家尽快修正历史数据" 
          type="info" 
          showIcon 
          className="mb-4"
        />
        <Table 
          columns={columns} 
          dataSource={dataSource} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default LocalProductPage;
