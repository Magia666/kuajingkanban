import React from 'react';
import { Table, Input, Button, Card } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, PlusOutlined } from '@ant-design/icons';

interface RefusalSignData {
  key: string;
  createTime: string;
  refusalOrderNumber: string;
  originalWarehouse: string;
  status: string;
  expressName: string;
  remark: string;
}

const RefusalSignPage: React.FC = () => {
  const columns: TableColumnsType<RefusalSignData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '创建时间', dataIndex: 'createTime', key: 'createTime' },
    { title: '拒签单号', dataIndex: 'refusalOrderNumber', key: 'refusalOrderNumber' },
    { title: '原件仓库', dataIndex: 'originalWarehouse', key: 'originalWarehouse' },
    { title: '处理状态', dataIndex: 'status', key: 'status' },
    { title: '快递名称', dataIndex: 'expressName', key: 'expressName' },
    { title: '备注', dataIndex: 'remark', key: 'remark' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">申请拒签</h1>
      
      <Card className="mb-4">
        <div className="flex flex-wrap gap-4 items-center">
            <Input placeholder="拒签单号" prefix="拒签单号:" style={{ width: 250 }} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
        </div>
      </Card>
      
      <Card>
        <Button type="primary" icon={<PlusOutlined />} className="mb-4">新增</Button>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              createTime: "2024-10-24 09:30:15",
              refusalOrderNumber: "REF-241024-001",
              originalWarehouse: "东莞虎门跨境集运仓",
              status: "待海外仓接收",
              expressName: "J&T Express (JT6002918201MY)",
              remark: "买家拒收：收件人反馈未订购此包裹，末端派送员拍照拒收"
            },
            {
              key: "2",
              createTime: "2024-10-23 15:45:00",
              refusalOrderNumber: "REF-241023-009",
              originalWarehouse: "曼谷1号海外仓 (TH-01)",
              status: "已退回海外仓",
              expressName: "Flash Express (TH92019482710)",
              remark: "连续3次派送无人接听，包裹到达自提点逾期未取，自动转拒退"
            },
            {
              key: "3",
              createTime: "2024-10-23 11:20:40",
              refusalOrderNumber: "REF-241023-005",
              originalWarehouse: "深圳宝安保税总仓",
              status: "质检重新上架",
              expressName: "Ninja Van (NVPH8839102931)",
              remark: "买家要求修改派送日期超期，商品退回马尼拉退货暂存区，质检完好"
            },
            {
              key: "4",
              createTime: "2024-10-22 17:10:00",
              refusalOrderNumber: "REF-241022-014",
              originalWarehouse: "雪兰莪海外仓 (MY-01)",
              status: "已作废弃处理",
              expressName: "Ninja Van (NVSG7739102832)",
              remark: "外包装严重挤压变形破损，经与货主卖家协商一致就地销毁"
            },
            {
              key: "5",
              createTime: "2024-10-21 14:05:22",
              refusalOrderNumber: "REF-241021-008",
              originalWarehouse: "东莞虎门跨境集运仓",
              status: "已退回海外仓",
              expressName: "J&T Express (JTVN4492817293)",
              remark: "买家地址属偏远岛屿超区无法派送，转退至河内分拣中心"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default RefusalSignPage;
