import React from "react";
import { PackageX, AlertTriangle, Truck, History, Search, Filter, ArrowRight, Package } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip, Legend, BarChart, Bar, XAxis, YAxis, CartesianGrid } from "@/lib/charts";
import { COLORS } from "@/lib/charts";

const stockStatusData = [
  { name: '库存极低', value: 12 },
  { name: '库存低', value: 45 },
  { name: '正常库存', value: 280 },
  { name: '库存冗余', value: 34 },
];

const alertList = [
  { id: 1, name: "夏季速干运动T恤 (黑色/XL)", current: 4, safe: 50, daysLeft: 2, status: 'urgent' },
  { id: 2, name: "智能蓝牙耳机 X1 (白色)", current: 8, safe: 30, daysLeft: 5, status: 'warning' },
  { id: 3, name: "防蓝光平光眼镜", current: 15, safe: 100, daysLeft: 3, status: 'urgent' },
  { id: 4, name: "便携式智能保温杯", current: 22, safe: 60, daysLeft: 12, status: 'normal' },
  { id: 5, name: "家用空气净化器滤芯", current: 3, safe: 20, daysLeft: 1, status: 'urgent' },
];

export default function InventoryWarning() {
  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto py-6">
      <div className="px-4 sm:px-0 flex justify-between items-end">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <PackageX className="w-7 h-7 text-rose-500" />
            全自动库存预警中心
          </h1>
          <p className="text-slate-500 text-sm mt-1">智能监控多仓库库存状态，自动下达补货建议。</p>
        </div>
        <div className="flex gap-2">
           <button className="px-4 py-2 bg-rose-600 text-white text-sm font-bold rounded-lg shadow-md hover:bg-rose-700 transition-colors flex items-center gap-2">
             <Package className="w-4 h-4" />
             一键生成补货单
           </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-4 sm:px-0">
        <Card className="md:col-span-1">
          <CardHeader>
             <CardTitle>库存安全健康度</CardTitle>
          </CardHeader>
          <CardContent className="h-[280px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie data={stockStatusData} cx="50%" cy="50%" innerRadius={60} outerRadius={80} dataKey="value" paddingAngle={5}>
                  {stockStatusData.map((_, index) => <Cell key={index} fill={['#ef4444', '#f59e0b', '#10b981', '#3b82f6'][index]} />)}
                </Pie>
                <Tooltip />
                <Legend layout="vertical" align="right" verticalAlign="middle" />
              </PieChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="md:col-span-2">
          <CardHeader className="flex flex-row items-center justify-between">
             <CardTitle>告急商品监控 (TOP 5)</CardTitle>
             <button className="text-xs text-primary-600 font-bold flex items-center gap-1">查看完整列表 <ArrowRight className="w-3 h-3"/></button>
          </CardHeader>
          <CardContent className="p-0">
            <table className="w-full text-sm">
              <thead className="bg-slate-50 border-b border-slate-100 text-slate-400 text-[10px] uppercase font-black">
                <tr>
                  <th className="px-6 py-3 text-left font-bold">商品名称</th>
                  <th className="px-6 py-3 text-center font-bold">当前库存</th>
                  <th className="px-6 py-3 text-center font-bold">安全红线</th>
                  <th className="px-6 py-3 text-center font-bold">预估耗尽(天)</th>
                  <th className="px-6 py-3 text-right font-bold">状态</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {alertList.map(item => (
                  <tr key={item.id} className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-medium text-slate-700 truncate max-w-[200px]">{item.name}</td>
                    <td className="px-6 py-4 text-center text-slate-800 font-bold">{item.current}</td>
                    <td className="px-6 py-4 text-center text-slate-400">{item.safe}</td>
                    <td className="px-6 py-4 text-center">
                       <span className={item.daysLeft <= 3 ? "text-rose-600 font-bold" : "text-slate-600"}>{item.daysLeft}</span>
                    </td>
                    <td className="px-6 py-4 text-right">
                       <span className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase ${
                         item.status === 'urgent' ? 'bg-rose-100 text-rose-600' : 
                         item.status === 'warning' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'
                       }`}>
                         {item.status === 'urgent' ? '紧急补货' : item.status === 'warning' ? '库存偏低' : '定期补货'}
                       </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 px-4 sm:px-0">
        <Card className="lg:col-span-2">
           <CardHeader>
              <CardTitle>多仓配货健康度预测 (近30天)</CardTitle>
           </CardHeader>
           <CardContent className="h-[300px]">
             <ResponsiveContainer width="100%" height="100%">
               <BarChart data={[
                 { name: '美东仓', 库存: 120, 预警: 20 },
                 { name: '美西仓', 库存: 85, 预警: 35 },
                 { name: '欧洲仓', 库存: 210, 预警: 45 },
                 { name: '东南亚仓', 库存: 154, 预警: 80 },
                 { name: '深圳总仓', 库存: 560, 预警: 12 },
               ]}>
                 <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                 <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                 <YAxis tickLine={false} axisLine={false} tick={{ fontSize: 11, fill: '#64748b' }} />
                 <Tooltip />
                 <Legend />
                 <Bar dataKey="库存" fill="#3b82f6" radius={[4, 4, 0, 0]} />
                 <Bar dataKey="预警" fill="#ef4444" radius={[4, 4, 0, 0]} />
               </BarChart>
             </ResponsiveContainer>
           </CardContent>
        </Card>
        
        <Card className="lg:col-span-1 bg-primary-900 border-none">
           <CardHeader>
              <CardTitle className="text-white">AI 补货决策建议</CardTitle>
           </CardHeader>
           <CardContent className="flex flex-col gap-5">
              <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                 <div className="flex items-center gap-3 mb-2">
                    <AlertTriangle className="text-amber-400 w-5 h-5" />
                    <span className="text-sm font-bold text-white">季节性库存短缺风险</span>
                 </div>
                 <p className="text-xs text-blue-100 leading-relaxed">
                   根据历史趋势，夏季户外用品在北美市场将在未来14天内迎来爆发。建议将“美西仓”户外装备类目库存提升 40%。
                 </p>
              </div>
              <div className="p-4 bg-white/10 rounded-xl border border-white/10">
                 <div className="flex items-center gap-3 mb-2">
                    <Truck className="text-blue-400 w-5 h-5" />
                    <span className="text-sm font-bold text-white">最优转运方案</span>
                 </div>
                 <p className="text-xs text-blue-100 leading-relaxed">
                   东南亚仓目前存在冗余库存，而美东仓缺货，跨洋空运成本较高。建议启动“东盟-美东”线路联运，可节省 15% 运费。
                 </p>
              </div>
              <button className="w-full py-3 bg-white text-primary-900 font-black rounded-xl shadow-lg hover:scale-[1.02] transition-transform uppercase tracking-tighter text-sm">
                应用 AI 调拨建议
              </button>
           </CardContent>
        </Card>
      </div>
    </div>
  );
}
