import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { contactSchema } from "@shared/schema";
import { z } from "zod";
import { ZodError } from "zod";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission
  app.post('/api/contact', async (req, res) => {
    try {
      // Validate input
      const validatedData = contactSchema.parse(req.body);
      
      // Store contact submission in database
      const newContact = await storage.insertContact(validatedData);
      
      // Create a test (ethereal) email account for development
      let testAccount = await nodemailer.createTestAccount();
      
      // Create a transporter
      let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        auth: {
          user: testAccount.user,
          pass: testAccount.pass,
        },
      });
      
      // Send email notification
      let info = await transporter.sendMail({
        from: '"SitesByAmin Website" <contact@sitesbyamin.com>',
        to: "sitesbyamin@gmail.com",
        subject: `New Contact Request: ${validatedData.subject}`,
        text: `
          Name: ${validatedData.name}
          Email: ${validatedData.email}
          Subject: ${validatedData.subject}
          
          Message:
          ${validatedData.message}
        `,
        html: `
          <h2>New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${validatedData.name}</p>
          <p><strong>Email:</strong> ${validatedData.email}</p>
          <p><strong>Subject:</strong> ${validatedData.subject}</p>
          <p><strong>Message:</strong></p>
          <p>${validatedData.message.replace(/\n/g, '<br>')}</p>
        `,
      });
      
      // Send preview URL for development
      console.log("Message sent: %s", info.messageId);
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      
      return res.status(201).json({ 
        success: true, 
        message: "Contact message sent successfully",
        data: newContact
      });
    } catch (error) {
      if (error instanceof ZodError) {
        return res.status(400).json({ errors: error.errors });
      }
      console.error('Error sending contact message:', error);
      return res.status(500).json({ error: 'Internal server error' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
