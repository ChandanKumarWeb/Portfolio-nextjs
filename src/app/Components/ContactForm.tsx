"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, User, MessageSquare, Phone, Send } from "lucide-react";
import { toast } from "react-hot-toast";
import { Minus } from "lucide-react";

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
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          access_key: "23303863-7d29-48bb-b481-d2ebd9631346",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        }),
      });

      const result = await res.json();

      if (result.success) {
        toast.success("Message sent successfully!", {
          position: "bottom-center",
          style: {
            background: "#10B981",
            color: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(16, 185, 129, 0.3)",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#10B981",
          },
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        toast.error("Failed to send message. Please try again.", {
          position: "bottom-center",
          style: {
            background: "#EF4444",
            color: "#fff",
            borderRadius: "12px",
            boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)",
          },
          iconTheme: {
            primary: "#fff",
            secondary: "#EF4444",
          },
        });
      }
    } catch {
      toast.error("Network error. Please try again later.", {
        position: "bottom-center",
        style: {
          background: "#EF4444",
          color: "#fff",
          borderRadius: "12px",
          boxShadow: "0 4px 12px rgba(239, 68, 68, 0.3)",
        },
      });
    } finally {
      setIsSubmitting(false);
    }
  };


  return (
    <section
      id="contactSection"
      className="py-16 px-4 bg-[#f8f6f8]  dark:bg-[#0b0b0b]  text-gray-900 dark:text-white relative overflow-hidden"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-start items-center text-red-500 mb-10">
          <h1 className="text-3xl font-bold">Contact Me</h1>
          <Minus size={45} />
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-3xl mx-auto bg-gradient-to-br from-white/90 to-gray-50/90 dark:from-gray-900/95 dark:to-gray-800/95 p-8 md:p-10 rounded-3xl shadow-2xl border border-gray-200/50 dark:border-gray-700/50 backdrop-blur-lg overflow-hidden"
          style={{ fontFamily: '"Inter", sans-serif' }}
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-pink-500/10 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
          </div>
          {/* Header with animated underline */}
          <div className="relative mb-12 text-center">
            <motion.h2
              className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-pink-500 dark:from-purple-400 dark:to-pink-400"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Get In Touch
            </motion.h2>
            <motion.div
              className="mx-auto mt-4 h-1 w-24 bg-gradient-to-r from-indigo-500 to-pink-500 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.8, type: "spring" }}
            />
            <motion.p
              className="mt-4 text-gray-500 dark:text-gray-400 max-w-md mx-auto"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Have a project in mind or want to collaborate? Drop me a message
              below.
            </motion.p>
          </div>

          {/* <div className="relative py-4 px-4 sm:px-8 md:px-16 lg:px-24 max-w-3xl mx-auto rounded-3xl
    bg-gradient-to-br from-white/90 via-indigo-50/70 to-pink-50/70 
    dark:from-gray-950/95 dark:via-gray-950/80 dark:to-indigo-950/70 
    shadow-2xl border border-white/20 overflow-hidden backdrop-blur-2xl"> */}
            <form
              onSubmit={handleSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-8 relative z-10"
            >
              {(["name", "email", "phone"] as FormField[]).map((field, i) => {
                const label =
                  field === "name"
                    ? "Your Name"
                    : field === "email"
                      ? "Your Email"
                      : "Phone Number";
                const Icon =
                  field === "name" ? User : field === "email" ? Mail : Phone;
                return (
                  <motion.div
                    key={field}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1, type: "spring" }}
                    className={field === "phone" ? "col-span-1 md:col-span-2" : "col-span-1"}
                  >
                    <div className="relative group">
                      {/* Glow effect - behind content */}
                      <div className="absolute -inset-1.5 rounded-xl pointer-events-none 
               bg-gradient-to-tr from-pink-400/30 via-indigo-400/30 to-transparent 
               blur-lg opacity-0 group-hover:opacity-80 
               transition-opacity duration-300 z-0" />
                      {/* Content container */}
                      <div className="relative z-10">
                        <Icon className="absolute left-5 top-1/2 -translate-y-1/2 text-indigo-500 dark:text-indigo-400 group-hover:text-pink-500 transition-colors z-20" />
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
                          className={`
                  pl-14 w-full pr-4 py-4 rounded-xl
                  border-2 focus:border-transparent 
                  ${errors[field]
                              ? "border-red-400 ring-2 ring-red-200/50"
                              : "border-gray-200 dark:border-gray-700 group-hover:border-indigo-300"
                            }
                  bg-white/60 dark:bg-gray-900/60
                  focus:bg-white/90 dark:focus:bg-gray-900/90
                  text-sm font-medium text-gray-900 dark:text-white
                  shadow-lg shadow-indigo-100/30 dark:shadow-gray-900/40
                  outline-none transition-all duration-300
                  focus:ring-2 focus:ring-pink-300/80 focus:shadow-pink-100/50
                  placeholder:text-gray-400 dark:placeholder:text-gray-500
                  backdrop-blur-md
                `}
                          disabled={isSubmitting}
                        />
                      </div>
                    </div>
                    {errors[field] && (
                      <motion.p
                        className="text-red-500 text-xs mt-2 ml-3 font-medium tracking-wide"
                        initial={{ opacity: 0, y: -5 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {errors[field]}
                      </motion.p>
                    )}
                  </motion.div>
                );
              })}

              <motion.div
                className="col-span-1 md:col-span-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, type: "spring" }}
              >
                <div className="relative group">
                  {/* Glow effect - behind content */}
                  <div className="absolute -inset-1.5 rounded-xl pointer-events-none 
          bg-gradient-to-r from-pink-400/40 via-indigo-400/40 to-transparent 
          blur-lg opacity-0 group-hover:opacity-75 
          transition-opacity duration-300 z-0" />
                  {/* Content container */}
                  <div className="relative z-10">
                    <MessageSquare className="absolute left-5 top-4 text-indigo-500 dark:text-indigo-400 group-hover:text-pink-500 transition-colors z-20" />
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Your Message"
                      rows={5}
                      className={`
              pl-14 w-full pr-4 py-4 rounded-xl
              border-2 focus:border-transparent 
              ${errors.message
                          ? "border-red-400 ring-2 ring-red-200/50"
                          : "border-gray-200 dark:border-gray-700 group-hover:border-indigo-300"
                        }
              bg-white/60 dark:bg-gray-900/60
              focus:bg-white/90 dark:focus:bg-gray-900/90
              text-sm font-medium text-gray-900 dark:text-white
              shadow-lg shadow-indigo-100/30 dark:shadow-gray-900/40
              outline-none transition-all duration-300
              focus:ring-2 focus:ring-pink-300/80 focus:shadow-pink-100/50
              placeholder:text-gray-400 dark:placeholder:text-gray-500
              backdrop-blur-md resize-none
            `}
                      disabled={isSubmitting}
                    />
                  </div>
                </div>
                {errors.message && (
                  <motion.p
                    className="text-red-500 text-xs mt-2 ml-3 font-medium tracking-wide"
                    initial={{ opacity: 0, y: -5 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {errors.message}
                  </motion.p>
                )}
              </motion.div>

              <motion.div
                className="col-span-1 md:col-span-2 flex justify-center mt-4"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, type: "spring" }}
              >
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="relative group flex items-center gap-2 justify-center text-lg
          bg-gradient-to-r from-indigo-600 via-fuchsia-500 to-pink-500
          hover:from-indigo-700 hover:via-fuchsia-600 hover:to-pink-600
          text-white px-8 py-4 rounded-2xl font-semibold
          transition-all duration-300 shadow-xl hover:shadow-2xl 
          overflow-hidden tracking-wide
          after:absolute after:inset-0 after:bg-white/20 after:opacity-0 after:blur after:transition-opacity
          after:duration-300 group-hover:after:opacity-30
          focus:outline-none disabled:cursor-not-allowed disabled:opacity-70"
                >
                  <span className="relative z-10 flex items-center">
                    {isSubmitting ? (
                      <>
                        <svg
                          className="animate-spin h-5 w-5 mr-2 text-white"
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                        >
                          <circle
                            className="opacity-25"
                            cx="12"
                            cy="12"
                            r="10"
                            stroke="currentColor"
                            strokeWidth="4"
                          />
                          <path
                            className="opacity-75"
                            fill="currentColor"
                            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
                          />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span className="ml-1">Send Message</span>
                      </>
                    )}
                  </span>
                </button>
              </motion.div>
            </form>
          {/* </div> */}


          {/* Social links or additional info can be added here */}
          <motion.div
            className="mt-12 text-center text-sm text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            Prefer email? Reach me directly at{" "}
            <a
              href="mailto:chandan42kumar55@gmail.com"
              className="text-indigo-500 hover:text-pink-500 transition-colors"
            >
              chandan42kumar55@gmail.com
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactForm;
