import React from 'react';
import { Table, Button, Card } from 'antd';
import type { TableColumnsType } from 'antd';
import { ReloadOutlined } from '@ant-design/icons';

interface FileDownloadTask {
  key: string;
  taskName: string;
  fileSize: string;
  downloadTime: string;
  status: string;
  remark: string;
}

const FileDownloadTaskPage: React.FC = () => {
  const columns: TableColumnsType<FileDownloadTask> = [
    { title: '#', dataIndex: 'key', width: 50 },
    { 
      title: '导出任务名称', 
      dataIndex: 'taskName', 
      key: 'taskName',
      render: (val) => <span className="font-medium text-slate-800">{val}</span>
    },
    { title: '文件大小', dataIndex: 'fileSize', key: 'fileSize' },
    { title: '提交/生成时间', dataIndex: 'downloadTime', key: 'downloadTime' },
    { 
      title: '任务状态', 
      dataIndex: 'status', 
      key: 'status',
      render: (status) => {
        const color = status === '已生成' ? 'emerald' : status === '生成中' ? 'blue' : status === '排队中' ? 'amber' : 'slate';
        return <span className={`px-2 py-0.5 text-xs rounded border border-${color}-200 bg-${color}-50 text-${color}-700 font-medium`}>{status}</span>;
      }
    },
    { title: '备注说明', dataIndex: 'remark', key: 'remark' },
    { 
      title: '操作', 
      key: 'operation', 
      render: (_, record) => (
        record.status === '已生成' ? (
          <a className="text-indigo-600 hover:text-indigo-800 text-xs font-semibold">下载文件</a>
        ) : (
          <span className="text-xs text-slate-400">处理中...</span>
        )
      ) 
    },
  ];

  return (
    <div className="p-6 bg-slate-50 min-h-screen">
      <h1 className="text-xl font-bold mb-4">文件下载任务</h1>
      
      <Card className="mb-4">
        <Button icon={<ReloadOutlined />}>刷新任务列表</Button>
      </Card>
      
      <Card>
        <Table 
          columns={columns} 
          dataSource={[
            {
              key: "1",
              taskName: "2024年10月度多店铺综合利润结算明细.xlsx",
              fileSize: "1.42 MB",
              downloadTime: "2024-10-24 10:40:00",
              status: "已生成",
              remark: "包含商品成本、跨境头程、仓储费用及平台佣金核销明细"
            },
            {
              key: "2",
              taskName: "深圳总仓与虎门仓在库现货盘点清单.csv",
              fileSize: "845 KB",
              downloadTime: "2024-10-24 10:15:20",
              status: "已生成",
              remark: "含SKU条码、可用数量、待出库锁定数量及安全库存预警值"
            },
            {
              key: "3",
              taskName: "Shopee马来西亚大促待发货订单打包批次.xlsx",
              fileSize: "620 KB",
              downloadTime: "2024-10-24 09:55:00",
              status: "已生成",
              remark: "今日上午10点批次已获取电子面单订单列表"
            },
            {
              key: "4",
              taskName: "2024Q3季度全渠道广告投产比分析深度报告.pdf",
              fileSize: "3.80 MB",
              downloadTime: "2024-10-24 09:20:10",
              status: "生成中",
              remark: "后台异步生成中，包含ROI、CPC、ROAS趋势多图表渲染"
            },
            {
              key: "5",
              taskName: "供应商1688采购对账单与流水凭单合集.zip",
              fileSize: "5.15 MB",
              downloadTime: "2024-10-23 17:30:00",
              status: "已生成",
              remark: "包含近30天1688代采购回单及付款流水截图"
            },
            {
              key: "6",
              taskName: "分销商佣金月度结算报表 (2024-09).xlsx",
              fileSize: "1.10 MB",
              downloadTime: "2024-10-23 14:10:00",
              status: "已生成",
              remark: "9月度全部分销商提成结算与已打款明细汇总"
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
