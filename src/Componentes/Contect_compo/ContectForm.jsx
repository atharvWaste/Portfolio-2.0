import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const formRef = useRef();
  const [status, setStatus] = useState("idle"); 
  const [formData, setFormData] = useState({ from_name: "", email: "", message: "" });
  const [activeField, setActiveField] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");

    //  actual IDs from EmailJS
    const SERVICE_ID = "service_zij6jk9"; 
    const TEMPLATE_ID = "template_s05kb3v";
    const PUBLIC_KEY = "Obgz34mcwrKrWhDMG";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY)
      .then((result) => {
        console.log("Success:", result.text);
        setStatus("success");
        setActiveField(null);
      }, (error) => {
        console.log("Error:", error.text);
        alert("Failed to send the arrow. Please try again.");
        setStatus("idle");
      });
  };

  const totalLength = formData.from_name.length + formData.email.length + formData.message.length;
  const lookX = Math.min(totalLength * 0.2, 15);

  return (
    <section className="flex flex-col items-center py-10 select-none">
      
      {/* THE CHARACTER */}
      <motion.div 
        animate={status === "success" ? { 
          scale: [1, 1.2, 1],
          rotate: [0, 360],
          backgroundColor: "#22c55e" 
        } : { 
          y: [0, -5, 0],
          backgroundColor: activeField ? "#7c3aed" : "#8b5cf6"
        }}
        className="w-24 h-24 rounded-full flex items-center justify-center relative mb-6.25 z-20 shadow-xl"
      >
        {status === "success" ? (
          <motion.svg 
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"
          >
            <polyline points="20 6 9 17 4 12" />
          </motion.svg>
        ) : (
          <div className="relative flex flex-col items-center pt-2">
            <div className="flex gap-4">
              <motion.div 
                animate={{ 
                    height: status === "submitting" ? 2 : 12,
                    x: lookX - 7,
                    y: activeField ? 6 : 0
                }}
                className="w-3 bg-white rounded-full transition-all duration-75" 
              />
              <motion.div 
                animate={{ 
                    height: status === "submitting" ? 2 : 12,
                    x: lookX - 7,
                    y: activeField ? 6 : 0
                }}
                className="w-3 bg-white rounded-full transition-all duration-75" 
              />
            </div>

            <motion.svg width="40" height="20" className="mt-2">
                <motion.path
                    animate={{ 
                        d: totalLength > 0 ? "M 10 5 Q 20 18 30 5" : "M 12 10 Q 20 10 28 10"
                    }}
                    fill="transparent"
                    stroke="rgba(255,255,255,0.4)"
                    strokeWidth="3"
                    strokeLinecap="round"
                />
            </motion.svg>
          </div>
        )}
      </motion.div>

      <div className="bg-white p-8 pt-12 rounded-[2.5rem] shadow-2xl w-full md:w-1/2 max-w-md overflow-hidden relative border border-slate-100">
        <AnimatePresence mode="wait">
          {status !== "success" ? (
            <motion.form 
              ref={formRef}
              key="form"
              exit={{ y: 50, opacity: 0 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
              autoComplete='off'
                name="from_name"
                required
                onFocus={() => setActiveField('name')}
                onBlur={() => setActiveField(null)}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-violet-400 text-slate-900 caret-violet-600 transition-all"
                placeholder="Name"
                value={formData.from_name}
                onChange={(e) => {
                  setFormData({...formData, from_name: e.target.value});
                  if(status === "idle") setStatus("typing");
                }}
              />

              <input
              autoComplete='off'
                name="email"
                type="email"
                required
                onFocus={() => setActiveField('email')}
                onBlur={() => setActiveField(null)}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-violet-400 text-slate-900 caret-violet-600 transition-all"
                placeholder="Email Address"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />

              <textarea
              autoComplete='off'
                name="message"
                required
                onFocus={() => setActiveField('message')}
                onBlur={() => setActiveField(null)}
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-violet-400 text-slate-900 caret-violet-600 transition-all resize-none"
                placeholder="Write your message here..."
                rows="3"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />

              <motion.button 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-violet-600 text-white font-bold py-4 rounded-2xl disabled:bg-slate-400 transition-colors shadow-lg shadow-violet-200"
              >
                {status === "submitting" ? "Releasing Arrow..." : "Send Message"}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div 
              key="success"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-10"
            >
              <h3 className="text-2xl font-bold text-slate-800">Message Received!</h3>
              <p className="text-slate-500 mt-2">The arrow hit the target. I'll reply soon!</p>
              <button 
                onClick={() => {
                    setFormData({from_name: "", email: "", message: ""});
                    setStatus("idle");
                }}
                className="mt-6 text-violet-600 font-semibold underline"
              >
                Send another?
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default ContactForm;