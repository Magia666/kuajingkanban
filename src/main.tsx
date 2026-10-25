import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// 兼容历史哈希路径（如 /#/merchandise-page），同步转换为 BrowserRouter 路径，无刷新、无闪烁
if (
  typeof window !== 'undefined' &&
  window.location.hash &&
  window.location.hash.startsWith('#/')
) {
  const hashContent = window.location.hash.slice(1);
  window.history.replaceState(null, '', hashContent);
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

