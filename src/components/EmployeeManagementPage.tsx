import React from 'react';
import { Table, Input, Button, Space, Card } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

interface EmployeeData {
  key: string;
  username: string;
  realName: string;
  phone: string;
  email: string;
  note: string;
  status: string;
}

const EmployeeManagementPage: React.FC = () => {
  const columns: TableColumnsType<EmployeeData> = [
    { title: '用户账号', dataIndex: 'username', key: 'username' },
    { title: '真实姓名', dataIndex: 'realName', key: 'realName' },
    { title: '手机号', dataIndex: 'phone', key: 'phone' },
    { title: '邮箱', dataIndex: 'email', key: 'email' },
    { title: '备注', dataIndex: 'note', key: 'note' },
    { title: '状态', dataIndex: 'status', key: 'status' },
    { title: '操作', dataIndex: 'operation', key: 'operation', render: () => <a>操作</a> },
  ];

  const dataSource: EmployeeData[] = [
    {
      key: "1",
      username: "alex.chen",
      realName: "陈立峰",
      phone: "138-0019-8821",
      email: "chen.lifeng@global-erp.com",
      note: "跨境运营总监 · 统筹Shopee/TikTok全盘运营",
      status: "在职"
    },
    {
      key: "2",
      username: "sarah.lin",
      realName: "林思涵",
      phone: "139-1120-7734",
      email: "lin.sihan@global-erp.com",
      note: "高级运营专员 · 负责马来西亚与新加坡店铺履约",
      status: "在职"
    },
    {
      key: "3",
      username: "jason.wu",
      realName: "吴建豪",
      phone: "137-6623-1190",
      email: "wu.jianhao@global-erp.com",
      note: "智能仓储主管 · 主管虎门集运仓与深圳总仓",
      status: "在职"
    },
    {
      key: "4",
      username: "emily.zheng",
      realName: "郑敏儿",
      phone: "136-8891-2301",
      email: "zheng.miner@global-erp.com",
      note: "财务专员 · 负责商户充值审计与结算提现",
      status: "在职"
    },
    {
      key: "5",
      username: "david.huang",
      realName: "黄志勇",
      phone: "135-4421-9988",
      email: "huang.zy@global-erp.com",
      note: "选品供应链经理 · 1688货盘精选与成本核算",
      status: "在职"
    },
    {
      key: "6",
      username: "kevin.zhao",
      realName: "赵凯文",
      phone: "133-9982-1234",
      email: "zhao.kw@global-erp.com",
      note: "多语言客服组长 · 跨境买家售前售后支持",
      status: "在职"
    }
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">员工管理</h1>
      <Card className="mb-4">
        <Space wrap className="w-full mb-4">
          <Input placeholder="请输入账号" className="w-48" />
          <Input placeholder="请输入真实姓名" className="w-48" />
          <Input placeholder="请输入手机号" className="w-48" />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
        </Space>
        
        <Button type="primary" icon={<PlusOutlined />}>新建员工</Button>
      </Card>
      
      <Card>
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

export default EmployeeManagementPage;
