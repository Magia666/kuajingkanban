import React, { useState } from "react";
import { Sparkles, Search, TrendingUp, Zap, ShoppingBag, BarChart3, ChevronRight, MessageSquare, Loader2 } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "./ui";
import { cn } from "@/lib/utils";

const categoryTags = ["全品类", "数码家电", "服装服饰", "美妆个护", "母婴玩具", "家居百货", "运动户外"];

const mockRecommendations = [
  {
    id: 1,
    name: "智能真无线降噪耳机 X1",
    category: "数码家电",
    trend: "上升",
    potential: 92,
    reason: "近期东南亚市场对高性价比音频设备需求激增，TikTok相关词汇搜索量增长150%。",
    profit: "45%",
    competition: "中等"
  },
  {
    id: 2,
    name: "便携式多功能电热杯",
    category: "家居百货",
    trend: "稳定",
    potential: 85,
    reason: "欧美市场“移动办公”理念普及，该单品在Amazon相关类目BSR排名稳步提升。",
    profit: "60%",
    competition: "偏低"
  },
  {
    id: 3,
    name: "复古半框防蓝光眼镜",
    category: "服装服饰",
    trend: "爆发",
    potential: 96,
    reason: "社媒潮流驱动，Instagram博主大量带货，独立站点击率较上周翻倍。",
    profit: "75%",
    competition: "中高"
  }
];

export default function AISelection() {
  const [query, setQuery] = useState("");
  const [isAnalyzing, setIsAnalyzing] = useState(false);

  const handleSearch = () => {
    if (!query) return;
    setIsAnalyzing(true);
    setTimeout(() => setIsAnalyzing(false), 2000);
  };

  return (
    <div className="flex flex-col gap-6 w-full max-w-7xl mx-auto py-6 px-4 sm:px-6">
      {/* Header Section */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Sparkles className="w-6 h-6 text-primary-500" />
            AI 智能选品助手
          </h1>
          <p className="text-slate-500 text-sm mt-1">基于大数据分析与市场趋势预测，为您挖掘高潜力跨境爆款。</p>
        </div>
        <div className="flex items-center gap-3">
          <div className="bg-primary-50 border border-primary-100 px-3 py-1.5 rounded-full flex items-center gap-2 text-primary-700 text-xs font-semibold">
            <TrendingUp className="w-3.5 h-3.5" />
            今日市场情绪：看涨
          </div>
        </div>
      </div>

      {/* Search & Input Section */}
      <Card className="border-none shadow-md bg-gradient-to-r from-primary-600 to-indigo-600">
        <CardContent className="p-8">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-xl font-bold text-white">输入关键词或市场需求，AI立即为您分析</h2>
            <div className="relative group">
              <input
                type="text"
                placeholder="例如：日本市场夏季户外、高利润数码配件..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-white/10 border border-white/20 rounded-2xl py-4 pl-6 pr-32 text-white placeholder:text-white/50 outline-none focus:bg-white/20 focus:ring-4 focus:ring-white/10 transition-all text-lg"
              />
              <button 
                onClick={handleSearch}
                disabled={isAnalyzing}
                className="absolute right-2 top-2 bottom-2 px-6 bg-white text-primary-600 font-bold rounded-xl hover:bg-slate-50 transition-colors flex items-center gap-2"
              >
                {isAnalyzing ? <Loader2 className="w-4 h-4 animate-spin" /> : <Search className="w-4 h-4" />}
                {isAnalyzing ? "正在分析" : "AI 分析"}
              </button>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              {categoryTags.map(tag => (
                <button key={tag} className="px-3 py-1 bg-white/10 hover:bg-white/20 border border-white/10 rounded-full text-xs text-white/80 transition-colors">
                  {tag}
                </button>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Core Analysis Summary */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <AnalysisFeatureCard 
          icon={<TrendingUp className="text-emerald-500" />} 
          title="趋势追踪" 
          value="452" 
          label="实时热门词汇" 
        />
        <AnalysisFeatureCard 
          icon={<Zap className="text-amber-500" />} 
          title="爆发指数" 
          value="98.2" 
          label="平均增长率" 
        />
        <AnalysisFeatureCard 
          icon={<ShoppingBag className="text-blue-500" />} 
          title="类目热度" 
          value="Top 3" 
          label="户外/服饰/数码" 
        />
      </div>

      {/* Recommended List */}
      <div className="flex flex-col gap-4">
        <h3 className="text-lg font-bold text-slate-800">今日 AI 推荐单品</h3>
        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {mockRecommendations.map(item => (
            <Card key={item.id} className="hover:ring-2 hover:ring-primary-500/50 transition-all cursor-pointer">
              <CardContent className="p-6 flex flex-col gap-4">
                <div className="flex items-start justify-between">
                  <div className="bg-slate-100 px-2 py-1 rounded text-[10px] font-bold text-slate-500 uppercase tracking-tighter">
                    {item.category}
                  </div>
                  <div className={cn(
                    "px-2 py-1 rounded-full text-[10px] font-bold uppercase",
                    item.trend === "爆发" ? "bg-rose-100 text-rose-600" : "bg-emerald-100 text-emerald-600"
                  )}>
                    {item.trend}
                  </div>
                </div>
                <div>
                  <h4 className="text-base font-bold text-slate-800 mb-2">{item.name}</h4>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">{item.reason}</p>
                </div>
                <div className="grid grid-cols-3 gap-2 bg-slate-50 p-3 rounded-lg border border-slate-100">
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-slate-400">潜力值</span>
                    <span className="text-sm font-bold text-primary-600">{item.potential}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-slate-400">毛利</span>
                    <span className="text-sm font-bold text-emerald-600">{item.profit}</span>
                  </div>
                  <div className="flex flex-col items-center">
                    <span className="text-[10px] text-slate-400">竞争</span>
                    <span className="text-sm font-bold text-amber-600">{item.competition}</span>
                  </div>
                </div>
                <button className="w-full py-2 bg-slate-900 hover:bg-slate-800 text-white rounded-lg text-sm font-medium flex items-center justify-center gap-2 transition-colors">
                  <BarChart3 className="w-4 h-4" />
                  查看深度报告
                  <ChevronRight className="w-3 h-3" />
                </button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* AI Bot Section */}
      <Card className="bg-emerald-50/50 border-emerald-100">
        <CardContent className="p-6 flex items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-lg shadow-emerald-500/20">
              <MessageSquare className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-bold text-emerald-900">对选品有疑问？直接对话 AI</h4>
              <p className="text-emerald-700/70 text-sm">输入您的运营预算、目标市场，AI 为您量身定做选品方案。</p>
            </div>
          </div>
          <button className="px-6 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl font-bold text-sm shadow-sm transition-all whitespace-nowrap">
            立即咨询
          </button>
        </CardContent>
      </Card>
    </div>
  );
}

function AnalysisFeatureCard({ icon, title, value, label }: { icon: React.ReactNode, title: string, value: string, label: string }) {
  return (
    <Card className="border-slate-100">
      <CardContent className="p-5 flex items-center gap-4">
        <div className="w-12 h-12 rounded-xl bg-slate-50 flex items-center justify-center text-xl">
          {icon}
        </div>
        <div>
          <div className="text-xs text-slate-500 font-medium mb-0.5">{title}</div>
          <div className="flex items-baseline gap-2">
            <span className="text-xl font-black text-slate-800 tracking-tight">{value}</span>
            <span className="text-[10px] text-slate-400 font-medium">{label}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
