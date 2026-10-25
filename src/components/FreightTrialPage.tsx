import React from 'react';
import { Table, Input, Button, Card, Select, Space } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined } from '@ant-design/icons';

interface FreightTrialData {
  key: string;
  channelName: string;
  destination: string;
  features: string;
  timeliness: string;
  maxWeight: string;
  calculationMethod: string;
  estimatedCost: string;
}

const FreightTrialPage: React.FC = () => {
  const columns: TableColumnsType<FreightTrialData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { 
      title: '渠道名称', 
      dataIndex: 'channelName', 
      key: 'channelName',
      render: (val) => <span className="font-medium text-slate-800">{val}</span>
    },
    { 
      title: '目的国/站点', 
      dataIndex: 'destination', 
      key: 'destination',
      render: (val) => <span className="text-slate-700">{val}</span>
    },
    { 
      title: '符合特性', 
      dataIndex: 'features', 
      key: 'features',
      render: (val) => {
        const color = val === '普货' ? 'blue' : val === '带电' ? 'gold' : val === '特货' ? 'purple' : 'cyan';
        return <span className={`px-2 py-0.5 text-xs rounded border border-${color}-200 bg-${color}-50 text-${color}-700 font-medium`}>{val}</span>;
      }
    },
    { 
      title: '时效', 
      dataIndex: 'timeliness', 
      key: 'timeliness',
      render: (val) => <span className="text-emerald-700 font-medium">{val}</span>
    },
    { title: '最大限重', dataIndex: 'maxWeight', key: 'maxWeight' },
    { title: '计重规则', dataIndex: 'calculationMethod', key: 'calculationMethod' },
    { 
      title: '预估费用', 
      dataIndex: 'estimatedCost', 
      key: 'estimatedCost',
      render: (val) => <span className="font-bold text-red-600">¥{val}</span>
    },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">运费试算</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
            <Input placeholder="重量" prefix="重量kg:" defaultValue="0.25" style={{ width: 150 }} />
            <Space.Compact>
                <Input placeholder="长" prefix="尺寸(cm):" defaultValue="15" style={{ width: 90 }} />
                <Input placeholder="宽" defaultValue="10" style={{ width: 80 }} />
                <Input placeholder="高" defaultValue="5" style={{ width: 80 }} />
            </Space.Compact>
            <Select 
              placeholder="目的站点" 
              defaultValue="MY" 
              style={{ width: 160 }} 
              options={[
                { label: '马来西亚 (MY)', value: 'MY' },
                { label: '泰国 (TH)', value: 'TH' },
                { label: '菲律宾 (PH)', value: 'PH' },
                { label: '新加坡 (SG)', value: 'SG' },
                { label: '印度尼西亚 (ID)', value: 'ID' },
                { label: '越南 (VN)', value: 'VN' },
              ]}
            />
            <Button type="primary" icon={<SearchOutlined />}>试算运费</Button>
        </Space>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              channelName: "J&T Express 马来西亚极速专线",
              destination: "马来西亚 (西马核心区)",
              features: "带电",
              timeliness: "3 - 5 个工作日",
              maxWeight: "30.00kg",
              calculationMethod: "首重 50g (¥12.0) / 续重 50g (¥1.8)",
              estimatedCost: "19.20"
            },
            {
              key: "2",
              channelName: "Flash Express 泰国本土直达专线",
              destination: "泰国 (曼谷大都会圈)",
              features: "普货",
              timeliness: "2 - 4 个工作日",
              maxWeight: "20.00kg",
              calculationMethod: "实重计费 (抛比 8000)",
              estimatedCost: "16.50"
            },
            {
              key: "3",
              channelName: "Ninja Van 菲律宾马尼拉特快",
              destination: "菲律宾 (大马尼拉 NCR)",
              features: "普货",
              timeliness: "4 - 6 个工作日",
              maxWeight: "15.00kg",
              calculationMethod: "首重 100g / 续重 100g 阶梯计费",
              estimatedCost: "21.00"
            },
            {
              key: "4",
              channelName: "Ninja Van 新加坡当日达保税专线",
              destination: "新加坡 (全岛通达)",
              features: "敏感货",
              timeliness: "2 - 3 个工作日",
              maxWeight: "10.00kg",
              calculationMethod: "首重 500g (¥28.0) 续重 500g",
              estimatedCost: "28.00"
            },
            {
              key: "5",
              channelName: "J&T Cargo 印度尼西亚海空联运",
              destination: "印度尼西亚 (雅加达及爪哇岛)",
              features: "特货",
              timeliness: "5 - 8 个工作日",
              maxWeight: "50.00kg",
              calculationMethod: "实重与体积重(6000)取大计费",
              estimatedCost: "34.50"
            },
            {
              key: "6",
              channelName: "Shopee SLS 官方跨境标快",
              destination: "马来西亚 (全境)",
              features: "带电",
              timeliness: "4 - 7 个工作日",
              maxWeight: "25.00kg",
              calculationMethod: "平台统一结算协议价",
              estimatedCost: "17.80"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default FreightTrialPage;
