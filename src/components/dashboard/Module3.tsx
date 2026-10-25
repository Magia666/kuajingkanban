import React from "react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui";
import { AlertCircle, CheckCircle2, Clock, PackageX } from "lucide-react";

const todos = [
  { id: 1, title: '审核新入驻商家资质', time: '今天 18:00', priority: 'high' },
  { id: 2, title: '处理待发货订单 (12笔)', time: '今天 20:00', priority: 'high' },
  { id: 3, title: '更新双十一大促广告图', time: '明天 10:00', priority: 'normal' },
  { id: 4, title: '导出本月财务结算报表', time: '明天 12:00', priority: 'normal' },
  { id: 5, title: '回复买家客诉邮件 (3封)', time: '02-15 14:00', priority: 'low' },
];

const alerts = [
  { id: 1, type: 'stock', title: '库存不足预警', desc: '商品 "纯棉T恤(L)" 库存低于 5 件', time: '10 分钟前' },
  { id: 2, type: 'timeout', title: '订单超时预警', desc: '有 3 笔订单超过 24 小时未处理', time: '30 分钟前' },
  { id: 3, type: 'task', title: '运营任务预警', desc: '《年度大促方案》审核 3 天内截止', time: '2 小时前' },
  { id: 4, type: 'system', title: '系统异常提示', desc: '第三方物流 API 同步延迟', time: '5 小时前' },
];

const dynamics = [
  { id: 1, time: '10:25', content: '用户张三完成了一笔 ¥568 的订单' },
  { id: 2, time: '10:20', content: '用户李四上架了 3 件新商品' },
  { id: 3, time: '10:15', content: '平台发布了新的《全球物流解决方案》白皮书' },
  { id: 4, time: '10:05', content: '商家 "极客数码" 成功提现 ¥12,500' },
  { id: 5, time: '09:58', content: '用户王五注册了平台账号' },
  { id: 6, time: '09:40', content: '系统自动拦截了一笔高风险交易' },
];

export function AlertsCenter() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle>待办任务</CardTitle>
            <span className="bg-rose-100 text-rose-600 px-1.5 py-0.5 rounded-md text-xs font-bold">5</span>
          </div>
        </CardHeader>
        <CardContent className="h-[300px] overflow-y-auto pt-2">
          <div className="space-y-4">
            {todos.map(todo => (
              <div key={todo.id} className="flex flex-col gap-1.5 p-3 rounded-lg border border-slate-100 bg-slate-50 hover:bg-slate-100/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className={`text-sm font-medium ${todo.priority === 'high' ? 'text-rose-600' : 'text-slate-700'}`}>
                    {todo.title}
                  </span>
                  <button className="text-xs bg-primary-600 hover:bg-primary-700 text-white px-2 py-1 rounded shadow-sm transition-colors">
                    去处理
                  </button>
                </div>
                <div className="flex items-center text-xs text-slate-500 gap-1.5">
                  <Clock className="w-3.5 h-3.5" />
                  截止: {todo.time}
                  {todo.priority === 'high' && <span className="ml-2 text-rose-500 font-semibold animate-pulse">即将截止!</span>}
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <div className="flex items-center gap-2">
            <CardTitle>数据预警中心</CardTitle>
            <span className="bg-amber-100 text-amber-600 px-1.5 py-0.5 rounded-md text-xs font-bold">!</span>
          </div>
        </CardHeader>
        <CardContent className="h-[300px] overflow-y-auto pt-2">
          <div className="space-y-4">
            {alerts.map(alert => (
              <div key={alert.id} className="flex gap-3 items-start border-b border-slate-100 pb-3 last:border-0">
                <div className="p-2 bg-rose-50 text-rose-500 rounded-full shrink-0">
                  <AlertCircle className="w-4 h-4" />
                </div>
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-slate-800">{alert.title}</span>
                  <span className="text-xs text-slate-500 mt-0.5 leading-relaxed">{alert.desc}</span>
                  <span className="text-[10px] text-slate-400 mt-1">{alert.time}</span>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>平台实时动态</CardTitle>
        </CardHeader>
        <CardContent className="h-[300px] overflow-y-auto pt-2 relative">
          <div className="space-y-4 relative before:absolute before:inset-0 before:ml-2 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-200 before:to-transparent">
            {dynamics.map((item, idx) => (
              <div key={item.id} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                <div className="flex items-center justify-center w-5 h-5 rounded-full border-2 border-white bg-primary-100 text-primary-500 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                  <div className="w-1.5 h-1.5 bg-primary-500 rounded-full"></div>
                </div>
                <div className="w-[calc(100%-2rem)] md:w-[calc(50%-1.5rem)] text-xs text-slate-500">
                  <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-100 shadow-sm md:group-odd:text-right group-hover:bg-primary-50 transition-colors">
                    <span className="font-semibold text-slate-600 block mb-0.5">{item.time}</span>
                    {item.content}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
