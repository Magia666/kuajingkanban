import React from 'react';
import { 
  Clock, DollarSign, ShoppingCart, Package, Users, TrendingUp, Bell, Search, User 
} from 'lucide-react';
import { Card, CardContent } from './ui';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  const menus = [
    { label: '首页', path: '/' },
    { label: 'AI 选品', path: '/ai-selection' },
    { label: 'AI 客服', path: '/ai-customer-service' },
    { label: '库存预警', path: '/inventory-warning' },
    { label: '数据监控', path: '/data-monitoring' },
    { label: '广告分析', path: '/ad-analysis' },
    { label: '商品管理', path: '#' },
    { label: '订单管理', path: '#' },
    { label: '物流管理', path: '#' },
    { label: '财务管理', path: '#' },
    { label: '数据概览', path: '#' },
    { label: '个人中心', path: '#' }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 h-16 bg-white shadow-sm z-50 flex items-center justify-between px-6 border-b border-slate-100 shrink-0">
      <div className="flex items-center gap-8">
        <Link to="/" className="flex items-center gap-2 text-primary-600 font-bold text-lg tracking-tight hover:opacity-80 transition-opacity">
          <div className="w-8 h-8 rounded-lg bg-primary-600 text-white flex items-center justify-center">
            CB
          </div>
          跨境贸易统一看板
        </Link>
        <nav className="hidden xl:flex items-center gap-1">
          {menus.map((menu, i) => {
            const isActive = location.pathname === menu.path;
            const Component = menu.path === '#' ? 'button' : Link;
            return (
              <Component 
                key={i} 
                to={menu.path !== '#' ? menu.path : undefined}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-primary-50 text-primary-700' : 'text-slate-600 hover:bg-slate-50 hover:text-slate-900'}`}
              >
                {menu.label}
              </Component>
            );
          })}
        </nav>
      </div>

      <div className="flex items-center gap-4">
        <div className="relative text-slate-400 focus-within:text-slate-600">
          <Search className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4" />
          <input type="text" placeholder="搜索功能/数据..." className="bg-slate-100 border-none rounded-full py-1.5 pl-9 pr-4 text-sm w-48 focus:w-64 transition-all outline-none focus:ring-2 focus:ring-primary-500/20 text-slate-800" />
        </div>
        <button className="relative w-8 h-8 flex items-center justify-center text-slate-500 hover:text-slate-700 rounded-full hover:bg-slate-100">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border border-white"></span>
        </button>
        <button className="flex items-center gap-2 pl-2 border-l border-slate-200 cursor-pointer group">
          <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center overflow-hidden">
            <User className="w-4 h-4" />
          </div>
          <div className="flex flex-col items-start leading-tight">
            <span className="text-sm font-medium text-slate-700 group-hover:text-primary-600">张三</span>
            <span className="text-xs text-slate-400">数据分析员</span>
          </div>
        </button>
      </div>
    </header>
  );
}

export function Footer() {
  return (
    <footer className="w-full bg-slate-100 text-slate-500 py-6 mt-8 flex px-6 justify-between items-center text-sm border-t border-slate-200">
      <div>© 2026 跨境数字贸易统一数据管理平台 版权所有</div>
      <div className="flex gap-4">
        <a href="#" className="hover:text-primary-600 transition-colors">帮助中心</a>
        <span>|</span>
        <a href="#" className="hover:text-primary-600 transition-colors">操作手册</a>
        <span>|</span>
        <a href="#" className="hover:text-primary-600 transition-colors">常见问题</a>
        <span>|</span>
        <a href="#" className="hover:text-primary-600 transition-colors">联系我们</a>
      </div>
      <div className="text-right">
        技术支持：跨境创星科技有限公司 &nbsp;|&nbsp; 粤ICP备12345678号
      </div>
    </footer>
  );
}
