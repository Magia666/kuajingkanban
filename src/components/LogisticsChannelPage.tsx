import React from 'react';
import { Card, Input, Table } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface LogisticsChannelData {
  key: string;
  channelCode: string;
  channelName: string;
  carrier: string;
  destinations: string;
  leadTime: string;
  billingRule: string;
  status: string;
}

const LogisticsChannelPage: React.FC = () => {
  const columns: TableColumnsType<LogisticsChannelData> = [
    { title: '渠道代码', dataIndex: 'channelCode', key: 'channelCode', render: (val) => <code className="text-xs font-semibold text-slate-800 bg-slate-100 px-1.5 py-0.5 rounded">{val}</code> },
    { title: '渠道名称', dataIndex: 'channelName', key: 'channelName', render: (val) => <span className="font-medium text-slate-800">{val}</span> },
    { title: '物流承运商', dataIndex: 'carrier', key: 'carrier' },
    { title: '覆盖国家/地区', dataIndex: 'destinations', key: 'destinations' },
    { title: '平均妥投时效', dataIndex: 'leadTime', key: 'leadTime', render: (val) => <span className="text-emerald-700 font-medium">{val}</span> },
    { title: '计重收费标准', dataIndex: 'billingRule', key: 'billingRule' },
    { 
      title: '状态', 
      dataIndex: 'status', 
      key: 'status',
      render: (val) => <span className={`px-2 py-0.5 text-xs rounded border ${val === '正常运营' ? 'bg-emerald-50 text-emerald-700 border-emerald-200' : 'bg-amber-50 text-amber-700 border-amber-200'}`}>{val}</span>
    },
    { 
      title: '操作', 
      key: 'operation', 
      render: () => (
        <span className="space-x-3 text-xs">
          <a className="text-indigo-600 hover:text-indigo-800 font-medium">费率模板</a>
          <a className="text-slate-600 hover:text-slate-800 font-medium">配置</a>
        </span>
      ) 
    },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">物流商管理</h1>
      
      <Card className="mb-4">
        <Input 
          placeholder="搜索渠道名称或代码" 
          prefix={<SearchOutlined />} 
          style={{ width: 280 }} 
        />
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              channelCode: "JT-MY-EXP",
              channelName: "J&T Express 马来西亚极速专线",
              carrier: "J&T Express",
              destinations: "马来西亚 (西马 / 东马全境)",
              leadTime: "3 - 5 个工作日",
              billingRule: "首重 50g / 续重 50g 计费",
              status: "正常运营"
            },
            {
              key: "2",
              channelCode: "FLASH-TH-STD",
              channelName: "Flash Express 泰国本土直达专线",
              carrier: "Flash Express",
              destinations: "泰国 (曼谷核心区次日达)",
              leadTime: "2 - 4 个工作日",
              billingRule: "实重计费 (抛比 8000)",
              status: "正常运营"
            },
            {
              key: "3",
              channelCode: "NV-SG-PRI",
              channelName: "Ninja Van 新加坡特快专线",
              carrier: "Ninja Van",
              destinations: "新加坡全岛",
              leadTime: "2 - 3 个工作日",
              billingRule: "首重 100g 续重 100g",
              status: "正常运营"
            },
            {
              key: "4",
              channelCode: "SLS-SEA-STD",
              channelName: "Shopee SLS 跨境官方集运专线",
              carrier: "Shopee Logistics",
              destinations: "MY / TH / PH / VN / ID / SG",
              leadTime: "4 - 7 个工作日",
              billingRule: "平台官方结算汇率与重量",
              status: "正常运营"
            },
            {
              key: "5",
              channelCode: "SF-INTL-SEA",
              channelName: "顺丰国际东南亚电商标快",
              carrier: "顺丰速运",
              destinations: "马来西亚 / 新加坡 / 泰国",
              leadTime: "3 - 4 个工作日",
              billingRule: "实重与体积重(6000)取大",
              status: "正常运营"
            },
            {
              key: "6",
              channelCode: "DHL-ECOM-GLB",
              channelName: "DHL eCommerce 全球跨境挂号小包",
              carrier: "DHL",
              destinations: "欧美全球 220+ 国家及地区",
              leadTime: "7 - 12 个工作日",
              billingRule: "0-2kg 标准轻小件费率",
              status: "正常运营"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default LogisticsChannelPage;
