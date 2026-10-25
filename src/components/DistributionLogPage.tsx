import React from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select, Tabs } from 'antd';
import type { TableColumnsType, TabsProps } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface DistributionLogData {
  key: string;
  systemCode: string;
  warehouse: string;
  productName: string;
  sku: string;
  supplier: string;
  type: string;
  quantity: number;
  remainingStock: number;
  remark: string;
  date: string;
}

const DistributionLogPage: React.FC = () => {
  const columns: TableColumnsType<DistributionLogData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '系统编码', dataIndex: 'systemCode', key: 'systemCode' },
    { title: '仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '商品名称', dataIndex: 'productName', key: 'productName' },
    { title: 'sku', dataIndex: 'sku', key: 'sku' },
    { title: '供应商', dataIndex: 'supplier', key: 'supplier' },
    { title: '类型', dataIndex: 'type', key: 'type' },
    { title: '数量', dataIndex: 'quantity', key: 'quantity' },
    { title: '剩余库存', dataIndex: 'remainingStock', key: 'remainingStock' },
    { title: '备注', dataIndex: 'remark', key: 'remark' },
    { title: '日期', dataIndex: 'date', key: 'date' },
  ];

  const tabItems: TabsProps['items'] = [
    { key: 'home', label: '首页' },
    { key: 'log', label: '分销日志' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <Tabs items={tabItems} className="mb-4 bg-white px-4" />
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
          <Input placeholder="sku" prefix="sku:" style={{ width: 180 }} />
          <Input placeholder="商品名称" prefix="名称:" style={{ width: 180 }} />
          <Input placeholder="系统编码" prefix="编码:" style={{ width: 180 }} />
          <Select 
            placeholder="请选择供应商" 
            prefix="供应商:" 
            style={{ width: 220 }} 
            allowClear 
            options={[
              { label: '全部供应商', value: 'all' },
              { label: '深圳市创世声学科技有限公司', value: 'CS-TECH' },
              { label: '东莞倍思智能制造有限责任公司', value: 'BS-TECH' },
              { label: '广州环球美妆日化源头厂', value: 'HQ-BEAUTY' },
              { label: '浙江义乌户外家居制品厂', value: 'YW-OUTDOOR' },
            ]}
          />
          <Select 
            placeholder="出库类型" 
            prefix="出库类型:" 
            style={{ width: 180 }} 
            allowClear 
            options={[
              { label: '全部类型', value: 'all' },
              { label: '一件代发出库', value: 'dropship' },
              { label: '分销调拨出库', value: 'transfer' },
              { label: '退货出库', value: 'return' },
              { label: '盘亏出库', value: 'loss' },
            ]}
          />
          <Select 
            placeholder="所属仓库" 
            prefix="仓库:" 
            style={{ width: 200 }} 
            allowClear 
            options={[
              { label: '全部仓库', value: 'all' },
              { label: '东莞虎门跨境集运仓', value: 'DG-01' },
              { label: '深圳宝安保税总仓', value: 'SZ-01' },
              { label: '马来西亚雪兰莪海外仓 (MY-01)', value: 'MY-01' },
              { label: '义乌国际小商品中转仓', value: 'YW-01' },
            ]}
          />
          <RangePicker />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
          <Button icon={<ExportOutlined />}>导出</Button>
        </Space>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              systemCode: "LOC-3C-ANC08",
              warehouse: "深圳宝安保税总仓",
              productName: "智选高配版真无线主动降噪蓝牙耳机",
              sku: "3C-ANC08-BLK",
              supplier: "深圳市联创声学科技有限公司",
              type: "分销出库 (-)",
              quantity: -2,
              remainingStock: 1240,
              remark: "分销商【广州汇智跨境】订单 DIS-20241024-8801 发货扣除",
              date: "2024-10-24 10:30:15"
            },
            {
              key: "2",
              systemCode: "LOC-3C-GAN65",
              warehouse: "东莞虎门跨境集运仓",
              productName: "65W GaN氮化镓三口超级快充头",
              sku: "3C-GAN65-SLV",
              supplier: "东莞市安普能源智能制造厂",
              type: "供应商配货上架 (+)",
              quantity: 500,
              remainingStock: 2850,
              remark: "供应商补充供货入库，分销货盘可用库存同步增加",
              date: "2024-10-24 10:12:00"
            },
            {
              key: "3",
              systemCode: "LOC-3C-SMW09",
              warehouse: "曼谷1号海外仓 (TH-01)",
              productName: "智能高清心率血氧监测运动手表",
              sku: "3C-SMW09-TGR",
              supplier: "深圳市领航智显数码有限公司",
              type: "预占锁定 (-)",
              quantity: -1,
              remainingStock: 680,
              remark: "分销商【深圳翼展】分销订单生成，锁定现货库存待出库",
              date: "2024-10-24 09:40:22"
            },
            {
              key: "4",
              systemCode: "LOC-BE-HYA50",
              warehouse: "东莞虎门跨境集运仓",
              productName: "玻尿酸密集水润舒缓修护面霜 (50g)",
              sku: "BE-HYA50-CRE",
              supplier: "广州润雅生物科技有限公司",
              type: "分销出库 (-)",
              quantity: -8,
              remainingStock: 3500,
              remark: "分销商【义乌晨星供应链】大促订单批次发货完成",
              date: "2024-10-23 21:15:40"
            },
            {
              key: "5",
              systemCode: "LOC-HM-THM90",
              warehouse: "雪兰莪海外仓 (MY-01)",
              productName: "304不锈钢大容量双饮保温吸管杯",
              sku: "HM-THM900-WHT",
              supplier: "永康市拓步五金工贸有限公司",
              type: "分销出库 (-)",
              quantity: -3,
              remainingStock: 1820,
              remark: "分销商【杭州云海出海】新加坡Shopee订单发运",
              date: "2024-10-23 16:50:11"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default DistributionLogPage;
