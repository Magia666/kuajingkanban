import React, { useState } from 'react';
import { Table, Input, Button, Space, Card, Alert, Tabs } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined, InfoCircleOutlined } from '@ant-design/icons';

interface CompensationClaimData {
  key: string;
  warehouse: string;
  orderNumber: string;
  claimType: string;
  claimDescription: string;
  applicationAmount: number;
  actualAmount: number;
  status: string;
  rejectionReason: string;
  applyTime: string;
}

const CompensationClaimPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('claim');

  const columns: TableColumnsType<CompensationClaimData> = [
    { title: '索赔仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '单号', dataIndex: 'orderNumber', key: 'orderNumber' },
    { title: '索赔类型', dataIndex: 'claimType', key: 'claimType' },
    { title: '赔付说明', dataIndex: 'claimDescription', key: 'claimDescription' },
    { title: '申请赔付金额(¥)', dataIndex: 'applicationAmount', key: 'applicationAmount' },
    { title: '实际赔付金额(¥)', dataIndex: 'actualAmount', key: 'actualAmount' },
    { title: '处理状态', dataIndex: 'status', key: 'status' },
    { title: '拒绝赔付原因', dataIndex: 'rejectionReason', key: 'rejectionReason' },
    { title: '申请时间', dataIndex: 'applyTime', key: 'applyTime' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  const topTabs: TabsProps['items'] = [
    { key: 'home', label: '首页' },
    { key: 'claim', label: '索赔工单' },
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
      <Tabs activeKey={activeTab} onChange={setActiveTab} items={topTabs} className="mb-4 bg-white px-4" />
      
      <Alert
        title="赔付说明"
        description="此功能应用于您跟客服人员沟通且符合仓库赔付标准的订单发起索赔登记，例如:仓库错发漏发、丢件等 | 不符合赔付条件的，一律不予理赔"
        type="info"
        showIcon
        icon={<InfoCircleOutlined />}
        className="mb-4"
      />

      <Card className="mb-4">
        <div className="space-y-4">
          {renderFilterSection('处理状态', ['全部', '待处理', '已处理', '已拒绝'])}
          {renderFilterSection('申请时间', ['全部', '今天', '昨天', '近7天', '近15天', '近30天'])}
          
          <div className="flex items-center gap-4">
            <span className="font-medium text-gray-600 w-16">单号:</span>
            <Input placeholder="请填写单号" style={{ width: 250 }} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
          </div>
        </div>
      </Card>
      
      <Card>
        <div className="mb-4">
          <Button type="primary" icon={<PlusOutlined />}>申请赔付</Button>
        </div>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              warehouse: "东莞虎门跨境集运仓",
              orderNumber: "SP-MY-2410188901K",
              claimType: "物流中转丢件",
              claimDescription: "国际干线转运途中物流轨迹超过15天未更新，承运商官方出具丢件证明函",
              applicationAmount: 188.00,
              actualAmount: 188.00,
              status: "已赔付到账",
              rejectionReason: "-",
              applyTime: "2024-10-24 10:30:00"
            },
            {
              key: "2",
              warehouse: "深圳宝安保税总仓",
              orderNumber: "TT-ID-2410153321P",
              claimType: "外包装破损内件漏液",
              claimDescription: "国际航空段货物受外力挤压导致瓶身破裂，买家开箱视频留存并当场拒收",
              applicationAmount: 110.00,
              actualAmount: 110.00,
              status: "已赔付到账",
              rejectionReason: "-",
              applyTime: "2024-10-23 15:10:20"
            },
            {
              key: "3",
              warehouse: "曼谷1号海外仓 (TH-01)",
              orderNumber: "LZ-TH-2410194409T",
              claimType: "仓库错发漏发",
              claimDescription: "智能手表订单漏放定制氟橡胶表带配件，补发产生跨境国际小包二次运费",
              applicationAmount: 35.00,
              actualAmount: 35.00,
              status: "已赔付到账",
              rejectionReason: "-",
              applyTime: "2024-10-22 11:45:00"
            },
            {
              key: "4",
              warehouse: "雪兰莪海外仓 (MY-01)",
              orderNumber: "SP-SG-2410175512D",
              claimType: "末端妥投超时违约",
              claimDescription: "特快专线承诺3个工作日妥投，实际耗时8个工作日，申请专线时效延误险理赔",
              applicationAmount: 25.00,
              actualAmount: 0.00,
              status: "已驳回",
              rejectionReason: "目的地受台风不可抗力极端天气交通管制影响，符合承运商免责条款",
              applyTime: "2024-10-21 16:20:00"
            },
            {
              key: "5",
              warehouse: "东莞虎门跨境集运仓",
              orderNumber: "SP-PH-2410219904S",
              claimType: "安检扣押罚没",
              claimDescription: "海关安检抽查带电类产品，因航司临时调整单票电芯容量上限遭扣押",
              applicationAmount: 156.00,
              actualAmount: 0.00,
              status: "待服务商审核",
              rejectionReason: "-",
              applyTime: "2024-10-24 09:15:30"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default CompensationClaimPage;
