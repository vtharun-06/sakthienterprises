"use client";

import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaBuilding,
} from "react-icons/fa";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (res.ok) {
      alert("✅ Message sent successfully!");
      setFormData({ name: "", company: "", phone: "", email: "", message: "" });
    } else {
      alert("❌ Failed to send message. Try again later.");
    }
  };

  return (
    <main className="py-16 bg-gray-100 min-h-screen">
      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12">
        {/* Contact Form */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <p className="text-yellow-600 mb-6">
            Have a project in mind or need scaffolding solutions? Fill out the
            form below and our team will reach out to you shortly.
          </p>
          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="name"
              placeholder="Your Full Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 rounded-lg text-yellow-600 bg-gray-50 border border-gray-300 focus:outline-none focus:border-yellow-500"
              required
            />
            <input
              type="text"
              name="company"
              placeholder="Company Name"
              value={formData.company}
              onChange={handleChange}
              className="w-full p-3 rounded-lg text-yellow-600 bg-gray-50 border border-gray-300 focus:outline-none focus:border-yellow-500"
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 rounded-lg text-yellow-600 bg-gray-50 border border-gray-300 focus:outline-none focus:border-yellow-500"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 rounded-lg text-yellow-600 bg-gray-50 border border-gray-300 focus:outline-none focus:border-yellow-500"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              rows={5}
              className="w-full p-3 rounded-lg text-yellow-600 bg-gray-50 border border-gray-300 focus:outline-none focus:border-yellow-500"
              required
            />
            <button
              type="submit"
              className="bg-yellow-600 text-white px-6 py-3 rounded-lg hover:bg-yellow-700 transition w-full font-semibold"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info + Map */}
        <div className="space-y-6">
          {/* Info Boxes */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6 text-yellow-600">
              Get in Touch with Us
            </h2>
            <div className="space-y-5">
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <FaBuilding className="h-4 w-4 text-yellow-600" />
                </div>
                <p className="text-yellow-400 font-medium">
                  Sakthi Enterprises
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <FaPhoneAlt className="h-4 w-4 text-yellow-600" />
                </div>
                <p className="text-yellow-400">+91 9840062692</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <FaEnvelope className="h-4 w-4 text-yellow-600" />
                </div>
                <p className="text-yellow-400">
                  sakthienterprises1999@gmail.com
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="bg-yellow-100 p-3 rounded-full">
                  <FaMapMarkerAlt className="h-4 w-4 text-yellow-600" />
                </div>
                <p className="text-yellow-400">
                  45MV+9J3, Kadappa Rd, Subhash Nagar, Sakthi Nagar,
                  Lakshmipuram, Chennai, Tamil Nadu 600080
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="bg-white p-4 rounded-lg shadow-md">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d312.2286562860883!2d80.19404284222142!3d13.133307873720655!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265007dfd3ee5%3A0x8ad92f86e3a8c213!2sSathi%20Enterprises!5e0!3m2!1sen!2sin!4v1756285916168!5m2!1sen!2sin"
              width="100%"
              height="400"
              allowFullScreen
              loading="lazy"
              className="rounded-lg shadow-sm"
            ></iframe>
          </div>
        </div>
      </div>
    </main>
  );
}
