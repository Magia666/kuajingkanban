import React from "react";
import { Card } from "../ui";
import { 
  ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line 
} from "@/lib/charts";
import { COLORS } from "@/lib/charts";
import { Tabs } from "../ui";

// Mock Data
const prodCategoryData = [
  { name: '服装服饰', value: 400 },
  { name: '数码家用', value: 300 },
  { name: '美妆护肤', value: 300 },
  { name: '母婴玩具', value: 200 },
];
const prodSalesTop = [
  { name: '运动蓝牙耳机', sales: 1240 },
  { name: '纯棉T恤', sales: 980 },
  { name: '保湿面霜', sales: 856 },
  { name: '智能手表', sales: 742 },
  { name: '防晒霜', sales: 650 },
];
const prodStatusData = [
  { name: '在售中', value: 850 },
  { name: '已下架', value: 120 },
  { name: '待审核', value: 45 },
];

export function BusinessModuleDashboard() {
  const chartProps = { margin: { top: 20, right: 0, left: -20, bottom: 0 } };
  const pieProps = { cx: "50%", cy: "50%", outerRadius: 70, innerRadius: 40 };

  const ProductsTab = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[260px]">
      <div className="flex flex-col h-full">
        <h4 className="text-sm font-medium text-slate-700 mb-2 text-center">商品分类分布</h4>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={prodCategoryData} {...pieProps} dataKey="value" nameKey="name" paddingAngle={2}>
              {prodCategoryData.map((_, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '13px' }} />
            <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col h-full border-l border-r border-slate-100 px-4">
        <h4 className="text-sm font-medium text-slate-700 mb-2 text-center">商品销量 TOP5</h4>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={prodSalesTop} layout="vertical" margin={{ top: 0, right: 20, left: 20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} width={80} />
            <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '8px', fontSize: '13px' }} />
            <Bar dataKey="sales" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={16} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col h-full">
        <h4 className="text-sm font-medium text-slate-700 mb-2 text-center">商品状态分布</h4>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={prodStatusData} {...pieProps} dataKey="value" nameKey="name" paddingAngle={2}>
              {[...COLORS].reverse().map((_, index) => <Cell key={`cell-${index}`} fill={[...COLORS].reverse()[index % COLORS.length]} />)}
            </Pie>
            <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '13px' }} />
            <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  return (
    <Card className="w-full">
      <Tabs 
        tabs={[
          { id: 'products', label: '商品管理分析', content: <ProductsTab /> },
          { id: 'orders', label: '订单管理追踪', content: <div className="h-[260px] flex items-center justify-center text-slate-400">订单图表加载中...</div> },
          { id: 'logistics', label: '物流配送监控', content: <div className="h-[260px] flex items-center justify-center text-slate-400">物流图表加载中...</div> },
          { id: 'finance', label: '财务营收核算', content: <div className="h-[260px] flex items-center justify-center text-slate-400">财务图表加载中...</div> },
          { id: 'distribution', label: '分销业务统计', content: <div className="h-[260px] flex items-center justify-center text-slate-400">分销图表加载中...</div> },
        ]}
      />
    </Card>
  );
}
