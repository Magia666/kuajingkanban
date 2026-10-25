import React, { useState } from 'react';
import { Tabs, Table, Input, Button, Space, Card, Form, Select } from 'antd';
import type { TabsProps, TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined, ExportOutlined, DownloadOutlined, UploadOutlined } from '@ant-design/icons';

interface DistributionProductData {
  key: string;
  productInfo: string;
  itemNumber: string;
  sku: string;
  price: number;
  stock: number;
  weight: number;
  dimensions: string;
  category: string;
}

const DistributionProductPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('onSale');

  const columns: TableColumnsType<DistributionProductData> = [
    { title: '商品信息', dataIndex: 'productInfo', key: 'productInfo' },
    { title: '货号', dataIndex: 'itemNumber', key: 'itemNumber' },
    { title: 'sku/规格/系统编码/本地编码', dataIndex: 'sku', key: 'sku' },
    { title: '售价', dataIndex: 'price', key: 'price' },
    { title: '库存', dataIndex: 'stock', key: 'stock' },
    { title: '商品重量', dataIndex: 'weight', key: 'weight' },
    { title: '尺寸/体积', dataIndex: 'dimensions', key: 'dimensions' },
    { title: '商品分类', dataIndex: 'category', key: 'category' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  const topTabs: TabsProps['items'] = [
    { key: 'onSale', label: '已上架' },
    { key: 'offSale', label: '已下架' },
    { key: 'all', label: '全部' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">分销商品</h1>
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={topTabs} />
        
        <Form layout="inline" className="mt-4 gap-4">
          <Form.Item label="系统编码">
            <Input placeholder="系统编码" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="货号">
            <Input placeholder="货号" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="sku">
            <Input placeholder="sku" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="产品名称">
            <Input placeholder="产品名称" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="商品分类">
            <Select placeholder="商品分类" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" icon={<SearchOutlined />}>查询</Button>
              <Button icon={<ReloadOutlined />}>重置</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
      
      <Card>
        <Space className="mb-4">
          <Button type="primary" icon={<PlusOutlined />}>新增</Button>
          <Button icon={<DownloadOutlined />}>同步到物流仓库</Button>
          <Button icon={<ExportOutlined />}>导出</Button>
          <Button icon={<DownloadOutlined />}>批量下架</Button>
          <Button icon={<UploadOutlined />}>excel导入</Button>
          <Button icon={<UploadOutlined />}>从线上导入</Button>
          <Button type="link">模板</Button>
        </Space>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              productInfo: "智选高配版真无线主动降噪蓝牙耳机 (ANC+ENC双麦降噪)",
              itemNumber: "ART-ANC-08B",
              sku: "3C-ANC08-BLK",
              price: 89.00,
              stock: 1240,
              weight: 0.16,
              dimensions: "9.5x9.5x3.8 cm",
              category: "3C数码"
            },
            {
              key: "2",
              productInfo: "65W GaN氮化镓三口超级快充头 (Type-C+USB 银灰折叠插脚)",
              itemNumber: "ART-GAN-65S",
              sku: "3C-GAN65-SLV",
              price: 52.50,
              stock: 2850,
              weight: 0.22,
              dimensions: "7.5x5.2x3.4 cm",
              category: "3C数码"
            },
            {
              key: "3",
              productInfo: "智能高清心率血氧监测运动手表 (1.96寸AMOLED 钛空灰硅胶带)",
              itemNumber: "ART-SMW-09T",
              sku: "3C-SMW09-TGR",
              price: 138.00,
              stock: 680,
              weight: 0.18,
              dimensions: "12.0x7.5x4.5 cm",
              category: "智能穿戴"
            },
            {
              key: "4",
              productInfo: "玻尿酸密集水润舒缓修护面霜 (50g滋润型/出口英泰双语版)",
              itemNumber: "ART-HYA-50C",
              sku: "BE-HYA50-CRE",
              price: 36.80,
              stock: 3500,
              weight: 0.21,
              dimensions: "6.8x6.8x5.6 cm",
              category: "美妆个护"
            },
            {
              key: "5",
              productInfo: "304不锈钢大容量双饮保温保冷吸管杯 (900ml哑光奶白防漏)",
              itemNumber: "ART-THM-90W",
              sku: "HM-THM900-WHT",
              price: 45.00,
              stock: 1820,
              weight: 0.48,
              dimensions: "10.5x10.5x24.0 cm",
              category: "家居日用"
            },
            {
              key: "6",
              productInfo: "负离子便携轻量折叠电吹风机 (大风量速干恒温 极光紫欧标插)",
              itemNumber: "ART-DRY-18P",
              sku: "HM-DRY18-PUR",
              price: 68.00,
              stock: 940,
              weight: 0.58,
              dimensions: "18.0x12.0x7.5 cm",
              category: "个护小家电"
            },
            {
              key: "7",
              productInfo: "超轻防泼水双肩徒步旅行折叠包 (20L军绿色 耐磨抗撕裂)",
              itemNumber: "ART-BAG-20A",
              sku: "OD-BP20L-ARM",
              price: 29.90,
              stock: 4120,
              weight: 0.15,
              dimensions: "15.0x10.0x4.0 cm",
              category: "户外运动"
            },
            {
              key: "8",
              productInfo: "26000mAh大容量双向PD快充移动电源 (带数显指示 曜石黑)",
              itemNumber: "ART-PWR-26B",
              sku: "3C-PB260-BLK",
              price: 79.50,
              stock: 1560,
              weight: 0.42,
              dimensions: "14.2x6.8x2.8 cm",
              category: "3C数码"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ pageSize: 10, placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default DistributionProductPage;
