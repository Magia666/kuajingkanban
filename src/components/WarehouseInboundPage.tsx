import React, { useState } from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select, Form, Tabs } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined, PlusOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface WarehouseInboundData {
  key: string;
  // Based on filter fields, assumed columns for the future
  inboundNumber: string;
  status: string;
  type: string;
  waybillNumber: string;
  createTime: string;
  inboundTime: string;
  sku: string;
  systemCode: string;
}

const WarehouseInboundPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const columns: TableColumnsType<WarehouseInboundData> = [
    { title: '入库单号', dataIndex: 'inboundNumber', key: 'inboundNumber', render: (t) => <span className="font-mono text-blue-600 font-medium">{t}</span> },
    { 
      title: '状态', 
      dataIndex: 'status', 
      key: 'status',
      render: (status: string) => {
        if (status.includes('已完成')) return <span className="px-2 py-0.5 rounded text-xs bg-emerald-100 text-emerald-800">已完成入库</span>;
        if (status.includes('待质检')) return <span className="px-2 py-0.5 rounded text-xs bg-blue-100 text-blue-800">待质检</span>;
        if (status.includes('上架中')) return <span className="px-2 py-0.5 rounded text-xs bg-amber-100 text-amber-800">上架中</span>;
        if (status.includes('异常')) return <span className="px-2 py-0.5 rounded text-xs bg-rose-100 text-rose-800">入库异常</span>;
        return <span className="px-2 py-0.5 rounded text-xs bg-slate-100 text-slate-800">{status}</span>;
      }
    },
    { title: '订单类型', dataIndex: 'type', key: 'type' },
    { title: '运单号', dataIndex: 'waybillNumber', key: 'waybillNumber' },
    { title: '创建时间', dataIndex: 'createTime', key: 'createTime' },
    { title: '入库时间', dataIndex: 'inboundTime', key: 'inboundTime' },
    { title: '商品sku', dataIndex: 'sku', key: 'sku', render: (t) => <span className="font-mono">{t}</span> },
    { title: '系统编码', dataIndex: 'systemCode', key: 'systemCode' },
  ];

  const tabItems: TabsProps['items'] = [
    { key: 'all', label: '全部 (6)' },
    { key: 'pending', label: '待质检/上架 (2)' },
    { key: 'completed', label: '已完成入库 (3)' },
    { key: 'abnormal', label: '异常入库 (1)' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">入库申请</h1>
      
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
        
        <Form layout="inline" className="mt-4 gap-4">
          <Form.Item label="入库单号">
            <Input placeholder="输入IB单号" style={{ width: 180 }} />
          </Form.Item>
          <Form.Item label="状态">
            <Select 
              placeholder="选择状态" 
              style={{ width: 180 }} 
              allowClear
              options={[
                { label: '全部状态', value: 'all' },
                { label: '待质检', value: 'qc' },
                { label: '上架中', value: 'shelving' },
                { label: '已完成入库', value: 'completed' },
                { label: '入库异常', value: 'abnormal' },
              ]}
            />
          </Form.Item>
          <Form.Item label="订单类型">
            <Select 
              placeholder="选择订单类型" 
              style={{ width: 180 }} 
              allowClear
              options={[
                { label: '全部类型', value: 'all' },
                { label: '采购入库', value: 'procure' },
                { label: '退货换标入库', value: 'return' },
                { label: '海外调拨入库', value: 'transfer' },
              ]}
            />
          </Form.Item>
          <Form.Item label="运单号">
            <Input placeholder="运单号" style={{ width: 180 }} />
          </Form.Item>
          <Form.Item label="创建时间">
            <RangePicker style={{ width: 300 }} />
          </Form.Item>
          <Form.Item label="入库时间">
            <RangePicker style={{ width: 300 }} />
          </Form.Item>
          <Form.Item label="商品sku">
            <Input placeholder="商品sku" style={{ width: 180 }} />
          </Form.Item>
          <Form.Item label="系统编码">
            <Input placeholder="系统编码" style={{ width: 180 }} />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" icon={<SearchOutlined />}>查询</Button>
              <Button icon={<ReloadOutlined />}>重置</Button>
              <Button icon={<ExportOutlined />}>导出</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
      
      <Card>
        <div className="mb-4">
          <Button type="primary" icon={<PlusOutlined />}>创建入库单</Button>
        </div>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              inboundNumber: "IB-20241024-001",
              status: "已完成入库",
              type: "采购入库",
              waybillNumber: "SF1428938192831 (顺丰)",
              createTime: "2024-10-23 09:15:00",
              inboundTime: "2024-10-24 11:30:20",
              sku: "3C-ANC08-BLK",
              systemCode: "LOC-3C-ANC08"
            },
            {
              key: "2",
              inboundNumber: "IB-20241024-002",
              status: "待质检",
              type: "采购入库",
              waybillNumber: "ZT772918392102 (中通)",
              createTime: "2024-10-23 14:20:00",
              inboundTime: "2024-10-24 10:15:00",
              sku: "3C-GAN65-SLV",
              systemCode: "LOC-3C-GAN65"
            },
            {
              key: "3",
              inboundNumber: "IB-20241023-018",
              status: "上架中",
              type: "退货换标入库",
              waybillNumber: "KY202408192819 (跨越)",
              createTime: "2024-10-22 16:40:00",
              inboundTime: "2024-10-23 15:10:45",
              sku: "3C-SMW09-TGR",
              systemCode: "LOC-3C-SMW09"
            },
            {
              key: "4",
              inboundNumber: "IB-20241023-015",
              status: "已完成入库",
              type: "采购入库",
              waybillNumber: "JD00291823910 (京东)",
              createTime: "2024-10-22 10:00:00",
              inboundTime: "2024-10-23 09:30:10",
              sku: "BE-HYA50-CRE",
              systemCode: "LOC-BE-HYA50"
            },
            {
              key: "5",
              inboundNumber: "IB-20241022-009",
              status: "入库异常(包装破损)",
              type: "海外调拨入库",
              waybillNumber: "DBL88291039101 (德邦)",
              createTime: "2024-10-21 11:30:00",
              inboundTime: "2024-10-22 14:05:22",
              sku: "HM-THM900-WHT",
              systemCode: "LOC-HM-THM90"
            },
            {
              key: "6",
              inboundNumber: "IB-20241022-004",
              status: "已完成入库",
              type: "采购入库",
              waybillNumber: "SF1829102938102 (顺丰)",
              createTime: "2024-10-21 08:45:00",
              inboundTime: "2024-10-22 10:20:00",
              sku: "HM-DRY18-PUR",
              systemCode: "LOC-HM-DRY18"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default WarehouseInboundPage;
