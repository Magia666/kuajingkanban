import React from 'react';
import { Table, Button, Card, Space } from 'antd';
import type { TableColumnsType } from 'antd';
import { PlusOutlined, ReloadOutlined } from '@ant-design/icons';

interface AddressData {
  key: string;
  platform: string;
  name: string;
  province: string;
  city: string;
  district: string;
  country: string;
  phone: string;
  address: string;
  type: string;
  isDefault: string;
}

const CommonAddressPage: React.FC = () => {
  const columns: TableColumnsType<AddressData> = [
    { title: '序号', dataIndex: 'key', width: 60 },
    { title: '平台', dataIndex: 'platform', key: 'platform' },
    { title: '名称', dataIndex: 'name', key: 'name' },
    { title: '省/州', dataIndex: 'province', key: 'province' },
    { title: '城市', dataIndex: 'city', key: 'city' },
    { title: '区', dataIndex: 'district', key: 'district' },
    { title: '国家/地区', dataIndex: 'country', key: 'country' },
    { title: '联系电话', dataIndex: 'phone', key: 'phone' },
    { title: '详细地址', dataIndex: 'address', key: 'address' },
    { title: '类型', dataIndex: 'type', key: 'type' },
    { title: '是否默认', dataIndex: 'isDefault', key: 'isDefault' },
    { title: '操作', key: 'operation', render: () => <Space><a>编辑</a><a>删除</a></Space> },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">常用地址</h1>
      
      <Card className="mb-4">
        <Space>
            <Button type="primary" icon={<PlusOutlined />}>新增常用地址</Button>
            <Button icon={<ReloadOutlined />}>速卖通地址同步</Button>
            <Button icon={<ReloadOutlined />}>Coupang地址同步</Button>
        </Space>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              platform: "Shopee / TikTok",
              name: "李建华 (东莞虎门仓发运点)",
              province: "广东省",
              city: "东莞市",
              district: "虎门镇",
              country: "中国 (CN)",
              phone: "138-2391-8820",
              address: "大宁工业区跨境智慧物流园A栋3层质检交运中心",
              type: "发货与交运点",
              isDefault: "是"
            },
            {
              key: "2",
              platform: "全平台通用",
              name: "张海龙 (深圳保税退件组)",
              province: "广东省",
              city: "深圳市",
              district: "宝安区",
              country: "中国 (CN)",
              phone: "139-8812-7711",
              address: "福永街道保税物流中心3号保税总仓退件质检收件处",
              type: "退货接收地址",
              isDefault: "否"
            },
            {
              key: "3",
              platform: "Shopee / Lazada",
              name: "Tan Boon Wah (MY Hub)",
              province: "雪兰莪州 (Selangor)",
              city: "莎阿南 (Shah Alam)",
              district: "Seksyen 22",
              country: "马来西亚 (MY)",
              phone: "+60 12-345-6789",
              address: "No. 18, Jalan TP 5, Taman Perindustrian UEP",
              type: "海外自提与退仓",
              isDefault: "否"
            },
            {
              key: "4",
              platform: "Lazada / TikTok",
              name: "Somchai Prasert (TH Hub)",
              province: "曼谷 (Bangkok)",
              city: "邦纳区 (Bang Na)",
              district: "Bangna-Trad",
              country: "泰国 (TH)",
              phone: "+66 81-234-5678",
              address: "88/1 Moo 12, Bangna-Trad Road Km. 19",
              type: "海外自提与退仓",
              isDefault: "否"
            },
            {
              key: "5",
              platform: "Shopee SG",
              name: "Kelvin Tan (SG Hub)",
              province: "裕廊西 (Jurong West)",
              city: "新加坡 (Singapore)",
              district: "Pioneer",
              country: "新加坡 (SG)",
              phone: "+65 9123-4567",
              address: "15 Pioneer Walk, Pioneer Logistics Centre #03-02",
              type: "中转派送中心",
              isDefault: "否"
            },
            {
              key: "6",
              platform: "1688货盘采购",
              name: "王勇 (义乌货源集货仓)",
              province: "浙江省",
              city: "金华市",
              district: "义乌市",
              country: "中国 (CN)",
              phone: "137-5501-9922",
              address: "北苑街道秋实路118号国际跨境电商物流园B2栋",
              type: "采购集货点",
              isDefault: "否"
            }
          ]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default CommonAddressPage;
