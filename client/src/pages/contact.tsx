import React, { useState } from "react";
import { Mail, Send } from "lucide-react";

export default function Contact() {
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errors, setErrors] = useState<{ email?: string; subject?: string; message?: string }>({});

  const validate = () => {
    const next: typeof errors = {};
    const emailRe = /^(?:[a-zA-Z0-9_'^&/+{}=!?$%`~.-]+)@(?:[a-zA-Z0-9-]+\.)+[a-zA-Z]{2,}$/;

    if (!email.trim()) next.email = "Email is required.";
    else if (!emailRe.test(email)) next.email = "Enter a valid email.";
    if (!subject.trim()) next.subject = "Subject is required.";
    if (!message.trim()) next.message = "Message is required.";

    setErrors(next);
    return Object.keys(next).length === 0;
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    try {
      setStatus("submitting");
      // TODO: replace with your API route / 3rd-party form service
      await new Promise((r) => setTimeout(r, 900));
      setStatus("success");
      setEmail("");
      setSubject("");
      setMessage("");
      setErrors({});
    } catch {
      setStatus("error");
    } finally {
      setTimeout(() => setStatus("idle"), 2500);
    }
  };

  return (
    <div className="pt-16 min-h-screen bg-background">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl sm:text-5xl font-bold tracking-tight text-foreground mb-3 text-center">
          Press
        </h1>
        <p className="text-center text-muted-foreground mb-10">
          Get in touch with us for any inquiries, media or press releases.
        </p>

        <form
          onSubmit={onSubmit}
          noValidate
          className="rounded-2xl border border-border bg-card shadow-sm p-6 sm:p-8"
        >
          {/* Email */}
          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium text-foreground">
              Email Address <span className="text-destructive">*</span>
            </label>
            <div className="relative mt-2">
              <input
                id="email"
                type="email"
                inputMode="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "email-error" : undefined}
                placeholder="your.email@example.com"
                className="w-full rounded-xl border border-input bg-background px-4 py-3 shadow-inner outline-none focus:ring-2 focus:ring-ring"
              />
              <Mail className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            </div>
            {errors.email && (
              <p id="email-error" className="mt-2 text-sm text-destructive">
                {errors.email}
              </p>
            )}
          </div>

          {/* Subject */}
          <div className="mb-6">
            <label htmlFor="subject" className="block text-sm font-medium text-foreground">
              Subject <span className="text-destructive">*</span>
            </label>
            <input
              id="subject"
              type="text"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              aria-invalid={!!errors.subject}
              aria-describedby={errors.subject ? "subject-error" : undefined}
              placeholder="Media inquiry subject"
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 shadow-inner outline-none focus:ring-2 focus:ring-ring"
            />
            {errors.subject && (
              <p id="subject-error" className="mt-2 text-sm text-destructive">
                {errors.subject}
              </p>
            )}
          </div>

          {/* Message */}
          <div className="mb-8">
            <label htmlFor="message" className="block text-sm font-medium text-foreground">
              Message <span className="text-destructive">*</span>
            </label>
            <textarea
              id="message"
              rows={7}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              aria-invalid={!!errors.message}
              aria-describedby={errors.message ? "message-error" : undefined}
              placeholder="Please provide details about your media inquiry, including deadline, outlet information, and specific questions you'd like answered..."
              className="mt-2 w-full rounded-xl border border-input bg-background px-4 py-3 shadow-inner outline-none resize-y focus:ring-2 focus:ring-ring"
            />
            {errors.message && (
              <p id="message-error" className="mt-2 text-sm text-destructive">
                {errors.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={status === "submitting"}
            className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground px-5 py-3 font-medium shadow-sm transition disabled:opacity-70 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {status === "submitting" ? "Sending…" : (
              <>
                <Send className="h-5 w-5" />
                Send an Inquiry
              </>
            )}
          </button>

          {/* Status */}
          <div className="mt-3 min-h-[1.5rem] text-center">
            {status === "success" && (
              <p className="text-sm text-green-700">Your inquiry has been submitted. We’ll be in touch shortly.</p>
            )}
            {status === "error" && (
              <p className="text-sm text-destructive">Something went wrong. Please try again.</p>
            )}
          </div>
        </form>

        {/* Optional: your existing email link section */}
        <div className="mt-10 text-center">
          <p className="text-sm text-muted-foreground">Or email us at:</p>
          <a
            href="mailto:mazah.foodsavingapp@gmail.com"
            className="text-primary hover:opacity-80 font-medium"
          >
            mazah.foodsavingapp@gmail.com
          </a>
        </div>
      </div>
    </div>
  );
}
