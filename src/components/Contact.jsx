/* eslint-disable react/no-unescaped-entities */
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion, AnimatePresence } from "framer-motion";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);

  const service = import.meta.env.VITE_ServiceID || "";
  const template = import.meta.env.VITE_TemplateID || "";
  const publicKey = import.meta.env.VITE_PublicKey || "";

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .sendForm(service, template, form.current, publicKey)
      .then(() => {
        setStatus({
          type: "success",
          message: "Message sent! I'll get back to you soon.",
        });
        setLoading(false);
        form.current.reset();
        setTimeout(() => setStatus({ type: "", message: "" }), 5000);
      })
      .catch((err) => {
        console.error("EmailJS Error:", err);
        setStatus({
          type: "error",
          message:
            "Something went wrong. Please check your connection or try again later.",
        });
        setLoading(false);
      });
  };

  return (
    <section className="py-24 border-b border-neutral-900" id="contact">
      {/* Header */}
      <motion.div
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
        className="text-center mb-16"
      >
        <h2 className="text-5xl font-extralight tracking-tight text-white sm:text-6xl">
          Get In <span className="text-neutral-500 font-medium">Touch</span>
        </h2>
        <p className="mt-4 text-neutral-400">
          Have a project in mind? Let's build something great together.
        </p>
      </motion.div>

      {/* Form */}
      <div className="max-w-2xl mx-auto px-6">
        <motion.div
          whileInView={{ opacity: 1, scale: 1 }}
          initial={{ opacity: 0, scale: 0.95 }}
          className="relative p-8 rounded-2xl border border-neutral-800 bg-neutral-900/50 backdrop-blur-sm"
        >
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-400 ml-1">
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="John Doe"
                  required
                  className="w-full p-4 bg-neutral-950 border border-neutral-800 rounded-xl text-neutral-200 transition-all focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-sm font-medium text-neutral-400 ml-1">
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="john@example.com"
                  required
                  className="w-full p-4 bg-neutral-950 border border-neutral-800 rounded-xl text-neutral-200 transition-all focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <label className="text-sm font-medium text-neutral-400 ml-1">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Tell me about your project..."
                required
                className="w-full p-4 bg-neutral-950 border border-neutral-800 rounded-xl text-neutral-200 transition-all focus:border-purple-500 focus:ring-1 focus:ring-purple-500 outline-none min-h-[160px] resize-none"
              />
            </div>

            <motion.button
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.98 }}
              disabled={loading}
              type="submit"
              className="w-full py-4 bg-white text-black rounded-xl font-bold text-lg hover:bg-neutral-200 transition-colors flex justify-center items-center gap-2 disabled:bg-neutral-600"
            >
              {loading ? <span className="animate-pulse">Sending...</span> : "Send Message"}
            </motion.button>
          </form>

          {/* Status Notifications */}
          <AnimatePresence>
            {status.message && (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className={`mt-6 p-4 rounded-lg text-center text-sm ${
                  status.type === "success"
                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                    : "bg-red-500/10 text-red-400 border border-red-500/20"
                }`}
              >
                {status.message}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;