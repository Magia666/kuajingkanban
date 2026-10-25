import React, { useState } from 'react';
import { Tabs, Table, Input, Button, Select, Space, Card, DatePicker, Checkbox } from 'antd';
import type { TabsProps, TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined, DownOutlined } from '@ant-design/icons';

interface OrderData {
  key: string;
  orderNumber: string;
  platform: string;
  customer: string;
  productSummary: string;
  status: string;
  total: string;
  orderTime: string;
}

const OrderManagementPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const columns: TableColumnsType<OrderData> = [
    { 
      title: '订单编号', 
      dataIndex: 'orderNumber', 
      key: 'orderNumber',
      render: (val, record) => (
        <div>
          <span className="font-semibold text-slate-800">{val}</span>
          <div className="text-xs text-slate-400">{record.orderTime}</div>
        </div>
      )
    },
    { 
      title: '店铺平台', 
      dataIndex: 'platform', 
      key: 'platform',
      render: (val) => <span className="inline-block px-2 py-0.5 text-xs rounded bg-slate-100 text-slate-700 font-medium">{val}</span>
    },
    { 
      title: '买家信息', 
      dataIndex: 'customer', 
      key: 'customer',
      render: (text) => <span className="text-slate-700">{text}</span>
    },
    { 
      title: '商品明细', 
      dataIndex: 'productSummary', 
      key: 'productSummary',
      render: (text) => <span className="text-xs text-slate-600 line-clamp-1">{text}</span>
    },
    { 
      title: '订单状态', 
      dataIndex: 'status', 
      key: 'status',
      render: (status) => {
        const colorMap: Record<string, string> = {
          '待审核': 'bg-amber-50 text-amber-700 border-amber-200',
          '待打印面单': 'bg-blue-50 text-blue-700 border-blue-200',
          '待拣货': 'bg-indigo-50 text-indigo-700 border-indigo-200',
          '采购在途': 'bg-purple-50 text-purple-700 border-purple-200',
          '待发货': 'bg-emerald-50 text-emerald-700 border-emerald-200',
        };
        return (
          <span className={`inline-block px-2.5 py-0.5 rounded text-xs border ${colorMap[status] || 'bg-slate-50 text-slate-600'}`}>
            {status}
          </span>
        );
      }
    },
    { 
      title: '订单金额', 
      dataIndex: 'total', 
      key: 'total',
      render: (val) => <span className="font-semibold text-slate-800">{val}</span>
    },
    { 
      title: '操作', 
      dataIndex: 'operation', 
      key: 'operation', 
      render: () => (
        <Space size="middle">
          <a className="text-indigo-600 hover:text-indigo-800 text-xs font-medium">审核订单</a>
          <a className="text-slate-600 hover:text-slate-800 text-xs font-medium">打印面单</a>
        </Space>
      ) 
    },
  ];

  const dataSource: OrderData[] = [
    {
      key: "1",
      orderNumber: "SP-MY-2410240091K",
      platform: "Shopee 马来西亚",
      customer: "Nurul Hidayah (Selangor, MY)",
      productSummary: "智选ANC降噪蓝牙耳机(曜石黑) x 1",
      status: "待打印面单",
      total: "RM 58.90 (¥89.00)",
      orderTime: "2024-10-24 10:14:22"
    },
    {
      key: "2",
      orderNumber: "TT-ID-2410240833P",
      platform: "TikTok Shop 印尼",
      customer: "Siti Rahmawati (Jakarta, ID)",
      productSummary: "65W GaN氮化镓三口超级快充头(银灰) x 2",
      status: "待审核",
      total: "IDR 230,000 (¥105.00)",
      orderTime: "2024-10-24 10:02:15"
    },
    {
      key: "3",
      orderNumber: "LZ-TH-2410241920B",
      platform: "Lazada 泰国",
      customer: "Somchai Prasert (Bangkok, TH)",
      productSummary: "智能高清心率血氧监测运动手表 x 1",
      status: "待拣货",
      total: "THB 699.00 (¥138.00)",
      orderTime: "2024-10-24 09:45:00"
    },
    {
      key: "4",
      orderNumber: "SP-PH-2410243109M",
      platform: "Shopee 菲律宾",
      customer: "Maria Christine Santos (Manila, PH)",
      productSummary: "玻尿酸密集水润舒缓修护面霜(50g) x 3",
      status: "采购在途",
      total: "PHP 880.00 (¥110.40)",
      orderTime: "2024-10-24 09:28:44"
    },
    {
      key: "5",
      orderNumber: "SP-SG-2410245082D",
      platform: "Shopee 新加坡",
      customer: "Kelvin Tan (Singapore)",
      productSummary: "304不锈钢双饮保温杯(900ml哑光白) x 1",
      status: "待发货",
      total: "SGD 12.80 (¥68.50)",
      orderTime: "2024-10-24 08:55:10"
    },
    {
      key: "6",
      orderNumber: "TT-VN-2410247712E",
      platform: "TikTok Shop 越南",
      customer: "Nguyen Thi Mai (Ho Chi Minh, VN)",
      productSummary: "负离子便携轻量折叠电吹风机 x 1",
      status: "待打印面单",
      total: "VND 310,000 (¥88.00)",
      orderTime: "2024-10-24 08:30:19"
    },
    {
      key: "7",
      orderNumber: "SP-MY-2410248831F",
      platform: "Shopee 马来西亚",
      customer: "Muhammad Amirul (Johor, MY)",
      productSummary: "超轻防泼水双肩徒步旅行折叠包(军绿) x 2",
      status: "待审核",
      total: "RM 39.80 (¥59.80)",
      orderTime: "2024-10-24 08:12:05"
    }
  ];

  const topTabs: TabsProps['items'] = [
    { key: 'all', label: '待处理订单' },
  ];

  const subTabs: TabsProps['items'] = [
    { key: 'all', label: '全部' },
    { key: 'pending', label: '待获取面单' },
    { key: 'received', label: '已获取面单' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <Card className="mb-4">
        <Tabs activeKey={activeTab} items={topTabs} className="mb-4" />
        
        <div className="space-y-4">
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium text-gray-600">系统状态:</span>
            <Space className="flex-wrap">
              {['待审核', '已自发', '已搁置', '待支付', '全部'].map(item => <Button key={item} type="text" size="small">{item}</Button>)}
            </Space>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium text-gray-600">订单状态:</span>
            <Space className="flex-wrap">
              {['全部', '待出货-未申请', '已申请-未确认', '待出货-已申请', '重新出货', '待出货-已取件', '运送中', '已送达', '已收货', '已退货', '取消中', '已取消', '完成', '其他'].map(item => <Button key={item} type="text" size="small">{item}</Button>)}
            </Space>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium text-gray-600">订单标记:</span>
            <Space className="flex-wrap">
              {['全部', '预刷', '紧急', '测评', '问题', '缺货', '已预刷', '退货重出', '拒收', '无标记'].map(item => <Button key={item} type="text" size="small">{item}</Button>)}
            </Space>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium text-gray-600">发货状态:</span>
            <Space>
              {['全部', '待安排', '安排失败'].map(item => <Button key={item} type="text" size="small">{item}</Button>)}
            </Space>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium text-gray-600">是否采购:</span>
            <Space>
              {['全部', '未采购', '已采购', '已发货'].map(item => <Button key={item} type="text" size="small">{item}</Button>)}
            </Space>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium text-gray-600">包裹类型:</span>
            <Space>
              <Checkbox>单品数</Checkbox>
              <Checkbox>单品多数</Checkbox>
              <Checkbox>多品混包</Checkbox>
            </Space>
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4 items-center">
          <span className="font-medium text-gray-600">下单时间:</span>
          <DatePicker.RangePicker />
          <span className="font-medium text-gray-600">快捷查询:</span>
          <Space>
            {['全部', '今天', '1天前', '2天前', '3天前', '7天前'].map(item => <Button key={item} type="text" size="small">{item}</Button>)}
          </Space>
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          <Space.Compact className="w-96">
            <Select defaultValue="订单编号" className="w-24" options={[{ value: '订单编号', label: '订单编号' }]} />
            <Input placeholder="输入内容" className="w-64" />
          </Space.Compact>
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
          <Button type="primary" icon={<ExportOutlined />}>导出</Button>
          <Button icon={<DownOutlined />}>更多</Button>
        </div>
      </Card>
      
      <Card>
        <div className="flex justify-between items-center mb-4">
          <Tabs activeKey={activeTab} onChange={setActiveTab} items={subTabs} type="card" />
          <Space>
            <Button>同步订单</Button>
            <Button>上门投递</Button>
            <Button>预约取件</Button>
            <Button>同步状态</Button>
            <Button>批量上传面单</Button>
            <Button>同步快递</Button>
            <Button>批量标记</Button>
            <Button>批量导入</Button>
            <Button>导入快递</Button>
            <Button>批量打印</Button>
            <Button>批量操作</Button>
          </Space>
        </div>
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

export default OrderManagementPage;
