import React, { useState, useRef, useEffect } from "react";
import { 
  Bot, 
  Send, 
  RotateCcw, 
  Copy, 
  Trash2, 
  Home, 
  User, 
  Check, 
  AlertCircle 
} from "lucide-react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "@/lib/utils";

/**
 * AI 客服页面
 * 采用 1200px 居中布局，标准的对话流式交互。
 */

interface Message {
  id: string;
  type: "user" | "ai";
  content: string;
  time: string;
  isError?: boolean;
}

const COMMON_QUESTIONS = [
  "如何使用系统",
  "联系人工客服",
  "常见问题解答"
];

export default function AICustomerService() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  
  const scrollRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  // 自动滚动到最新消息
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, isTyping]);

  // 发送消息逻辑
  const handleSend = async (content: string) => {
    if (!content.trim()) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      type: "user",
      content: content.trim(),
      time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputValue("");
    setIsTyping(true);

    // 模拟 AI 回复
    setTimeout(() => {
      const aiMsg: Message = {
        id: (Date.now() + 1).toString(),
        type: "ai",
        content: `这是一条模拟的 AI 回复。您可以根据实际需求接入 Gemini API 或其他后端接口。对于“${content}”，我建议您可以查看我们的操作文档。`,
        time: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, aiMsg]);
      setIsTyping(false);
    }, 1500);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSend(inputValue);
    }
  };

  const clearChat = () => {
    setMessages([]);
    setShowClearConfirm(false);
  };

  const copyToClipboard = (text: string, id: string) => {
    navigator.clipboard.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const regenerate = (id: string) => {
    // 逻辑：找到该条消息之前的最后一条用户消息重新触发
    const index = messages.findIndex(m => m.id === id);
    if (index > 0) {
      const prevUserMsg = messages.slice(0, index).reverse().find(m => m.type === "user");
      if (prevUserMsg) {
        // 先删除当前消息
        setMessages(prev => prev.filter(m => m.id !== id));
        handleSend(prevUserMsg.content);
      }
    }
  };

  return (
    <div className="flex flex-col h-screen bg-white font-sans text-slate-800">
      {/* 顶部导航栏 (64px) */}
      <header className="h-[64px] bg-[#f9fafb] border-b border-slate-200 flex items-center justify-center shrink-0">
        <div className="w-full max-w-[1200px] px-6 flex justify-between items-center">
          <h1 className="text-xl font-bold flex items-center gap-2">
            <Bot className="w-6 h-6 text-[#165DFF]" />
            智能客服
          </h1>
          <div className="flex gap-3">
            <Link 
              to="/"
              className="flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-200 rounded-[6px] text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
            >
              <Home className="w-4 h-4" />
              返回首页
            </Link>
            <button 
              onClick={() => setShowClearConfirm(true)}
              className="flex items-center gap-1.5 px-4 py-2 bg-white border border-slate-200 rounded-[6px] text-sm font-medium text-slate-600 hover:bg-slate-50 transition-colors"
            >
              <Trash2 className="w-4 h-4" />
              清空对话
            </button>
          </div>
        </div>
      </header>

      {/* 核心对话区域 */}
      <main className="flex-1 overflow-hidden flex justify-center bg-white">
        <div className="w-full max-w-[1200px] flex flex-col h-full relative">
          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto px-6 py-8 flex flex-col gap-8 scroll-smooth"
          >
            <AnimatePresence mode="popLayout">
              {messages.length === 0 ? (
                // 空状态
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex-1 flex flex-col items-center justify-center py-12"
                >
                  <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mb-4 border border-slate-100 shadow-sm">
                    <Bot className="w-10 h-10 text-slate-300" />
                  </div>
                  <h3 className="text-lg font-medium text-slate-800 mb-6 font-sans">
                    您好！我是智能客服，有什么可以帮您的？
                  </h3>
                  <div className="flex flex-wrap justify-center gap-3">
                    {COMMON_QUESTIONS.map(q => (
                      <button 
                        key={q}
                        onClick={() => handleSend(q)}
                        className="px-5 py-2.5 bg-[#e8f3ff] text-[#165DFF] text-sm font-medium rounded-full hover:bg-[#d0e6ff] transition-colors"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                </motion.div>
              ) : (
                // 消息列表
                messages.map((msg) => (
                  <MessageItem 
                    key={msg.id} 
                    msg={msg} 
                    onCopy={copyToClipboard}
                    onRegenerate={regenerate}
                    isCopied={copiedId === msg.id}
                  />
                ))
              )}

              {/* 加载中状态 */}
              {isTyping && (
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="flex gap-4 items-start"
                >
                  <div className="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
                    <Bot className="w-6 h-6 text-[#165DFF]" />
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="bg-[#f3f4f6] px-5 py-4 rounded-[12px] rounded-tl-none flex gap-1 items-center">
                      <motion.div 
                        animate={{ y: [0, -4, 0] }} 
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0 }}
                        className="w-1.5 h-1.5 bg-slate-400 rounded-full" 
                      />
                      <motion.div 
                        animate={{ y: [0, -4, 0] }} 
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.2 }}
                        className="w-1.5 h-1.5 bg-slate-400 rounded-full" 
                      />
                      <motion.div 
                        animate={{ y: [0, -4, 0] }} 
                        transition={{ repeat: Infinity, duration: 0.6, delay: 0.4 }}
                        className="w-1.5 h-1.5 bg-slate-400 rounded-full" 
                      />
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </main>

      {/* 底部输入区域 */}
      <footer className="shrink-0 bg-white border-t border-slate-200 flex justify-center">
        <div className="w-full max-w-[1200px] px-6 py-4 flex items-end gap-3">
          <div className="flex-1 min-h-[40px] max-h-[120px] bg-[#f3f4f6] rounded-[8px] border border-transparent focus-within:bg-white focus-within:border-[#165DFF] transition-all overflow-hidden flex items-center px-3">
            <textarea
              ref={textareaRef}
              rows={1}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyDown={handleKeyDown}
              onInput={(e) => {
                const target = e.target as HTMLTextAreaElement;
                target.style.height = "auto";
                target.style.height = `${Math.min(target.scrollHeight, 120)}px`;
              }}
              placeholder="在此输入您的问题..."
              className="flex-1 bg-transparent py-2.5 px-1 outline-none text-sm resize-none"
            />
          </div>
          <button 
            disabled={!inputValue.trim() || isTyping}
            onClick={() => handleSend(inputValue)}
            className={cn(
              "p-2.5 rounded-[8px] transition-all flex items-center justify-center",
              inputValue.trim() && !isTyping 
                ? "bg-[#165DFF] text-white shadow-lg shadow-blue-500/20 active:scale-95" 
                : "bg-slate-200 text-slate-400 cursor-not-allowed"
            )}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </footer>

      {/* 清空对话确认弹窗 */}
      <AnimatePresence>
        {showClearConfirm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setShowClearConfirm(false)}
              className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            />
            <motion.div 
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="relative bg-white rounded-xl shadow-2xl p-6 w-full max-w-[400px] border border-slate-100"
            >
              <h4 className="text-lg font-bold text-slate-800 mb-2">确认清空对话？</h4>
              <p className="text-sm text-slate-500 mb-6">清空后将无法恢复当前的聊天记录，是否继续？</p>
              <div className="flex gap-3">
                <button 
                  onClick={() => setShowClearConfirm(false)}
                  className="flex-1 py-2 rounded-lg bg-slate-50 text-slate-600 font-medium hover:bg-slate-100 transition-colors"
                >
                  取消
                </button>
                <button 
                  onClick={clearChat}
                  className="flex-1 py-2 rounded-lg bg-rose-600 text-white font-medium hover:bg-rose-700 transition-colors shadow-lg shadow-rose-500/20"
                >
                  确认清空
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}

function MessageItem({ 
  msg, 
  onCopy, 
  onRegenerate,
  isCopied 
}: { 
  msg: Message; 
  onCopy: (text: string, id: string) => void;
  onRegenerate: (id: string) => void;
  isCopied: boolean;
}) {
  const isUser = msg.type === "user";

  return (
    <motion.div 
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      layout
      className={cn(
        "flex w-full group",
        isUser ? "justify-end" : "justify-start"
      )}
    >
      <div className={cn("flex max-w-[80%] gap-4", isUser ? "flex-row-reverse" : "flex-row")}>
        {/* 头像 */}
        {!isUser && (
          <div className="w-10 h-10 rounded-full bg-[#f3f4f6] flex items-center justify-center shrink-0 border border-slate-100 shadow-sm">
            <Bot className="w-6 h-6 text-[#165DFF]" />
          </div>
        )}
        {isUser && (
          <div className="w-10 h-10 rounded-full bg-[#165DFF] flex items-center justify-center shrink-0 border border-blue-600 shadow-lg shadow-blue-500/20">
            <User className="w-6 h-6 text-white" />
          </div>
        )}

        {/* 气泡内容 */}
        <div className={cn("flex flex-col gap-1.5", isUser ? "items-end" : "items-start")}>
          <div className="relative group/bubble">
            <div className={cn(
              "px-4 py-2.5 rounded-[12px] text-sm leading-relaxed relative",
              isUser 
                ? "bg-[#165DFF] text-white rounded-tr-none shadow-md" 
                : msg.isError 
                  ? "bg-rose-50 text-rose-600 border border-rose-100 rounded-tl-none"
                  : "bg-[#f3f4f6] text-slate-800 rounded-tl-none"
            )}>
              {msg.content}

              {/* 复制按钮 (仅 AI 消息，悬停显示) */}
              {!isUser && !msg.isError && (
                <button 
                  onClick={() => onCopy(msg.content, msg.id)}
                  className="absolute -top-3 -right-3 p-1.5 bg-white shadow-md border border-slate-100 rounded-lg text-slate-400 hover:text-[#165DFF] opacity-0 group-hover/bubble:opacity-100 transition-all scale-75 group-hover/bubble:scale-100"
                >
                  {isCopied ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                </button>
              )}
            </div>

            {/* 提示已复制 */}
            {isCopied && (
              <span className="absolute -top-8 right-0 text-[10px] font-bold bg-slate-800 text-white px-2 py-1 rounded whitespace-nowrap">
                已复制
              </span>
            )}
          </div>

          {/* 时间和操作 */}
          <div className="flex items-center gap-3">
             <span className="text-[12px] text-slate-400">{msg.time}</span>
             
             {/* 错误时的重新生成 */}
             {msg.isError && (
               <button 
                 onClick={() => onRegenerate(msg.id)}
                 className="flex items-center gap-1 text-[12px] font-bold text-rose-600 hover:underline"
               >
                 <RotateCcw className="w-2.5 h-2.5" />
                 重新生成
               </button>
             )}

             {/* 常规 AI 消息的重新生成 */}
             {!isUser && !msg.isError && (
               <button 
                 onClick={() => onRegenerate(msg.id)}
                 className="opacity-0 group-hover:opacity-100 flex items-center gap-1 text-[12px] font-bold text-[#165DFF] hover:underline transition-opacity"
               >
                 <RotateCcw className="w-2.5 h-2.5" />
                 重新生成
               </button>
             )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
