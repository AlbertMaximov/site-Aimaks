import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import fs from "fs";
import nodemailer from "nodemailer";

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
  app.post("/api/contact", async (req, res) => {
    const { name, email, phone, telegram, description } = req.body;
    console.log("Contact form submission received:", req.body);

    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpFrom = process.env.SMTP_FROM || "no-reply@aimaks.ru";

    // Build the email body
    const emailSubject = `Новая заявка от ${name || "клиента"}`;
    const emailText = `
Получена новая заявка через форму связи на сайте:

Имя: ${name || "Не указано"}
Email: ${email || "Не указано"}
Телефон: ${phone || "Не указано"}
Telegram: ${telegram || "Не указан"}

Описание задачи:
${description || "Не указано"}
`;

    const emailHtml = `
<div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
  <div style="background-color: #0f172a; padding: 24px; text-align: center; color: #fff;">
    <h2 style="margin: 0; font-size: 24px; letter-spacing: 0.05em;">Aimaks AI</h2>
    <p style="margin: 4px 0 0 0; color: #94a3b8; font-size: 14px;">Новая заявка с сайта</p>
  </div>
  <div style="padding: 24px;">
    <p style="font-size: 16px; margin-top: 0;">Здравствуйте,</p>
    <p style="font-size: 16px;">Через форму связи поступила новая заявка со следующими данными:</p>
    
    <table style="width: 100%; border-collapse: collapse; margin: 20px 0;">
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 10px 0; font-weight: bold; width: 120px;">Имя:</td>
        <td style="padding: 10px 0;">${name || "Не указано"}</td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 10px 0; font-weight: bold;">Email:</td>
        <td style="padding: 10px 0;"><a href="mailto:${email}" style="color: #00f2ff; text-decoration: none;">${email || "Не указано"}</a></td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 10px 0; font-weight: bold;">Телефон:</td>
        <td style="padding: 10px 0;">${phone || "Не указано"}</td>
      </tr>
      <tr style="border-bottom: 1px solid #f1f5f9;">
        <td style="padding: 10px 0; font-weight: bold;">Telegram:</td>
        <td style="padding: 10px 0;">${telegram || "Не указан"}</td>
      </tr>
    </table>
    
    <div style="background-color: #f8fafc; padding: 16px; border-radius: 8px; border-left: 4px solid #00f2ff; margin-top: 20px;">
      <h4 style="margin: 0 0 8px 0; font-size: 14px; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em;">Описание задачи:</h4>
      <p style="margin: 0; white-space: pre-wrap; font-size: 15px;">${description || "Не указано"}</p>
    </div>
  </div>
  <div style="background-color: #f1f5f9; padding: 16px; text-align: center; font-size: 12px; color: #64748b; border-top: 1px solid #e2e8f0;">
    Это письмо отправлено автоматически. Пожалуйста, не отвечайте на него напрямую.
  </div>
</div>
`;

    if (smtpHost && smtpUser && smtpPass) {
      try {
        const transporter = nodemailer.createTransport({
          host: smtpHost,
          port: parseInt(smtpPort || "587"),
          secure: smtpPort === "465",
          auth: {
            user: smtpUser,
            pass: smtpPass,
          },
        });

        await transporter.sendMail({
          from: `"${name || "Aimaks Contact Form"}" <${smtpFrom}>`,
          to: "info@aimaks.ru",
          subject: emailSubject,
          text: emailText,
          html: emailHtml,
        });

        console.log("Email successfully sent via SMTP to info@aimaks.ru");
        return res.json({ message: "Заявка успешно отправлена!" });
      } catch (err: any) {
        console.error("Failed to send email via SMTP:", err);
        return res.json({ 
          message: "Заявка успешно отправлена! (Заметка: отправка по SMTP не удалась, подробности в логах)", 
          warning: err.message 
        });
      }
    } else {
      console.log("=========================================");
      console.log("SMTP Credentials are not configured in environment.");
      console.log("To send real emails, please configure SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_FROM.");
      console.log("Simulating email send to info@aimaks.ru:");
      console.log(`Subject: ${emailSubject}`);
      console.log(`Body: ${emailText}`);
      console.log("=========================================");
      
      return res.json({ 
        message: "Заявка успешно отправлена! (Имитация отправки, так как SMTP не настроен)" 
      });
    }
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
