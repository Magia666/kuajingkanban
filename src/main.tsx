import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// 自动兼容无 hash 的直接路径访问（例如 /frame?src=... 或 /merchandise-page），无缝转为 HashRouter 识别的路径
if (
  typeof window !== 'undefined' &&
  window.location.pathname &&
  window.location.pathname !== '/' &&
  window.location.pathname !== '/index.html' &&
  !window.location.hash
) {
  const targetUrl =
    window.location.origin +
    '/' +
    '#' +
    window.location.pathname +
    window.location.search;
  window.location.replace(targetUrl);
}

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);

