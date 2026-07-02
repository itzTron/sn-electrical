"use client";

import { LoaderCircle, Paperclip, Send } from "lucide-react";
import { useState, type ChangeEvent } from "react";

import type { Locale } from "@/lib/site";

type SubmitState = {
  status: "idle" | "submitting" | "success" | "error";
  message?: string;
};

type BaseFormProps = {
  locale: Locale;
  endpoint: "/api/contact" | "/api/quote" | "/api/career";
  fields: {
    name: string;
    type?: string;
    placeholder: string;
    options?: string[];
    accept?: string;
    textarea?: boolean;
  }[];
  submitLabel: string;
};

function initialData(fields: BaseFormProps["fields"]) {
  return fields.reduce<Record<string, string>>((accumulator, field) => {
    accumulator[field.name] = "";
    return accumulator;
  }, {});
}

function InquiryForm({
  locale,
  endpoint,
  fields,
  submitLabel,
}: BaseFormProps) {
  const [data, setData] = useState<Record<string, string>>(() => initialData(fields));
  const [state, setState] = useState<SubmitState>({ status: "idle" });

  const onFileChange = (field: string) => (event: ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    setData((current) => ({ ...current, [field]: file?.name ?? "" }));
  };

  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setState({ status: "submitting" });

    try {
      const response = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, hp: "" }),
      });

      const payload = (await response.json()) as { message?: string };

      if (!response.ok) {
        throw new Error(payload.message ?? "Request failed");
      }

      setState({
        status: "success",
        message:
          locale === "en"
            ? "Your request has been received. Our team will contact you shortly."
            : "আপনার অনুরোধ গ্রহণ করা হয়েছে। আমাদের টিম শিগগিরই যোগাযোগ করবে।",
      });
      setData(initialData(fields));
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : locale === "en"
              ? "Something went wrong."
              : "কিছু একটা ভুল হয়েছে।",
      });
    }
  };

  return (
    <form onSubmit={onSubmit} className="glass-panel grid gap-5 p-6 sm:p-8">
      <input type="text" name="hp" tabIndex={-1} autoComplete="off" className="hidden" />
      <div className="grid gap-4 md:grid-cols-2">
        {fields.map((field) => {
          if (field.textarea) {
            return (
              <label key={field.name} className="md:col-span-2">
                <span className="sr-only">{field.placeholder}</span>
                <textarea
                  value={data[field.name]}
                  onChange={(event) =>
                    setData((current) => ({ ...current, [field.name]: event.target.value }))
                  }
                  placeholder={field.placeholder}
                  rows={6}
                  className="form-control min-h-36 resize-none"
                />
              </label>
            );
          }

          if (field.options) {
            return (
              <label key={field.name}>
                <span className="sr-only">{field.placeholder}</span>
                <select
                  value={data[field.name]}
                  onChange={(event) =>
                    setData((current) => ({ ...current, [field.name]: event.target.value }))
                  }
                  className="form-control"
                >
                  <option value="">{field.placeholder}</option>
                  {field.options.map((option) => (
                    <option key={option} value={option}>
                      {option}
                    </option>
                  ))}
                </select>
              </label>
            );
          }

          if (field.type === "file") {
            return (
              <label
                key={field.name}
                className="form-control flex cursor-pointer items-center justify-between gap-4"
              >
                <span className={data[field.name] ? "text-[var(--foreground)]" : "text-[var(--muted-foreground)]"}>
                  {data[field.name] || field.placeholder}
                </span>
                <Paperclip className="h-4 w-4 text-[var(--color-primary)]" />
                <input
                  type="file"
                  accept={field.accept}
                  className="hidden"
                  onChange={onFileChange(field.name)}
                />
              </label>
            );
          }

          return (
            <label key={field.name}>
              <span className="sr-only">{field.placeholder}</span>
              <input
                type={field.type ?? "text"}
                value={data[field.name]}
                onChange={(event) =>
                  setData((current) => ({ ...current, [field.name]: event.target.value }))
                }
                placeholder={field.placeholder}
                className="form-control"
              />
            </label>
          );
        })}
      </div>
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <button
          type="submit"
          className="button-primary justify-center sm:justify-start"
          disabled={state.status === "submitting"}
        >
          {state.status === "submitting" ? (
            <LoaderCircle className="h-4 w-4 animate-spin" />
          ) : (
            <Send className="h-4 w-4" />
          )}
          {submitLabel}
        </button>
        <p
          className={
            state.status === "error"
              ? "text-sm text-red-500"
              : "text-sm text-[var(--muted-foreground)]"
          }
        >
          {state.message ??
            (locale === "en"
              ? "Protected with validation and honeypot spam prevention."
              : "ভ্যালিডেশন এবং হানিপট স্প্যাম সুরক্ষায় সুরক্ষিত।")}
        </p>
      </div>
    </form>
  );
}

export function ContactForm({ locale }: { locale: Locale }) {
  return (
    <InquiryForm
      locale={locale}
      endpoint="/api/contact"
      submitLabel={locale === "en" ? "Send Message" : "মেসেজ পাঠান"}
      fields={[
        { name: "name", placeholder: locale === "en" ? "Your name" : "আপনার নাম" },
        { name: "phone", placeholder: locale === "en" ? "Phone number" : "ফোন নম্বর", type: "tel" },
        { name: "email", placeholder: "Email address", type: "email" },
        { name: "address", placeholder: locale === "en" ? "Property address" : "প্রপার্টির ঠিকানা" },
        { name: "message", placeholder: locale === "en" ? "Tell us about your requirement" : "আপনার প্রয়োজন লিখুন", textarea: true },
      ]}
    />
  );
}

export function QuoteForm({ locale }: { locale: Locale }) {
  return (
    <InquiryForm
      locale={locale}
      endpoint="/api/quote"
      submitLabel={locale === "en" ? "Request Free Quote" : "ফ্রি কোট অনুরোধ করুন"}
      fields={[
        { name: "name", placeholder: locale === "en" ? "Your name" : "আপনার নাম" },
        { name: "phone", placeholder: locale === "en" ? "Phone number" : "ফোন নম্বর", type: "tel" },
        { name: "email", placeholder: "Email address", type: "email" },
        { name: "address", placeholder: locale === "en" ? "Project address" : "প্রকল্পের ঠিকানা" },
        {
          name: "serviceType",
          placeholder: locale === "en" ? "Service type" : "সার্ভিস টাইপ",
          options: [
            locale === "en" ? "House Wiring" : "হাউস ওয়্যারিং",
            locale === "en" ? "Commercial Electrical Work" : "কমার্শিয়াল ইলেকট্রিক্যাল ওয়ার্ক",
            locale === "en" ? "Industrial Electrical Work" : "ইন্ডাস্ট্রিয়াল ইলেকট্রিক্যাল ওয়ার্ক",
            locale === "en" ? "Electrical Maintenance" : "ইলেকট্রিক্যাল মেইনটেন্যান্স",
          ],
        },
        {
          name: "budget",
          placeholder: locale === "en" ? "Estimated budget" : "আনুমানিক বাজেট",
          options: ["< $500", "$500 - $2,000", "$2,000 - $10,000", "$10,000+"],
        },
        { name: "preferredDate", placeholder: locale === "en" ? "Preferred date" : "পছন্দের তারিখ", type: "date" },
        { name: "attachmentName", placeholder: locale === "en" ? "Attach layout or reference" : "লেআউট বা রেফারেন্স যুক্ত করুন", type: "file", accept: ".jpg,.jpeg,.png,.pdf,.doc,.docx" },
        { name: "message", placeholder: locale === "en" ? "Project details" : "প্রকল্পের বিস্তারিত", textarea: true },
      ]}
    />
  );
}

export function CareerForm({ locale }: { locale: Locale }) {
  return (
    <InquiryForm
      locale={locale}
      endpoint="/api/career"
      submitLabel={locale === "en" ? "Apply Now" : "এখনই আবেদন করুন"}
      fields={[
        { name: "name", placeholder: locale === "en" ? "Full name" : "পূর্ণ নাম" },
        { name: "phone", placeholder: locale === "en" ? "Phone number" : "ফোন নম্বর", type: "tel" },
        { name: "email", placeholder: "Email address", type: "email" },
        { name: "role", placeholder: locale === "en" ? "Role you are applying for" : "যে পদের জন্য আবেদন করছেন" },
        {
          name: "experience",
          placeholder: locale === "en" ? "Years of experience" : "অভিজ্ঞতার বছর",
          options: ["0 - 2", "3 - 5", "6 - 10", "10+"],
        },
        { name: "resumeName", placeholder: locale === "en" ? "Upload CV or resume" : "CV বা রেজুমে আপলোড করুন", type: "file", accept: ".pdf,.doc,.docx" },
        { name: "message", placeholder: locale === "en" ? "Introduce your background" : "নিজের অভিজ্ঞতা সম্পর্কে লিখুন", textarea: true },
      ]}
    />
  );
}

