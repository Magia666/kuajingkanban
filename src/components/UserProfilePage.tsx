import React from 'react';
import { Card, Input, Button, Form, message } from 'antd';
import { QrcodeOutlined } from '@ant-design/icons';

const UserProfilePage: React.FC = () => {
  const [form] = Form.useForm();

  const onFinish = (values: any) => {
    console.log('Success:', values);
    message.success('信息更新成功');
  };

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">个人信息</h1>
      
      <Card className="mb-8">
        <Form
          form={form}
          layout="vertical"
          style={{ maxWidth: 600 }}
          onFinish={onFinish}
          initialValues={{
            name: 'aa13306798907'
          }}
        >
          <Form.Item label="会员ID">
            <span className="text-gray-500">539617</span>
          </Form.Item>
          <Form.Item label="会员名">
            <span className="text-gray-500">aa13306798907</span>
          </Form.Item>
          <Form.Item label="手机号">
            <span className="text-gray-500">15108222937</span> 
            <a className="ml-2 text-blue-500">更改</a>
          </Form.Item>
          <Form.Item label="姓名" name="name">
            <Input />
          </Form.Item>
          <Form.Item label="QQ号" name="qq">
            <Input />
          </Form.Item>
          <Form.Item label="邮箱" name="email">
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">提交</Button>
          </Form.Item>
        </Form>
      </Card>
      
      <Card title="绑定微信公众号">
        <p className="mb-4 text-gray-600">
          绑定微信后，您可以通过微信接收订单、入库、库存预警等通知。<br />
          1、打开微信、扫描二维码、关注【跨境OK】微信公众号
        </p>
        <div className="w-32 h-32 bg-gray-200 flex items-center justify-center border border-gray-300">
           <QrcodeOutlined style={{ fontSize: '48px', color: '#888' }} />
        </div>
      </Card>
    </div>
  );
};

export default UserProfilePage;
