"use client";
import { useState } from "react";
import {
  CheckCircle2,
  ChevronDown,
  Loader2,
  Mail,
  MessageSquare,
  Phone,
  Send,
  User,
} from "lucide-react";

const inquiryOptions = [
  "General Inquiry",
  "Fight Analysis",
  "Performance Analysis",
  "Partnership",
  "Media & Press",
  "Technical Support",
];

const initialForm = {
  name: "",
  email: "",
  phone: "",
  inquiry: "General Inquiry",
  message: "",
};

export default function ContactForm() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: "",
      }));
    }

    if (status !== "idle") {
      setStatus("idle");
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Please enter your name.";
    }

    if (!form.email.trim()) {
      newErrors.email = "Please enter your email.";
    } else if (
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email.trim())
    ) {
      newErrors.email = "Please enter a valid email address.";
    }

    if (!form.message.trim()) {
      newErrors.message = "Please tell us how we can help.";
    } else if (form.message.trim().length < 20) {
      newErrors.message = "Please provide at least 20 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validate()) return;

    setStatus("submitting");

    try {
      // Replace this with your real API endpoint.
      // Example:
      // await fetch("/api/contact", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(form),
      // });

      await new Promise((resolve) => setTimeout(resolve, 1400));

      setStatus("success");
      setForm(initialForm);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section
      id="contact"
      className="relative overflow-hidden bg-[#0D0D0D] py-20 md:py-28"
    >
      {/* Background grid */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.055]">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(#ffffff 1px, transparent 1px),
              linear-gradient(90deg, #ffffff 1px, transparent 1px)
            `,
            backgroundSize: "56px 56px",
          }}
        />
      </div>

      {/* Red atmosphere */}
      <div className="pointer-events-none absolute left-1/2 top-[-220px] h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-[#D20A12]/10 blur-[140px]" />

      {/* Diagonal combat accent */}
      <div className="pointer-events-none absolute -right-28 top-28 hidden h-20 w-[520px] rotate-[-27deg] bg-[#D20A12] opacity-[0.07] md:block" />

      <div className="relative mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">

          <h2 className="text-4xl font-black uppercase leading-[0.95] tracking-[-0.03em] text-[#D20A12] sm:text-4xl md:text-4xl">
            Let&apos;s Connect
          </h2>
        </div>

        {/* Main layout */}
        <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-stretch">
          {/* Information panel */}
          <div className="relative overflow-hidden rounded-2xl border border-[#262626] bg-[#0D0D0D] p-7 sm:p-8 md:p-10">
            {/* Top red line */}
            <div className="absolute left-0 top-0 h-1 w-full bg-gradient-to-r from-[#8F080E] via-[#D20A12] to-transparent" />

            {/* Decorative corner */}
            <div className="absolute -right-16 -top-16 h-40 w-40 rotate-45 border border-[#D20A12]/10" />

            <div className="relative">

              <p className="mt-5 max-w-md text-md leading-6 text-[#ffffff]">
                Whether you&apos;re analyzing performance, preparing for a
                matchup, exploring a partnership, or need support, we&apos;re
                ready to talk.
              </p>

              <div className="my-8 h-px bg-[#262626]" />

              <div className="space-y-4">
                <ContactDetail
                  icon={<Mail size={18} />}
                  label="Email"
                  value="hello@combatsportsanalysis.com"
                  href="mailto:hello@combatsportsanalysis.com"
                />

                <ContactDetail
                  icon={<Phone size={18} />}
                  label="Phone"
                  value="+1 (000) 000-0000"
                  href="tel:+10000000000"
                />

                <ContactDetail
                  icon={<MessageSquare size={18} />}
                  label="Response Time"
                  value="Usually within 1 business day"
                />
              </div>
            </div>
          </div>

          {/* Form */}
          <div className="relative overflow-hidden rounded-2xl border border-[#262626] bg-[#0D0D0D] p-6 sm:p-8 md:p-10">
            <div className="absolute right-0 top-0 h-32 w-32 bg-[#D20A12]/5 blur-3xl" />

            <form
              onSubmit={handleSubmit}
              noValidate
              className="relative space-y-6"
            >
              <div className="grid gap-5 md:grid-cols-2">
                <FormField
                  label="Full Name"
                  name="name"
                  placeholder="John Doe"
                  value={form.name}
                  onChange={handleChange}
                  error={errors.name}
                  icon={<User size={17} />}
                  required
                />

                <FormField
                  label="Email Address"
                  name="email"
                  type="email"
                  placeholder="john@example.com"
                  value={form.email}
                  onChange={handleChange}
                  error={errors.email}
                  icon={<Mail size={17} />}
                  required
                />

                <FormField
                  label="Phone Number"
                  name="phone"
                  type="tel"
                  placeholder="+1 (000) 000-0000"
                  value={form.phone}
                  onChange={handleChange}
                  icon={<Phone size={17} />}
                />

                {/* Inquiry dropdown */}
                <div>
                  <label
                    htmlFor="inquiry"
                    className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#A1A1AA]"
                  >
                    Inquiry Type
                  </label>

                  <div className="relative">
                    <select
                      id="inquiry"
                      name="inquiry"
                      value={form.inquiry}
                      onChange={handleChange}
                      className="h-12 w-full appearance-none rounded-lg border border-[#2A2A2A] bg-[#141414] px-4 pr-11 text-sm text-[#F5F5F5] outline-none transition-all duration-200 focus:border-[#D20A12] focus:ring-2 focus:ring-[#D20A12]/20"
                    >
                      {inquiryOptions.map((option) => (
                        <option
                          key={option}
                          value={option}
                          className="bg-[#141414]"
                        >
                          {option}
                        </option>
                      ))}
                    </select>

                    <ChevronDown
                      size={17}
                      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-[#71717A]"
                    />
                  </div>
                </div>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#A1A1AA]"
                >
                  Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={7}
                  maxLength={1000}
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell us about your project, fight, athlete, partnership, or question..."
                  className={`w-full resize-none rounded-lg border bg-[#141414] px-4 py-4 text-sm leading-6 text-[#F5F5F5] outline-none placeholder:text-[#52525B] transition-all duration-200 focus:ring-2 ${
                    errors.message
                      ? "border-[#D20A12] focus:ring-[#D20A12]/20"
                      : "border-[#2A2A2A] focus:border-[#D20A12] focus:ring-[#D20A12]/20"
                  }`}
                />

                <div className="mt-2 flex items-center justify-between gap-4">
                  {errors.message ? (
                    <p className="text-xs text-[#F01820]">{errors.message}</p>
                  ) : (
                    <p className="text-xs text-[#52525B]">
                      Provide enough detail for us to understand your request.
                    </p>
                  )}

                  <span className="shrink-0 text-[11px] font-medium text-[#52525B]">
                    {form.message.length}/1000
                  </span>
                </div>
              </div>

              {/* Status */}
              {status === "error" && (
                <div className="rounded-lg border border-[#D20A12]/30 bg-[#D20A12]/10 px-4 py-3 text-sm text-[#F01820]">
                  Something went wrong. Please try again.
                </div>
              )}

              {status === "success" && (
                <div className="flex items-start gap-3 rounded-lg border border-emerald-500/20 bg-emerald-500/5 px-4 py-4">
                  <CheckCircle2
                    size={19}
                    className="mt-0.5 shrink-0 text-emerald-400"
                  />

                  <div>
                    <p className="text-sm font-semibold text-[#F5F5F5]">
                      Message received.
                    </p>
                    <p className="mt-1 text-xs leading-5 text-[#71717A]">
                      Thanks for reaching out. Our team will review your
                      message and get back to you shortly.
                    </p>
                  </div>
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                disabled={status === "submitting"}
                className="group relative flex h-13 w-full items-center justify-center gap-3 overflow-hidden rounded-lg bg-[#D20A12] px-6 text-sm font-black uppercase tracking-[0.12em] text-white transition-all duration-300 hover:bg-[#F01820] hover:shadow-[0_0_35px_rgba(210,10,18,0.25)] disabled:cursor-not-allowed disabled:opacity-70"
              >
                <span className="absolute inset-0 -translate-x-full bg-white/10 transition-transform duration-500 group-hover:translate-x-0" />

                {status === "submitting" ? (
                  <>
                    <Loader2 size={18} className="animate-spin" />
                    Sending Message
                  </>
                ) : (
                  <>
                    Send Message
                    <Send
                      size={17}
                      className="transition-transform duration-300 group-hover:translate-x-1"
                    />
                  </>
                )}
              </button>

              <p className="text-center text-[10px] uppercase tracking-[0.12em] text-[#52525B]">
                Your information is kept private and never sold.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

function FormField({
  label,
  name,
  type = "text",
  placeholder,
  value,
  onChange,
  error,
  icon,
  required = false,
}) {
  return (
    <div>
      <label
        htmlFor={name}
        className="mb-2 block text-xs font-bold uppercase tracking-[0.16em] text-[#A1A1AA]"
      >
        {label}
        {required && <span className="ml-1 text-[#D20A12]">*</span>}
      </label>

      <div className="relative">
        <div className="pointer-events-none absolute left-4 top-1/2 -translate-y-1/2 text-[#52525B]">
          {icon}
        </div>

        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          aria-invalid={Boolean(error)}
          aria-describedby={error ? `${name}-error` : undefined}
          className={`h-12 w-full rounded-lg border bg-[#141414] pl-11 pr-4 text-sm text-[#F5F5F5] outline-none placeholder:text-[#52525B] transition-all duration-200 focus:ring-2 ${
            error
              ? "border-[#D20A12] focus:ring-[#D20A12]/20"
              : "border-[#2A2A2A] focus:border-[#D20A12] focus:ring-[#D20A12]/20"
          }`}
        />
      </div>

      {error && (
        <p id={`${name}-error`} className="mt-2 text-xs text-[#F01820]">
          {error}
        </p>
      )}
    </div>
  );
}

/* ------------------------------------------
   Contact detail
------------------------------------------ */

function ContactDetail({ icon, label, value, href }) {
  const content = (
    <div className="group flex items-center gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#2A2A2A] bg-[#141414] text-[#D20A12] transition-all duration-200 group-hover:border-[#D20A12]/40 group-hover:bg-[#D20A12]/10">
        {icon}
      </div>

      <div className="min-w-0">
        <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#52525B]">
          {label}
        </p>

        <p className="mt-1 truncate text-sm font-medium text-[#D4D4D8] transition-colors group-hover:text-[#F5F5F5]">
          {value}
        </p>
      </div>
    </div>
  );

  return href ? (
    <a href={href} className="block">
      {content}
    </a>
  ) : (
    content
  );
}