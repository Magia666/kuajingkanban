import React from 'react';
import { Card, Input, Button, Alert, Space } from 'antd';
import { InfoCircleOutlined } from '@ant-design/icons';

const BalanceRechargePage: React.FC = () => {
  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">余额充值</h1>
      
      <Card>
        <Alert
          title="提示"
          description="积分余额1元RMB=1积分，为保障您的订单能顺利提交打包，请保持积分充足，请合理充值。"
          type="info"
          showIcon
          icon={<InfoCircleOutlined />}
          className="mb-6"
        />

        <div className="mb-4">
          <p className="text-gray-600 mb-2">积分余额（¥）</p>
          <span className="text-3xl font-bold">0</span>
        </div>

        <div className="mb-4">
          <p className="font-medium mb-2">充值金额</p>
          <Input placeholder="输入金额" style={{ width: 300 }} />
        </div>

        <div className="mb-6">
          <p className="font-medium mb-2">支付方式</p>
          <Button type="primary" ghost>转账充值</Button>
        </div>

        <Button type="primary">立即充值</Button>
      </Card>
    </div>
  );
};

export default BalanceRechargePage;
