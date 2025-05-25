// components/JoinWhatsAppForm.tsx
"use client";
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const JoinWhatsAppForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // You can integrate your backend or use services like Formspree or Google Sheets here
    console.log("Submitted:", formData);
    alert("You’ll be added to the WhatsApp group shortly!");
  };

  return (
    <div className="w-full mx-auto mt-16 bg-white/10 border border-amber-500 backdrop-blur-xl rounded-2xl p-8 shadow-lg">
      <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4 text-center">
        Join Our WhatsApp Community
      </h2>
      <p className="text-white/70 mb-6 text-center">
        Stay updated with exclusive drops, fashion tips & offers!
      </p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          className="p-3 rounded-lg bg-white/5 text-white border border-white/20 focus:outline-none"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="WhatsApp Phone Number"
          className="p-3 rounded-lg bg-white/5 text-white border border-white/20 focus:outline-none"
          value={formData.phone}
          onChange={handleChange}
          required
        />
        <Button type="submit" className="w-full bg-amber-600 hover:bg-amber-700 text-white">
          Join WhatsApp Group
        </Button>
      </form>

      <div className="text-center mt-6">
        <p className="text-white/80 mb-1">Want to learn more about fashion & style?</p>
        <Link
          href="/blog"
          className="text-amber-400 hover:underline font-semibold"
        >
          Visit Our Fashion Blog →
        </Link>
      </div>
    </div>
  );
};

export default JoinWhatsAppForm;
