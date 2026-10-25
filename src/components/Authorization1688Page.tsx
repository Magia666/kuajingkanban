import React from 'react';
import { Table, Input, Button, Card, Select, Space, Alert } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined } from '@ant-design/icons';

interface AuthorizationData {
  key: string;
  account: string;
  remark: string;
  authTime: string;
  authStatus: string;
  expirationTime: string;
}

const Authorization1688Page: React.FC = () => {
  const columns: TableColumnsType<AuthorizationData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '账号', dataIndex: 'account', key: 'account' },
    { title: '备注', dataIndex: 'remark', key: 'remark' },
    { title: '授权时间', dataIndex: 'authTime', key: 'authTime' },
    { title: '授权状态', dataIndex: 'authStatus', key: 'authStatus' },
    { title: '过期时间', dataIndex: 'expirationTime', key: 'expirationTime', sorter: true },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">1688授权</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
            <Input placeholder="账号" prefix="账号:" style={{ width: 200 }} />
            <Input placeholder="备注" prefix="备注:" style={{ width: 200 }} />
            <Select placeholder="是否过期" style={{ width: 200 }} allowClear options={[{label: '是', value: 'yes'}, {label: '否', value: 'no'}]} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
        </Space>
      </Card>
      
      <Card>
        <Button type="primary" icon={<PlusOutlined />} className="mb-4">新增授权</Button>
        <Alert title={<>已选择0项 <a className="ml-2">清空</a></>} type="info" showIcon className="mb-4" />
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    account: "ali_test_user_01",
    remark: "主采购账号",
    authTime: "2024-05-10 14:10:00",
    authStatus: "已授权",
    expirationTime: "2025-05-10 14:10:00"
  },
  {
    key: "2",
    account: "ali_buyer_02",
    remark: "服装类目采购",
    authTime: "2024-05-11 14:15:00",
    authStatus: "已授权",
    expirationTime: "2025-05-11 14:15:00"
  },
  {
    key: "3",
    account: "supplier_sync_03",
    remark: "自动发货接口账号",
    authTime: "2024-05-12 14:20:00",
    authStatus: "授权失效",
    expirationTime: "2024-01-12 14:20:00"
  },
  {
    key: "4",
    account: "electronics_purchaser",
    remark: "电子产品采购专员",
    authTime: "2024-05-13 14:25:00",
    authStatus: "已授权",
    expirationTime: "2025-05-13 14:25:00"
  },
  {
    key: "5",
    account: "shop_mgr_05",
    remark: "备用账号",
    authTime: "2024-05-14 14:30:00",
    authStatus: "未授权",
    expirationTime: "-"
  },
  {
    key: "6",
    account: "ali_buyer_06",
    remark: "家居类采购",
    authTime: "2024-05-15 14:35:00",
    authStatus: "授权失效",
    expirationTime: "2024-03-15 14:35:00"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default Authorization1688Page;
