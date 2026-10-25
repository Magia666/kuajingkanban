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
            <Select 
              style={{ width: 200 }} 
              placeholder="选择仓库"
              allowClear 
              options={[
                { label: '全部仓库', value: 'all' },
                { label: '深圳宝安保税总仓', value: 'SZ' },
                { label: '东莞虎门跨境集运仓', value: 'DG' },
                { label: '曼谷1号海外仓 (TH-01)', value: 'TH' },
                { label: '雪兰莪海外仓 (MY-01)', value: 'MY' },
                { label: '义乌国际小商品中转仓', value: 'YW' },
              ]}
            />
          </div>
          <Input placeholder="系统编码" prefix="系统编码:" style={{ width: 220 }} />
          <Input placeholder="SKU" prefix="SKU:" style={{ width: 220 }} />
          <div className="flex items-center gap-2">
            <span className="text-gray-600">统计日期:</span>
            <RangePicker />
          </div>
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
              productInfo: "智选高配版真无线主动降噪蓝牙耳机",
              productDetails: "3C-ANC08-BLK / 曜石黑-标准版 (0.16kg)",
              initialEndingStock: "1,200 / 1,240",
              inboundOutboundStock: "500 / 460 / 380件",
              stock: "1,240",
              lessThan30: "780",
              days30to90: "320",
              days90to180: "110",
              moreThan180: "30"
            },
            {
              key: "2",
              productInfo: "65W GaN氮化镓三口超级快充头",
              productDetails: "3C-GAN65-SLV / 银灰折叠款 (0.22kg)",
              initialEndingStock: "2,600 / 2,850",
              inboundOutboundStock: "1,000 / 750 / 620件",
              stock: "2,850",
              lessThan30: "1,850",
              days30to90: "720",
              days90to180: "220",
              moreThan180: "60"
            },
            {
              key: "3",
              productInfo: "智能高清心率血氧监测运动手表",
              productDetails: "3C-SMW09-TGR / 钛空灰-氟橡胶 (0.18kg)",
              initialEndingStock: "650 / 680",
              inboundOutboundStock: "300 / 270 / 240件",
              stock: "680",
              lessThan30: "390",
              days30to90: "180",
              days90to180: "85",
              moreThan180: "25"
            },
            {
              key: "4",
              productInfo: "玻尿酸密集水润舒缓修护面霜 (50g)",
              productDetails: "BE-HYA50-CRE / 滋润型 (0.21kg)",
              initialEndingStock: "3,200 / 3,500",
              inboundOutboundStock: "2,000 / 1,700 / 1,350件",
              stock: "3,500",
              lessThan30: "2,400",
              days30to90: "850",
              days90to180: "200",
              moreThan180: "50"
            },
            {
              key: "5",
              productInfo: "304不锈钢大容量双饮保温吸管杯",
              productDetails: "HM-THM900-WHT / 900ml哑光奶白 (0.48kg)",
              initialEndingStock: "1,750 / 1,820",
              inboundOutboundStock: "800 / 730 / 610件",
              stock: "1,820",
              lessThan30: "1,120",
              days30to90: "480",
              days90to180: "170",
              moreThan180: "50"
            },
            {
              key: "6",
              productInfo: "超轻防泼水双肩徒步旅行折叠包",
              productDetails: "OD-BP20L-ARM / 20L军绿色 (0.15kg)",
              initialEndingStock: "3,900 / 4,120",
              inboundOutboundStock: "1,500 / 1,280 / 1,020件",
              stock: "4,120",
              lessThan30: "2,650",
              days30to90: "1,100",
              days90to180: "310",
              moreThan180: "60"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
          scroll={{ x: 1500 }}
        />
        <div className="mt-4 p-3 bg-slate-50 border border-slate-200 rounded text-slate-700 text-sm flex flex-wrap gap-4 items-center justify-between">
          <span className="font-semibold text-slate-800">在库库龄指标汇总：</span>
          <div className="space-x-4">
            <span>总在库数量: <strong className="text-slate-900">14,210</strong> 件</span>
            <span>总在库体积: <strong className="text-slate-900">12.65</strong> m³</span>
            <span>&lt;30天 (健康): <strong className="text-emerald-600">9,190 件 (8.18 m³)</strong></span>
            <span>30-90天 (正常): <strong className="text-blue-600">3,650 件 (3.26 m³)</strong></span>
            <span>90-180天 (预警): <strong className="text-amber-600">1,095 件 (0.98 m³)</strong></span>
            <span>&gt;180天 (滞销): <strong className="text-rose-600">275 件 (0.23 m³)</strong></span>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default InventoryAgePage;
