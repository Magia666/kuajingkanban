import React from 'react';
import { Table, Input, Button, Card, Space } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined } from '@ant-design/icons';

interface AutoShippingData {
  key: string;
  ruleName: string;
  warehouse: string;
  shippingMethod: string;
  allowedStores: string;
  excludedStores: string;
  shippingDate: string;
  orderStatus: string;
  buyerNote: string;
  status: string;
}

const AutoShippingPage: React.FC = () => {
  const columns: TableColumnsType<AutoShippingData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '规则名称', dataIndex: 'ruleName', key: 'ruleName' },
    { title: '仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '运输方式', dataIndex: 'shippingMethod', key: 'shippingMethod' },
    { title: '允许的店铺', dataIndex: 'allowedStores', key: 'allowedStores' },
    { title: '排除的店铺', dataIndex: 'excludedStores', key: 'excludedStores' },
    { title: '发货日期', dataIndex: 'shippingDate', key: 'shippingDate' },
    { title: '订单状态', dataIndex: 'orderStatus', key: 'orderStatus' },
    { title: '排除买家备注订单', dataIndex: 'buyerNote', key: 'buyerNote' },
    { title: '状态', dataIndex: 'status', key: 'status' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">自动发货</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
            <Input placeholder="规则名称" prefix="规则名称:" style={{ width: 250 }} />
            <Button type="primary" icon={<SearchOutlined />}>查询</Button>
            <Button icon={<ReloadOutlined />}>重置</Button>
        </Space>
      </Card>
      
      <Card>
        <Button type="primary" icon={<PlusOutlined />} className="mb-4">添加推送规则</Button>
        <div className="text-gray-600 mb-4 text-sm">
            <p>1. 每天6点至22点，每2小时执行一次;</p>
            <p>2. 只处理72小时内同步到的订单，超出72小时的订单不处理。</p>
        </div>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              ruleName: "Shopee马来西亚极速直发规则",
              warehouse: "东莞虎门跨境集运仓",
              shippingMethod: "J&T Express 马来西亚专线",
              allowedStores: "Shopee 马来西亚1号店",
              excludedStores: "无",
              shippingDate: "每日 14:00 / 20:00 定时获取面单",
              orderStatus: "已付款待安排发货",
              buyerNote: "含'改地址/取消/换规格'需人工拦截",
              status: "已启用"
            },
            {
              key: "2",
              ruleName: "TikTok印尼官方美妆自动交运",
              warehouse: "深圳宝安保税总仓",
              shippingMethod: "J&T Cargo 跨境专线",
              allowedStores: "TikTok Shop 印尼美妆店",
              excludedStores: "无",
              shippingDate: "每小时自动轮询同步",
              orderStatus: "已审核通过待拣货",
              buyerNote: "买家有任何特殊留言即转人工复核",
              status: "已启用"
            },
            {
              key: "3",
              ruleName: "Lazada泰国海外仓本地极速达",
              warehouse: "曼谷1号海外仓 (TH-01)",
              shippingMethod: "Flash Express 本土专线",
              allowedStores: "Lazada 泰国时尚生活馆",
              excludedStores: "无",
              shippingDate: "每日 11:00 / 17:00 自动下发",
              orderStatus: "已付款待出库",
              buyerNote: "无特别排除条件",
              status: "已启用"
            },
            {
              key: "4",
              ruleName: "Shopee菲律宾小件自动匹配物流",
              warehouse: "东莞虎门跨境集运仓",
              shippingMethod: "Ninja Van 菲律宾特快",
              allowedStores: "Shopee 菲律宾数码店",
              excludedStores: "Shopee 菲律宾备用店",
              shippingDate: "每日 16:00 截单批次出库",
              orderStatus: "待打印面单",
              buyerNote: "包含'加急/赠品'排除自动打印",
              status: "已启用"
            },
            {
              key: "5",
              ruleName: "Shopee新加坡保税直发规则",
              warehouse: "雪兰莪海外仓 (MY-01)",
              shippingMethod: "Ninja Van 新加坡专线",
              allowedStores: "Shopee 新加坡生活馆",
              excludedStores: "无",
              shippingDate: "每日 12:00 自动交运",
              orderStatus: "已付款待发货",
              buyerNote: "无特别排除条件",
              status: "暂停维护"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default AutoShippingPage;
