import React, { useState } from 'react';
import { Tabs, Table, Input, Button, Select, Space, Card, Badge } from 'antd';
import type { TabsProps, TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined, MinusOutlined } from '@ant-design/icons';

interface ProductData {
  key: string;
  product: string;
  skuSpecs: string;
  matchStatus: string;
  localProductInfo: string;
  productSku: string;
}

const ProductMatchPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const columns: TableColumnsType<ProductData> = [
    { 
      title: '店铺刊登商品', 
      dataIndex: 'product', 
      key: 'product',
      render: (text) => <span className="font-medium text-slate-800">{text}</span>
    },
    { title: '平台SKU / 规格', dataIndex: 'skuSpecs', key: 'skuSpecs' },
    { 
      title: '匹配状态', 
      dataIndex: 'matchStatus', 
      key: 'matchStatus',
      render: (status) => {
        const colorMap: Record<string, string> = {
          '已自动匹配': 'bg-emerald-50 text-emerald-700 border-emerald-200',
          '已人工绑定': 'bg-blue-50 text-blue-700 border-blue-200',
          '待匹配': 'bg-amber-50 text-amber-700 border-amber-200',
          '规格需确认': 'bg-rose-50 text-rose-700 border-rose-200',
        };
        return (
          <span className={`inline-block px-2.5 py-0.5 rounded text-xs border ${colorMap[status] || 'bg-slate-50 text-slate-600'}`}>
            {status}
          </span>
        );
      }
    },
    { title: '本地仓库商品信息', dataIndex: 'localProductInfo', key: 'localProductInfo' },
    { title: '本地系统SKU', dataIndex: 'productSku', key: 'productSku', render: (sku) => <code className="text-xs bg-slate-100 px-1.5 py-0.5 rounded text-slate-700">{sku}</code> },
    { 
      title: '操作', 
      dataIndex: 'operation', 
      key: 'operation', 
      render: (_, record) => (
        <Space size="middle">
          <a className="text-indigo-600 hover:text-indigo-800 text-xs font-medium">重新配对</a>
          {record.matchStatus.includes('已') && (
            <a className="text-rose-600 hover:text-rose-800 text-xs font-medium">解绑</a>
          )}
        </Space>
      ) 
    },
  ];

  const dataSource: ProductData[] = [
    {
      key: "1",
      product: "【Shopee-MY】Wireless Bluetooth 5.3 Earbuds ANC Active Noise Cancelling",
      skuSpecs: "SP-MY-EAR-BLK / 曜石黑-标准版",
      matchStatus: "已自动匹配",
      localProductInfo: "智选高配版真无线主动降噪蓝牙耳机",
      productSku: "3C-ANC08-BLK"
    },
    {
      key: "2",
      product: "【TikTok-ID】Fast Charger 65W GaN Travel Adapter Dual Port Type-C",
      skuSpecs: "TT-ID-GAN65-SLV / 银灰折叠款",
      matchStatus: "已自动匹配",
      localProductInfo: "65W GaN氮化镓三口超级快充头",
      productSku: "3C-GAN65-SLV"
    },
    {
      key: "3",
      product: "【Lazada-TH】Smart Watch AMOLED Heart Rate Blood Oxygen Waterproof",
      skuSpecs: "LZ-TH-WATCH-GRY / 钛空灰-氟橡胶带",
      matchStatus: "已人工绑定",
      localProductInfo: "智能高清心率血氧监测运动手表",
      productSku: "3C-SMW09-TGR"
    },
    {
      key: "4",
      product: "【Shopee-PH】Hyaluronic Acid Deep Hydration Cream 50g Whitening Skin",
      skuSpecs: "SP-PH-CREAM-50G / 50g滋润型",
      matchStatus: "已自动匹配",
      localProductInfo: "玻尿酸密集水润舒缓修护面霜 (50g)",
      productSku: "BE-HYA50-CRE"
    },
    {
      key: "5",
      product: "【Shopee-SG】Stainless Steel Thermos Bottle 900ml with Straw Cold Cup",
      skuSpecs: "SP-SG-CUP-900W / 900ml奶白色",
      matchStatus: "待匹配",
      localProductInfo: "尚未关联本地仓库货号",
      productSku: "-"
    },
    {
      key: "6",
      product: "【TikTok-VN】Mini Foldable Ionic Hair Dryer 1800W Quick Dry Salon Level",
      skuSpecs: "TT-VN-DRY-PUR / 极光紫-欧规插头",
      matchStatus: "已自动匹配",
      localProductInfo: "负离子便携轻量折叠电吹风机",
      productSku: "HM-DRY18-PUR"
    },
    {
      key: "7",
      product: "【Shopee-MY】Ultra Light Waterproof Hiking Backpack 20L Packable",
      skuSpecs: "SP-MY-BAG-20-GRN / 军绿-20L升级款",
      matchStatus: "已人工绑定",
      localProductInfo: "超轻防泼水双肩徒步旅行折叠包",
      productSku: "OD-BP20L-ARM"
    },
    {
      key: "8",
      product: "【Lazada-MY】Powerbank 26000mAh PD Fast Charge with LED Display",
      skuSpecs: "LZ-MY-PB260-BLK / 黑色大容量款",
      matchStatus: "规格需确认",
      localProductInfo: "26000mAh大容量双向PD快充移动电源",
      productSku: "3C-PB260-BLK"
    }
  ];

  const items: TabsProps['items'] = [
    { key: 'all', label: <Badge count={8} overflowCount={99} offset={[10, 0]}>全部商品</Badge> },
    { key: 'matched', label: <Badge count={6} overflowCount={99} style={{ backgroundColor: '#10b981' }} offset={[10, 0]}>已匹配</Badge> },
    { key: 'unmatched', label: <Badge count={2} overflowCount={99} style={{ backgroundColor: '#f59e0b' }} offset={[10, 0]}>待匹配/异常</Badge> },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <Card className="mb-4">
        <Space wrap className="w-full mb-4">
          <Input placeholder="产品ID" className="w-40" />
          <Input placeholder="sku" className="w-40" />
          <Input placeholder="加*可模糊查询" className="w-40" />
          <Input placeholder="主sku" className="w-40" />
          <Input placeholder="店铺名称" className="w-40" />
          <Select placeholder="站点" className="w-40" />
          <Input placeholder="标题" className="w-40" />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
        </Space>
        <Space>
          <Button type="primary" icon={<PlusOutlined />}>SKU自动匹配</Button>
          <Button icon={<MinusOutlined />}>SKU解除匹配</Button>
        </Space>
      </Card>
      
      <Card>
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={items} />
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

export default ProductMatchPage;
