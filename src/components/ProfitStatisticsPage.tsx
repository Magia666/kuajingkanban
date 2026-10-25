import React from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select, Row, Col, Statistic } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface ProfitData {
  key: string;
  orderNumber: string;
  orderStatus: string;
  storeName: string;
  storeRemark: string;
  warehouse: string;
  orderAmount: number;
  importAmount: number;
  totalCost: number;
  productCost: number;
  shippingCost: number;
  warehouseCost: number;
  otherCost: number;
  profit: number;
  profitMargin: string;
  productTotalAmount: number;
  refundAmount: number;
  buyerShipping: number;
  logisticShipping: number;
  shopeeRebate: number;
}

const ProfitStatisticsPage: React.FC = () => {
  const columns: TableColumnsType<ProfitData> = [
    { title: '订单号', dataIndex: 'orderNumber', key: 'orderNumber' },
    { title: '订单状态', dataIndex: 'orderStatus', key: 'orderStatus' },
    { title: '店铺名称', dataIndex: 'storeName', key: 'storeName' },
    { title: '店铺备注', dataIndex: 'storeRemark', key: 'storeRemark' },
    { title: '仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '订单金额(CNY)', dataIndex: 'orderAmount', key: 'orderAmount' },
    { title: '进账金额(CNY)', dataIndex: 'importAmount', key: 'importAmount' },
    { title: '总成本(CNY)', dataIndex: 'totalCost', key: 'totalCost' },
    { title: '商品成本(CNY)', dataIndex: 'productCost', key: 'productCost' },
    { title: '运费成本(CNY)', dataIndex: 'shippingCost', key: 'shippingCost' },
    { title: '仓库成本(CNY)', dataIndex: 'warehouseCost', key: 'warehouseCost' },
    { title: '其他费用(CNY)', dataIndex: 'otherCost', key: 'otherCost' },
    { title: '利润(CNY)', dataIndex: 'profit', key: 'profit' },
    { title: '利润率(%)', dataIndex: 'profitMargin', key: 'profitMargin' },
    { title: '商品总额', dataIndex: 'productTotalAmount', key: 'productTotalAmount' },
    { title: '退款金额', dataIndex: 'refundAmount', key: 'refundAmount' },
    { title: '买家支付运费', dataIndex: 'buyerShipping', key: 'buyerShipping' },
    { title: '物流者收取的运费', dataIndex: 'logisticShipping', key: 'logisticShipping' },
    { title: 'Shopee运费回扣', dataIndex: 'shopeeRebate', key: 'shopeeRebate' },
  ];

  const statisticData = [
    { title: '订单金额总计', value: 1254.00 },
    { title: '进账净额总计', value: 1155.63 },
    { title: '总成本总计', value: 752.30 },
    { title: '商品采购成本', value: 542.60 },
    { title: '跨境运费成本', value: 143.50 },
    { title: '仓储操作成本', value: 23.50 },
    { title: '平台税费佣金', value: 42.70 },
    { title: '利润净总额', value: 403.33 },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">利润统计</h1>
      
      <Card className="mb-4">
        <Row gutter={[16, 16]}>
          <Col span={6}><Select placeholder="平台类型" style={{ width: '100%' }} allowClear /></Col>
          <Col span={6}><Input placeholder="订单状态" /></Col>
          <Col span={12}><Input placeholder="订单号" /></Col>
          <Col span={6}><Input placeholder="仓库" /></Col>
          <Col span={6}><Input placeholder="店铺" /></Col>
          <Col span={12}><Input placeholder="系统状态" /></Col>
          <Col span={12}><RangePicker showTime style={{ width: '100%' }} /></Col>
          <Col span={12}><RangePicker showTime style={{ width: '100%' }} /></Col>
          <Col span={12}><RangePicker showTime style={{ width: '100%' }} /></Col>
          <Col span={24}>
            <Space>
              <Button type="primary" icon={<SearchOutlined />}>查询</Button>
              <Button icon={<ReloadOutlined />}>重置</Button>
              <Button icon={<ExportOutlined />}>导出</Button>
            </Space>
          </Col>
        </Row>
      </Card>

      <Row gutter={[16, 16]} className="mb-4">
        {statisticData.map((item, index) => (
          <Col span={3} key={index}>
            <Card type="inner" bodyStyle={{ padding: '12px' }} className="shadow-xs">
              <Statistic 
                title={<span className="text-xs text-slate-500">{item.title}</span>} 
                value={item.value} 
                precision={2} 
                prefix="¥" 
                valueStyle={{ fontSize: '18px', fontWeight: 600, color: index === 7 ? '#15803d' : '#1e293b' }} 
              />
            </Card>
          </Col>
        ))}
      </Row>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              orderNumber: "SP-MY-2410220912K",
              orderStatus: "已妥投",
              storeName: "Shopee 马来西亚1号旗舰店",
              storeRemark: "吉隆坡热卖款 (ANC耳机)",
              warehouse: "东莞虎门跨境集运仓",
              orderAmount: 188.00,
              importAmount: 172.96,
              totalCost: 117.00,
              productCost: 85.00,
              shippingCost: 22.00,
              warehouseCost: 3.50,
              otherCost: 6.50,
              profit: 55.96,
              profitMargin: "32.4%",
              productTotalAmount: 168.00,
              refundAmount: 0.00,
              buyerShipping: 20.00,
              logisticShipping: 22.00,
              shopeeRebate: 5.00
            },
            {
              key: "2",
              orderNumber: "TT-ID-2410218820P",
              orderStatus: "已妥投",
              storeName: "TikTok Shop 印尼官方美妆店",
              storeRemark: "雅加达达人直播带货",
              warehouse: "深圳宝安保税总仓",
              orderAmount: 265.00,
              importAmount: 243.80,
              totalCost: 150.80,
              productCost: 110.00,
              shippingCost: 28.00,
              warehouseCost: 4.00,
              otherCost: 8.80,
              profit: 93.00,
              profitMargin: "38.1%",
              productTotalAmount: 245.00,
              refundAmount: 0.00,
              buyerShipping: 20.00,
              logisticShipping: 28.00,
              shopeeRebate: 0.00
            },
            {
              key: "3",
              orderNumber: "LZ-TH-2410224419T",
              orderStatus: "已妥投",
              storeName: "Lazada 泰国时尚生活馆",
              storeRemark: "曼谷同城快速履约",
              warehouse: "曼谷1号海外仓 (TH-01)",
              orderAmount: 310.00,
              importAmount: 285.20,
              totalCost: 183.20,
              productCost: 136.00,
              shippingCost: 32.00,
              warehouseCost: 5.00,
              otherCost: 10.20,
              profit: 102.00,
              profitMargin: "35.8%",
              productTotalAmount: 290.00,
              refundAmount: 0.00,
              buyerShipping: 20.00,
              logisticShipping: 32.00,
              shopeeRebate: 0.00
            },
            {
              key: "4",
              orderNumber: "SP-PH-2410231908S",
              orderStatus: "运输中",
              storeName: "Shopee 菲律宾数码精选",
              storeRemark: "马尼拉大促预售单",
              warehouse: "东莞虎门跨境集运仓",
              orderAmount: 156.00,
              importAmount: 143.52,
              totalCost: 102.10,
              productCost: 73.60,
              shippingCost: 19.50,
              warehouseCost: 3.50,
              otherCost: 5.50,
              profit: 41.42,
              profitMargin: "28.9%",
              productTotalAmount: 140.00,
              refundAmount: 0.00,
              buyerShipping: 16.00,
              logisticShipping: 19.50,
              shopeeRebate: 4.00
            },
            {
              key: "5",
              orderNumber: "SP-SG-2410235512D",
              orderStatus: "派送中",
              storeName: "Shopee 新加坡3C专营店",
              storeRemark: "新加坡高客单爆款",
              warehouse: "雪兰莪海外仓 (MY-01)",
              orderAmount: 195.00,
              importAmount: 181.35,
              totalCost: 108.80,
              productCost: 74.00,
              shippingCost: 24.00,
              warehouseCost: 4.00,
              otherCost: 6.80,
              profit: 72.55,
              profitMargin: "40.0%",
              productTotalAmount: 180.00,
              refundAmount: 0.00,
              buyerShipping: 15.00,
              logisticShipping: 24.00,
              shopeeRebate: 6.00
            },
            {
              key: "6",
              orderNumber: "TT-VN-2410229983M",
              orderStatus: "清关中",
              storeName: "TikTok 越南流行服饰店",
              storeRemark: "河内站短视频引流",
              warehouse: "深圳宝安保税总仓",
              orderAmount: 140.00,
              importAmount: 128.80,
              totalCost: 90.40,
              productCost: 64.00,
              shippingCost: 18.00,
              warehouseCost: 3.50,
              otherCost: 4.90,
              profit: 38.40,
              profitMargin: "29.8%",
              productTotalAmount: 125.00,
              refundAmount: 0.00,
              buyerShipping: 15.00,
              logisticShipping: 18.00,
              shopeeRebate: 0.00
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
          scroll={{ x: 2500 }}
        />
      </Card>
    </div>
  );
};

export default ProfitStatisticsPage;
