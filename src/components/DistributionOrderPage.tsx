import React, { useState } from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select, Form, Row, Col } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface DistributionOrderData {
  key: string;
  orderNumber: string;
  systemCode: string;
  sku: string;
  transactionDate: string;
  quantity: number;
  amount: number | string;
  orderStatus: string;
  paymentStatus: string;
  store: string;
  supplier: string;
  distributor: string;
  warehouse: string;
}

const DistributionOrderPage: React.FC = () => {
  const columns: TableColumnsType<DistributionOrderData> = [
    { title: '订单编号', dataIndex: 'orderNumber', key: 'orderNumber', render: (val) => <span className="font-semibold text-slate-800">{val}</span> },
    { title: '系统编码', dataIndex: 'systemCode', key: 'systemCode' },
    { title: 'SKU', dataIndex: 'sku', key: 'sku', render: (val) => <code className="text-xs bg-slate-100 px-1 py-0.5 rounded text-slate-700">{val}</code> },
    { title: '交易日期', dataIndex: 'transactionDate', key: 'transactionDate' },
    { title: '分销数量', dataIndex: 'quantity', key: 'quantity', render: (val) => <span className="font-medium text-slate-700">{val} 件</span> },
    { title: '结算金额', dataIndex: 'amount', key: 'amount', render: (val) => <span className="font-semibold text-slate-800">¥{Number(val).toFixed(2)}</span> },
    { 
      title: '订单状态', 
      dataIndex: 'orderStatus', 
      key: 'orderStatus',
      render: (val) => {
        const isDone = val === '已出库';
        return <span className={`px-2 py-0.5 text-xs rounded border ${isDone ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>{val}</span>;
      }
    },
    { 
      title: '支付状态', 
      dataIndex: 'paymentStatus', 
      key: 'paymentStatus',
      render: (val) => {
        const map: Record<string, string> = {
          '已支付': 'bg-emerald-50 text-emerald-700 border-emerald-200',
          '冻结中': 'bg-blue-50 text-blue-700 border-blue-200',
          '结算中': 'bg-amber-50 text-amber-700 border-amber-200',
        };
        return <span className={`px-2 py-0.5 text-xs rounded border ${map[val] || 'bg-slate-50 text-slate-600'}`}>{val}</span>;
      }
    },
    { title: '分销店铺', dataIndex: 'store', key: 'store' },
    { title: '货源供应商', dataIndex: 'supplier', key: 'supplier' },
    { title: '分销商商户', dataIndex: 'distributor', key: 'distributor' },
    { title: '出货仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '操作', key: 'operation', render: () => <a className="text-indigo-600 hover:text-indigo-800 text-xs font-medium">查看凭证</a> },
  ];

  const renderFilterSection = (label: string, items: string[]) => (
    <div className="flex flex-wrap gap-4 items-center">
      <span className="font-medium text-gray-600 w-16">{label}:</span>
      <Space className="flex-wrap">
        {items.map(item => <Button key={item} type="text" size="small">{item}</Button>)}
      </Space>
    </div>
  );

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">分销订单</h1>
      <Card className="mb-4">
        <div className="space-y-4">
          {renderFilterSection('状态', ['全部', '待出库', '已出库'])}
          {renderFilterSection('支付状态', ['全部', '冻结中', '已支付', '已退款'])}
          
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-600 w-16">发货时间:</span>
            <RangePicker />
          </div>
          
          <Form layout="inline" className="gap-4">
            <Form.Item label="搜索信息">
              <Space.Compact>
                <Select defaultValue="订单编号" style={{ width: 120 }}>
                  <Select.Option value="订单编号">订单编号</Select.Option>
                </Select>
                <Input placeholder="批量搜索用逗号进行隔开" style={{ width: 250 }} />
                <Select defaultValue="精确查询" style={{ width: 120 }}>
                  <Select.Option value="精确查询">精确查询</Select.Option>
                </Select>
              </Space.Compact>
            </Form.Item>
            <Form.Item>
              <Input placeholder="供应商" style={{ width: 150 }} />
            </Form.Item>
            <Form.Item>
              <Input placeholder="分销商" style={{ width: 150 }} />
            </Form.Item>
            <Form.Item>
              <Space>
                <Button type="primary" icon={<SearchOutlined />}>查询</Button>
                <Button icon={<ReloadOutlined />}>重置</Button>
                <Button icon={<ExportOutlined />}>导出</Button>
              </Space>
            </Form.Item>
          </Form>
        </div>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              orderNumber: "DIS-20241024-8801",
              systemCode: "LOC-3C-ANC08",
              sku: "3C-ANC08-BLK",
              transactionDate: "2024-10-24 10:30:15",
              quantity: 2,
              amount: 178.00,
              orderStatus: "已出库",
              paymentStatus: "已支付",
              store: "Shopee 马来西亚1号店",
              supplier: "深圳市联创声学科技有限公司",
              distributor: "广州汇智跨境电商合伙企业",
              warehouse: "深圳宝安保税总仓"
            },
            {
              key: "2",
              orderNumber: "DIS-20241024-8802",
              systemCode: "LOC-3C-GAN65",
              sku: "3C-GAN65-SLV",
              transactionDate: "2024-10-24 10:12:00",
              quantity: 5,
              amount: 262.50,
              orderStatus: "已出库",
              paymentStatus: "已支付",
              store: "TikTok 印尼官方数码店",
              supplier: "东莞市安普能源智能制造厂",
              distributor: "杭州云海出海网络科技",
              warehouse: "东莞虎门跨境集运仓"
            },
            {
              key: "3",
              orderNumber: "DIS-20241024-8803",
              systemCode: "LOC-3C-SMW09",
              sku: "3C-SMW09-TGR",
              transactionDate: "2024-10-24 09:40:22",
              quantity: 1,
              amount: 138.00,
              orderStatus: "待出库",
              paymentStatus: "冻结中",
              store: "Lazada 泰国潮流馆",
              supplier: "深圳市领航智显数码有限公司",
              distributor: "深圳翼展跨境贸易商行",
              warehouse: "曼谷1号海外仓 (TH-01)"
            },
            {
              key: "4",
              orderNumber: "DIS-20241023-7921",
              systemCode: "LOC-BE-HYA50",
              sku: "BE-HYA50-CRE",
              transactionDate: "2024-10-23 21:15:40",
              quantity: 8,
              amount: 294.40,
              orderStatus: "已出库",
              paymentStatus: "已支付",
              store: "Shopee 菲律宾美妆店",
              supplier: "广州润雅生物科技有限公司",
              distributor: "义乌晨星供应链管理中心",
              warehouse: "东莞虎门跨境集运仓"
            },
            {
              key: "5",
              orderNumber: "DIS-20241023-7890",
              systemCode: "LOC-HM-THM90",
              sku: "HM-THM900-WHT",
              transactionDate: "2024-10-23 16:50:11",
              quantity: 3,
              amount: 135.00,
              orderStatus: "已出库",
              paymentStatus: "已支付",
              store: "Shopee 新加坡生活馆",
              supplier: "永康市拓步五金工贸有限公司",
              distributor: "杭州云海出海网络科技",
              warehouse: "雪兰莪海外仓 (MY-01)"
            },
            {
              key: "6",
              orderNumber: "DIS-20241023-7744",
              systemCode: "LOC-HM-DRY18",
              sku: "HM-DRY18-PUR",
              transactionDate: "2024-10-23 14:10:05",
              quantity: 1,
              amount: 68.00,
              orderStatus: "待出库",
              paymentStatus: "结算中",
              store: "TikTok 越南潮电优选",
              supplier: "佛山市顺德区科创电器制造厂",
              distributor: "广州汇智跨境电商合伙企业",
              warehouse: "深圳宝安保税总仓"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default DistributionOrderPage;
