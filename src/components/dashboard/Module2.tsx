import React from "react";
import { Card } from "../ui";
import { 
  ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, AreaChart, Area
} from "@/lib/charts";
import { COLORS } from "@/lib/charts";
import { Tabs } from "../ui";

// Mock Data
const prodCategoryData = [
  { name: '数码3C', value: 450 },
  { name: '美妆护肤', value: 320 },
  { name: '居家生活', value: 280 },
  { name: '户外运动', value: 190 },
];
const prodSalesTop = [
  { name: 'ANC降噪耳机', sales: 1240 },
  { name: '65W快充头', sales: 980 },
  { name: '玻尿酸面霜', sales: 856 },
  { name: '智能运动手表', sales: 742 },
  { name: '负离子电吹风', sales: 650 },
];
const prodStatusData = [
  { name: '在售中', value: 850 },
  { name: '已下架', value: 120 },
  { name: '审核中', value: 45 },
];

// Orders Data
const orderPlatformData = [
  { name: 'Shopee', value: 1540 },
  { name: 'TikTok Shop', value: 1025 },
  { name: 'Lazada', value: 649 },
];
const orderTrendData = [
  { day: '10-18', orders: 420 },
  { day: '10-19', orders: 450 },
  { day: '10-20', orders: 490 },
  { day: '10-21', orders: 530 },
  { day: '10-22', orders: 580 },
  { day: '10-23', orders: 610 },
  { day: '10-24', orders: 645 },
];
const orderStatusData = [
  { name: '已妥投', value: 2180 },
  { name: '运输中', value: 760 },
  { name: '待发货', value: 274 },
];

// Logistics Data
const channelShareData = [
  { name: 'SLS官方专线', value: 42 },
  { name: '极兔速递 J&T', value: 31 },
  { name: '闪电达 Flash', value: 18 },
  { name: '能者 Ninja', value: 9 },
];
const countrySpeedData = [
  { country: '新加坡 (SG)', days: 2.1 },
  { country: '马来西亚 (MY)', days: 3.2 },
  { country: '泰国 (TH)', days: 3.8 },
  { country: '菲律宾 (PH)', days: 4.5 },
  { country: '印度尼西亚 (ID)', days: 5.1 },
];

// Finance Data
const financialTrendData = [
  { month: '5月', revenue: 180, cost: 120, profit: 60 },
  { month: '6月', revenue: 210, cost: 140, profit: 70 },
  { month: '7月', revenue: 250, cost: 165, profit: 85 },
  { month: '8月', revenue: 310, cost: 205, profit: 105 },
  { month: '9月', revenue: 380, cost: 250, profit: 130 },
  { month: '10月', revenue: 420, cost: 275, profit: 145 },
];
const costStructureData = [
  { name: '货源采购', value: 62 },
  { name: '跨境物流', value: 22 },
  { name: '平台佣金/税费', value: 11 },
  { name: '仓储打包增值', value: 5 },
];

// Distribution Data
const distributorTierData = [
  { name: '一级合伙人', value: 18 },
  { name: '核心代发商', value: 35 },
  { name: '普通分销商', value: 47 },
];
const topDistributionSKU = [
  { name: 'ANC蓝牙耳机', count: 890 },
  { name: '65W氮化镓快充', count: 640 },
  { name: '智能心率手表', count: 520 },
  { name: '玻尿酸面霜', count: 480 },
  { name: '电子温湿度计', count: 350 },
];

export function BusinessModuleDashboard() {
  const pieProps = { cx: "50%", cy: "50%", outerRadius: 70, innerRadius: 40 };

  const ProductsTab = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[260px]">
      <div className="flex flex-col h-full">
        <h4 className="text-sm font-medium text-slate-700 mb-2 text-center">商品品类结构分布</h4>
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
        <h4 className="text-sm font-medium text-slate-700 mb-2 text-center">商品销量 TOP5 (件)</h4>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={prodSalesTop} layout="vertical" margin={{ top: 0, right: 20, left: 20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} width={90} />
            <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '8px', fontSize: '13px' }} />
            <Bar dataKey="sales" fill="#3b82f6" radius={[0, 4, 4, 0]} barSize={16} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col h-full">
        <h4 className="text-sm font-medium text-slate-700 mb-2 text-center">在线库存上架状态</h4>
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

  const OrdersTab = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[260px]">
      <div className="flex flex-col h-full">
        <h4 className="text-sm font-medium text-slate-700 mb-2 text-center">各平台订单占比</h4>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={orderPlatformData} {...pieProps} dataKey="value" nameKey="name" paddingAngle={2}>
              {orderPlatformData.map((_, index) => <Cell key={`ord-${index}`} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '13px' }} />
            <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col h-full border-l border-r border-slate-100 px-4">
        <h4 className="text-sm font-medium text-slate-700 mb-2 text-center">近7日日均订单趋势 (单)</h4>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={orderTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="day" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
            <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '13px' }} />
            <Area type="monotone" dataKey="orders" stroke="#3b82f6" fill="#bfdbfe" fillOpacity={0.5} />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col h-full">
        <h4 className="text-sm font-medium text-slate-700 mb-2 text-center">履约交付状态</h4>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={orderStatusData} {...pieProps} dataKey="value" nameKey="name" paddingAngle={2}>
              <Cell fill="#10b981" />
              <Cell fill="#3b82f6" />
              <Cell fill="#f59e0b" />
            </Pie>
            <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '13px' }} />
            <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const LogisticsTab = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[260px]">
      <div className="flex flex-col h-full">
        <h4 className="text-sm font-medium text-slate-700 mb-2 text-center">跨境物流渠道配比 (%)</h4>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={channelShareData} {...pieProps} dataKey="value" nameKey="name" paddingAngle={2}>
              {channelShareData.map((_, index) => <Cell key={`ch-${index}`} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '13px' }} />
            <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col h-full border-l border-r border-slate-100 px-4">
        <h4 className="text-sm font-medium text-slate-700 mb-2 text-center">各国平均妥投时效 (天)</h4>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={countrySpeedData} layout="vertical" margin={{ top: 0, right: 20, left: 10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
            <XAxis type="number" unit="天" tick={{ fontSize: 11, fill: '#64748b' }} />
            <YAxis dataKey="country" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} width={95} />
            <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '8px', fontSize: '13px' }} />
            <Bar dataKey="days" fill="#10b981" radius={[0, 4, 4, 0]} barSize={14} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col h-full items-center justify-center p-4 bg-slate-50/60 rounded-xl border border-slate-100">
        <div className="text-center mb-3">
          <span className="text-xs text-slate-500 font-medium">综合包裹准时妥投率</span>
          <div className="text-3xl font-black text-emerald-600 mt-1">98.4%</div>
          <span className="text-[11px] text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">优于行业标准 +2.6%</span>
        </div>
        <div className="w-full pt-3 border-t border-slate-200 text-xs text-slate-600 flex justify-around">
          <div>平均出库时效: <strong className="text-slate-800">4.8h</strong></div>
          <div>异常丢损率: <strong className="text-slate-800">0.02%</strong></div>
        </div>
      </div>
    </div>
  );

  const FinanceTab = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[260px]">
      <div className="flex flex-col h-full col-span-2 pr-4">
        <h4 className="text-sm font-medium text-slate-700 mb-2 text-center">近6个月营收、成本与毛利趋势 (千元)</h4>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={financialTrendData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
            <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
            <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '13px' }} />
            <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
            <Bar dataKey="revenue" name="营业收入" fill="#3b82f6" radius={[4, 4, 0, 0]} />
            <Bar dataKey="cost" name="总支出成本" fill="#94a3b8" radius={[4, 4, 0, 0]} />
            <Bar dataKey="profit" name="毛利润" fill="#10b981" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col h-full border-l border-slate-100 pl-4">
        <h4 className="text-sm font-medium text-slate-700 mb-2 text-center">总支出成本结构占比</h4>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={costStructureData} {...pieProps} dataKey="value" nameKey="name" paddingAngle={2}>
              {costStructureData.map((_, index) => <Cell key={`cost-${index}`} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '13px' }} />
            <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );

  const DistributionTab = () => (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[260px]">
      <div className="flex flex-col h-full">
        <h4 className="text-sm font-medium text-slate-700 mb-2 text-center">分销商层级分布</h4>
        <ResponsiveContainer width="100%" height="100%">
          <PieChart>
            <Pie data={distributorTierData} {...pieProps} dataKey="value" nameKey="name" paddingAngle={2}>
              {distributorTierData.map((_, index) => <Cell key={`dst-${index}`} fill={COLORS[index % COLORS.length]} />)}
            </Pie>
            <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '13px' }} />
            <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
          </PieChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col h-full border-l border-r border-slate-100 px-4">
        <h4 className="text-sm font-medium text-slate-700 mb-2 text-center">分销出货热榜 TOP5 (件)</h4>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={topDistributionSKU} layout="vertical" margin={{ top: 0, right: 20, left: 20, bottom: 0 }}>
            <CartesianGrid strokeDasharray="3 3" horizontal={true} vertical={false} stroke="#f1f5f9" />
            <XAxis type="number" hide />
            <YAxis dataKey="name" type="category" axisLine={false} tickLine={false} tick={{ fontSize: 11, fill: '#64748b' }} width={90} />
            <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '8px', fontSize: '13px' }} />
            <Bar dataKey="count" fill="#8b5cf6" radius={[0, 4, 4, 0]} barSize={16} />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="flex flex-col h-full items-center justify-center p-4 bg-purple-50/40 rounded-xl border border-purple-100">
        <div className="text-center mb-3">
          <span className="text-xs text-purple-700 font-medium">本月已发放分销佣金</span>
          <div className="text-3xl font-black text-purple-800 mt-1">¥48,227.50</div>
          <span className="text-[11px] text-purple-600 bg-purple-100 px-2 py-0.5 rounded-full">分销商活跃度 92%</span>
        </div>
        <div className="w-full pt-3 border-t border-purple-200 text-xs text-purple-700 flex justify-around">
          <div>活跃分销商: <strong>142 家</strong></div>
          <div>代发订单占比: <strong>38.5%</strong></div>
        </div>
      </div>
    </div>
  );

  return (
    <Card className="w-full">
      <Tabs 
        tabs={[
          { id: 'products', label: '商品管理分析', content: <ProductsTab /> },
          { id: 'orders', label: '订单管理追踪', content: <OrdersTab /> },
          { id: 'logistics', label: '物流配送监控', content: <LogisticsTab /> },
          { id: 'finance', label: '财务营收核算', content: <FinanceTab /> },
          { id: 'distribution', label: '分销业务统计', content: <DistributionTab /> },
        ]}
      />
    </Card>
  );
}
