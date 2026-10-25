import React from "react";
import { ArrowUpRight, ArrowDownRight, Clock, DollarSign, Package, ShoppingCart, Users, TrendingUp } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui";
import { 
  ResponsiveContainer, PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, LineChart, Line, Legend
} from "@/lib/charts";
import { COLORS } from "@/lib/charts";

const kpiData = [
  { title: "我的累计客户数", icon: Users, color: "text-blue-500", bg: "bg-blue-50", main: "3,280 人", sub: "本月新增 125", isUp: true, rate: "12%" },
  { title: "我的店铺总销售额", icon: DollarSign, color: "text-emerald-500", bg: "bg-emerald-50", main: "¥128,650", sub: "本周 ¥15,200", isUp: true, rate: "8.5%" },
  { title: "我的订单总数", icon: ShoppingCart, color: "text-violet-500", bg: "bg-violet-50", main: "1,256 单", sub: "待处理 12 单", isUp: false, rate: "2.1%" },
  { title: "我的商品总数", icon: Package, color: "text-amber-500", bg: "bg-amber-50", main: "86 件", sub: "在售 62 件", isUp: true, rate: "5.0%" },
  { title: "全平台活跃用户", icon: Users, color: "text-indigo-500", bg: "bg-indigo-50", main: "5,682 人", sub: "在线 326 人", isUp: true, rate: "1.2%" },
  { title: "平台今日订单量", icon: ShoppingCart, color: "text-fuchsia-500", bg: "bg-fuchsia-50", main: "2,158 单", sub: "较昨日变化率", isUp: true, rate: "18.4%" },
  { title: "平台今日销售额", icon: TrendingUp, color: "text-rose-500", bg: "bg-rose-50", main: "¥368,920", sub: "较昨日变化率", isUp: false, rate: "4.2%" },
  { title: "全平台入驻商户", icon: Store, color: "text-cyan-500", bg: "bg-cyan-50", main: "1,256 家", sub: "新增 42 家", isUp: true, rate: "6.8%" },
];

export function KPICards() {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 2xl:grid-cols-8 gap-5">
      {kpiData.map((item, idx) => (
        <Card key={idx} className="overflow-hidden">
          <CardContent className="p-4 flex flex-col justify-between h-full group">
            <div className="flex items-start justify-between mb-2">
              <span className="text-slate-500 text-xs font-medium leading-tight">{item.title}</span>
              <div className={`p-1.5 rounded-lg ${item.bg} ${item.color}`}>
                {item.icon && <item.icon className="w-4 h-4" />}
              </div>
            </div>
            <div className="mt-2">
              <div className="text-lg font-bold text-slate-800">{item.main}</div>
              <div className="text-xs text-slate-500 mt-1 flex items-center justify-between">
                <span>{item.sub}</span>
                <span className={`flex items-center text-[10px] font-semibold ${item.isUp ? 'text-emerald-600' : 'text-rose-600'}`}>
                  {item.isUp ? <ArrowUpRight className="w-3 h-3 mr-0.5" /> : <ArrowDownRight className="w-3 h-3 mr-0.5" />}
                  {item.rate}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

// Data for module 1 charts
const radarData = [
  { subject: '选品上架', myScore: 88, avgScore: 65, fullMark: 100 },
  { subject: '履约效率', myScore: 92, avgScore: 78, fullMark: 100 },
  { subject: '售后响应', myScore: 75, avgScore: 60, fullMark: 100 },
  { subject: '获客成本', myScore: 85, avgScore: 72, fullMark: 100 },
  { subject: 'ROI转化', myScore: 60, avgScore: 55, fullMark: 100 },
  { subject: '供应链协作', myScore: 70, avgScore: 80, fullMark: 100 },
];

const trendData = [
  { date: '10-01', actual: 4000, lastWeek: 3200 },
  { date: '10-02', actual: 5200, lastWeek: 3800 },
  { date: '10-03', actual: 4800, lastWeek: 4200 },
  { date: '10-04', actual: 6500, lastWeek: 5000 },
  { date: '10-05', actual: 5900, lastWeek: 4800 },
  { date: '10-06', actual: 7200, lastWeek: 6000 },
  { date: '10-07', actual: 8600, lastWeek: 6800 },
];

import { RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "@/lib/charts";
import { Store } from "lucide-react";

export function CoreCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
      <Card>
        <CardHeader>
          <CardTitle>个人店铺精细化运营能力雷达</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
              <PolarGrid stroke="#e2e8f0" />
              <PolarAngleAxis dataKey="subject" tick={{ fill: '#64748b', fontSize: 12 }} />
              <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
              <Radar name="我的得分" dataKey="myScore" stroke="#3b82f6" fill="#3b82f6" fillOpacity={0.5} />
              <Radar name="平台平均" dataKey="avgScore" stroke="#cbd5e1" fill="#cbd5e1" fillOpacity={0.3} />
              <Tooltip formatter={(value, name) => [`${value}分`, name === 'myScore' ? '我的得分' : '平台平均']} />
              <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }}/>
            </RadarChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>平台近 7 日销售额趋势</CardTitle>
          <span className="text-xs text-slate-400">单位：元</span>
        </CardHeader>
        <CardContent className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart data={trendData} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis dataKey="date" tickLine={false} axisLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dy={10} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: '#64748b', fontSize: 12 }} dx={-10} />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                formatter={(value: number) => [`¥${value.toLocaleString()}`, undefined]}
              />
              <Legend iconType="circle" wrapperStyle={{ fontSize: '12px' }}/>
              <Line type="monotone" name="每日实际销售额" dataKey="actual" stroke="#10b981" strokeWidth={3} dot={{ r: 4, fill: '#10b981', strokeWidth: 0 }} activeDot={{ r: 6 }} />
              <Line type="monotone" name="上周同期销售额" dataKey="lastWeek" stroke="#cbd5e1" strokeWidth={2} strokeDasharray="5 5" dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </div>
  );
}
