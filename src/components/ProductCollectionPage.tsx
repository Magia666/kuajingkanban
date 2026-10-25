import React, { useState, useEffect } from 'react';
import { Card, Input, Button, Table, Space, Tag, Tabs, Typography, Alert, Row, Col, Tooltip, message, Progress, Badge, Statistic } from 'antd';
import { 
  LinkOutlined, 
  ChromeOutlined, 
  SyncOutlined, 
  CheckCircleOutlined, 
  CloseCircleOutlined,
  SearchOutlined,
  DownloadOutlined,
  ShoppingOutlined,
  DeleteOutlined,
  InfoCircleOutlined,
  AppstoreAddOutlined
} from '@ant-design/icons';

const { TextArea } = Input;
const { Title, Text } = Typography;

interface ProductTask {
  key: string;
  image: string;
  title: string;
  platform: string;
  status: 'pending' | 'processing' | 'success' | 'failed';
  time: string;
  url: string;
  progress?: number;
}

export default function ProductCollectionPage() {
  const [activeTab, setActiveTab] = useState('1');
  const [loading, setLoading] = useState(false);
  const [urlsInput, setUrlsInput] = useState('');
  const [validUrlsCount, setValidUrlsCount] = useState(0);
  const [tasks, setTasks] = useState<ProductTask[]>([
    {
      key: '1',
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=150&q=80',
      title: '2024新款智能手表心率监控防水运动手环蓝牙通话',
      platform: '1688',
      status: 'success',
      time: '2024-03-20 14:30:21',
      url: 'https://detail.1688.com/offer/123456789.html',
    },
    {
      key: '2',
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=150&q=80',
      title: '无线蓝牙耳机降噪入耳式超长续航游戏电竞耳麦',
      platform: '淘宝',
      status: 'processing',
      progress: 45,
      time: '2024-03-20 15:01:05',
      url: 'https://item.taobao.com/item.htm?id=987654321',
    },
    {
      key: '3',
      image: 'https://via.placeholder.com/150?text=Error',
      title: '未知商品 (链接解析失败)',
      platform: '速卖通',
      status: 'failed',
      time: '2024-03-20 10:12:00',
      url: 'https://nl.aliexpress.com/item/11111111.html',
    },
  ]);

  useEffect(() => {
    // Basic validation to count how many non-empty lines are there
    const lines = urlsInput.split('\n').filter(line => line.trim() !== '');
    let count = 0;
    lines.forEach(line => {
      if (line.includes('http://') || line.includes('https://')) {
        count++;
      }
    });
    setValidUrlsCount(count);
  }, [urlsInput]);

  const startCollection = () => {
    if (validUrlsCount === 0) {
      message.warning('请先输入有效的商品链接！');
      return;
    }
    if (validUrlsCount > 50) {
      message.error('每次最多支持导入50个链接，请分批处理！');
      return;
    }

    setLoading(true);
    message.loading({ content: '正在启动采集任务...', key: 'collect' });
    
    setTimeout(() => {
      setLoading(false);
      setUrlsInput('');
      message.success({ content: `成功创建 ${validUrlsCount} 个采集任务！`, key: 'collect' });
      
      // Mock adding new tasks
      const newTasks = urlsInput.split('\n').filter(line => line.trim() !== '').map((url, idx) => ({
        key: `new-${Date.now()}-${idx}`,
        image: 'https://via.placeholder.com/150?text=Parsing',
        title: '正在解析商品信息...',
        platform: url.includes('1688') ? '1688' : url.includes('taobao') ? '淘宝' : '其他',
        status: 'processing' as const,
        progress: 10,
        time: new Date().toLocaleString('zh-CN', { hour12: false }),
        url: url.trim(),
      }));
      setTasks(prev => [...newTasks, ...prev]);
    }, 1500);
  };

  const getPlatformTag = (platform: string) => {
    switch(platform) {
      case '1688': return <Tag color="orange">1688</Tag>;
      case '淘宝': return <Tag color="volcano">淘宝</Tag>;
      case '速卖通': return <Tag color="red">速卖通</Tag>;
      default: return <Tag color="blue">{platform}</Tag>;
    }
  };

  const columns = [
    {
      title: '商品信息',
      dataIndex: 'title',
      key: 'title',
      width: 400,
      render: (text: string, record: ProductTask) => (
        <div className="flex gap-4">
          <img src={record.image} alt="product" className="w-16 h-16 object-cover border rounded shadow-sm" />
          <div className="flex flex-col justify-between py-1">
            <Tooltip title={text}>
              <div className="text-slate-800 font-medium truncate w-64 cursor-pointer hover:text-blue-600 transition-colors">{text}</div>
            </Tooltip>
            <div className="flex items-center gap-2 mt-1">
              {getPlatformTag(record.platform)}
              <a href={record.url} target="_blank" rel="noreferrer" className="text-xs text-blue-500 hover:underline flex items-center gap-1">
                <LinkOutlined /> 打开原网页
              </a>
            </div>
          </div>
        </div>
      ),
    },
    {
      title: '采集状态',
      key: 'status',
      dataIndex: 'status',
      width: 200,
      render: (status: string, record: ProductTask) => {
        if (status === 'success') {
          return <Badge status="success" text={<span className="text-emerald-600 font-medium">采集成功</span>} />;
        }
        if (status === 'processing') {
          return (
            <div className="flex flex-col gap-1 w-32">
              <Badge status="processing" text={<span className="text-blue-600">正在疯狂采集中...</span>} />
              <Progress percent={record.progress || 0} size="small" status="active" />
            </div>
          );
        }
        if (status === 'failed') {
          return (
            <Tooltip title="解析网页超时或商品已下架">
              <Badge status="error" text={<span className="text-red-500">采集失败 <InfoCircleOutlined className="text-xs ml-1" /></span>} />
            </Tooltip>
          );
        }
        return <Badge status="default" text="等待采集" />;
      },
    },
    {
      title: '提交时间',
      dataIndex: 'time',
      key: 'time',
      width: 180,
      render: (time: string) => <span className="text-slate-500">{time}</span>
    },
    {
      title: '操作',
      key: 'action',
      width: 200,
      render: (_: any, record: ProductTask) => (
        <Space size="middle">
          {record.status === 'success' ? (
            <Button type="primary" size="small" icon={<AppstoreAddOutlined />} className="bg-blue-600 text-xs">
              认领到商品库
            </Button>
          ) : record.status === 'failed' ? (
            <Button size="small" icon={<SyncOutlined />} className="text-xs">
              重试
            </Button>
          ) : record.status === 'processing' ? (
             <span className="text-slate-400 text-xs">处理中...</span>
          ) : null}
          <Button type="text" danger size="small" icon={<DeleteOutlined />} />
        </Space>
      ),
    },
  ];

  const filteredTasks = tasks.filter(task => {
    if (activeTab === '1') return true;
    if (activeTab === '2') return task.status === 'success';
    if (activeTab === '3') return task.status === 'processing';
    if (activeTab === '4') return task.status === 'failed';
    return true;
  });

  const successCount = tasks.filter(t => t.status === 'success').length;
  const processingCount = tasks.filter(t => t.status === 'processing').length;
  const failedCount = tasks.filter(t => t.status === 'failed').length;

  return (
    <div className="max-w-[1600px] mx-auto p-4 md:p-6 lg:p-8 animate-fade-in">
      <div className="mb-8">
        <Title level={2} className="!mb-1">产品采集</Title>
        <Text type="secondary" className="text-base">从电商平台复制商品链接，一键抓取图文及规格信息，快速丰富您的分销商品库。</Text>
      </div>

      <Row gutter={[24, 24]} className="mb-8">
        <Col xs={24} lg={16}>
          <Card className="h-full shadow-sm hover:shadow-md transition-shadow border-slate-200">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
                <LinkOutlined />
              </div>
              <Title level={5} className="!mb-0 !mt-0">链接智能抓取</Title>
            </div>
            
            <Alert 
              title="支持采集平台" 
              description="目前完美支持: 1688、淘宝、天猫、拼多多、速卖通(AliExpress)、Amazon。其他平台正在陆续开放中。"
              type="info" 
              showIcon 
              className="mb-4 bg-blue-50 border-blue-100"
            />
            
            <div className="relative">
              <TextArea 
                rows={6} 
                value={urlsInput}
                onChange={e => setUrlsInput(e.target.value)}
                placeholder="请输入商品链接，支持批量采集，多个链接请使用【回车换行】隔开。&#10;例如：&#10;https://detail.1688.com/offer/123456789.html&#10;https://item.taobao.com/item.htm?id=987654321"
                className="mb-4 bg-slate-50 hover:bg-white focus:bg-white transition-colors text-sm font-mono p-3 rounded-lg"
              />
              <div className="absolute right-3 bottom-8 text-xs text-slate-400">
                {validUrlsCount}/50 链接
              </div>
            </div>
            
            <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg border border-slate-100">
              <div className="flex items-center gap-2">
                <span className="text-slate-600">当前识别到</span>
                <Tag color={validUrlsCount > 0 ? "blue" : "default"} className="px-3 rounded-full text-sm font-medium">
                  {validUrlsCount}
                </Tag>
                <span className="text-slate-600">个有效链接</span>
              </div>
              <Button 
                type="primary" 
                size="large" 
                icon={<SyncOutlined spin={loading} />} 
                onClick={startCollection} 
                loading={loading}
                className="bg-blue-600 hover:bg-blue-500 shadow-sm px-6 rounded-md"
              >
                {loading ? '正在抓取中...' : '开始批量采集'}
              </Button>
            </div>
          </Card>
        </Col>
        <Col xs={24} lg={8}>
          <Card className="h-full shadow-sm bg-gradient-to-br from-indigo-50 to-blue-50 border-indigo-100 hover:shadow-md transition-shadow relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500 opacity-5 rounded-bl-full"></div>
            <div className="flex flex-col h-full">
              <div className="flex items-center gap-3 mb-6 relative z-10">
                 <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-blue-600 text-2xl">
                    <ChromeOutlined />
                 </div>
                 <div>
                    <Title level={5} className="!mb-0 !mt-0 text-slate-800">官方采集插件</Title>
                    <Text className="text-slate-500 text-xs text-emerald-600">v2.1.0 已发布</Text>
                 </div>
              </div>
              
              <div className="flex-1 relative z-10">
                <p className="text-slate-600 mb-4 text-sm leading-relaxed">
                  强烈建议安装我们的官方 Chrome 浏览器插件。在您浏览淘宝、1688等平台时，商品详情页右下角会自动出现 <strong className="text-blue-600 font-medium">「一键采集」</strong> 按钮。
                </p>
                <ul className="text-sm text-slate-600 space-y-2 mb-6">
                  <li className="flex items-start gap-2"><CheckCircleOutlined className="text-emerald-500 mt-1" /> 自动规避平台防爬虫拦截</li>
                  <li className="flex items-start gap-2"><CheckCircleOutlined className="text-emerald-500 mt-1" /> 采集成功率提升至 99.9%</li>
                  <li className="flex items-start gap-2"><CheckCircleOutlined className="text-emerald-500 mt-1" /> 支持一键抓取全套SKU信息</li>
                </ul>
              </div>

              <div className="flex gap-3 mt-auto relative z-10">
                <Button type="primary" icon={<DownloadOutlined />} className="bg-blue-600 flex-1 shadow-sm h-10">
                  立即安装插件
                </Button>
                <Button className="h-10 text-blue-600 border-blue-200 hover:bg-blue-50">
                  使用教程
                </Button>
              </div>
            </div>
          </Card>
        </Col>
      </Row>

      <Row gutter={[16, 16]} className="mb-6">
        <Col xs={12} sm={6}>
          <Card size="small" className="bg-slate-50 border-0">
             <Statistic title={<span className="text-slate-500">今日采集总数</span>} value={tasks.length} styles={{ content: { color: '#334155', fontWeight: 600 } }} />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card size="small" className="bg-emerald-50 border-0">
             <Statistic title={<span className="text-emerald-600">采集成功</span>} value={successCount} styles={{ content: { color: '#059669', fontWeight: 600 } }} />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card size="small" className="bg-blue-50 border-0">
             <Statistic title={<span className="text-blue-600">正在采集中</span>} value={processingCount} styles={{ content: { color: '#2563eb', fontWeight: 600 } }} />
          </Card>
        </Col>
        <Col xs={12} sm={6}>
          <Card size="small" className="bg-red-50 border-0">
             <Statistic title={<span className="text-red-600">采集失败</span>} value={failedCount} styles={{ content: { color: '#dc2626', fontWeight: 600 } }} />
          </Card>
        </Col>
      </Row>

      <Card className="shadow-sm border-slate-200">
        <Tabs 
          activeKey={activeTab} 
          onChange={setActiveTab}
          size="large"
          className="mb-2"
          items={[
            { key: '1', label: `全部任务 (${tasks.length})` },
            { key: '2', label: `采集成功 (${successCount})` },
            { key: '3', label: `采集中 (${processingCount})` },
            { key: '4', label: `采集失败 (${failedCount})` },
          ]}
        />
        
        <div className="mb-4 flex flex-wrap gap-4 items-center justify-between">
          <div className="flex gap-4">
            <Input 
              placeholder="输入商品标题/原链接搜索" 
              prefix={<SearchOutlined className="text-slate-400" />} 
              className="w-72 bg-slate-50" 
              allowClear
            />
            <Button type="default" className="text-slate-600 border-slate-300 hover:text-blue-600 hover:border-blue-400">搜索记录</Button>
          </div>
          
          <div className="flex gap-3">
             <Button type="primary" icon={<ShoppingOutlined />} className="bg-slate-800 hover:bg-slate-700">
              批量认领到商品库
            </Button>
            <Button danger icon={<DeleteOutlined />}>清除失败记录</Button>
          </div>
        </div>

        <Table 
          columns={columns} 
          dataSource={filteredTasks} 
          rowSelection={{ type: 'checkbox' }}
          pagination={{ placement: 'bottomRight', showSizeChanger: true, defaultPageSize: 10 }}
          className="border border-slate-100 rounded-lg overflow-hidden"
          rowClassName="hover:bg-slate-50 transition-colors"
        />
      </Card>
    </div>
  );
}
