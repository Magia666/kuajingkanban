import React, { useState } from 'react';
import { Table, Input, Button, Card, Tabs, Select, DatePicker } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface PackageClaimData {
  key: string;
  productInfo: string;
  originalOrderInfo: string;
  packageInfo: string;
  shelfInfo: string;
  time: string;
  remark: string;
}

const PackageClaimPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('linked');
  const [activeSubTab, setActiveSubTab] = useState('pending');

  const columns: TableColumnsType<PackageClaimData> = [
    { title: '商品信息', dataIndex: 'productInfo', key: 'productInfo' },
    { title: '原订单信息', dataIndex: 'originalOrderInfo', key: 'originalOrderInfo' },
    { title: '包裹信息', dataIndex: 'packageInfo', key: 'packageInfo' },
    { title: '上架信息', dataIndex: 'shelfInfo', key: 'shelfInfo' },
    { title: '时间', dataIndex: 'time', key: 'time' },
    { title: '备注', dataIndex: 'remark', key: 'remark' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  const tabItems: TabsProps['items'] = [
    { key: 'linked', label: '关联订单' },
    { key: 'unlinked', label: '未关联订单' },
    { key: 'pending', label: '待认领' },
  ];

  const subTabItems: TabsProps['items'] = [
    { key: 'pending', label: '待出货 (0)' },
    { key: 'shipped', label: '已重出 (0)' },
    { key: 'destroyed', label: '已销毁 (0)' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">包裹认领</h1>
      
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
        
        <div className="flex flex-wrap gap-4 mt-4 items-center">
            <Select placeholder="仓库" style={{ width: 180 }} allowClear />
            <Select placeholder="上架时间" style={{ width: 180 }} allowClear />
            <RangePicker showTime style={{ width: 250 }} />
            <Select placeholder="扫描单号" style={{ width: 180 }} allowClear />
            <Input placeholder="输入单号" style={{ width: 180 }} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
        </div>
      </Card>
      
      <Card>
        <Button icon={<ExportOutlined />} className="mb-4">导出</Button>
        <Tabs activeKey={activeSubTab} onChange={setActiveSubTab} items={subTabItems} type="card" />

        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              productInfo: "智选高配版真无线主动降噪蓝牙耳机 (3C-ANC08-BLK)",
              originalOrderInfo: "SP-MY-2410240091K",
              packageInfo: "PKG-20241024-0019 (顺丰 SF1428938192831)",
              shelfInfo: "A区暂存架-02货架-03层 [A-02-03-B]",
              time: "2024-10-24 10:15:00",
              remark: "发货包裹面单条码污损，已重新补打并关联店铺订单"
            },
            {
              key: "2",
              productInfo: "65W GaN氮化镓三口超级快充头 (3C-GAN65-SLV)",
              originalOrderInfo: "TT-ID-2410240833P",
              packageInfo: "PKG-20241024-0035 (中通 ZT772918392102)",
              shelfInfo: "B区待包架-01货架-01层 [B-01-01-A]",
              time: "2024-10-24 09:30:10",
              remark: "供应商分批发货第2箱，合并原采购订单待配齐发运"
            },
            {
              key: "3",
              productInfo: "智能高清心率血氧监测运动手表 (3C-SMW09-TGR)",
              originalOrderInfo: "LZ-TH-2410239102B",
              packageInfo: "PKG-20241023-0082 (跨越 KY202408192819)",
              shelfInfo: "C区异常架-03货架-02层 [C-03-02-C]",
              time: "2024-10-23 16:40:00",
              remark: "外箱胶带松动，仓库复称重量无偏差，已重新加固封装"
            },
            {
              key: "4",
              productInfo: "玻尿酸密集水润舒缓修护面霜 (BE-HYA50-CRE)",
              originalOrderInfo: "SP-PH-2410231908S",
              packageInfo: "PKG-20241023-0050 (京东 JD00291823910)",
              shelfInfo: "A区待包架-04货架-01层 [A-04-01-D]",
              time: "2024-10-23 14:15:20",
              remark: "工厂直发入库无外标，商户已在后台完成包裹信息认领匹配"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default PackageClaimPage;
