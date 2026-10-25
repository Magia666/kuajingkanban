import React from 'react';
import { Form, Input, Select, Button, Space, Card, Upload, Radio, Checkbox } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

const { Option } = Select;
const { TextArea } = Input;

const CreateOrderPage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">新建订单</h1>
      <Form form={form} layout="vertical" onFinish={onFinish}>
        <Card title="基本信息" className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Form.Item label="发货仓库" name="warehouse" rules={[{ required: true, message: '请选择发货仓库' }]}>
              <Select 
                placeholder="请选择发货仓库" 
                options={[
                  { label: '东莞虎门跨境集运仓 (推荐·时效最佳)', value: 'DG-01' },
                  { label: '深圳宝安保税总仓', value: 'SZ-01' },
                  { label: '马来西亚雪兰莪海外仓 (MY-01)', value: 'MY-01' },
                  { label: '泰国曼谷1号海外仓 (TH-01)', value: 'TH-01' },
                  { label: '义乌国际小商品中转仓', value: 'YW-01' },
                ]}
              />
            </Form.Item>
            <Form.Item label="电商平台" name="platform" rules={[{ required: true, message: '请选择电商平台' }]}>
              <Select 
                placeholder="请选择电商平台" 
                options={[
                  { label: 'Shopee (虾皮购物)', value: 'shopee' },
                  { label: 'TikTok Shop (国际版抖音电商)', value: 'tiktok' },
                  { label: 'Lazada (来赞达)', value: 'lazada' },
                  { label: 'Amazon (亚马逊)', value: 'amazon' },
                  { label: 'Temu (拼多多跨境)', value: 'temu' },
                ]}
              />
            </Form.Item>
            <Form.Item label="物流渠道" name="shippingChannel">
              <Select 
                placeholder="请选择跨境专线/快递" 
                options={[
                  { label: '极兔速递 J&T Express 东南亚陆运/空运专线', value: 'JT' },
                  { label: 'Flash Express 闪电达 泰/马/菲特快专线', value: 'FLASH' },
                  { label: 'Shopee SLS 官方跨境物流标准专线', value: 'SLS' },
                  { label: 'Ninja Van 能者物流 东南亚派送专线', value: 'NINJA' },
                  { label: '顺丰国际特惠专线 SF International', value: 'SF' },
                ]}
              />
            </Form.Item>
            <Form.Item label="订单编号" name="orderNumber" rules={[{ required: true, message: '请输入或生成订单号' }]}>
              <Space className="w-full">
                <Input placeholder="SP-MY-241025..." />
                <Button onClick={() => form.setFieldsValue({ orderNumber: `SP-MY-${Date.now().toString().slice(-8)}` })}>自动生成</Button>
              </Space>
            </Form.Item>
            <Form.Item label="国际运单号 (Tracking)" name="trackingNumber">
              <Input placeholder="输入 SLS / JT 国际面单运单号" />
            </Form.Item>
            <Form.Item label="订单类型" name="orderType">
              <Select 
                defaultValue="normal" 
                options={[
                  { label: '常规一件代发订单', value: 'normal' },
                  { label: '店铺换标转寄订单', value: 'relabel' },
                  { label: '异常售后补发订单', value: 'reship' },
                  { label: '海外仓备货调拨', value: 'transfer' },
                ]}
              />
            </Form.Item>
            <Form.Item label="订单总额" name="totalAmount">
              <Input type="number" prefix="¥" placeholder="0.00" />
            </Form.Item>
            <Form.Item label="结算币种" name="currency">
              <Select 
                placeholder="请选择结算币种" 
                defaultValue="CNY"
                options={[
                  { label: '人民币 CNY (¥)', value: 'CNY' },
                  { label: '马来西亚林吉特 MYR (RM)', value: 'MYR' },
                  { label: '泰铢 THB (฿)', value: 'THB' },
                  { label: '印尼卢比 IDR (Rp)', value: 'IDR' },
                  { label: '菲律宾比索 PHP (₱)', value: 'PHP' },
                  { label: '新加坡元 SGD (S$)', value: 'SGD' },
                  { label: '美元 USD ($)', value: 'USD' },
                ]}
              />
            </Form.Item>
            <Form.Item label="扣款方式" name="paymentMethod">
              <Select 
                placeholder="请选择扣款方式" 
                defaultValue="balance"
                options={[
                  { label: '账户余额自动代扣 (可用: ¥45,877.50)', value: 'balance' },
                  { label: '货到付款 COD (收件人签收付现)', value: 'cod' },
                  { label: '在线直接支付 (网银/微信/支付宝)', value: 'online' },
                  { label: '账期月结授信代扣', value: 'credit' },
                ]}
              />
            </Form.Item>
            <Form.Item label="电子面单 PDF" name="labelFile">
              <Upload>
                <Button icon={<UploadOutlined />}>上传跨境电子面单</Button>
              </Upload>
            </Form.Item>
          </div>
        </Card>

        <Card title="买家收件人信息" className="mb-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Form.Item label="公司/机构 (选填)" name="company"><Input placeholder="收件公司名称" /></Form.Item>
            <Form.Item label="收件人姓名" name="recipient" rules={[{ required: true, message: '请输入收件人姓名' }]}><Input placeholder="收件人姓名 (拼音/英文)" /></Form.Item>
            <Form.Item label="联系电话" name="phone" rules={[{ required: true, message: '请输入联系电话' }]}><Input placeholder="+60 12-345 6789" /></Form.Item>
            <Form.Item label="邮政编码" name="postcode"><Input placeholder="50450" /></Form.Item>
            <Form.Item label="目的国家/地区" name="country" rules={[{ required: true, message: '请选择目的国家' }]}>
              <Select 
                placeholder="请选择目的国家/地区" 
                options={[
                  { label: '马来西亚 (Malaysia)', value: 'MY' },
                  { label: '泰国 (Thailand)', value: 'TH' },
                  { label: '印度尼西亚 (Indonesia)', value: 'ID' },
                  { label: '菲律宾 (Philippines)', value: 'PH' },
                  { label: '新加坡 (Singapore)', value: 'SG' },
                  { label: '越南 (Vietnam)', value: 'VN' },
                ]}
              />
            </Form.Item>
            <Form.Item label="省 / 州 (State/Province)" name="province"><Input placeholder="Wilayah Persekutuan" /></Form.Item>
            <Form.Item label="城市 (City)" name="city"><Input placeholder="Kuala Lumpur" /></Form.Item>
            <Form.Item label="区 / 县 (District)" name="district"><Input placeholder="Bukit Bintang" /></Form.Item>
            <Form.Item label="详细街道地址 (Street Address)" name="address" className="md:col-span-2" rules={[{ required: true, message: '请输入详细地址' }]}>
              <Input placeholder="No. 168, Jalan Bukit Bintang, Pavilion Suites #12-08" />
            </Form.Item>
          </div>
        </Card>

        <Card title="商品与打包信息" className="mb-4" extra={
          <Space>
            <Button type="primary">从商品库选择</Button>
            <Button>从1688货源同步</Button>
          </Space>
        }>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50">
              <p className="font-semibold text-slate-800 mb-2">已选商品</p>
              <div className="flex gap-3">
                <img 
                  src="https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=100&q=80" 
                  alt="耳机" 
                  className="w-16 h-16 rounded object-cover border border-slate-200 shrink-0" 
                />
                <div className="flex-1 space-y-1">
                  <Input defaultValue="智选高配版真无线主动降噪蓝牙耳机" placeholder="商品名称" className="font-medium text-xs" />
                  <div className="grid grid-cols-2 gap-2">
                    <Input defaultValue="3C-ANC08-BLK" placeholder="SKU" prefix="SKU:" className="text-xs" />
                    <Input defaultValue="曜石黑 / 旗舰双麦ANC" placeholder="规格属性" className="text-xs" />
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-1">
                    <Input defaultValue="2" prefix="数量:" className="text-xs" />
                    <Input defaultValue="¥110.00" prefix="单价:" className="text-xs" />
                    <Input defaultValue="¥220.00" prefix="小计:" className="text-xs font-semibold text-emerald-600" />
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-slate-200 rounded-lg p-4 bg-slate-50/50 flex flex-col justify-between">
              <div>
                <p className="font-semibold text-slate-800 mb-2">仓储打包增值服务</p>
                <div className="space-y-2 text-xs text-slate-600">
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox defaultChecked /> 气泡柱加固防震打包 (¥2.00 / 件)
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox defaultChecked /> 跨境平台条形码贴标换标 (¥0.50 / 件)
                  </label>
                  <label className="flex items-center gap-2 cursor-pointer">
                    <Checkbox /> 拆除原厂外盒 (省体积重运费)
                  </label>
                </div>
              </div>
              <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 flex justify-between items-center">
                <span>预估包裹重量：<strong className="text-slate-800">420g</strong></span>
                <span>增值服务费：<strong className="text-emerald-700">¥5.00</strong></span>
              </div>
            </div>
          </div>
        </Card>

        <Card title="发货信息" className="mb-4">
          <Form.Item name="shippingOptions">
            <Checkbox.Group options={['刷单', '补发']} />
          </Form.Item>
        </Card>

        <Card title="备注" className="mb-4">
          <Form.Item name="remark">
            <TextArea rows={4} placeholder="请输入备注" />
          </Form.Item>
        </Card>

        <div className="text-center">
            <Button type="primary" htmlType="submit" className="w-full">提交订单</Button>
        </div>
      </Form>
    </div>
  );
};

export default CreateOrderPage;
