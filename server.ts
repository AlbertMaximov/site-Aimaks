import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import fs from "fs";

async function startServer() {
  const app = express();
  const PORT = 3000;

  // API to get images for a project
  app.get("/api/projects/:projectId/images", (req, res) => {
    const { projectId } = req.params;
    const projectDir = path.join(process.cwd(), "public", "projects", projectId);
    
    if (!fs.existsSync(projectDir)) {
      return res.json([]);
    }

    const files = fs.readdirSync(projectDir).filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
    res.json(files.map(file => `/projects/${projectId}/${file}`));
  });

  // API to handle contact form submission
  app.use(express.json());
  app.post("/api/contact", (req, res) => {
    console.log("Contact form submission:", req.body);
    // In a real application, use nodemailer or a service API here
    res.json({ message: "Заявка успешно отправлена!" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
