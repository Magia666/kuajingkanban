import React, { useState } from 'react';
import { Tabs, Table, Input, Button, Space, Card, Form } from 'antd';
import type { TabsProps, TableColumnsType } from 'antd';
import { SearchOutlined, ReloadOutlined, EditOutlined } from '@ant-design/icons';

interface IssueData {
  key: string;
  orderInfo: string;
  store: string;
  messageContent: string;
  messageTime: string;
}

const IssueOrderPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState('pending');

  const columns: TableColumnsType<IssueData> = [
    { title: '订单编号/平台', dataIndex: 'orderInfo', key: 'orderInfo', width: '20%' },
    { title: '店铺名称(别名)', dataIndex: 'store', key: 'store' },
    { title: '消息内容', dataIndex: 'messageContent', key: 'messageContent' },
    { title: '消息时间', dataIndex: 'messageTime', key: 'messageTime' },
    { title: '操作', dataIndex: 'operation', key: 'operation', render: () => <a>操作</a>, width: 100 },
  ];

  const dataSource: IssueData[] = [
    {
      key: "1",
      orderInfo: "SP-MY-2410240091K / Shopee",
      store: "Shopee 马来西亚1号店",
      messageContent: "买家地址不完整（缺少邮编和门牌号，无法获取SLS面单），已发送Shopee Chat联系买家确认",
      messageTime: "2024-10-24 10:15:30"
    },
    {
      key: "2",
      orderInfo: "TT-ID-2410240833P / TikTok",
      store: "TikTok Shop 印尼美妆店",
      messageContent: "本地仓库可用库存不足（现缺货2件），在途采购批次IB-20241024-002正在质检入库中",
      messageTime: "2024-10-24 09:50:12"
    },
    {
      key: "3",
      orderInfo: "LZ-TH-2410239102B / Lazada",
      store: "Lazada 泰国潮流馆",
      messageContent: "买家在平台申请取消订单，仓库已启动打包拦截流程，商品返回暂存货架",
      messageTime: "2024-10-24 09:20:00"
    },
    {
      key: "4",
      orderInfo: "SP-PH-2410231908S / Shopee",
      store: "Shopee 菲律宾数码店",
      messageContent: "带电产品航空安检退回：需补传内建锂电池UN38.3检测报告及MSDS安全技术说明书",
      messageTime: "2024-10-23 16:40:22"
    },
    {
      key: "5",
      orderInfo: "SP-SG-2410235512D / Shopee",
      store: "Shopee 新加坡3C店",
      messageContent: "末端派送异常：Ninja Van派送员反馈买家地址无人签收，已安排次日免费二次投递",
      messageTime: "2024-10-23 14:10:45"
    },
    {
      key: "6",
      orderInfo: "TT-VN-2410229983M / TikTok",
      store: "TikTok 越南流行服饰店",
      messageContent: "海关查验提示：申报品名与包裹内件实际中文名称不完全匹配，已提交海关补充声明单",
      messageTime: "2024-10-22 18:35:10"
    }
  ];

  const topTabs: TabsProps['items'] = [
    { key: 'pending', label: '待处理' },
    { key: 'processed', label: '已处理' },
    { key: 'finished', label: '完结' },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">问题订单</h1>
      <Card className="mb-4">
        <Tabs activeKey={activeTab} onChange={setActiveTab} items={topTabs} />
        
        <Form layout="inline" className="mt-4 gap-4">
          <Form.Item label="订单编号">
            <Input placeholder="输入订单编号" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="消息内容">
            <Input placeholder="输入消息内容" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item label="用户ID">
            <Input placeholder="输入用户ID" style={{ width: 200 }} />
          </Form.Item>
          <Form.Item>
            <Space>
              <Button type="primary" icon={<SearchOutlined />}>查询</Button>
              <Button icon={<ReloadOutlined />}>重置</Button>
            </Space>
          </Form.Item>
        </Form>
      </Card>
      
      <Card>
        <div className="mb-4">
          <Button type="primary" icon={<EditOutlined />}>批量标记</Button>
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

export default IssueOrderPage;
