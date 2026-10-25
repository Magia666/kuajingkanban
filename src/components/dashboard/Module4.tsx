import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui";
import { 
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  LineChart, Line, AreaChart, Area
} from "@/lib/charts";
import { COLORS } from "@/lib/charts";

const monthlyTrafficData = [
  { month: '1月', visits: 4500 }, { month: '2月', visits: 5200 }, { month: '3月', visits: 3800 },
  { month: '4月', visits: 6500 }, { month: '5月', visits: 4800 }, { month: '6月', visits: 7200 },
  { month: '7月', visits: 8000 }, { month: '8月', visits: 6800 }, { month: '9月', visits: 9500 },
  { month: '10月', visits: 11000 }, { month: '11月', visits: 8500 }, { month: '12月', visits: 12000 },
];

const userGrowthData = [
  { month: '1月', 新增: 120, 累计: 120 }, { month: '2月', 新增: 150, 累计: 270 },
  { month: '3月', 新增: 180, 累计: 450 }, { month: '4月', 新增: 220, 累计: 670 },
  { month: '5月', 新增: 200, 累计: 870 }, { month: '6月', 新增: 280, 累计: 1150 },
  { month: '7月', 新增: 310, 累计: 1460 }, { month: '8月', 新增: 290, 累计: 1750 },
  { month: '9月', 新增: 380, 累计: 2130 }, { month: '10月', 新增: 420, 累计: 2550 },
  { month: '11月', 新增: 510, 累计: 3060 }, { month: '12月', 新增: 480, 累计: 3540 },
];

const quarterlyOrderData = [
  { quarter: 'Q1', 个人订单: 1200, 平台总订单: 8500 },
  { quarter: 'Q2', 个人订单: 1500, 平台总订单: 12000 },
  { quarter: 'Q3', 个人订单: 2100, 平台总订单: 15400 },
  { quarter: 'Q4', 个人订单: 2800, 平台总订单: 21000 },
];

const productListingData = [
  { day: '1号', 新增: 12, 累计: 120 }, { day: '5号', 新增: 18, 累计: 185 },
  { day: '10号', 新增: 15, 累计: 232 }, { day: '15号', 新增: 25, 累计: 318 },
  { day: '20号', 新增: 22, 累计: 385 }, { day: '25号', 新增: 30, 累计: 452 },
  { day: '30号', 新增: 35, 累计: 520 },
];

export function TrendAnalysis() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      {/* 1 */}
      <Card>
        <CardHeader>
          <CardTitle>个人店铺月度流量趋势 (访问量)</CardTitle>
        </CardHeader>
        <CardContent className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={monthlyTrafficData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={5} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
              <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '8px', fontSize: '13px' }} />
              <Bar dataKey="visits" name="访问量" fill="#3b82f6" radius={[4, 4, 0, 0]} barSize={20} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* 2 */}
      <Card>
        <CardHeader>
          <CardTitle>平台用户增长趋势 (人)</CardTitle>
        </CardHeader>
        <CardContent className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={userGrowthData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="colorTotal" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10b981" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="month" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={5} />
              <YAxis yAxisId="left" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
              <YAxis yAxisId="right" orientation="right" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
              <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '13px' }} />
              <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
              <Area yAxisId="left" type="monotone" name="累计用户" dataKey="累计" stroke="#10b981" fillOpacity={1} fill="url(#colorTotal)" strokeWidth={2} />
              <Line yAxisId="right" type="monotone" name="新增注册" dataKey="新增" stroke="#f59e0b" strokeWidth={2} dot={{ r: 3 }} />
            </AreaChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* 3 */}
      <Card>
        <CardHeader>
          <CardTitle>平台与个人订单量季度对比</CardTitle>
        </CardHeader>
        <CardContent className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={quarterlyOrderData} margin={{ top: 10, right: 10, left: -10, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="quarter" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={5} />
              <YAxis yAxisId="left" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
              <YAxis yAxisId="right" orientation="right" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
              <Tooltip cursor={{ fill: '#f8fafc' }} contentStyle={{ borderRadius: '8px', fontSize: '13px' }} />
              <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
              <Bar yAxisId="left" dataKey="个人订单" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={24} />
              <Bar yAxisId="right" dataKey="平台总订单" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={24} />
            </BarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      {/* 4 */}
      <Card>
        <CardHeader>
          <CardTitle>全平台商品上架数量趋势 (30天)</CardTitle>
        </CardHeader>
        <CardContent className="h-[260px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={productListingData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={5} />
              <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
              <Tooltip contentStyle={{ borderRadius: '8px', fontSize: '13px' }} />
              <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }} />
              <Line type="stepAfter" name="每日新增" dataKey="新增" stroke="#3b82f6" strokeWidth={2} dot={false} />
              <Line type="monotone" name="累计上架" dataKey="累计" stroke="#ec4899" strokeWidth={2} dot={{ r: 3 }} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
