import React from 'react';
import { Table, Button, Card } from 'antd';
import type { TableColumnsType } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

interface FileDownloadTask {
  key: string;
  downloadTime: string;
  status: string;
  remark: string;
}

const FileDownloadTaskPage: React.FC = () => {
  const columns: TableColumnsType<FileDownloadTask> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { title: '下载时间', dataIndex: 'downloadTime', key: 'downloadTime' },
    { title: '状态', dataIndex: 'status', key: 'status' },
    { title: '备注', dataIndex: 'remark', key: 'remark' },
    { title: '操作', key: 'operation', render: () => <a>操作</a> },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">文件下载任务</h1>
      
      <Card className="mb-4">
        <Button icon={<ReloadOutlined />}>刷新</Button>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
  {
    key: "1",
    downloadTime: "2024-05-10 14:10:00",
    status: "处理中",
    remark: "客户要求加急发货"
  },
  {
    key: "2",
    downloadTime: "2024-05-11 14:15:00",
    status: "已发货",
    remark: "商品存在轻微瑕疵"
  },
  {
    key: "3",
    downloadTime: "2024-05-12 14:20:00",
    status: "待付款",
    remark: "包裹外包装破损"
  },
  {
    key: "4",
    downloadTime: "2024-05-13 14:25:00",
    status: "已完成",
    remark: "尺码拍错，要求换货"
  },
  {
    key: "5",
    downloadTime: "2024-05-14 14:30:00",
    status: "已取消",
    remark: "地址填写错误，已更正"
  },
  {
    key: "6",
    downloadTime: "2024-05-15 14:35:00",
    status: "退款中",
    remark: "客户要求加急发货"
  }
]} 
          locale={{ emptyText: '暂无数据' }}
          pagination={{ placement: 'bottomRight' }}
        />
      </Card>
    </div>
  );
};

export default FileDownloadTaskPage;
