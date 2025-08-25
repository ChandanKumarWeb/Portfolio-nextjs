"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Phone, Send, Minus } from "lucide-react";
import { toast } from "react-hot-toast";

type FormField = "name" | "email" | "phone" | "message";

const ContactForm = () => {
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
      className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-black text-black dark:text-white"
    >
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold">Contact Me</h1>
          <Minus size={36} />
        </div>

        {/* Card */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white dark:bg-neutral-900 border border-gray-200 dark:border-gray-800 
                     p-8 sm:p-10 rounded-2xl shadow-lg"
        >
          {/* Intro */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold">Get In Touch</h2>
            <p className="mt-3 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Have a project in mind or want to collaborate? Drop me a message
              below, and I’ll get back to you soon.
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
                  <label className="block text-sm font-medium mb-2">
                    {label}
                  </label>
                  <div className="relative">
                    <Icon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
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
                      className={`w-full pl-12 pr-4 py-3 rounded-xl border 
                        ${errors[field]
                          ? "border-red-500"
                          : "border-gray-300 dark:border-gray-700"}
                        bg-transparent focus:outline-none 
                        focus:ring-2 focus:ring-black dark:focus:ring-white 
                        text-base transition`}
                    />
                  </div>
                  {errors[field] && (
                    <p className="text-red-500 text-xs mt-1">{errors[field]}</p>
                  )}
                </div>
              );
            })}

            {/* Message */}
            <div className="md:col-span-2">
              <label className="block text-sm font-medium mb-2">
                Your Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-4 top-4 text-gray-400 w-5 h-5" />
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Type your message..."
                  rows={6}
                  disabled={isSubmitting}
                  className={`w-full pl-12 pr-4 py-3 rounded-xl border 
                    ${errors.message
                      ? "border-red-500"
                      : "border-gray-300 dark:border-gray-700"}
                    bg-transparent focus:outline-none 
                    focus:ring-2 focus:ring-black dark:focus:ring-white 
                    text-base resize-none transition`}
                />
              </div>
              {errors.message && (
                <p className="text-red-500 text-xs mt-1">{errors.message}</p>
              )}
            </div>

            {/* Button */}
            <div className="md:col-span-2 flex justify-center mt-6">
              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 px-10 py-3 rounded-xl 
                  bg-black text-white dark:bg-white dark:text-black
                  font-semibold transition disabled:opacity-50
                  hover:scale-[1.03] active:scale-[0.97]"
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Send Message
                  </>
                )}
              </button>
            </div>
          </form>

          {/* Footer */}
          <div className="mt-10 text-center text-sm text-gray-600 dark:text-gray-400">
            Prefer email? Reach me directly at{" "}
            <a
              href="mailto:chandan42kumar55@gmail.com"
              className="underline hover:opacity-70"
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
