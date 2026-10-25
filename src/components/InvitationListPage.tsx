import React from 'react';
import { Table, Input, Button, Card, Space } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';

interface InvitationData {
  key: string;
  account: string;
  phone: string;
  registerTime: string;
}

const InvitationListPage: React.FC = () => {
  const columns: TableColumnsType<InvitationData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '账号', dataIndex: 'account', key: 'account' },
    { title: '手机号', dataIndex: 'phone', key: 'phone' },
    { title: '注册时间', dataIndex: 'registerTime', key: 'registerTime' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">邀请列表</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
            <Input placeholder="用户名" prefix="用户名:" style={{ width: 250 }} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
        </Space>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              account: "seller_sz_trade (深圳市华悦贸易)",
              phone: "138-0012-9981",
              registerTime: "2024-10-24 09:15:00"
            },
            {
              key: "2",
              account: "seller_yw_sunshine (义乌晨星优选)",
              phone: "139-2234-8871",
              registerTime: "2024-10-23 16:20:30"
            },
            {
              key: "3",
              account: "seller_gz_beauty (广州悦雅美妆专营)",
              phone: "137-5510-3329",
              registerTime: "2024-10-22 11:45:10"
            },
            {
              key: "4",
              account: "seller_hz_cross (杭州极客出海科技)",
              phone: "136-8801-4422",
              registerTime: "2024-10-21 14:10:00"
            },
            {
              key: "5",
              account: "seller_xm_outdoor (厦门飞途户外运动)",
              phone: "135-9921-0033",
              registerTime: "2024-10-20 10:30:00"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default InvitationListPage;
