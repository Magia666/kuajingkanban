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
          <div className="grid grid-cols-3 gap-4">
            <Form.Item label="*发货仓库" name="warehouse" rules={[{ required: true }]}>
              <Select placeholder="请选择" />
            </Form.Item>
            <Form.Item label="*电商平台" name="platform" rules={[{ required: true }]}>
              <Select placeholder="请选择" />
            </Form.Item>
            <Form.Item label="物流渠道" name="shippingChannel">
              <Select placeholder="请选择" />
            </Form.Item>
            <Form.Item label="*订单编号" name="orderNumber" rules={[{ required: true }]}>
              <Space>
                <Input />
                <Button>自动生成</Button>
              </Space>
            </Form.Item>
            <Form.Item label="运单编号" name="trackingNumber">
              <Input />
            </Form.Item>
            <Form.Item label="订单类型" name="orderType">
              <Select defaultValue="1" />
            </Form.Item>
            <Form.Item label="订单总额" name="totalAmount">
              <Input type="number" />
            </Form.Item>
            <Form.Item label="支付币种" name="currency">
              <Select placeholder="请选择" />
            </Form.Item>
            <Form.Item label="支付方式" name="paymentMethod">
              <Select placeholder="请选择" />
            </Form.Item>
            <Form.Item label="面单文件" name="labelFile">
              <Upload>
                <Button icon={<UploadOutlined />}>上传文件</Button>
              </Upload>
            </Form.Item>
          </div>
        </Card>

        <Card title="买家信息" className="mb-4">
          <div className="grid grid-cols-3 gap-4">
            <Form.Item label="公司" name="company"><Input /></Form.Item>
            <Form.Item label="收件人" name="recipient"><Input /></Form.Item>
            <Form.Item label="手机号" name="phone"><Input /></Form.Item>
            <Form.Item label="邮编" name="postcode"><Input /></Form.Item>
            <Form.Item label="国家/地区" name="country"><Select placeholder="请选择" /></Form.Item>
            <Form.Item label="省/州" name="province"><Input /></Form.Item>
            <Form.Item label="城市" name="city"><Input /></Form.Item>
            <Form.Item label="区" name="district"><Input /></Form.Item>
            <Form.Item label="详细地址" name="address" className="col-span-2"><Input /></Form.Item>
          </div>
        </Card>

        <Card title="*产品信息" className="mb-4" extra={
          <Space>
            <Button type="primary">添加商品</Button>
            <Button type="primary">选择本地商品</Button>
          </Space>
        }>
          <div className="grid grid-cols-2 gap-4">
            <div className="border p-4">
              <p className="mb-2">产品信息</p>
              <div className="w-16 h-16 bg-gray-200 mb-2"></div>
              <Input placeholder="请输入商品名称" className="mb-2" />
              <Space>
                <Input placeholder="请输入SKU" />
                <Input placeholder="请输入尺码、颜色等" />
              </Space>
              <Space className="mt-2">
                <Input placeholder="购买数量" />
                <Input placeholder="单价" />
                <Input placeholder="总价" />
              </Space>
            </div>
            <div className="border p-4">
              <p className="mb-2">快递信息</p>
              <Space>
                <Button>添加快递</Button>
                <Button>添加库存</Button>
                <Button>分销库存</Button>
              </Space>
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
