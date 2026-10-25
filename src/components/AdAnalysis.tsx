import React from "react";
import { BarChart3, TrendingUp, DollarSign, Target, MousePointer2, PieChart as PieIcon, ChevronRight, Magnet } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui";
import { cn } from "@/lib/utils";
import { 
  ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, 
  LineChart, Line, Cell, PieChart, Pie
} from "@/lib/charts";
import { COLORS } from "@/lib/charts";

const spendTrendData = [
  { day: '01', spend: 400, revenue: 1200 }, { day: '05', spend: 520, revenue: 1800 },
  { day: '10', spend: 480, revenue: 1540 }, { day: '15', spend: 610, revenue: 2400 },
  { day: '20', spend: 590, revenue: 2100 }, { day: '25', spend: 720, revenue: 3200 },
  { day: '30', spend: 840, revenue: 3800 },
];

const platformData = [
  { name: 'Google Ads', value: 45, color: '#4285F4' },
  { name: 'Facebook', value: 30, color: '#1877F2' },
  { name: 'TikTok Ads', value: 15, color: '#000000' },
  { name: 'Instagram', value: 10, color: '#E4405F' },
];

export default function AdAnalysis() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto py-6">
      <div className="px-4 sm:px-0 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <BarChart3 className="w-7 h-7 text-indigo-500" />
            全渠道广告投放分析
          </h1>
          <p className="text-slate-500 text-sm mt-1">精准洞察跨平台投放效果，优化 ROI 与获客成本。</p>
        </div>
        <div className="flex gap-3">
          <div className="bg-emerald-50 border border-emerald-100 rounded-xl px-4 py-2 flex flex-col items-end">
             <span className="text-[10px] font-bold text-emerald-600 uppercase tracking-widest">综合 ROI</span>
             <span className="text-xl font-black text-emerald-700">4.52x</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-0">
        <AdStatCard icon={<DollarSign />} label="总广告支" value="¥152,400" sub="本月消耗" color="blue" />
        <AdStatCard icon={<Target />} label="总转化数" value="3,214" sub="订单成交" color="emerald" />
        <AdStatCard icon={<MousePointer2 />} label="平均 CPC" value="¥2.45" sub="点击成本" color="amber" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-0">
        <Card className="lg:col-span-2">
           <CardHeader>
              <CardTitle>消耗与营收趋势对比 (ROAS)</CardTitle>
           </CardHeader>
           <CardContent className="h-[350px]">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={spendTrendData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                 <XAxis dataKey="day" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#64748b' }} dy={5} />
                 <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                 <Tooltip />
                 <Legend />
                 <Bar dataKey="spend" name="广告消耗" fill="#94a3b8" radius={[4, 4, 0, 0]} barSize={20} />
                 <Bar dataKey="revenue" name="产生订单额" fill="#8b5cf6" radius={[4, 4, 0, 0]} barSize={20} />
               </BarChart>
             </ResponsiveContainer>
           </CardContent>
        </Card>

        <Card className="lg:col-span-1">
           <CardHeader>
              <CardTitle>平台预算分配比例</CardTitle>
           </CardHeader>
           <CardContent className="h-[350px]">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={platformData} cx="50%" cy="50%" innerRadius={60} outerRadius={90} dataKey="value" paddingAngle={4}>
                    {platformData.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                  </Pie>
                  <Tooltip />
                  <Legend layout="vertical" align="right" verticalAlign="middle" wrapperStyle={{ fontSize: '11px' }} />
                </PieChart>
             </ResponsiveContainer>
           </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-0">
        <Card>
           <CardHeader>
              <CardTitle className="flex items-center gap-2">
                 <TrendingUp className="w-4 h-4 text-emerald-500" />
                 最佳 ROI 投放组合 (Top 3)
              </CardTitle>
           </CardHeader>
           <CardContent className="space-y-4">
              {[
                { name: 'TikTok: 夏季美白挑战赛', spend: '¥5,200', roi: '12.4x', orders: 452 },
                { name: 'FB: 北美家居办公人群定向', spend: '¥12,000', roi: '8.5x', orders: 856 },
                { name: 'Google: 运动耳机系列搜索词', spend: '¥8,500', roi: '6.2x', orders: 320 },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl border border-slate-100 bg-slate-50 flex items-center justify-between group hover:bg-white hover:shadow-md transition-all">
                  <div className="flex-1">
                    <div className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-1">Campaign {i+1}</div>
                    <div className="text-sm font-bold text-slate-800">{item.name}</div>
                  </div>
                  <div className="flex gap-8 items-center shrink-0">
                    <div className="flex flex-col items-end">
                       <span className="text-[10px] text-slate-400">消耗</span>
                       <span className="text-xs font-bold text-slate-600">{item.spend}</span>
                    </div>
                    <div className="flex flex-col items-end">
                       <span className="text-[10px] text-slate-400">ROI</span>
                       <span className="text-sm font-black text-emerald-600">{item.roi}</span>
                    </div>
                    <ChevronRight className="w-4 h-4 text-slate-300" />
                  </div>
                </div>
              ))}
           </CardContent>
        </Card>

        <Card className="bg-gradient-to-br from-indigo-700 to-indigo-900 border-none">
           <CardHeader>
              <CardTitle className="text-white">AI 投放优化策略建议</CardTitle>
           </CardHeader>
           <CardContent className="space-y-4">
              <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                 <div className="flex items-center gap-2 mb-2">
                    <Magnet className="w-4 h-4 text-rose-300" />
                    <span className="text-sm font-bold text-rose-100">高潜人群扩充建议</span>
                 </div>
                 <p className="text-xs text-indigo-100 leading-relaxed">
                   基于 TikTok 爆发数据，建议在 Facebook 侧同步针对“户外露营爱好者”进行 Lookalike 扩容（3%），预估 ROI 提升 20%。
                 </p>
              </div>
              <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                 <div className="flex items-center gap-2 mb-2">
                    <DollarSign className="w-4 h-4 text-emerald-300" />
                    <span className="text-sm font-bold text-emerald-100">预算调拨策略</span>
                 </div>
                 <p className="text-xs text-indigo-100 leading-relaxed">
                   Google 搜索广告在“耳机配件”类目竞争加剧，CPC 上涨 15%。建议调减 10% 预算至 TikTok 原生视频广告。
                 </p>
              </div>
              <button className="w-full py-3 bg-white text-indigo-900 font-black rounded-xl text-sm shadow-xl hover:scale-[1.02] transition-transform uppercase tracking-tighter">
                生成详细优化方案
              </button>
           </CardContent>
        </Card>
      </div>
    </div>
  );
}

function AdStatCard({ icon, label, value, sub, color }: { icon: React.ReactNode, label: string, value: string, sub: string, color: 'blue' | 'emerald' | 'amber' }) {
  const colors = {
    blue: "bg-blue-50 text-blue-500",
    emerald: "bg-emerald-50 text-emerald-500",
    amber: "bg-amber-50 text-amber-500",
  };
  return (
    <Card className="p-5 border-slate-100">
      <div className="flex items-center gap-4">
        <div className={cn("w-12 h-12 rounded-xl flex items-center justify-center", colors[color])}>
           {icon}
        </div>
        <div>
           <div className="text-[10px] font-bold text-slate-400 uppercase tracking-widest leading-tight">{label}</div>
           <div className="text-xl font-black text-slate-800 tracking-tighter">{value}</div>
           <div className="text-[10px] text-slate-500">{sub}</div>
        </div>
      </div>
    </Card>
  );
}
