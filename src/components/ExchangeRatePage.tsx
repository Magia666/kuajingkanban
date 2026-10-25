import React, { useState } from 'react';
import { Table, Button, Card, Select, Space, Alert, Tabs } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined } from '@ant-design/icons';

interface ExchangeRateData {
  key: string;
  currencyCode: string;
  currencyName: string;
  baseRate: number;
  floatingRate: number;
  formula: string;
  updateTime: string;
}

const ExchangeRatePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('rate');

  const columns: TableColumnsType<ExchangeRateData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { 
      title: '币种代码', 
      dataIndex: 'currencyCode', 
      key: 'currencyCode',
      render: (val) => <span className="font-bold text-slate-800 font-mono">{val}</span>
    },
    { title: '币种全称', dataIndex: 'currencyName', key: 'currencyName' },
    { 
      title: '基准买入汇率', 
      dataIndex: 'baseRate', 
      key: 'baseRate',
      render: (val) => <span className="font-semibold text-indigo-600">{Number(val).toFixed(4)}</span>
    },
    { 
      title: '结算浮动溢价(%)', 
      dataIndex: 'floatingRate', 
      key: 'floatingRate',
      render: (val) => <span className="text-slate-600">+{val}%</span>
    },
    { title: '折算人民币核算公式', dataIndex: 'formula', key: 'formula', render: (val) => <code className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-700">{val}</code> },
    { title: '最新同步时间', dataIndex: 'updateTime', key: 'updateTime' },
    { title: '操作', key: 'operation', render: () => <Space><a className="text-blue-600">调整汇率</a><a className="text-slate-500">同步央行</a></Space> },
  ];

  const tabItems: TabsProps['items'] = [
    { key: 'rate', label: '跨境币种汇率设置' },
    { key: 'cost', label: '物流与仓储成本系数' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">汇率设置</h1>
      
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
      </Card>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
            <Select 
              placeholder="选择币种" 
              style={{ width: 220 }} 
              allowClear 
              options={[
                { label: '全部币种', value: 'all' },
                { label: '美元 (USD)', value: 'USD' },
                { label: '马来西亚林吉特 (MYR)', value: 'MYR' },
                { label: '泰铢 (THB)', value: 'THB' },
                { label: '印尼卢比 (IDR)', value: 'IDR' },
                { label: '菲律宾比索 (PHP)', value: 'PHP' },
                { label: '新加坡元 (SGD)', value: 'SGD' },
                { label: '越南盾 (VND)', value: 'VND' },
              ]}
            />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>同步国际即时外汇</Button>
            <Button type="primary" icon={<PlusOutlined />}>添加自定义币种</Button>
        </Space>
      </Card>
      
      <Alert 
        title="汇率结算说明" 
        description="汇率数据主要用于：利润统计、多店铺销售额报表换算及货盘跨境一件代发成本定价。系统每日凌晨0点自动抓取中国银行折算价。" 
        type="info" 
        showIcon 
        className="mb-4" 
      />
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              currencyCode: "MYR",
              currencyName: "马来西亚林吉特 (令吉)",
              baseRate: 1.6420,
              floatingRate: 1.5,
              formula: "1 MYR ≈ 1.6420 CNY",
              updateTime: "2024-10-24 10:00:00"
            },
            {
              key: "2",
              currencyCode: "THB",
              currencyName: "泰铢",
              baseRate: 0.2135,
              floatingRate: 1.2,
              formula: "100 THB ≈ 21.35 CNY",
              updateTime: "2024-10-24 10:00:00"
            },
            {
              key: "3",
              currencyCode: "IDR",
              currencyName: "印度尼西亚卢比 (印尼盾)",
              baseRate: 0.000456,
              floatingRate: 2.0,
              formula: "10,000 IDR ≈ 4.56 CNY",
              updateTime: "2024-10-24 10:00:00"
            },
            {
              key: "4",
              currencyCode: "PHP",
              currencyName: "菲律宾比索",
              baseRate: 0.1255,
              floatingRate: 1.5,
              formula: "100 PHP ≈ 12.55 CNY",
              updateTime: "2024-10-24 10:00:00"
            },
            {
              key: "5",
              currencyCode: "SGD",
              currencyName: "新加坡元",
              baseRate: 5.3850,
              floatingRate: 0.8,
              formula: "1 SGD ≈ 5.3850 CNY",
              updateTime: "2024-10-24 10:00:00"
            },
            {
              key: "6",
              currencyCode: "USD",
              currencyName: "美元",
              baseRate: 7.2350,
              floatingRate: 0.5,
              formula: "1 USD ≈ 7.2350 CNY",
              updateTime: "2024-10-24 10:00:00"
            },
            {
              key: "7",
              currencyCode: "VND",
              currencyName: "越南盾",
              baseRate: 0.000284,
              floatingRate: 2.5,
              formula: "10,000 VND ≈ 2.84 CNY",
              updateTime: "2024-10-24 10:00:00"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default ExchangeRatePage;
