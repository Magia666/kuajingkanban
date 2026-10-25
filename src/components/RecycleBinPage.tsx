import React, { useState } from 'react';
import { Table, Input, Button, Card, Space, Checkbox, message } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, UndoOutlined } from '@ant-design/icons';

interface RecycleBinData {
  key: string;
  orderNumber: string;
  deletionTime: string;
}

const RecycleBinPage: React.FC = () => {
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);

  const columns: TableColumnsType<RecycleBinData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '订单号', dataIndex: 'orderNumber', key: 'orderNumber' },
    { title: '删除时间', dataIndex: 'deletionTime', key: 'deletionTime', sorter: true },
    { title: '操作', key: 'operation', render: () => <Button type="link" icon={<UndoOutlined />}>恢复</Button> },
  ];

  const dataSource: RecycleBinData[] = [
    {
      key: "1",
      orderNumber: "SP-MY-2410190018K (买家端已自动关闭)",
      deletionTime: "2024-10-24 08:15:30"
    },
    {
      key: "2",
      orderNumber: "TT-ID-2410189912P (测试联调单)",
      deletionTime: "2024-10-23 17:40:12"
    },
    {
      key: "3",
      orderNumber: "LZ-TH-2410174411T (重复拉取已过滤)",
      deletionTime: "2024-10-22 14:20:00"
    },
    {
      key: "4",
      orderNumber: "SP-PH-2410162291S (买家风控未通过)",
      deletionTime: "2024-10-21 11:35:45"
    }
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    setSelectedRowKeys(newSelectedRowKeys);
  };

  const rowSelection = {
    selectedRowKeys,
    onChange: onSelectChange,
  };

  const handleBulkRestore = () => {
    if (selectedRowKeys.length === 0) {
      message.warning('请先选择要恢复的订单');
      return;
    }
    message.success(`成功恢复 ${selectedRowKeys.length} 条订单`);
    setSelectedRowKeys([]);
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">回收站</h1>
      <Card className="mb-4">
        <Space className="w-full justify-start gap-4">
          <Input placeholder="订单号" prefix="订单号:" style={{ width: 300 }} />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
        </Space>
      </Card>
      
      <Card>
        <div className="mb-4">
          <Button type="primary" icon={<UndoOutlined />} onClick={handleBulkRestore}>批量恢复</Button>
        </div>
        <Table 
          rowSelection={rowSelection}
          columns={columns} 
          dataSource={dataSource} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default RecycleBinPage;
