import React from "react";
import { Activity, Globe, Zap, Users, Heart, Share2, Eye, MousePointerClick, TrendingUp, ArrowUpRight } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui";
import { 
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
  BarChart, Bar, Cell, PieChart, Pie
} from "@/lib/charts";
import { COLORS } from "@/lib/charts";

const trafficData = [
  { time: '10:00', traffic: 450 }, { time: '10:05', traffic: 520 }, { time: '10:10', traffic: 480 },
  { time: '10:15', traffic: 610 }, { time: '10:20', traffic: 590 }, { time: '10:25', traffic: 720 },
  { time: '10:30', traffic: 840 }, { time: '10:35', traffic: 920 }, { time: '10:40', traffic: 890 },
  { time: '10:45', traffic: 1100 }, { time: '10:50', traffic: 1050 }, { time: '10:55', traffic: 1200 },
];

const globalSource = [
  { name: '美国', value: 45, color: '#3b82f6' },
  { name: '欧盟', value: 25, color: '#10b981' },
  { name: '东南亚', value: 15, color: '#f59e0b' },
  { name: '日本', value: 10, color: '#ef4444' },
  { name: '其他', value: 5, color: '#64748b' },
];

export default function DataMonitoring() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto py-6">
      <div className="px-4 sm:px-0 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Activity className="w-7 h-7 text-emerald-500 animate-pulse" />
            全链路实时数据监控
          </h1>
          <p className="text-slate-500 text-sm mt-1">毫秒级业务流同步，多维度市场异动即时感知。</p>
        </div>
        <div className="flex gap-4">
          <div className="bg-slate-900 text-white px-4 py-2 rounded-xl flex items-center gap-3">
             <div className="w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
             <span className="text-xs font-bold uppercase tracking-tighter">Live Stream ON</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 px-4 sm:px-0">
        <MonitorCard icon={<Eye />} label="全站实时浏览" value="1,248" change="+12%" />
        <MonitorCard icon={<MousePointerClick />} label="实时点击量" value="8,562" change="+8.4%" />
        <MonitorCard icon={<Users />} label="在线访客" value="3,214" change="+15%" />
        <MonitorCard icon={<TrendingUp />} label="实时转化率" value="4.25%" change="+0.8%" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-0">
        <Card className="lg:col-span-2">
           <CardHeader>
              <CardTitle>全站访问流量实时变动</CardTitle>
           </CardHeader>
           <CardContent className="h-[350px]">
             <ResponsiveContainer width="100%" height="100%">
               <AreaChart data={trafficData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                 <defs>
                   <linearGradient id="colorTraffic" x1="0" y1="0" x2="0" y2="1">
                     <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3}/>
                     <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                   </linearGradient>
                 </defs>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                 <XAxis dataKey="time" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                 <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                 <Tooltip />
                 <Area type="monotone" dataKey="traffic" stroke="#3b82f6" fillOpacity={1} fill="url(#colorTraffic)" strokeWidth={3} />
               </AreaChart>
             </ResponsiveContainer>
           </CardContent>
        </Card>

        <Card className="lg:col-span-1">
           <CardHeader>
              <CardTitle>全球访客地理分布</CardTitle>
           </CardHeader>
           <CardContent className="h-[350px]">
             <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie data={globalSource} cx="50%" cy="50%" innerRadius={70} outerRadius={100} dataKey="value" paddingAngle={4}>
                    {globalSource.map((entry, index) => <Cell key={index} fill={entry.color} />)}
                  </Pie>
                  <Tooltip />
                  <Legend layout="horizontal" align="center" verticalAlign="bottom" wrapperStyle={{ fontSize: '11px', paddingTop: '20px' }} />
                </PieChart>
             </ResponsiveContainer>
           </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 sm:px-0">
        <Card>
          <CardHeader>
            <CardTitle>商品热门点击排行 (实时)</CardTitle>
          </CardHeader>
          <CardContent className="p-0">
            <div className="flex flex-col">
               {[
                 { name: '运动蓝牙耳机', clicks: 1250, change: '+12%' },
                 { name: '夏季速干衣', clicks: 980, change: '+8%' },
                 { name: '防蓝光眼镜', clicks: 850, change: '-2%' },
                 { name: '智能保温杯', clicks: 760, change: '+24%' },
                 { name: '多功能背包', clicks: 540, change: '+5%' },
               ].map((item, i) => (
                 <div key={i} className="px-6 py-4 flex items-center justify-between border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                    <div className="flex items-center gap-4">
                       <span className="text-sm font-black text-slate-300 w-4 tracking-tighter">0{i+1}</span>
                       <span className="text-sm font-bold text-slate-700">{item.name}</span>
                    </div>
                    <div className="flex items-center gap-6">
                       <span className="text-sm font-black text-slate-800">{item.clicks.toLocaleString()} Clicks</span>
                       <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded ${item.change.startsWith('+') ? 'bg-emerald-100 text-emerald-600' : 'bg-rose-100 text-rose-600'}`}>
                         {item.change}
                       </span>
                    </div>
                 </div>
               ))}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-slate-900 border-none">
           <CardHeader>
              <CardTitle className="text-white">异动数据分析 AI 周报</CardTitle>
           </CardHeader>
           <CardContent className="space-y-4">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-white">
                 <div className="flex items-center gap-2 mb-2">
                    <Zap className="w-4 h-4 text-amber-400" />
                    <span className="text-sm font-bold">突发流量事件解析</span>
                 </div>
                 <p className="text-xs text-slate-400 leading-relaxed">
                   检测到 10:45 左右，由于 TikTok 某知名博主发布开箱视频，美东地区流量瞬间增长 400%。
                 </p>
              </div>
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 text-white">
                 <div className="flex items-center gap-2 mb-2">
                    <Globe className="w-4 h-4 text-blue-400" />
                    <span className="text-sm font-bold">市场缺口预警</span>
                 </div>
                 <p className="text-xs text-slate-400 leading-relaxed">
                   东南亚市场对“长续航音频设备”的搜索热度环比上升 25%，当前库存在该区域曝光转化率高达 18%。
                 </p>
              </div>
              <div className="flex gap-3">
                 <button className="flex-1 py-3 bg-emerald-500 text-white font-bold rounded-xl text-sm hover:bg-emerald-600 shadow-md">下载详细报告</button>
                 <button className="flex-1 py-3 bg-white/10 text-white font-bold rounded-xl text-sm border border-white/10 hover:bg-white/20">配置告警规则</button>
              </div>
           </CardContent>
        </Card>
      </div>
    </div>
  );
}

function MonitorCard({ icon, label, value, change }: { icon: React.ReactNode, label: string, value: string, change: string }) {
  return (
    <Card className="p-5 border-slate-100">
       <div className="flex justify-between items-start mb-3">
          <div className="p-2 bg-slate-50 text-slate-400 rounded-lg">{icon}</div>
          <div className="flex items-center gap-1 text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
             <ArrowUpRight className="w-3 h-3" />
             {change}
          </div>
       </div>
       <div className="text-[10px] uppercase font-bold text-slate-400 tracking-widest mb-1">{label}</div>
       <div className="text-2xl font-black text-slate-800 tracking-tighter">{value}</div>
    </Card>
  );
}
