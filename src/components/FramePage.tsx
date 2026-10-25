import React, { useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import { Card, Button, Input, Space, Alert, Tooltip, Spin, Tag } from "antd";
import {
  ReloadOutlined,
  FullscreenOutlined,
  FullscreenExitOutlined,
  GlobalOutlined,
  ArrowLeftOutlined,
  LinkOutlined,
  CheckCircleOutlined
} from "@ant-design/icons";

export default function FramePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const rawSrc = searchParams.get("src") || "";

  const [inputUrl, setInputUrl] = useState(rawSrc);
  const [iframeKey, setIframeKey] = useState(0);
  const [loading, setLoading] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  // Quick jump presets
  const presets = [
    { label: "商品列表页", path: "/merchandise-page" },
    { label: "订单管理页", path: "/order-management" },
    { label: "分销商品页", path: "/distribution-product" },
    { label: "库存管理页", path: "/inventory" },
    { label: "数据大屏首页", path: "/" },
  ];

  const handleRefresh = () => {
    setLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  const handleApplyUrl = (url: string) => {
    if (!url.trim()) return;
    setSearchParams({ src: url });
    setLoading(true);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div className={`p-4 ${isFullscreen ? "fixed inset-0 z-50 bg-white" : "min-h-[calc(100vh-64px)]"}`}>
      <Card
        size="small"
        className="mb-3 shadow-sm border-slate-200"
        styles={{ body: { padding: "10px 16px" } }}
      >
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <Button
              icon={<ArrowLeftOutlined />}
              onClick={() => navigate("/")}
              size="middle"
            >
              返回首页
            </Button>
            <div className="flex items-center gap-1.5 font-medium text-slate-800">
              <GlobalOutlined className="text-blue-600 text-base" />
              <span>内嵌框架 (Iframe Frame)</span>
              <Tag color="processing">Frame Route</Tag>
            </div>
          </div>

          <div className="flex items-center gap-2 flex-1 max-w-2xl min-w-[320px]">
            <Input
              prefix={<LinkOutlined className="text-slate-400" />}
              value={inputUrl}
              onChange={(e) => setInputUrl(e.target.value)}
              onPressEnter={() => handleApplyUrl(inputUrl)}
              placeholder="请输入要嵌入访问的地址 (例如: http://jygd.net:5555/merchandise-page)"
              allowClear
              size="middle"
            />
            <Button type="primary" onClick={() => handleApplyUrl(inputUrl)}>
              加载链接
            </Button>
            <Tooltip title="重新加载 iframe">
              <Button icon={<ReloadOutlined />} onClick={handleRefresh} />
            </Tooltip>
            <Tooltip title={isFullscreen ? "退出全屏" : "全屏查看"}>
              <Button
                icon={isFullscreen ? <FullscreenExitOutlined /> : <FullscreenOutlined />}
                onClick={() => setIsFullscreen(!isFullscreen)}
              />
            </Tooltip>
          </div>
        </div>

        {/* Quick presets */}
        <div className="mt-2.5 pt-2.5 border-t border-slate-100 flex items-center gap-2 text-xs text-slate-500">
          <span className="font-medium text-slate-600">系统内部页面快捷访问：</span>
          <Space orientation="horizontal" size="small" wrap>
            {presets.map((p) => (
              <Button
                key={p.path}
                type="dashed"
                size="small"
                onClick={() => {
                  const target = window.location.origin + p.path;
                  setInputUrl(target);
                  handleApplyUrl(target);
                }}
              >
                {p.label}
              </Button>
            ))}
          </Space>
        </div>
      </Card>

      {!rawSrc ? (
        <Card className="text-center py-16 border-dashed border-2 border-slate-200">
          <div className="max-w-md orientation mx-auto space-y-4">
            <div className="w-16 h-16 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mx-auto text-2xl">
              <GlobalOutlined />
            </div>
            <h3 className="text-lg font-semibold text-slate-800">未指定内嵌地址 (src 参数为空)</h3>
            <p className="text-sm text-slate-500">
              请在 URL 参数中传入目标地址，例如：
              <code className="block bg-slate-100 p-2 rounded mt-2 text-xs text-blue-700 font-mono break-all">
                /frame?src=http://jygd.net:5555/merchandise-page
              </code>
            </p>
            <div className="pt-2">
              <Button
                type="primary"
                onClick={() => {
                  const demoUrl = window.location.origin + "/merchandise-page";
                  setInputUrl(demoUrl);
                  handleApplyUrl(demoUrl);
                }}
              >
                点击快速载入本地商品列表页
              </Button>
            </div>
          </div>
        </Card>
      ) : (
        <div className="relative w-full rounded-lg overflow-hidden border border-slate-200 shadow-sm bg-white" style={{ height: isFullscreen ? "calc(100vh - 80px)" : "calc(100vh - 150px)" }}>
          {loading && (
            <div className="absolute inset-0 bg-white/70 z-10 flex items-center justify-center">
              <Spin tip="正在载入页面..." />
            </div>
          )}
          <iframe
            key={iframeKey}
            src={rawSrc}
            title="Embedded Page"
            className="w-full h-full border-0"
            allow="camera; microphone; fullscreen; clipboard-read; clipboard-write"
            onLoad={() => setLoading(false)}
          />
        </div>
      )}
    </div>
  );
}
