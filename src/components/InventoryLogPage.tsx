import React from 'react';
import { Table, Input, Button, Space, Card, DatePicker, Select } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, ExportOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;

interface InventoryLogData {
  key: string;
  systemCode: string;
  sku: string;
  type: string;
  warehouse: string;
  storeName: string;
  quantity: number;
  remainingStock: number;
  description: string;
  date: string;
}

const InventoryLogPage: React.FC = () => {
  const columns: TableColumnsType<InventoryLogData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '系统编码', dataIndex: 'systemCode', key: 'systemCode' },
    { title: 'sku', dataIndex: 'sku', key: 'sku' },
    { title: '类型', dataIndex: 'type', key: 'type' },
    { title: '仓库', dataIndex: 'warehouse', key: 'warehouse' },
    { title: '店铺名称', dataIndex: 'storeName', key: 'storeName' },
    { title: '数量', dataIndex: 'quantity', key: 'quantity' },
    { title: '剩余库存', dataIndex: 'remainingStock', key: 'remainingStock' },
    { title: '说明', dataIndex: 'description', key: 'description' },
    { title: '日期', dataIndex: 'date', key: 'date' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">库存日志</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
          <Input placeholder="sku" style={{ width: 150 }} />
          <Input placeholder="商品名称" style={{ width: 150 }} />
          <Input placeholder="系统编码" style={{ width: 150 }} />
          <Select placeholder="平台类型" style={{ width: 150 }} allowClear />
          <Select placeholder="仓库" style={{ width: 150 }} allowClear />
          <RangePicker />
          <Input placeholder="订单编号" style={{ width: 150 }} />
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
              sku: "3C-ANC08-BLK",
              type: "订单发货出库 (-)",
              warehouse: "深圳宝安保税总仓",
              storeName: "Shopee 马来西亚1号店",
              quantity: -2,
              remainingStock: 1240,
              description: "订单 SP-MY-2410240091K 扫码复核出库扣减",
              date: "2024-10-24 10:45:10"
            },
            {
              key: "2",
              systemCode: "LOC-3C-GAN65",
              sku: "3C-GAN65-SLV",
              type: "采购入库上架 (+)",
              warehouse: "东莞虎门跨境集运仓",
              storeName: "系统总仓货盘",
              quantity: 500,
              remainingStock: 2850,
              description: "入库单 IB-20241024-001 质检合格批量上架B-01区",
              date: "2024-10-24 10:15:00"
            },
            {
              key: "3",
              systemCode: "LOC-3C-SMW09",
              sku: "3C-SMW09-TGR",
              type: "订单发货出库 (-)",
              warehouse: "泰国曼谷海外仓 (TH-01)",
              storeName: "Lazada 泰国时尚生活馆",
              quantity: -1,
              remainingStock: 680,
              description: "订单 LZ-TH-2410241920B 打印面单拣货下架",
              date: "2024-10-24 09:50:33"
            },
            {
              key: "4",
              systemCode: "LOC-BE-HYA50",
              sku: "BE-HYA50-CRE",
              type: "调拨出库 (-)",
              warehouse: "义乌国际小商品中转仓",
              storeName: "系统总仓货盘",
              quantity: -200,
              remainingStock: 3500,
              description: "调拨出库至马来西亚雪兰莪海外仓备货",
              date: "2024-10-23 16:30:00"
            },
            {
              key: "5",
              systemCode: "LOC-HM-THM90",
              sku: "HM-THM900-WHT",
              type: "退货重新入库 (+)",
              warehouse: "马来西亚雪兰莪海外仓",
              storeName: "Shopee 新加坡生活馆",
              quantity: 1,
              remainingStock: 1820,
              description: "买家未签收退回，二次质检无异常重新上架销售",
              date: "2024-10-23 14:15:20"
            },
            {
              key: "6",
              systemCode: "LOC-HM-DRY18",
              sku: "HM-DRY18-PUR",
              type: "残次品报损 (-)",
              warehouse: "东莞虎门跨境集运仓",
              storeName: "系统总仓货盘",
              quantity: -3,
              remainingStock: 940,
              description: "外箱淋雨受潮包装破损，登记残次品库位隔离",
              date: "2024-10-22 17:40:00"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default InventoryLogPage;
