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
    { key: 'pending', label: '待处理 (0)' },
    { key: 'approved', label: '已寄回 (0)' },
    { key: 'rejected', label: '已拒绝 (0)' },
    { key: 'all', label: '全部 (0)' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">申请寄回</h1>
      
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
        
        <div className="flex flex-wrap gap-4 mt-4 items-center">
            <Select placeholder="寄回仓库" style={{ width: 180 }} allowClear />
            <Select placeholder="寄回方式" style={{ width: 180 }} allowClear />
            <Select placeholder="申请时间" style={{ width: 180 }} allowClear />
            <RangePicker style={{ width: 250 }} />
            <Select placeholder="申请包裹" style={{ width: 180 }} allowClear />
            <Input placeholder="申请包裹" style={{ width: 180 }} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
        </div>
      </Card>
      
      <Card>
        <Button type="primary" icon={<PlusOutlined />} className="mb-4">申请寄回</Button>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    returnWarehouse: "美西一仓",
    applicationPackage: "采购单-20240518",
    applicationRemark: "客户要求加急发货",
    returnAddress: "广东省深圳市南山区科兴科学园1栋600室",
    packageFee: "128.00",
    applicationInfo: "采购单-20240518",
    packageInfo: "采购单-20240518"
  },
  {
    key: "2",
    returnWarehouse: "深圳总仓",
    applicationPackage: "物流包裹-YD998123",
    applicationRemark: "商品存在轻微瑕疵",
    returnAddress: "广东省深圳市南山区科兴科学园2栋601室",
    packageFee: "194.50",
    applicationInfo: "物流包裹-YD998123",
    packageInfo: "物流包裹-YD998123"
  },
  {
    key: "3",
    returnWarehouse: "义乌中转仓",
    applicationPackage: "A区-05货架-03层",
    applicationRemark: "包裹外包装破损",
    returnAddress: "广东省深圳市南山区科兴科学园3栋602室",
    packageFee: "261.00",
    applicationInfo: "A区-05货架-03层",
    packageInfo: "A区-05货架-03层"
  },
  {
    key: "4",
    returnWarehouse: "美东二仓",
    applicationPackage: "采购单-20240518",
    applicationRemark: "尺码拍错，要求换货",
    returnAddress: "广东省深圳市南山区科兴科学园4栋603室",
    packageFee: "327.50",
    applicationInfo: "采购单-20240518",
    packageInfo: "采购单-20240518"
  },
  {
    key: "5",
    returnWarehouse: "法兰克福仓",
    applicationPackage: "物流包裹-YD998123",
    applicationRemark: "地址填写错误，已更正",
    returnAddress: "广东省深圳市南山区科兴科学园5栋604室",
    packageFee: "394.00",
    applicationInfo: "物流包裹-YD998123",
    packageInfo: "物流包裹-YD998123"
  },
  {
    key: "6",
    returnWarehouse: "美西一仓",
    applicationPackage: "A区-05货架-03层",
    applicationRemark: "客户要求加急发货",
    returnAddress: "广东省深圳市南山区科兴科学园6栋605室",
    packageFee: "460.50",
    applicationInfo: "A区-05货架-03层",
    packageInfo: "A区-05货架-03层"
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
