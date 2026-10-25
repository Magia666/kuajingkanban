import React, { useState } from 'react';
import { Tabs, Table, Input, Button, Select, Space, Card, Checkbox } from 'antd';
import type { TabsProps, TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined } from '@ant-design/icons';

interface ReturnOrderData {
  key: string;
  returnNumber: string;
  orderNumber: string;
  platformStore: string;
  productInfo: string;
  returnReason: string;
  returnTracking: string;
  receivingWarehouse: string;
  status: string;
  applyTime: string;
}

const ReturnOrderManagementPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const columns: TableColumnsType<ReturnOrderData> = [
    { 
      title: '退货单号 / 原始订单', 
      dataIndex: 'returnNumber', 
      key: 'returnNumber',
      render: (val, record) => (
        <div>
          <span className="font-semibold text-slate-800">{val}</span>
          <div className="text-xs text-slate-400 font-mono">原单: {record.orderNumber}</div>
        </div>
      )
    },
    { title: '平台与店铺', dataIndex: 'platformStore', key: 'platformStore' },
    { title: '退货商品明细', dataIndex: 'productInfo', key: 'productInfo' },
    { title: '退货原因', dataIndex: 'returnReason', key: 'returnReason', render: (val) => <span className="text-xs text-rose-700 bg-rose-50 px-1.5 py-0.5 rounded border border-rose-200">{val}</span> },
    { title: '退货运单号', dataIndex: 'returnTracking', key: 'returnTracking', render: (val) => <span className="text-xs font-mono text-indigo-600">{val}</span> },
    { title: '退入仓库', dataIndex: 'receivingWarehouse', key: 'receivingWarehouse' },
    { 
      title: '退货状态', 
      dataIndex: 'status', 
      key: 'status',
      render: (status) => {
        const colorMap: Record<string, string> = {
          '国际退回中': 'bg-blue-50 text-blue-700 border-blue-200',
          '已退回未处理': 'bg-amber-50 text-amber-700 border-amber-200',
          '已验货重新入库': 'bg-emerald-50 text-emerald-700 border-emerald-200',
          '已退款核销': 'bg-purple-50 text-purple-700 border-purple-200',
        };
        return (
          <span className={`inline-block px-2 py-0.5 rounded text-xs border ${colorMap[status] || 'bg-slate-50 text-slate-600'}`}>
            {status}
          </span>
        );
      }
    },
    { title: '申请时间', dataIndex: 'applyTime', key: 'applyTime' },
    { 
      title: '操作', 
      dataIndex: 'operation', 
      key: 'operation', 
      render: () => (
        <Space size="small">
          <a className="text-indigo-600 hover:text-indigo-800 text-xs font-medium">质检验收</a>
          <a className="text-slate-600 hover:text-slate-800 text-xs font-medium">详情</a>
        </Space>
      ) 
    },
  ];

  const dataSource: ReturnOrderData[] = [
    {
      key: "1",
      returnNumber: "RET-241024-0018",
      orderNumber: "SP-MY-2410219801K",
      platformStore: "Shopee 马来西亚1号店",
      productInfo: "智选ANC降噪蓝牙耳机(曜石黑) x 1",
      returnReason: "买家反馈降噪模式有轻微底噪",
      returnTracking: "JT6002918201MY (J&T)",
      receivingWarehouse: "雪兰莪海外仓 (MY-01)",
      status: "国际退回中",
      applyTime: "2024-10-24 09:20:10"
    },
    {
      key: "2",
      returnNumber: "RET-241023-0012",
      orderNumber: "TT-ID-2410204481P",
      platformStore: "TikTok Shop 印尼美妆店",
      productInfo: "玻尿酸密集水润舒缓修护面霜(50g) x 2",
      returnReason: "外包装快递盒挤压破损",
      returnTracking: "JTC8891029381ID (J&T Cargo)",
      receivingWarehouse: "深圳宝安保税总仓",
      status: "已退回未处理",
      applyTime: "2024-10-23 16:45:00"
    },
    {
      key: "3",
      returnNumber: "RET-241022-0008",
      orderNumber: "LZ-TH-2410193188T",
      platformStore: "Lazada 泰国时尚生活馆",
      productInfo: "智能高清心率血氧监测运动手表 x 1",
      returnReason: "7天无理由退货 (仅试戴外观无损)",
      returnTracking: "TH92019482710 (Flash)",
      receivingWarehouse: "曼谷1号海外仓 (TH-01)",
      status: "已验货重新入库",
      applyTime: "2024-10-22 14:10:22"
    },
    {
      key: "4",
      returnNumber: "RET-241021-0005",
      orderNumber: "SP-SG-2410182291D",
      platformStore: "Shopee 新加坡生活馆",
      productInfo: "304不锈钢大容量双饮保温杯(900ml) x 1",
      returnReason: "颜色拍错，买家申请换货重拍",
      returnTracking: "NVSG7739102832 (Ninja Van)",
      receivingWarehouse: "雪兰莪海外仓 (MY-01)",
      status: "已退款核销",
      applyTime: "2024-10-21 11:30:40"
    }
  ];

  const topTabs: TabsProps['items'] = [
    { key: 'pending', label: '待处理' },
    { key: 'processed', label: '已处理' },
    { key: 'hold', label: '已搁置' },
    { key: 'all', label: '全部' },
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
        <h1 className="text-xl font-bold mb-4">退货订单</h1>
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={topTabs} className="mb-4" />
        
        <div className="space-y-4">
          {filterItem('退货状态', ['全部', '全部退回中', '已退回未处理', '已退回已处理', '退回失败', '丢包&损坏'])}
          {filterItem('平台类型', ['全部', 'Shopee', 'Lazada', 'Jd', 'coupang', 'tiktok', 'tiktok-us', 'thisshop', 'shopify', '手工单'])}
          {filterItem('签收状态', ['全部', '买家签收前', '买家签收后'])}
          {filterItem('售后类型', ['全部', '取消订单', '退货退款', '仅退款'])}
          {filterItem('线上状态', ['全部', '发起申请', '同意退货', '发起争议', '同意退款', '退款成功', '平台关闭申请', '取消申请'])}
          
          <div className="flex flex-wrap gap-4 items-center">
            <span className="font-medium text-gray-600 w-20">发货仓库:</span>
            <Select className="w-48" placeholder="请选择" />
          </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-4">
          <Space.Compact className="w-96">
            <Select defaultValue="订单编号" className="w-24"><Select.Option value="订单编号">订单编号</Select.Option></Select>
            <Input placeholder="批量搜索用逗号进行隔开" className="w-64" />
          </Space.Compact>
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
        </div>
      </Card>
      
      <Card>
        <div className="flex items-center mb-4 gap-4">
          <Checkbox>全选</Checkbox>
          <Button>同步订单</Button>
          <Button>标记留置</Button>
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

export default ReturnOrderManagementPage;
