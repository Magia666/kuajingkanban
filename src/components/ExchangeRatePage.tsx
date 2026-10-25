import React, { useState } from 'react';
import { Table, Button, Card, Select, Space, Alert, Tabs } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined } from '@ant-design/icons';

interface ExchangeRateData {
  key: string;
  rule: string;
  formula: string;
}

const ExchangeRatePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('rate');

  const columns: TableColumnsType<ExchangeRateData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '汇率规则', dataIndex: 'rule', key: 'rule' },
    { title: '公式', dataIndex: 'formula', key: 'formula' },
    { title: '操作', key: 'operation', render: () => <Space><a>编辑</a><a>删除</a></Space> },
  ];

  const tabItems: TabsProps['items'] = [
    { key: 'rate', label: '汇率设置' },
    { key: 'cost', label: '成本设置' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">汇率设置</h1>
      
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={tabItems} />
      </Card>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
            <Select placeholder="币种" style={{ width: 300 }} allowClear />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
            <Button type="primary" icon={<PlusOutlined />}>新增</Button>
        </Space>
      </Card>
      
      <Alert 
        title="汇率设置主要用于：利润统计时的汇率换算" 
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
    rule: "固定汇率",
    formula: "固定汇率"
  },
  {
    key: "2",
    rule: "实时浮动汇率",
    formula: "实时浮动汇率"
  },
  {
    key: "3",
    rule: "平台结算汇率",
    formula: "平台结算汇率"
  },
  {
    key: "4",
    rule: "固定汇率",
    formula: "固定汇率"
  },
  {
    key: "5",
    rule: "实时浮动汇率",
    formula: "实时浮动汇率"
  },
  {
    key: "6",
    rule: "平台结算汇率",
    formula: "平台结算汇率"
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
