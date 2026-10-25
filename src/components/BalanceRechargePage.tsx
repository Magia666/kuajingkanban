import React, { useState } from 'react';
import { Card, Input, Button, Alert, Space, Radio, Tag } from 'antd';
import { InfoCircleOutlined, WalletOutlined, CheckCircleOutlined, BankOutlined } from '@ant-design/icons';

const BalanceRechargePage: React.FC = () => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(2000);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [paymentMethod, setPaymentMethod] = useState<string>('bank');

  const quickAmounts = [500, 1000, 2000, 5000, 10000];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <div className="flex justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-bold text-slate-800">账户充值</h1>
          <p className="text-xs text-slate-500 mt-1">支持充值用于订单集运费代扣、一件代发采购款及海外仓储费结算</p>
        </div>
      </div>
      
      <Card className="max-w-4xl shadow-xs">
        <Alert
          message="充值与结算说明"
          description="系统资金账户1元RMB = 1积分。为保障您的包裹在集运仓能自动扣费并发运出库，请确保可用余额充足以免影响发货时效。"
          type="info"
          showIcon
          icon={<InfoCircleOutlined />}
          className="mb-6"
        />

        {/* 账户资产概览 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 mb-6 bg-slate-50 rounded-xl border border-slate-200">
          <div>
            <p className="text-xs text-slate-500 mb-1">可用余额 (¥)</p>
            <div className="text-2xl font-bold text-emerald-600">45,877.50</div>
            <span className="text-[11px] text-slate-400">可用于随时扣费或提现</span>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">待结算/冻结资金 (¥)</p>
            <div className="text-2xl font-bold text-amber-600">2,350.00</div>
            <span className="text-[11px] text-slate-400">出库处理中待扣款</span>
          </div>
          <div>
            <p className="text-xs text-slate-500 mb-1">账户总资产 (¥)</p>
            <div className="text-2xl font-bold text-slate-800">48,227.50</div>
            <span className="text-[11px] text-emerald-600">正常运营中</span>
          </div>
        </div>

        {/* 充值金额选择 */}
        <div className="mb-6">
          <p className="font-semibold text-slate-700 mb-3">充值金额选择</p>
          <div className="flex flex-wrap gap-3 mb-3">
            {quickAmounts.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => {
                  setSelectedAmount(amt);
                  setCustomAmount('');
                }}
                className={`px-5 py-2.5 rounded-lg border font-medium text-sm transition-all ${
                  selectedAmount === amt && !customAmount
                    ? 'border-blue-600 bg-blue-50 text-blue-600 ring-2 ring-blue-100 font-bold'
                    : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                }`}
              >
                ¥{amt.toLocaleString()}
              </button>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <span className="text-sm text-slate-600">自定义金额:</span>
            <Input 
              prefix="¥" 
              placeholder="输入自定义金额 (元)" 
              style={{ width: 220 }}
              value={customAmount}
              onChange={(e) => {
                setCustomAmount(e.target.value);
                setSelectedAmount(null);
              }}
            />
          </div>
        </div>

        {/* 支付方式 */}
        <div className="mb-6">
          <p className="font-semibold text-slate-700 mb-3">支付方式</p>
          <Radio.Group value={paymentMethod} onChange={(e) => setPaymentMethod(e.target.value)} className="w-full grid grid-cols-1 md:grid-cols-3 gap-3">
            <Radio.Button value="bank" className="h-auto p-3 text-left">
              <div className="font-medium text-slate-800 flex items-center gap-1.5">
                <BankOutlined className="text-blue-600" /> 企业对公网银转账
              </div>
              <div className="text-xs text-slate-400 mt-1">支持大额充值，10分钟自动到账</div>
            </Radio.Button>
            <Radio.Button value="wechat" className="h-auto p-3 text-left">
              <div className="font-medium text-slate-800">微信商户快速支付</div>
              <div className="text-xs text-slate-400 mt-1">即时到账，单笔限额 50,000 元</div>
            </Radio.Button>
            <Radio.Button value="alipay" className="h-auto p-3 text-left">
              <div className="font-medium text-slate-800">支付宝商户快捷支付</div>
              <div className="text-xs text-slate-400 mt-1">即时到账，支持花呗/信用卡</div>
            </Radio.Button>
          </Radio.Group>
        </div>

        {/* 转账账户信息卡片 */}
        {paymentMethod === 'bank' && (
          <div className="p-4 bg-blue-50/60 rounded-xl border border-blue-100 mb-6 text-sm text-slate-700 space-y-1">
            <div className="font-medium text-blue-900 mb-1">对公专属结算汇款信息：</div>
            <div>开户银行：<strong className="text-slate-900">招商银行股份有限公司深圳南山支行</strong></div>
            <div>账户名称：<strong className="text-slate-900">深圳跨境智链物流供应链有限公司</strong></div>
            <div>银行账号：<strong className="text-slate-900 font-mono">7559 1082 3910 8829</strong></div>
            <div className="text-xs text-blue-700 mt-2">注：转账时请在附言或备注中填写您的商户ID：<span className="font-mono font-bold">UID-88219</span>，转账完成后系统将自动完成核销充值。</div>
          </div>
        )}

        <Button type="primary" size="large" className="px-8">
          确认充值 ¥{customAmount ? customAmount : selectedAmount?.toLocaleString()}
        </Button>
      </Card>
    </div>
  );
};

export default BalanceRechargePage;
