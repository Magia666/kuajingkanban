import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui";
import { 
  BookOpen, MonitorPlay, Newspaper, Bot, ChevronRight, Store, 
  UploadCloud, Eye, MousePointerClick, CreditCard, Truck, CheckSquare,
  ArrowDown
} from "lucide-react";

const flowData = [
  { id: 1, step: '商品刊登铺货', count: 5680, unit: '款SKU', rate: '100%', icon: Store, isLow: false },
  { id: 2, step: '多店铺同步上架', count: 4850, unit: '款SKU', rate: '85.4%', icon: UploadCloud, isLow: false },
  { id: 3, step: '产生动销爆款', count: 3200, unit: '款SKU', rate: '66.0%', icon: Eye, isLow: true },
  { id: 4, step: '订单成交总数', count: 3214, unit: '笔订单', rate: '100%', icon: CreditCard, isLow: false },
  { id: 5, step: '集运打包换标', count: 3180, unit: '件包裹', rate: '98.9%', icon: Truck, isLow: false },
  { id: 6, step: '跨境干线派送', count: 3140, unit: '件包裹', rate: '98.7%', icon: Truck, isLow: false },
  { id: 7, step: '买家签收结算', count: 3095, unit: '笔回款', rate: '98.6%', icon: CheckSquare, isLow: false },
];

const resources = [
  { title: '平台运营规则', desc: '平台各功能模块的详细指南', icon: BookOpen, color: 'text-blue-500', bg: 'bg-blue-50' },
  { title: '业务进阶教程', desc: '图文和视频形式的实操教程', icon: MonitorPlay, color: 'text-indigo-500', bg: 'bg-indigo-50' },
  { title: '跨境行业研究', desc: '最新跨境电商动态与政策分析', icon: Newspaper, color: 'text-emerald-500', bg: 'bg-emerald-50' },
];

export function FunnelResources() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 gap-5">
      <Card className="lg:col-span-3">
        <CardHeader>
          <div className="flex justify-between items-center">
            <CardTitle>跨境电商全链路业务转化漏斗</CardTitle>
            <span className="text-xs text-slate-500 font-normal">统计周期：近30天全业务链</span>
          </div>
        </CardHeader>
        <CardContent className="py-6 h-[480px] overflow-y-auto">
          <div className="flex flex-col items-center gap-2">
            {flowData.map((item, index) => (
              <React.Fragment key={item.id}>
                <div className="w-full max-w-xl">
                  <div 
                    className={`relative flex items-center justify-between px-6 py-3 rounded-xl shadow-sm border transition-all duration-300 hover:shadow-md
                      ${item.isLow ? 'bg-rose-50 border-rose-200' : 'bg-slate-50 border-slate-200'}`}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`p-2 rounded-lg ${item.isLow ? 'bg-rose-100 text-rose-600' : 'bg-primary-100 text-primary-600'}`}>
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="text-[10px] text-slate-400 font-bold uppercase tracking-wider mb-0.5">Step {index + 1}</div>
                        <div className={`font-bold text-sm sm:text-base ${item.isLow ? 'text-rose-900' : 'text-slate-800'}`}>
                          {item.step}
                        </div>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-8">
                      <div className="flex flex-col items-end">
                        <span className="text-[10px] text-slate-500 font-medium">数量 ({item.unit})</span>
                        <span className={`font-bold text-sm sm:text-base ${item.isLow ? 'text-rose-700' : 'text-slate-700'}`}>
                          {item.count.toLocaleString()}
                        </span>
                      </div>
                      {index > 0 && (
                        <div className="flex flex-col items-end min-w-[60px]">
                          <span className="text-[10px] text-slate-500 font-medium">转换率</span>
                          <span className={`font-bold text-sm sm:text-base ${item.isLow ? 'text-rose-600 animate-pulse' : 'text-emerald-600'}`}>
                            {item.rate}
                          </span>
                        </div>
                      )}
                      {index === 0 && <div className="min-w-[60px]" />}
                    </div>
                  </div>
                </div>
                {index < flowData.length - 1 && (
                  <div className="flex justify-center py-1">
                    <ArrowDown className="w-5 h-5 text-slate-300" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="lg:col-span-2">
        <CardHeader>
          <CardTitle>常用运营资源</CardTitle>
        </CardHeader>
        <CardContent className="grid grid-cols-1 gap-4 pt-4">
          <div className="p-5 rounded-xl bg-gradient-to-br from-indigo-500 to-purple-600 text-white cursor-pointer hover:shadow-lg transition-all group overflow-hidden relative">
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-xl group-hover:scale-150 transition-transform"></div>
            <div className="flex items-start justify-between relative z-10">
              <div>
                <h3 className="font-bold text-lg mb-1 flex items-center gap-2">
                  <Bot className="w-5 h-5" />
                  AI 业务助手
                </h3>
                <p className="text-indigo-100 text-sm">全天候为您解读市场数据，提供策略支持。</p>
              </div>
              <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white group-hover:text-indigo-600 transition-colors">
                <ChevronRight className="w-4 h-4" />
              </div>
            </div>
          </div>
          
          <div className="grid gap-3 mt-2">
            {resources.map((res, idx) => (
              <div key={idx} className="flex flex-row items-center gap-4 p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:ring-1 hover:ring-slate-200 hover:shadow-sm transition-all cursor-pointer group">
                <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${res.bg} ${res.color} group-hover:scale-110 transition-transform`}>
                  <res.icon className="w-5 h-5" />
                </div>
                <div className="flex-1">
                  <h4 className="font-semibold text-slate-800 text-sm mb-0.5 group-hover:text-primary-600 transition-colors">{res.title}</h4>
                  <p className="text-xs text-slate-500">{res.desc}</p>
                </div>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover:text-primary-400" />
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
