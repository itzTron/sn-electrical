import { z } from "zod";

const phonePattern = /^[0-9+\-()\s]{8,20}$/;

export const contactSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().regex(phonePattern),
  email: z.string().trim().email(),
  address: z.string().trim().min(4).max(160),
  message: z.string().trim().min(10).max(1200),
  hp: z.string().max(0).optional().default(""),
});

export const quoteSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().regex(phonePattern),
  email: z.string().trim().email(),
  address: z.string().trim().min(4).max(160),
  serviceType: z.string().trim().min(3).max(80),
  budget: z.string().trim().min(2).max(40),
  preferredDate: z.string().trim().min(4).max(40),
  message: z.string().trim().min(10).max(1200),
  attachmentName: z.string().trim().max(120).optional().default(""),
  hp: z.string().max(0).optional().default(""),
});

export const careerSchema = z.object({
  name: z.string().trim().min(2).max(80),
  phone: z.string().trim().regex(phonePattern),
  email: z.string().trim().email(),
  role: z.string().trim().min(2).max(80),
  experience: z.string().trim().min(1).max(40),
  message: z.string().trim().min(10).max(1200),
  resumeName: z.string().trim().max(120).optional().default(""),
  hp: z.string().max(0).optional().default(""),
});

export type ContactPayload = z.infer<typeof contactSchema>;
export type QuotePayload = z.infer<typeof quoteSchema>;
export type CareerPayload = z.infer<typeof careerSchema>;

