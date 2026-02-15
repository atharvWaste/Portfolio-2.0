import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FinalInteractiveForm = () => {
  const [status, setStatus] = useState("idle"); // idle, typing, submitting, success
  const [formData, setFormData] = useState({ name: "", message: "" });

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("submitting");
    
    // Simulate a network delay (e.g., 2 seconds)
    setTimeout(() => {
      setStatus("success");
    }, 2000);
  };

  return (
    <section className="flex flex-col items-center py-10">
      
      {/* THE CHARACTER */}
      <motion.div 
        animate={status === "success" ? { 
          scale: [1, 1.2, 1],
          rotate: [0, 360],
          backgroundColor: "#22c55e" // Turns green on success
        } : { 
          y: [0, -5, 0] 
        }}
        className="w-24 h-24 bg-violet-500 rounded-full flex items-center justify-center relative mb-5 z-10 shadow-xl"
      >
        {status === "success" ? (
          // Success Icon
          <motion.svg 
            initial={{ scale: 0 }} animate={{ scale: 1 }}
            width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="4"
          >
            <polyline points="20 6 9 17 4 12" />
          </motion.svg>
        ) : (
          // Eyes
          <div className="flex gap-4">
            <motion.div 
              animate={{ 
                height: status === "submitting" ? 2 : 12, // Squints while "sending"
                x: (formData.name.length) % 10 
              }}
              className="w-3 bg-white rounded-full" 
            />
            <motion.div 
              animate={{ 
                height: status === "submitting" ? 2 : 12,
                x: (formData.name.length) % 10 
              }}
              className="w-3 bg-white rounded-full" 
            />
          </div>
        )}
      </motion.div>

      {/* THE FORM BOX */}
      <div className="bg-white p-8 pt-12 rounded-[2.5rem] shadow-2xl w-full max-w-md overflow-hidden relative">
        <AnimatePresence mode="wait">
          {status !== "success" ? (
            <motion.form 
              key="form"
              exit={{ y: 100, opacity: 0 }} // Form slides down out of view
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <input
                required
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-violet-400 text-slate-900"
                placeholder="Name"
                onChange={(e) => {
                  setFormData({...formData, name: e.target.value});
                  if(status === "idle") setStatus("typing");
                }}
              />
              <textarea
                required
                className="w-full p-4 bg-slate-50 border border-slate-200 rounded-2xl outline-none focus:border-violet-400 text-slate-900 resize-none"
                placeholder="We Will like to here you😊"
                rows="3"
              />
              <button 
                type="submit"
                disabled={status === "submitting"}
                className="w-full bg-violet-600 text-white font-bold py-4 rounded-2xl disabled:bg-slate-400 transition-colors"
              >
                {status === "submitting" ? "Sending..." : "Submit"}
              </button>
            </motion.form>
          ) : (
            <motion.div 
              key="success"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              className="text-center py-10"
            >
              <h3 className="text-2xl font-bold text-slate-800">Message Received!</h3>
              <p className="text-slate-500 mt-2">I'll get back to you soon.</p>
              <button 
                onClick={() => setStatus("idle")}
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

export default FinalInteractiveForm;