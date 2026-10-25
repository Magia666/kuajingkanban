import React, { useState } from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select, Tabs } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface ReturnApplicationData {
  key: string;
  returnWarehouse: string;
  returnMethod: string;
  applicationPackage: string;
  applicationRemark: string;
  returnAddress: string;
  packageFee: string;
  applicationInfo: string;
  packageInfo: string;
}

const ReturnApplicationPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const columns: TableColumnsType<ReturnApplicationData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '寄回仓库 | 寄回方式', dataIndex: 'returnWarehouse', key: 'returnWarehouse' },
    { title: '申请包裹', dataIndex: 'applicationPackage', key: 'applicationPackage' },
    { title: '申请备注 | 图片', dataIndex: 'applicationRemark', key: 'applicationRemark' },
    { title: '寄回地址', dataIndex: 'returnAddress', key: 'returnAddress' },
    { title: '寄回包裹 | 费用', dataIndex: 'packageFee', key: 'packageFee' },
    { title: '申请信息', dataIndex: 'applicationInfo', key: 'applicationInfo' },
    { title: '寄回包裹 | 信息', dataIndex: 'packageInfo', key: 'packageInfo' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  const tabItems: TabsProps['items'] = [
    { key: 'all', label: '全部 (6)' },
    { key: 'pending', label: '待处理 (2)' },
    { key: 'approved', label: '已寄回 (3)' },
    { key: 'rejected', label: '已拒绝 (1)' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">申请寄回</h1>
      
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
        
        <div className="flex flex-wrap gap-4 mt-4 items-center">
            <Select 
              placeholder="寄回仓库" 
              style={{ width: 180 }} 
              allowClear 
              options={[
                { label: '东莞虎门跨境集运仓', value: 'DG' },
                { label: '深圳宝安保税总仓', value: 'SZ' },
                { label: '雪兰莪海外仓 (MY)', value: 'MY' },
                { label: '曼谷海外仓 (TH)', value: 'TH' },
              ]}
            />
            <Select 
              placeholder="寄回方式" 
              style={{ width: 180 }} 
              allowClear 
              options={[
                { label: '国际快递退运', value: 'intl_express' },
                { label: '国内快递寄回', value: 'domestic' },
                { label: '海外仓暂存重新上架', value: 'warehouse_restock' },
                { label: '就地报废销毁', value: 'destroy' }
              ]}
            />
            <RangePicker style={{ width: 250 }} />
            <Input placeholder="输入包裹运单号" style={{ width: 180 }} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
        </div>
      </Card>
      
      <Card>
        <Button type="primary" icon={<PlusOutlined />} className="mb-4">创建寄回申请</Button>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              returnWarehouse: "东莞虎门跨境集运仓 · 顺丰标快",
              applicationPackage: "PKG-RET-241024-001 (SF1428938192831)",
              applicationRemark: "买家拒签，外包装完好，申请退回国内供应商返修",
              returnAddress: "深圳市宝安区福永街道物流大厦A座502室",
              packageFee: "¥18.50",
              applicationInfo: "原单 SP-MY-2410219801K (主动降噪耳机)",
              packageInfo: "实重 0.18kg / 气泡袋包装"
            },
            {
              key: "2",
              returnWarehouse: "雪兰莪海外仓 (MY-01) · J&T专线退运",
              applicationPackage: "PKG-RET-241023-012 (JT6002918201MY)",
              applicationRemark: "买家退回7天无理由商品，已质检外观无磨损重新入库",
              returnAddress: "雪兰莪海外仓退货暂存架 [A-04-02]",
              packageFee: "¥8.00 (操作费)",
              applicationInfo: "原单 SP-SG-2410182291D (不锈钢保温杯)",
              packageInfo: "原包装完好 / 附说明书"
            },
            {
              key: "3",
              returnWarehouse: "曼谷1号海外仓 (TH-01) · Flash Express",
              applicationPackage: "PKG-RET-241022-008 (TH92019482710)",
              applicationRemark: "手环包装破损且少表带配件，申请退回义乌供货工厂",
              returnAddress: "浙江省金华市义乌市北苑街道秋实路118号",
              packageFee: "¥32.00 (国际海空退运)",
              applicationInfo: "原单 LZ-TH-2410193188T (智能运动手表)",
              packageInfo: "残次品库位隔离 [C-03-02]"
            },
            {
              key: "4",
              returnWarehouse: "深圳宝安保税总仓 · 中通快运",
              applicationPackage: "PKG-RET-241022-004 (ZT772918392102)",
              applicationRemark: "面霜外包装挤压变形漏液，商户申请就地销毁报损",
              returnAddress: "深圳保税仓报损处置区",
              packageFee: "¥0.00 (免运费)",
              applicationInfo: "原单 TT-ID-2410204481P (玻尿酸面霜)",
              packageInfo: "破损件已拍照留证"
            },
            {
              key: "5",
              returnWarehouse: "东莞虎门跨境集运仓 · 德邦快递",
              applicationPackage: "PKG-RET-241021-019 (DBL88291039101)",
              applicationRemark: "买家地址超区退回，联系买家更新正确地址后重新发运",
              returnAddress: "东莞虎门集运仓二次发运暂存位",
              packageFee: "¥12.00 (二次操作)",
              applicationInfo: "原单 SP-PH-2410219904S (户外折叠包)",
              packageInfo: "商品全新完好"
            },
            {
              key: "6",
              returnWarehouse: "深圳宝安保税总仓 · 京东快递",
              applicationPackage: "PKG-RET-241020-007 (JD00291823910)",
              applicationRemark: "规格拍错申请换货，买家已将紫色吹风机寄回更换白色",
              returnAddress: "广东省深圳市南山区高新南道科技互联大厦",
              packageFee: "¥15.00",
              applicationInfo: "原单 TT-VN-2410187712E (折叠电吹风)",
              packageInfo: "买家自付退回运费"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default ReturnApplicationPage;
