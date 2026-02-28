"use client"

import { useState } from "react"
import { motion } from "framer-motion"

export function ContactSection() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: "", organisation: "", email: "", message: "" })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSent(true)
  }

  return (
    <section id="contact" className="bg-[#EDE8DC] border-t border-[#1A1814]/10">
      <div className="mx-auto max-w-6xl px-6 py-32 lg:px-8 lg:py-40">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
          {/* Left */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <span className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814]/40">Contact</span>
            <div className="h-[1px] w-12 bg-[#8B7355]" />
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="font-serif text-3xl text-[#1A1814] leading-snug lg:text-4xl"
            >
              Begin with a conversation.
            </motion.h2>
            <p className="text-sm text-[#1A1814]/55 leading-relaxed">
              Tell us what you are facing. We will tell you whether it is something we can usefully address.
            </p>
          </div>

          {/* Right */}
          <div className="lg:col-span-8">
            {!sent ? (
              <motion.form
                onSubmit={handleSubmit}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-0"
              >
                {[
                  { id: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { id: "organisation", label: "Organisation", type: "text", placeholder: "Organisation name" },
                  { id: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map((field) => (
                  <div key={field.id} className="flex flex-col gap-2 border-t border-[#1A1814]/10 py-6">
                    <label className="text-[9px] tracking-[0.2em] uppercase text-[#1A1814]/40">
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      required
                      placeholder={field.placeholder}
                      value={form[field.id as keyof typeof form]}
                      onChange={(e) => setForm({ ...form, [field.id]: e.target.value })}
                      className="bg-transparent text-sm text-[#1A1814] placeholder:text-[#1A1814]/25 outline-none border-b border-[#1A1814]/10 pb-2 focus:border-[#8B7355] transition-colors"
                    />
                  </div>
                ))}

                <div className="flex flex-col gap-2 border-t border-[#1A1814]/10 py-6">
                  <label className="text-[9px] tracking-[0.2em] uppercase text-[#1A1814]/40">
                    What are you facing?
                  </label>
                  <textarea
                    required
                    rows={5}
                    placeholder="Describe the condition as you currently understand it."
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="bg-transparent text-sm text-[#1A1814] placeholder:text-[#1A1814]/25 outline-none border-b border-[#1A1814]/10 pb-2 focus:border-[#8B7355] transition-colors resize-none"
                  />
                </div>

                <div className="border-t border-[#1A1814]/10 pt-8">
                  <button
                    type="submit"
                    className="text-[10px] tracking-[0.25em] uppercase text-[#1A1814] underline underline-offset-4 decoration-[#8B7355] hover:opacity-60 transition-opacity"
                  >
                    Send →
                  </button>
                </div>
              </motion.form>
            ) : (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="flex flex-col gap-6 border-t border-[#1A1814]/10 pt-10"
              >
                <span className="text-[10px] tracking-[0.25em] uppercase text-[#8B7355]">Sent</span>
                <p className="font-serif text-2xl text-[#1A1814] leading-snug">
                  We have received your message and will be in touch within one business day.
                </p>
                <p className="text-sm text-[#1A1814]/55 leading-relaxed max-w-lg">
                  We read every message carefully before responding. We do not use templates.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}