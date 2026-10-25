import React, { useState } from 'react';
import { Card, Table, Typography, Space, Button, Input, Tag, Select, Row, Col, Statistic, Tooltip, Switch, message, Dropdown, MenuProps } from 'antd';
import { 
  SyncOutlined, 
  SearchOutlined, 
  CheckCircleOutlined, 
  CloseCircleOutlined,
  ClockCircleOutlined,
  DashboardOutlined,
  SettingOutlined,
  ShopOutlined,
  MoreOutlined,
  HistoryOutlined
} from '@ant-design/icons';

const { Title, Text } = Typography;

interface SyncTask {
  key: string;
  image: string;
  title: string;
  sku: string;
  localStock: number;
  platforms: { name: string; stock: number; status: 'success' | 'failed' | 'pending' }[];
  lastSyncTime: string;
  globalStatus: 'success' | 'failed' | 'processing';
}

export default function InventorySyncPage() {
  const [loading, setLoading] = useState(false);
  const [autoSync, setAutoSync] = useState(true);
  
  const [tasks, setTasks] = useState<SyncTask[]>([
    {
      key: '1',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&q=80',
      title: '2024新款智能手表心率监控防水运动手环蓝牙通话',
      sku: 'SW-2024-BLK',
      localStock: 1250,
      platforms: [
        { name: 'Shopify-US', stock: 1250, status: 'success' },
        { name: 'Amazon-EU', stock: 1250, status: 'success' }
      ],
      lastSyncTime: '2024-03-20 14:30:21',
      globalStatus: 'success'
    },
    {
      key: '2',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&q=80',
      title: '无线蓝牙耳机降噪入耳式超长续航游戏电竞耳麦',
      sku: 'EAR-BT-001',
      localStock: 80,
      platforms: [
        { name: 'Shopee-TW', stock: 80, status: 'success' },
        { name: 'Lazada-TH', stock: 0, status: 'failed' }
      ],
      lastSyncTime: '2024-03-20 15:05:12',
      globalStatus: 'failed'
    },
    {
      key: '3',
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=150&q=80',
      title: '经典款全红运动跑鞋透气减震男款',
      sku: 'SHOE-R-42',
      localStock: 320,
      platforms: [
        { name: 'Shopify-US', stock: 300, status: 'pending' }
      ],
      lastSyncTime: '2024-03-20 15:10:00',
      globalStatus: 'processing'
    }
  ]);

  const handleSyncSelected = () => {
    setLoading(true);
    message.loading({ content: '正在向各大平台推送库存...', key: 'sync' });
    setTimeout(() => {
      setLoading(false);
      message.success({ content: '库存同步指令已下发！', key: 'sync' });
    }, 1500);
  };

  const getPlatformIcon = (name: string) => {
    if (name.includes('Shopify')) return <ShopOutlined className="text-green-600" />;
    if (name.includes('Amazon')) return <ShopOutlined className="text-orange-500" />;
    return <ShopOutlined className="text-blue-500" />;
  };

  const columns = [
    {
      title: '商品规格(SKU)',
      dataIndex: 'title',
      key: 'title',
      width: 350,
      render: (text: string, record: SyncTask) => (
        <div className="flex gap-4 items-center">
          <img src={record.image} alt={text} className="w-12 h-12 object-cover border rounded shadow-sm" />
          <div className="flex flex-col">
            <Text className="font-medium truncate w-48" title={text}>{text}</Text>
            <Text type="secondary" className="font-mono text-xs">{record.sku}</Text>
          </div>
        </div>
      )
    },
    {
      title: '本地可用库存',
      dataIndex: 'localStock',
      key: 'localStock',
      render: (stock: number) => (
        <span className="font-bold text-slate-700">{stock}</span>
      )
    },
    {
      title: '平台库存同步状态',
      key: 'platforms',
      render: (_: any, record: SyncTask) => (
        <div className="flex flex-col gap-2">
          {record.platforms.map((p, idx) => (
            <div key={idx} className="flex items-center gap-2 text-sm">
              <span className="w-24 truncate text-slate-600 flex items-center gap-1">
                {getPlatformIcon(p.name)} {p.name}
              </span>
              <span className="font-mono w-12 text-right">{p.stock}</span>
              {p.status === 'success' && <CheckCircleOutlined className="text-emerald-500" />}
              {p.status === 'failed' && (
                <Tooltip title="API响应超时或授权失效">
                  <CloseCircleOutlined className="text-red-500 cursor-pointer" />
                </Tooltip>
              )}
              {p.status === 'pending' && <SyncOutlined spin className="text-blue-500" />}
            </div>
          ))}
        </div>
      )
    },
    {
      title: '最后同步时间',
      dataIndex: 'lastSyncTime',
      key: 'lastSyncTime',
      render: (time: string) => <Text type="secondary" className="text-sm">{time}</Text>
    },
    {
      title: '操作',
      key: 'action',
      render: (_: any, record: SyncTask) => (
        <Space size="middle">
          <Button type="link" size="small" icon={<SyncOutlined />}>立即同步</Button>
          <Button type="text" size="small" icon={<HistoryOutlined className="text-slate-400" />} />
        </Space>
      )
    }
  ];

  const StatCard = ({ title, value, type, suffix = '' }: any) => {
    let colorClass = 'text-slate-700';
    let bgClass = 'bg-slate-50';
    if (type === 'success') { colorClass = 'text-emerald-600'; bgClass = 'bg-emerald-50'; }
    if (type === 'warning') { colorClass = 'text-orange-600'; bgClass = 'bg-orange-50'; }
    if (type === 'error') { colorClass = 'text-red-600'; bgClass = 'bg-red-50'; }

    return (
      <Card size="small" className={`border-0 ${bgClass}`}>
        <Statistic 
          title={<span className="text-slate-500">{title}</span>} 
          value={value} 
          suffix={suffix}
          styles={{ content: { color: colorClass === 'text-slate-700' ? '#334155' : colorClass === 'text-emerald-600' ? '#059669' : colorClass === 'text-orange-600' ? '#ea580c' : '#dc2626', fontWeight: 600 } }} 
        />
      </Card>
    );
  };

  return (
    <div className="max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8 animate-fade-in">
      <div className="flex justify-between items-end mb-8">
        <div>
          <Title level={2} className="!mb-1">库存同步</Title>
          <Text type="secondary" className="text-base">将本地仓储库存实时/定时同步至各个销售渠道，防止超卖或断货。</Text>
        </div>
        <Space size="middle" className="bg-white p-2 rounded-lg border border-slate-200">
          <span className="text-slate-600 font-medium ml-2">自动同步策略</span>
          <Switch checked={autoSync} onChange={setAutoSync} checkedChildren="开启" unCheckedChildren="关闭" />
          <Button type="text" icon={<SettingOutlined />} />
        </Space>
      </div>

      <Row gutter={[16, 16]} className="mb-8">
        <Col xs={12} sm={6}><StatCard title="监控中 SKU 总数" value={3452} type="default" /></Col>
        <Col xs={12} sm={6}><StatCard title="今日已同步次数" value={12502} type="success" /></Col>
        <Col xs={12} sm={6}><StatCard title="同步异常 SKU" value={12} type="error" /></Col>
        <Col xs={12} sm={6}><StatCard title="平均同步延迟" value={2.5} suffix="秒" type="warning" /></Col>
      </Row>

      <Card className="shadow-sm border-slate-200">
        <div className="mb-4 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-4">
            <Input 
              placeholder="输入 SKU / 商品名称" 
              prefix={<SearchOutlined className="text-slate-400" />} 
              className="w-64 bg-slate-50" 
              allowClear
            />
            <Select defaultValue="all" className="w-32">
              <Select.Option value="all">所有状态</Select.Option>
              <Select.Option value="failed">同步失败</Select.Option>
              <Select.Option value="diff">库存不一致</Select.Option>
            </Select>
            <Select defaultValue="all_store" className="w-40">
              <Select.Option value="all_store">所有销售渠道</Select.Option>
              <Select.Option value="shopify">Shopify US</Select.Option>
              <Select.Option value="amazon">Amazon EU</Select.Option>
            </Select>
          </div>
          
          <div className="flex gap-3">
            <Button icon={<ClockCircleOutlined />}>同步日志</Button>
            <Button 
              type="primary" 
              icon={<SyncOutlined spin={loading} />} 
              onClick={handleSyncSelected} 
              loading={loading}
              className="bg-blue-600 hover:bg-blue-500"
            >
              一键手工同步
            </Button>
          </div>
        </div>

        <Table 
          columns={columns} 
          dataSource={tasks} 
          rowSelection={{ type: 'checkbox' }}
          pagination={{ placement: 'bottomRight', defaultPageSize: 10 }}
          className="border border-slate-100 rounded-lg overflow-hidden"
          rowClassName="hover:bg-slate-50 transition-colors"
        />
      </Card>
    </div>
  );
}
