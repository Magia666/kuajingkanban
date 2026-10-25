import React from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select, Row, Col, Statistic } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined, SyncOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface ProcurementData {
  key: string;
  storeInfo: string;
  shippingAddress: string;
  procurementInfo: string;
  orderInfo: string;
  time: string;
  productInfo: string;
}

const ProcurementRecordPage: React.FC = () => {
  const columns: TableColumnsType<ProcurementData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '店铺信息', dataIndex: 'storeInfo', key: 'storeInfo' },
    { title: '采购地址', dataIndex: 'shippingAddress', key: 'shippingAddress' },
    { title: '采购信息', dataIndex: 'procurementInfo', key: 'procurementInfo' },
    { title: '订单信息', dataIndex: 'orderInfo', key: 'orderInfo' },
    { title: '时间', dataIndex: 'time', key: 'time' },
    { title: '商品信息', dataIndex: 'productInfo', key: 'productInfo' },
  ];

  const statistics = [
    { title: '采购记录数', value: 0 },
    { title: '平台订单数', value: 0 },
    { title: '订单商品数量', value: 0 },
    { title: '订单实收金额(元)', value: 0.00, precision: 2 },
    { title: '采购商品数量', value: 0 },
    { title: '采购商品成本(元)', value: 0.00, precision: 2 },
    { title: '总利润(元)', value: 0.00, precision: 2 },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">采购记录</h1>
      
      <Card className="mb-4">
        <Row gutter={[16, 16]}>
          <Col span={6}><Input placeholder="采购单号" /></Col>
          <Col span={6}><Input placeholder="订单号" /></Col>
          <Col span={6}><Input placeholder="快递单号" /></Col>
          <Col span={6}>
            <Select placeholder="采购平台" style={{ width: '100%' }} allowClear />
          </Col>
          <Col span={6}><RangePicker showTime style={{ width: '100%' }} /></Col>
          <Col span={6}><RangePicker showTime style={{ width: '100%' }} /></Col>
          <Col span={6}><Input placeholder="采购账户" /></Col>
          <Col span={6}>
            <Select placeholder="平台类型" style={{ width: '100%' }} allowClear />
          </Col>
          <Col span={24}>
            <Space>
              <Button type="primary" icon={<SearchOutlined />}>查询</Button>
              <Button icon={<ReloadOutlined />}>重置</Button>
            </Space>
          </Col>
        </Row>
      </Card>

      <Space className="mb-4">
        <Button icon={<ExportOutlined />}>导出</Button>
        <Button icon={<SyncOutlined />}>同步采购信息</Button>
      </Space>

      <Row gutter={[16, 16]} className="mb-4">
        {statistics.map((item, index) => (
          <Col span={3} key={index}>
            <Card type="inner" bodyStyle={{ padding: '12px' }}>
              <Statistic title={item.title} value={item.value} precision={item.precision} />
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
              storeInfo: "Shopee 马来西亚1号店",
              shippingAddress: "东莞市虎门镇大宁工业区跨境智慧物流园A栋 (虎门集运仓)",
              procurementInfo: "1688采购单: 241023991201 · 深圳市联创声学科技有限公司",
              orderInfo: "SP-MY-2410240091K (按单采购)",
              time: "2024-10-24 10:20:15",
              productInfo: "智选高配版真无线主动降噪蓝牙耳机 (3C-ANC08-BLK) x 50台"
            },
            {
              key: "2",
              storeInfo: "TikTok Shop 印尼美妆店",
              shippingAddress: "深圳市宝安区福永保税物流中心3号库 (深圳保税仓)",
              procurementInfo: "1688采购单: 241023881023 · 东莞市安普能源智能制造厂",
              orderInfo: "TT-ID-2410240833P (批次备货)",
              time: "2024-10-24 09:40:00",
              productInfo: "65W GaN氮化镓三口超级快充头 (3C-GAN65-SLV) x 500个"
            },
            {
              key: "3",
              storeInfo: "Lazada 泰国潮流馆",
              shippingAddress: "泰国曼谷Bangna区Logistics Park 1号仓 (TH-01)",
              procurementInfo: "1688采购单: 241023771920 · 深圳市领航智显数码有限公司",
              orderInfo: "LZ-TH-2410241920B (海外仓备货)",
              time: "2024-10-23 17:15:30",
              productInfo: "智能高清心率血氧监测运动手表 (3C-SMW09-TGR) x 100块"
            },
            {
              key: "4",
              storeInfo: "Shopee 菲律宾数码店",
              shippingAddress: "东莞市虎门镇大宁工业区跨境智慧物流园A栋 (虎门集运仓)",
              procurementInfo: "1688采购单: 241022661802 · 广州润雅生物科技有限公司",
              orderInfo: "SP-PH-2410231908S (补库存)",
              time: "2024-10-23 11:30:10",
              productInfo: "玻尿酸密集水润舒缓修护面霜 (BE-HYA50-CRE) x 300瓶"
            },
            {
              key: "5",
              storeInfo: "Shopee 新加坡生活馆",
              shippingAddress: "马来西亚雪兰莪州Shah Alam海外仓 (MY-01)",
              procurementInfo: "1688采购单: 241022551980 · 永康市拓步五金工贸有限公司",
              orderInfo: "SP-SG-2410235512D (按单集货)",
              time: "2024-10-22 15:45:00",
              productInfo: "304不锈钢大容量双饮保温吸管杯 (HM-THM900-WHT) x 200个"
            },
            {
              key: "6",
              storeInfo: "TikTok 越南流行服饰店",
              shippingAddress: "深圳市宝安区福永保税物流中心3号库 (深圳保税仓)",
              procurementInfo: "1688采购单: 241021440192 · 佛山市顺德区科创电器制造厂",
              orderInfo: "TT-VN-2410229983M (批次入库)",
              time: "2024-10-22 09:10:00",
              productInfo: "负离子便携轻量折叠电吹风机 (HM-DRY18-PUR) x 150台"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default ProcurementRecordPage;
