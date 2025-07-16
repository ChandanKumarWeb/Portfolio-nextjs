"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Phone, Send } from "lucide-react";
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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;

    if (["name", "email", "phone", "message"].includes(name)) {
      const key = name as FormField;
      setFormData((prev) => ({
        ...prev,
        [key]: value,
      }));

      if (errors[key]) {
        setErrors((prev) => ({
          ...prev,
          [key]: "",
        }));
      }
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
      await new Promise((resolve) => setTimeout(resolve, 1500));
      toast.success("Message sent successfully!", {
        position: "bottom-center",
        style: { background: "#4BB543", color: "#fff" },
      });
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch {
      toast.error("Failed to send message. Please try again.", {
        position: "bottom-center",
        style: { background: "#FF3333", color: "#fff" },
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.div
      id="contactSection"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative max-w-5xl mx-auto bg-gradient-to-br from-blue-50 to-purple-100 dark:from-gray-900 dark:to-gray-800 p-10 rounded-3xl shadow-2xl border border-gray-200 dark:border-gray-700"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-36 h-1 rounded bg-gradient-to-r from-blue-500 to-purple-500" />
      <h2 className="text-4xl font-extrabold text-center mb-12 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
        Contact Me
      </h2>
      <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {["name", "email", "phone"].map((field, i) => {
          const label = field === "name" ? "Your Name" : field === "email" ? "Your Email" : "Phone Number";
          const Icon = field === "name" ? User : field === "email" ? Mail : Phone;
          return (
            <motion.div
              key={field}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 + i * 0.1 }}
              className="col-span-1"
            >
              <div className="relative">
                <Icon className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  name={field}
                  value={formData[field as FormField]}
                  onChange={handleChange}
                  placeholder={label}
                  className={`pl-10 w-full px-4 py-3 rounded-xl border ${errors[field as FormField] ? "border-red-500" : "border-gray-300 dark:border-gray-700"} bg-white dark:bg-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
                  disabled={isSubmitting}
                />
              </div>
              {errors[field as FormField] && <p className="text-red-500 text-xs mt-1">{errors[field as FormField]}</p>}
            </motion.div>
          );
        })}

        {/* Message */}
        <motion.div
          className="col-span-1 md:col-span-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <div className="relative">
            <MessageSquare className="absolute left-3 top-4 text-gray-400" />
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message"
              rows={5}
              className={`pl-10 w-full px-4 py-3 rounded-xl border ${errors.message ? "border-red-500" : "border-gray-300 dark:border-gray-700"} bg-white dark:bg-black text-sm focus:outline-none focus:ring-2 focus:ring-blue-500`}
              disabled={isSubmitting}
            />
          </div>
          {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
        </motion.div>

        {/* Button */}
        <motion.div
          className="col-span-1 md:col-span-2 flex justify-center mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-6 py-3 rounded-full font-semibold transition shadow-md hover:shadow-xl disabled:opacity-60"
          >
            {isSubmitting ? (
              <span className="flex items-center">
                <svg className="animate-spin h-5 w-5 mr-2 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                </svg>
                Sending...
              </span>
            ) : (
              <>
                <Send className="w-5 h-5" /> Send Message
              </>
            )}
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
};

export default ContactForm;
