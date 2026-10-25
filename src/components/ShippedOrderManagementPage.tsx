import React, { useState } from 'react';
import { Tabs, Table, Input, Button, Select, Space, Card, DatePicker, Checkbox, Dropdown, Menu } from 'antd';
import type { TabsProps, TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined, DownOutlined } from '@ant-design/icons';

interface OrderData {
  key: string;
  orderNumber: string;
  trackingNumber: string;
  carrier: string;
  customer: string;
  warehouse: string;
  status: string;
  total: string;
  shippedTime: string;
}

const ShippedOrderManagementPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('all');

  const columns: TableColumnsType<OrderData> = [
    { 
      title: '订单编号', 
      dataIndex: 'orderNumber', 
      key: 'orderNumber',
      render: (val, record) => (
        <div>
          <span className="font-semibold text-slate-800">{val}</span>
          <div className="text-xs text-slate-400">发货: {record.shippedTime}</div>
        </div>
      )
    },
    { 
      title: '物流承运商 / 运单号', 
      dataIndex: 'trackingNumber', 
      key: 'trackingNumber',
      render: (tracking, record) => (
        <div>
          <span className="inline-block px-1.5 py-0.5 text-xs bg-slate-100 rounded text-slate-700 font-medium mr-1.5">{record.carrier}</span>
          <span className="font-mono text-xs text-indigo-600 select-all">{tracking}</span>
        </div>
      )
    },
    { title: '目的国及买家', dataIndex: 'customer', key: 'customer' },
    { title: '出货仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { 
      title: '物流状态', 
      dataIndex: 'status', 
      key: 'status',
      render: (status) => {
        const colorMap: Record<string, string> = {
          '国际干线运输中': 'bg-blue-50 text-blue-700 border-blue-200',
          '已到达目的国枢纽': 'bg-indigo-50 text-indigo-700 border-indigo-200',
          '末端派送中': 'bg-amber-50 text-amber-700 border-amber-200',
          '已妥投签收': 'bg-emerald-50 text-emerald-700 border-emerald-200',
          '清关查验中': 'bg-purple-50 text-purple-700 border-purple-200',
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
          <a className="text-indigo-600 hover:text-indigo-800 text-xs font-medium">轨迹跟踪</a>
          <a className="text-slate-600 hover:text-slate-800 text-xs font-medium">电子面单</a>
        </Space>
      ) 
    },
  ];

  const dataSource: OrderData[] = [
    {
      key: "1",
      orderNumber: "SP-MY-2410220912K",
      carrier: "J&T Express",
      trackingNumber: "JT6002918201MY",
      customer: "马来西亚 · Nurul Hidayah",
      warehouse: "东莞虎门跨境集运仓",
      status: "末端派送中",
      total: "RM 89.00",
      shippedTime: "2024-10-22 18:30"
    },
    {
      key: "2",
      orderNumber: "TT-ID-2410218820P",
      carrier: "J&T Cargo",
      trackingNumber: "JTC8891029381ID",
      customer: "印度尼西亚 · Siti Rahmawati",
      warehouse: "深圳宝安保税总仓",
      status: "已妥投签收",
      total: "IDR 345,000",
      shippedTime: "2024-10-21 16:15"
    },
    {
      key: "3",
      orderNumber: "LZ-TH-2410224419T",
      carrier: "Flash Express",
      trackingNumber: "TH92019482710",
      customer: "泰国 · Somchai Prasert",
      warehouse: "曼谷1号海外仓 (TH-01)",
      status: "已妥投签收",
      total: "THB 890.00",
      shippedTime: "2024-10-22 11:20"
    },
    {
      key: "4",
      orderNumber: "SP-PH-2410231908S",
      carrier: "Ninja Van",
      trackingNumber: "NVPH8839102931",
      customer: "菲律宾 · Maria Santos",
      warehouse: "东莞虎门跨境集运仓",
      status: "已到达目的国枢纽",
      total: "PHP 1,250.00",
      shippedTime: "2024-10-23 20:45"
    },
    {
      key: "5",
      orderNumber: "SP-SG-2410235512D",
      carrier: "Ninja Van",
      trackingNumber: "NVSG7739102832",
      customer: "新加坡 · Tan Wei Ling",
      warehouse: "雪兰莪海外仓 (MY-01)",
      status: "国际干线运输中",
      total: "SGD 38.50",
      shippedTime: "2024-10-23 15:10"
    },
    {
      key: "6",
      orderNumber: "TT-VN-2410229983M",
      carrier: "J&T Express",
      trackingNumber: "JTVN4492817293",
      customer: "越南 · Nguyen Van Minh",
      warehouse: "深圳宝安保税总仓",
      status: "清关查验中",
      total: "VND 490,000",
      shippedTime: "2024-10-22 21:00"
    }
  ];

  const topTabs: TabsProps['items'] = [
    { key: 'shipped', label: '已发货订单' },
  ];

  const subTabs: TabsProps['items'] = [
    { key: 'all', label: '全部' },
    { key: 'pending', label: '待获取面单' },
    { key: 'received', label: '已获取面单' },
  ];

  const filterItem = (label: string, items: string[]) => (
    <div className="flex flex-wrap gap-4 items-center">
      <span className="font-medium text-gray-600 w-20">{label}:</span>
      <Space className="flex-wrap">
        {items.map(item => <Button key={item} type="text" size="small">{item}</Button>)}
      </Space>
    </div>
  );

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <Card className="mb-4">
        <Tabs activeKey={activeTab} items={topTabs} className="mb-4" />
        
        <div className="space-y-4">
          {filterItem('系统状态', ['待处理', '部分入库', '打包中', '已交运', '已搁置', '问题件', '已取消', '全部'])}
          {filterItem('订单状态', ['全部', '待出货-未申请', '已申请-未确认', '待出货-已申请', '重新出货', '待出货-已取件', '运送中', '已送达', '已收货', '已退货', '取消中', '已取消', '完成', '其他'])}
          {filterItem('订单标记', ['全部', '预刷', '紧急', '测评', '问题', '缺货', '已预刷', '退货重出', '拒收', '无标记'])}
          {filterItem('打印状态', ['全部', '未打印(面单)', '已打印(面单)', '未打印(拣货单)', '已打印(拣货单)', '未扣费', '已扣费', '已退款', '未退款', '已打包', '未打包', '材料费用:全部', '未扣费', '已扣费'])}
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium text-gray-600 w-20">截止日期:</span>
            <Space className="flex-wrap">
              {['全部', '已超时', '剩余12', '剩余24', '剩余48', '剩余3天', '剩余5天', '剩余7天', '超14天'].map(item => <Button key={item} type="text" size="small">{item}</Button>)}
            </Space>
          </div>
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium text-gray-600 w-20">包裹类型:</span>
            <Space>
              <Checkbox>单品数</Checkbox>
              <Checkbox>单品多数</Checkbox>
              <Checkbox>多品混包</Checkbox>
            </Space>
          </div>
          {filterItem('是否采购', ['全部', '未采购', '已采购', '已发货'])}
        </div>

        <div className="mt-4 flex flex-wrap gap-4 items-center">
          <span className="font-medium text-gray-600">下单/发货/交运/截止时间:</span>
          <DatePicker.RangePicker />
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          <Space.Compact className="w-96">
            <Select defaultValue="订单编号" className="w-24"><Select.Option value="订单编号">订单编号</Select.Option></Select>
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
            <Button>同步状态</Button>
            <Button>上门投递</Button>
            <Button>预约取件</Button>
            <Button>批量上传面单</Button>
            <Button>同步快递</Button>
            <Button>导入采购快递</Button>
            <Button>批量标记</Button>
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

export default ShippedOrderManagementPage;
