"use client";

import React, { useState, useRef } from "react";
import { motion, useInView } from "motion/react";
import { Mail, User, MessageSquare, Phone, Send } from "lucide-react";
import { toast } from "react-hot-toast";

type FormField = "name" | "email" | "phone" | "message";

const ContactForm = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState<Record<FormField, string>>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState<Record<FormField, string>>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    const key = name as FormField;

    setFormData((prev) => ({ ...prev, [key]: value }));

    if (errors[key]) {
      setErrors((prev) => ({ ...prev, [key]: "" }));
    }
  };

  const validateForm = () => {
    let valid = true;
    const newErrors: Record<FormField, string> = {
      name: "",
      email: "",
      phone: "",
      message: "",
    };

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email";
      valid = false;
    }
    if (formData.phone && !/^[\d\s+-]+$/.test(formData.phone)) {
      newErrors.phone = "Please enter a valid phone number";
      valid = false;
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message should be at least 10 characters";
      valid = false;
    }

    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!validateForm()) return;
    setIsSubmitting(true);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          access_key: "23303863-7d29-48bb-b481-d2ebd9631346",
          ...formData,
        }),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.");
      }
    } catch {
      toast.error("Network error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      id="contactSection"
      className="py-20 px-4 bg-background relative overflow-hidden"
    >
      {/* Decorative */}
      <div className="absolute top-20 -left-20 w-72 h-72 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 -right-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-4xl mx-auto relative" ref={ref}>
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          className="mb-14"
        >
          <span className="text-primary text-sm font-semibold uppercase tracking-widest">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2">
            Contact Me
          </h2>
          <div className="w-16 h-1 bg-primary rounded-full mt-4" />
        </motion.div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-card border border-border p-8 sm:p-10 rounded-2xl hover:border-primary/20 transition-colors duration-300"
        >
          {/* Intro */}
          <div className="mb-10 text-center">
            <h3 className="text-2xl font-bold text-foreground">
              Let&apos;s Work Together
            </h3>
            <p className="mt-3 text-muted-foreground max-w-xl mx-auto">
              Have a project in mind or want to collaborate? Drop me a message
              below, and I&apos;ll get back to you within 24 hours.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            {(["name", "email", "phone"] as FormField[]).map((field) => {
              const label =
                field === "name"
                  ? "Your Name"
                  : field === "email"
                    ? "Your Email"
                    : "Phone Number";
              const Icon =
                field === "name" ? User : field === "email" ? Mail : Phone;
              return (
                <div
                  key={field}
                  className={field === "phone" ? "md:col-span-2" : ""}
                >
                  <label className="block text-sm font-medium text-foreground mb-2">
                    {label}
                    {field !== "phone" && (
                      <span className="text-red-500 ml-1">*</span>
                    )}
                  </label>
                  <div className="relative">
                    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground w-4 h-4" />
                    <input
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                            ? "tel"
                            : "text"
                      }
                      name={field}
                      value={formData[field]}
                      onChange={handleChange}
                      placeholder={label}
                      disabled={isSubmitting}
                      className={`w-full pl-11 pr-4 py-3 rounded-xl border bg-background
                        ${
                          errors[field]
                            ? "border-red-500 focus:ring-red-500"
                            : "border-border focus:ring-primary"
                        }
                        focus:outline-none focus:ring-2 text-foreground text-sm transition-all duration-200 placeholder:text-muted-foreground/60`}
                    />
                  </div>
                  {errors[field] && (
                    <p className="text-red-500 text-xs mt-1.5">
                      {errors[field]}
                    </p>
                  )}
                </div>
              );
            })}

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium text-foreground mb-2">
                Your Message <span className="text-red-500">*</span>
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-muted-foreground w-4 h-4" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  disabled={isSubmitting}
                  className={`w-full pl-11 pr-4 py-3 rounded-xl border bg-background
                    ${
                      errors.message
                        ? "border-red-500 focus:ring-red-500"
                        : "border-border focus:ring-primary"
                    }
                    focus:outline-none focus:ring-2 text-foreground text-sm resize-none transition-all duration-200 placeholder:text-muted-foreground/60`}
                />
              </div>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1.5">{errors.message}</p>
              )}
            </div>

            {/* Button */}
            <div className="md:col-span-2 flex justify-center mt-4">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-primary text-primary-foreground font-semibold shadow-lg shadow-primary/25 hover:shadow-primary/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed glow-btn"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-8 text-center text-sm text-muted-foreground">
            Prefer email? Reach me directly at{" "}
            <a
              href="mailto:chandan42kumar55@gmail.com"
              className="text-primary hover:underline"
            >
              chandan42kumar55@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
