import React from 'react';
import { Table, Input, Button, Space, Card, Select } from 'antd';
import type { TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, PlusOutlined } from '@ant-design/icons';

interface StoreWithdrawalData {
  key: string;
  storeType: string;
  storeName: string;
  site: string;
  withdrawalAmount: number;
  paymentMethod: string;
  paymentAccount: string;
  transactionNumber: string;
  transactionVoucher: string;
  paymentScreenshot: string;
  withdrawalStatus: string;
  applyTime: string;
  remark: string;
  rejectionReason: string;
}

const StoreWithdrawalPage: React.FC = () => {
  const columns: TableColumnsType<StoreWithdrawalData> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '店铺类型', dataIndex: 'storeType', key: 'storeType' },
    { title: '店铺名称', dataIndex: 'storeName', key: 'storeName' },
    { title: '站点', dataIndex: 'site', key: 'site' },
    { title: '提现金额', dataIndex: 'withdrawalAmount', key: 'withdrawalAmount' },
    { title: '收款方式', dataIndex: 'paymentMethod', key: 'paymentMethod' },
    { title: '收款账户', dataIndex: 'paymentAccount', key: 'paymentAccount' },
    { title: '交易单号', dataIndex: 'transactionNumber', key: 'transactionNumber' },
    { title: '交易凭证', dataIndex: 'transactionVoucher', key: 'transactionVoucher' },
    { title: '付款截图', dataIndex: 'paymentScreenshot', key: 'paymentScreenshot' },
    { title: '提现状态', dataIndex: 'withdrawalStatus', key: 'withdrawalStatus' },
    { title: '申请时间', dataIndex: 'applyTime', key: 'applyTime' },
    { title: '备注', dataIndex: 'remark', key: 'remark' },
    { title: '拒绝理由', dataIndex: 'rejectionReason', key: 'rejectionReason' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">店铺提现</h1>
      
      <Card className="mb-4">
        <Space className="w-full flex-wrap gap-4" align="center">
          <Input placeholder="店铺名称" prefix="店铺名称:" style={{ width: 250 }} />
          <div className="flex items-center gap-2">
            <span className="text-gray-600 w-10">状态:</span>
            <Select style={{ width: 200 }} allowClear />
          </div>
          <Input placeholder="交易单号" prefix="交易单号:" style={{ width: 250 }} />
          <Button type="primary" icon={<SearchOutlined />}>查询</Button>
          <Button icon={<ReloadOutlined />}>重置</Button>
        </Space>
      </Card>
      
      <Card>
        <div className="mb-4">
          <Button type="primary" icon={<PlusOutlined />}>新增</Button>
        </div>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              storeType: "Shopee",
              storeName: "Shopee 马来西亚1号旗舰店",
              site: "MY (马来西亚站)",
              withdrawalAmount: 18500.00,
              paymentMethod: "万里汇 WorldFirst",
              paymentAccount: "wf_seller_my@sz.com (8821)",
              transactionNumber: "WDL-20241024-001",
              transactionVoucher: "VOUCHER-WF-991201",
              paymentScreenshot: "已上传电子回单",
              withdrawalStatus: "已打款",
              applyTime: "2024-10-24 09:15:00",
              remark: "10月中旬Shopee账期结算款提现",
              rejectionReason: "-"
            },
            {
              key: "2",
              storeType: "TikTok Shop",
              storeName: "TikTok Shop 印尼官方美妆店",
              site: "ID (印尼站)",
              withdrawalAmount: 32000.00,
              paymentMethod: "PingPong 全球支付",
              paymentAccount: "pp_seller_id@gz.com (6643)",
              transactionNumber: "WDL-20241023-008",
              transactionVoucher: "VOUCHER-PP-882314",
              paymentScreenshot: "已上传打款凭证",
              withdrawalStatus: "已打款",
              applyTime: "2024-10-23 14:20:00",
              remark: "达人直播大促专场结汇提现",
              rejectionReason: "-"
            },
            {
              key: "3",
              storeType: "Lazada",
              storeName: "Lazada 泰国时尚生活馆",
              site: "TH (泰国站)",
              withdrawalAmount: 14800.00,
              paymentMethod: "连连国际 LianLian",
              paymentAccount: "ll_seller_th@yw.com (1092)",
              transactionNumber: "WDL-20241023-005",
              transactionVoucher: "VOUCHER-LL-772091",
              paymentScreenshot: "银行流水截图",
              withdrawalStatus: "已打款",
              applyTime: "2024-10-23 10:45:00",
              remark: "海外仓备货回流资金申请",
              rejectionReason: "-"
            },
            {
              key: "4",
              storeType: "Shopee",
              storeName: "Shopee 菲律宾数码精选",
              site: "PH (菲律宾站)",
              withdrawalAmount: 9600.00,
              paymentMethod: "万里汇 WorldFirst",
              paymentAccount: "wf_seller_ph@sz.com (5512)",
              transactionNumber: "WDL-20241024-002",
              transactionVoucher: "VOUCHER-WF-991202",
              paymentScreenshot: "审核中凭证待出",
              withdrawalStatus: "待财务复核",
              applyTime: "2024-10-24 10:40:00",
              remark: "日常运营流动资金提取",
              rejectionReason: "-"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default StoreWithdrawalPage;
