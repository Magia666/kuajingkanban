import React from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select, Alert } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined, InfoCircleOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface InventoryAgeData {
  key: string;
  productInfo: string;
  productDetails: string;
  initialEndingStock: string;
  inboundOutboundStock: string;
  stock: string;
  lessThan30: string;
  days30to90: string;
  days90to180: string;
  moreThan180: string;
}

const InventoryAgePage: React.FC = () => {
  const columns: TableColumnsType<InventoryAgeData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '商品信息', dataIndex: 'productInfo', key: 'productInfo' },
    { title: '产品信息', dataIndex: 'productDetails', key: 'productDetails' },
    { title: '期初库存/期末库存', dataIndex: 'initialEndingStock', key: 'initialEndingStock' },
    { title: '入库数量/出库数量/出库包裹', dataIndex: 'inboundOutboundStock', key: 'inboundOutboundStock' },
    { title: '库存', dataIndex: 'stock', key: 'stock' },
    { title: '<30天', dataIndex: 'lessThan30', key: 'lessThan30' },
    { title: '>30-90天', dataIndex: 'days30to90', key: 'days30to90' },
    { title: '>90-180天', dataIndex: 'days90to180', key: 'days90to180' },
    { title: '>180天', dataIndex: 'moreThan180', key: 'moreThan180' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">库龄统计</h1>
      
      <Alert
        title="数据统计截止时间为前一天"
        description="期初库存/期末库存、入库数量/出库数量/出库包裹，按开始时间与结束时间范围统计，默认查询时间为当月"
        type="info"
        showIcon
        icon={<InfoCircleOutlined />}
        className="mb-4"
      />
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
          <div className="flex items-center gap-2">
            <span className="text-gray-600">仓库:</span>
            <Select style={{ width: 200 }} allowClear />
          </div>
          <Input placeholder="系统编码" prefix="系统编码:" style={{ width: 250 }} />
          <Input placeholder="SKU" prefix="SKU:" style={{ width: 250 }} />
          <div className="flex items-center gap-2">
            <span className="text-gray-600">日期:</span>
            <RangePicker />
          </div>
          <Input placeholder="用户名" prefix="用户名:" style={{ width: 200 }} />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
          <Button icon={<ExportOutlined />}>导出</Button>
        </Space>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    productInfo: "2024新款智能手表监控防水运动手环",
    productDetails: "2024新款智能手表监控防水运动手环",
    initialEndingStock: 10,
    inboundOutboundStock: 10,
    stock: 10,
    lessThan30: 50,
    days30to90: 50,
    days90to180: 50,
    moreThan180: 50
  },
  {
    key: "2",
    productInfo: "无线蓝牙耳机降噪入耳式长续航",
    productDetails: "无线蓝牙耳机降噪入耳式长续航",
    initialEndingStock: 25,
    inboundOutboundStock: 25,
    stock: 25,
    lessThan30: 60,
    days30to90: 60,
    days90to180: 60,
    moreThan180: 60
  },
  {
    key: "3",
    productInfo: "纯棉短袖T恤男夏季宽松百搭",
    productDetails: "纯棉短袖T恤男夏季宽松百搭",
    initialEndingStock: 40,
    inboundOutboundStock: 40,
    stock: 40,
    lessThan30: 70,
    days30to90: 70,
    days90to180: 70,
    moreThan180: 70
  },
  {
    key: "4",
    productInfo: "户外便携运动水杯大容量防漏",
    productDetails: "户外便携运动水杯大容量防漏",
    initialEndingStock: 55,
    inboundOutboundStock: 55,
    stock: 55,
    lessThan30: 80,
    days30to90: 80,
    days90to180: 80,
    moreThan180: 80
  },
  {
    key: "5",
    productInfo: "家用多功能颈椎按摩仪护颈",
    productDetails: "家用多功能颈椎按摩仪护颈",
    initialEndingStock: 70,
    inboundOutboundStock: 70,
    stock: 70,
    lessThan30: 90,
    days30to90: 90,
    days90to180: 90,
    moreThan180: 90
  },
  {
    key: "6",
    productInfo: "2024新款智能手表监控防水运动手环",
    productDetails: "2024新款智能手表监控防水运动手环",
    initialEndingStock: 85,
    inboundOutboundStock: 85,
    stock: 85,
    lessThan30: 100,
    days30to90: 100,
    days90to180: 100,
    moreThan180: 100
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
          scroll={{ x: 1500 }}
        />
        <div className="mt-4 text-gray-500 text-sm">
            合计 | 数量:  | 库存体积:  m³ | {'<'}30天:m³ | {'>'}30-90天:  m³ | {'>'}90-180天:  m³ | {'>'}180天:  m³
        </div>
      </Card>
    </div>
  );
};

export default InventoryAgePage;
