import React from 'react';
import { Table, Input, Button, Space, Card } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined } from '@ant-design/icons';

interface RoleData {
  key: string;
  roleCode: string;
  roleName: string;
  createTime: string;
  note: string;
}

const RoleManagementPage: React.FC = () => {
  const columns: TableColumnsType<RoleData> = [
    { title: '角色编码', dataIndex: 'roleCode', key: 'roleCode' },
    { title: '角色名称', dataIndex: 'roleName', key: 'roleName' },
    { title: '创建时间', dataIndex: 'createTime', key: 'createTime', sorter: true },
    { title: '备注', dataIndex: 'note', key: 'note' },
    { title: '操作', dataIndex: 'operation', key: 'operation', render: () => <a>操作</a> },
  ];

  const dataSource: RoleData[] = [
    {
      key: "1",
      roleCode: "ROLE_SUPER_ADMIN",
      roleName: "超级系统管理员",
      createTime: "2024-01-10 09:00:00",
      note: "拥有全系统最高操作权限、组织配置与数据备份控制"
    },
    {
      key: "2",
      roleCode: "ROLE_OPS_DIRECTOR",
      roleName: "跨境运营总监",
      createTime: "2024-02-15 10:30:00",
      note: "负责Shopee、Lazada、TikTok全渠道店铺策略与选品利润监控"
    },
    {
      key: "3",
      roleCode: "ROLE_STORE_OPERATOR",
      roleName: "跨境店铺运营专员",
      createTime: "2024-03-01 14:20:00",
      note: "负责刊登商品映射、订单履约处理、面单获取及客服协调"
    },
    {
      key: "4",
      roleCode: "ROLE_WAREHOUSE_MGR",
      roleName: "智能仓储调度主管",
      createTime: "2024-03-12 11:15:00",
      note: "负责虎门仓、深圳仓与海外仓的出入库验收、库位调拨与安全库存盘点"
    },
    {
      key: "5",
      roleCode: "ROLE_FINANCE_AUDIT",
      roleName: "财务审计与结算专员",
      createTime: "2024-04-05 16:45:00",
      note: "负责商户充值审批、分销商提现打款、平台对账核销与汇率管理"
    },
    {
      key: "6",
      roleCode: "ROLE_DISTRIBUTION_BD",
      roleName: "分销供应链招商经理",
      createTime: "2024-05-18 13:00:00",
      note: "负责1688优质货源引入、分销商品加价规则制定与分销商资质审核"
    }
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">员工角色</h1>
      <Card className="mb-4">
        <Space wrap className="w-full mb-4">
          <Input placeholder="角色名称" className="w-64" />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
        </Space>
        
        <Button type="primary" icon={<PlusOutlined />}>创建角色</Button>
      </Card>
      
      <Card>
        <div className="bg-blue-50 p-3 mb-4 rounded border border-blue-100 text-sm">
          已选择0项 <a className="ml-2">清空</a>
        </div>
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

export default RoleManagementPage;
