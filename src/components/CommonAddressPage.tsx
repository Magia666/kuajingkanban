import React from 'react';
import { Table, Button, Card, Space } from 'antd';
import type { TableColumnsType } from 'antd';
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons';

interface AddressData {
  key: string;
  platform: string;
  name: string;
  province: string;
  city: string;
  district: string;
  country: string;
  phone: string;
  address: string;
  type: string;
  isDefault: string;
}

const CommonAddressPage: React.FC = () => {
  const columns: TableColumnsType<AddressData> = [
    { title: '序号', dataIndex: 'key', width: 60 },
    { title: '平台', dataIndex: 'platform', key: 'platform' },
    { title: '名称', dataIndex: 'name', key: 'name' },
    { title: '省/州', dataIndex: 'province', key: 'province' },
    { title: '城市', dataIndex: 'city', key: 'city' },
    { title: '区', dataIndex: 'district', key: 'district' },
    { title: '国家/地区', dataIndex: 'country', key: 'country' },
    { title: '联系电话', dataIndex: 'phone', key: 'phone' },
    { title: '详细地址', dataIndex: 'address', key: 'address' },
    { title: '类型', dataIndex: 'type', key: 'type' },
    { title: '是否默认', dataIndex: 'isDefault', key: 'isDefault' },
    { title: '操作', key: 'operation', render: () => <Space><a>编辑</a><a>删除</a></Space> },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">常用地址</h1>
      
      <Card className="mb-4">
        <Space>
            <Button type="primary" icon={<PlusOutlined />}>新增常用地址</Button>
            <Button icon={<ReloadOutlined />}>速卖通地址同步</Button>
            <Button icon={<ReloadOutlined />}>Coupang地址同步</Button>
        </Space>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    platform: "淘宝",
    name: "2024新款智能手表监控防水运动手环",
    province: "广东省深圳市南山区科兴科学园1栋600室",
    city: "广东省深圳市南山区科兴科学园1栋600室",
    district: "广东省深圳市南山区科兴科学园1栋600室",
    country: 10,
    phone: "13880000000",
    address: "广东省深圳市南山区科兴科学园1栋600室",
    type: "电子产品",
    isDefault: "是"
  },
  {
    key: "2",
    platform: "1688联盟",
    name: "无线蓝牙耳机降噪入耳式长续航",
    province: "广东省深圳市南山区科兴科学园2栋601室",
    city: "广东省深圳市南山区科兴科学园2栋601室",
    district: "广东省深圳市南山区科兴科学园2栋601室",
    country: 25,
    phone: "13880012345",
    address: "广东省深圳市南山区科兴科学园2栋601室",
    type: "服装服饰",
    isDefault: "否"
  },
  {
    key: "3",
    platform: "独立站 Shopify",
    name: "纯棉短袖T恤男夏季宽松百搭",
    province: "广东省深圳市南山区科兴科学园3栋602室",
    city: "广东省深圳市南山区科兴科学园3栋602室",
    district: "广东省深圳市南山区科兴科学园3栋602室",
    country: 40,
    phone: "13880024690",
    address: "广东省深圳市南山区科兴科学园3栋602室",
    type: "家居日用",
    isDefault: "否"
  },
  {
    key: "4",
    platform: "Amazon US",
    name: "户外便携运动水杯大容量防漏",
    province: "广东省深圳市南山区科兴科学园4栋603室",
    city: "广东省深圳市南山区科兴科学园4栋603室",
    district: "广东省深圳市南山区科兴科学园4栋603室",
    country: 55,
    phone: "13880037035",
    address: "广东省深圳市南山区科兴科学园4栋603室",
    type: "户外运动",
    isDefault: "否"
  },
  {
    key: "5",
    platform: "Shopee MY",
    name: "家用多功能颈椎按摩仪护颈",
    province: "广东省深圳市南山区科兴科学园5栋604室",
    city: "广东省深圳市南山区科兴科学园5栋604室",
    district: "广东省深圳市南山区科兴科学园5栋604室",
    country: 70,
    phone: "13880049380",
    address: "广东省深圳市南山区科兴科学园5栋604室",
    type: "美妆个护",
    isDefault: "否"
  },
  {
    key: "6",
    platform: "京东",
    name: "2024新款智能手表监控防水运动手环",
    province: "广东省深圳市南山区科兴科学园6栋605室",
    city: "广东省深圳市南山区科兴科学园6栋605室",
    district: "广东省深圳市南山区科兴科学园6栋605室",
    country: 85,
    phone: "13880061725",
    address: "广东省深圳市南山区科兴科学园6栋605室",
    type: "电子产品",
    isDefault: "否"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default CommonAddressPage;
