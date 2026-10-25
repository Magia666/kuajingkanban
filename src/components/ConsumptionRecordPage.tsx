import React from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface ConsumptionRecordData {
  key: string;
  transactionNumber: string;
  transactionBalance: number;
  orderNumber: string;
  type: string;
  amount: number;
  currency: string;
  description: string;
  transactionTime: string;
}

const ConsumptionRecordPage: React.FC = () => {
  const columns: TableColumnsType<ConsumptionRecordData> = [
    { title: '交易单号', dataIndex: 'transactionNumber', key: 'transactionNumber' },
    { title: '交易余额', dataIndex: 'transactionBalance', key: 'transactionBalance' },
    { title: '单号', dataIndex: 'orderNumber', key: 'orderNumber' },
    { title: '单型', dataIndex: 'type', key: 'type' },
    { title: '金额', dataIndex: 'amount', key: 'amount' },
    { title: '币种', dataIndex: 'currency', key: 'currency' },
    { title: '描述', dataIndex: 'description', key: 'description' },
    { title: '交易时间', dataIndex: 'transactionTime', key: 'transactionTime' },
    { title: '明细', key: 'detail', render: () => <a>明细</a> },
  ];

  const dataSource: ConsumptionRecordData[] = [
    {
      key: "1",
      transactionNumber: "FEE-20241024-8801",
      transactionBalance: "48,227.50",
      orderNumber: "SP-MY-2410240091K",
      type: "跨境头程运费扣除",
      amount: "-22.50",
      currency: "CNY",
      description: "J&T Express 马来西亚专线国际运费 (实重 0.16kg)",
      transactionTime: "2024-10-24 10:45:00"
    },
    {
      key: "2",
      transactionNumber: "FEE-20241024-8802",
      transactionBalance: "48,250.00",
      orderNumber: "SP-MY-2410240091K",
      type: "打包耗材与贴标费",
      amount: "-3.50",
      currency: "CNY",
      description: "虎门集运仓打包装箱、气泡袋缓冲及Shopee面单贴附",
      transactionTime: "2024-10-24 10:30:12"
    },
    {
      key: "3",
      transactionNumber: "FEE-20241024-8799",
      transactionBalance: "48,253.50",
      orderNumber: "TT-ID-2410240833P",
      type: "1688货盘代采购扣款",
      amount: "-105.00",
      currency: "CNY",
      description: "代采购65W GaN快充头2个 (联创智能制造供应商批次代付)",
      transactionTime: "2024-10-24 09:40:00"
    },
    {
      key: "4",
      transactionNumber: "FEE-20241023-8650",
      transactionBalance: "48,358.50",
      orderNumber: "LZ-TH-2410239102B",
      type: "海外仓一件代发出库费",
      amount: "-8.00",
      currency: "CNY",
      description: "曼谷1号海外仓下架拣货、扫码出库操作费",
      transactionTime: "2024-10-23 16:15:30"
    },
    {
      key: "5",
      transactionNumber: "FEE-20241023-8512",
      transactionBalance: "48,366.50",
      orderNumber: "SP-PH-2410231908S",
      type: "跨境头程运费扣除",
      amount: "-19.50",
      currency: "CNY",
      description: "Ninja Van 菲律宾专线运费 (面单生成预扣)",
      transactionTime: "2024-10-23 11:20:05"
    },
    {
      key: "6",
      transactionNumber: "FEE-20241022-8320",
      transactionBalance: "48,386.00",
      orderNumber: "RET-241022-0008",
      type: "退货质检重新入库费",
      amount: "-5.00",
      currency: "CNY",
      description: "退货包裹外观质检、重新包装及条码打印入库",
      transactionTime: "2024-10-22 15:40:00"
    }
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">消费记录</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
          <Input placeholder="订单号" prefix="订单号:" style={{ width: 250 }} />
          <Select placeholder="类型" style={{ width: 200 }} allowClear />
          <RangePicker />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
          <Button icon={<ExportOutlined />}>导出</Button>
        </Space>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={dataSource} 
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default ConsumptionRecordPage;
