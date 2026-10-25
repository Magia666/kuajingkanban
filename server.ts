import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { createServer as createViteServer } from "vite";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  // 如果是在开发环境下，使用 Vite 模块
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    // 生产环境下，提供构建后的静态文件
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    
    // 核心修复：所有不匹配的路由都返回 index.html
    // 使用 * 通配符确保前端路由（BrowserRouter）能正常工作
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
