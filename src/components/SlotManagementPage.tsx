import React, { useState } from 'react';
import { Card, Button, Tabs, Typography, Table, Tag, Progress, Space, Row, Col, Statistic, Badge } from 'antd';
import type { TabsProps, TableColumnsType } from 'antd';
import { PlusOutlined, CheckCircleOutlined, ShopOutlined, AlertOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

interface SlotItem {
  key: string;
  slotCode: string;
  warehouse: string;
  zone: string;
  capacity: string;
  usedRate: number;
  monthlyFee: number;
  expireDate: string;
  status: 'active' | 'expiring' | 'idle';
  skus: string;
}

const SlotManagementPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('slot');

  const columns: TableColumnsType<SlotItem> = [
    { 
      title: '库位编号', 
      dataIndex: 'slotCode', 
      key: 'slotCode',
      render: (val) => <code className="font-bold text-slate-800 bg-slate-100 px-2 py-0.5 rounded">{val}</code>
    },
    { title: '所在仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '库区类型', dataIndex: 'zone', key: 'zone' },
    { title: '库位容积', dataIndex: 'capacity', key: 'capacity' },
    { 
      title: '当前占用率', 
      dataIndex: 'usedRate', 
      key: 'usedRate',
      render: (val) => (
        <div className="w-32">
          <Progress percent={val} size="small" status={val > 85 ? 'exception' : 'normal'} />
        </div>
      )
    },
    { title: '存放主要SKU', dataIndex: 'skus', key: 'skus' },
    { 
      title: '月租金', 
      dataIndex: 'monthlyFee', 
      key: 'monthlyFee',
      render: (val) => <span className="font-semibold text-slate-800">{val === 0 ? '免费专享' : `¥${val.toFixed(2)}/月`}</span>
    },
    { title: '下次扣费/到期日', dataIndex: 'expireDate', key: 'expireDate' },
    { 
      title: '租用状态', 
      dataIndex: 'status', 
      key: 'status',
      render: (status) => {
        if (status === 'active') return <Tag color="green">已租用生效中</Tag>;
        if (status === 'expiring') return <Tag color="orange">7天内到期</Tag>;
        return <Tag color="default">待租用闲置</Tag>;
      }
    },
    { 
      title: '操作', 
      key: 'op', 
      render: (_, record) => (
        <Space size="small">
          <a className="text-blue-600">续租</a>
          <a className="text-slate-500">调拨移位</a>
        </Space>
      ) 
    }
  ];

  const dataSource: SlotItem[] = [
    {
      key: "1",
      slotCode: "DG-A-02-14",
      warehouse: "东莞虎门跨境集运仓",
      zone: "A区 · 恒温小件轻型货架",
      capacity: "2.4 m³ (限重 500kg)",
      usedRate: 72,
      skus: "3C-ANC08-BLK (真无线耳机 1,240件)",
      monthlyFee: 0,
      expireDate: "2026-12-31 (首年免租)",
      status: "active"
    },
    {
      key: "2",
      slotCode: "DG-B-01-08",
      warehouse: "东莞虎门跨境集运仓",
      zone: "B区 · 数码标品高位货架",
      capacity: "4.8 m³ (限重 1,200kg)",
      usedRate: 88,
      skus: "3C-GAN65-SLV (快充头 2,850件)",
      monthlyFee: 120.00,
      expireDate: "2026-11-15",
      status: "active"
    },
    {
      key: "3",
      slotCode: "SZ-A-04-03",
      warehouse: "深圳宝安保税总仓",
      zone: "A区 · 高值智能穿戴货位",
      capacity: "1.8 m³ (限重 300kg)",
      usedRate: 45,
      skus: "3C-SMW09-TGR (运动手表 680件)",
      monthlyFee: 90.00,
      expireDate: "2026-10-31",
      status: "expiring"
    },
    {
      key: "4",
      slotCode: "MY-01-D4-02",
      warehouse: "马来西亚雪兰莪海外仓",
      zone: "D区 · 本土一件代发分拣架",
      capacity: "3.6 m³ (限重 800kg)",
      usedRate: 60,
      skus: "HM-THM900-WHT (保温杯 1,820件)",
      monthlyFee: 180.00,
      expireDate: "2026-12-15",
      status: "active"
    },
    {
      key: "5",
      slotCode: "TH-01-A2-11",
      warehouse: "泰国曼谷1号海外仓",
      zone: "A区 · 曼谷极速达现货架",
      capacity: "2.0 m³ (限重 400kg)",
      usedRate: 52,
      skus: "HM-DRY18-PUR (吹风机 940件)",
      monthlyFee: 150.00,
      expireDate: "2026-12-01",
      status: "active"
    }
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-bold mb-1">仓位管理</h1>
          <p className="text-xs text-slate-500">管理国内集运总仓与东南亚海外仓的专属货架库位，实时监控库位占用与租金扣缴。</p>
        </div>
        <Button type="primary" icon={<PlusOutlined />}>申请新库位</Button>
      </div>
      
      <Row gutter={[16, 16]} className="mb-4">
        <Col span={6}>
          <Card size="small" className="shadow-xs">
            <Statistic title={<span className="text-xs text-slate-500">已租用专属库位数</span>} value={5} suffix="个" valueStyle={{ color: '#2563eb', fontWeight: 600 }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card size="small" className="shadow-xs">
            <Statistic title={<span className="text-xs text-slate-500">平均库位使用率</span>} value={63.4} suffix="%" valueStyle={{ color: '#059669', fontWeight: 600 }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card size="small" className="shadow-xs">
            <Statistic title={<span className="text-xs text-slate-500">本月仓位总月租</span>} value={540.00} precision={2} prefix="¥" valueStyle={{ color: '#d97706', fontWeight: 600 }} />
          </Card>
        </Col>
        <Col span={6}>
          <Card size="small" className="shadow-xs">
            <Statistic title={<span className="text-xs text-slate-500">免租优惠期库位</span>} value={1} suffix="个 (虎门A区)" valueStyle={{ color: '#7c3aed', fontWeight: 600 }} />
          </Card>
        </Col>
      </Row>

      <Card className="shadow-sm">
        <Table 
          columns={columns} 
          dataSource={dataSource} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default SlotManagementPage;
