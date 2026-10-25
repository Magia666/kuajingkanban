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
    { title: '渠道名称', dataIndex: 'channelName', key: 'channelName' },
    { title: '目的地', dataIndex: 'destination', key: 'destination' },
    { title: '符合特性', dataIndex: 'features', key: 'features' },
    { title: '时效', dataIndex: 'timeliness', key: 'timeliness' },
    { title: '最大限重', dataIndex: 'maxWeight', key: 'maxWeight' },
    { title: '计算方式', dataIndex: 'calculationMethod', key: 'calculationMethod' },
    { title: '预估费用', dataIndex: 'estimatedCost', key: 'estimatedCost' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">运费试算</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
            <Input placeholder="重量" prefix="重量kg:" style={{ width: 150 }} />
            <Space.Compact>
                <Input placeholder="长" prefix="尺寸:" style={{ width: 80 }} />
                <Input placeholder="宽" style={{ width: 80 }} />
                <Input placeholder="高" style={{ width: 80 }} />
            </Space.Compact>
            <Select placeholder="站点" style={{ width: 150 }} allowClear />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
        </Space>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    channelName: "2024新款智能手表监控防水运动手环",
    destination: "广东省深圳市南山区科兴科学园1栋600室",
    features: "带电",
    timeliness: "2024-05-10 14:10:00",
    maxWeight: "0.50kg",
    calculationMethod: "微信支付",
    estimatedCost: "128.00"
  },
  {
    key: "2",
    channelName: "无线蓝牙耳机降噪入耳式长续航",
    destination: "广东省深圳市南山区科兴科学园2栋601室",
    features: "纯电池",
    timeliness: "2024-05-11 14:15:00",
    maxWeight: "0.70kg",
    calculationMethod: "支付宝",
    estimatedCost: "194.50"
  },
  {
    key: "3",
    channelName: "纯棉短袖T恤男夏季宽松百搭",
    destination: "广东省深圳市南山区科兴科学园3栋602室",
    features: "普货",
    timeliness: "2024-05-12 14:20:00",
    maxWeight: "0.90kg",
    calculationMethod: "信用卡",
    estimatedCost: "261.00"
  },
  {
    key: "4",
    channelName: "户外便携运动水杯大容量防漏",
    destination: "广东省深圳市南山区科兴科学园4栋603室",
    features: "敏感货",
    timeliness: "2024-05-13 14:25:00",
    maxWeight: "1.10kg",
    calculationMethod: "PayPal",
    estimatedCost: "327.50"
  },
  {
    key: "5",
    channelName: "家用多功能颈椎按摩仪护颈",
    destination: "广东省深圳市南山区科兴科学园5栋604室",
    features: "特货",
    timeliness: "2024-05-14 14:30:00",
    maxWeight: "1.30kg",
    calculationMethod: "余额抵扣",
    estimatedCost: "394.00"
  },
  {
    key: "6",
    channelName: "2024新款智能手表监控防水运动手环",
    destination: "广东省深圳市南山区科兴科学园6栋605室",
    features: "带电",
    timeliness: "2024-05-15 14:35:00",
    maxWeight: "1.50kg",
    calculationMethod: "微信支付",
    estimatedCost: "460.50"
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
