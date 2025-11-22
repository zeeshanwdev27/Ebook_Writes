import React from "react";
import { MessageSquare, Phone, Mail, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

function ContactForm() {
  return (
    <div className="min-h-[50vh] bg-gray-50 flex flex-col justify-center items-center gap-5 py-10 px-4">
      {/* Header Section */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-(--main-color) mb-4">
          Do You Have Something To Say?
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl">
          We'd love to hear from you. Send us a message and we'll respond as
          soon as possible.
        </p>
      </div>

      {/* Contact Form */}
      <div className="bg-white w-full max-w-4xl rounded-2xl p-8 shadow-xl border border-gray-100">
        <form
          className="flex flex-col gap-6"
          onSubmit={async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);

            try {
              const response = await fetch(
                "https://ebookwrites.com/sendmail.php",
                {
                  method: "POST",
                  body: formData,
                }
              );

              const result = await response.text();

              if (result.includes("success")) {
                Swal.fire({
                  icon: "success",
                  title: "Message Send!",
                  text: "🎉 Thank you! Message Send Successfully.",
                  confirmButtonColor: "#FBBF24",
                });
                e.target.reset();
              } else if (result.includes("invalid_email")) {
                Swal.fire({
                  icon: "warning",
                  title: "Invalid Email",
                  text: "⚠️ Please enter a valid email address.",
                  confirmButtonColor: "#FBBF24",
                });
                e.target.reset();
              } else {
                Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "❌ Something went wrong. Please try again later.",
                  confirmButtonColor: "#FBBF24",
                });
                e.target.reset();
              }
            } catch (error) {
              Swal.fire({
                icon: "error",
                title: "Network Error",
                text: "🚨 Please check your connection and try again.",
                confirmButtonColor: "#FBBF24",
              });
              console.error(error);
              e.target.reset();
            }
          }}
        >
          {/* Name & Phone */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="name">Full Name *</label>
              <input
                id="name"
                name="name"
                type="text"
                placeholder="Enter your full name"
                className="border border-[var(--main-color)] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="phone">Phone Number</label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="Enter your phone number"
                className="border border-[var(--main-color)] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-transparent transition-all duration-200"
              />
            </div>
          </div>

          {/* Email & Service */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label htmlFor="email">Email Address *</label>
              <input
                id="email"
                name="email"
                type="email"
                placeholder="Enter your email address"
                className="border border-[var(--main-color)] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-transparent transition-all duration-200"
                required
              />
            </div>

            <div className="flex flex-col gap-2">
              <label htmlFor="service">Select Service</label>
              <div className="relative">
                <select
                  id="service"
                  name="service"
                  className="w-full border border-[var(--main-color)] p-3 rounded-lg focus:outline-none 
          focus:ring-2 focus:ring-[var(--main-color)] focus:border-transparent 
          transition-all duration-200 bg-white appearance-none cursor-pointer pr-10"
                >
                  <option value="" disabled selected defaultValue="">
                    Choose a service...
                  </option>
                  <option value="book-writing">Book Writing</option>
                  <option value="book-marketing">Book Marketing</option>
                  <option value="book-cover-design">Book Cover Design</option>
                  <option value="proofreading-editing">
                    Book Proofreading & Editing
                  </option>
                  <option value="book-publishing">Book Publishing</option>
                  <option value="ebook-writing-publishing">
                    Ebook Writing & Publishing
                  </option>
                </select>

                <ChevronDown
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-[var(--main-color)] pointer-events-none"
                  size={20}
                />
              </div>
            </div>
          </div>

          {/* Message */}
          <div className="flex flex-col gap-2">
            <label htmlFor="message">Message *</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              placeholder="Tell us about your project or inquiry..."
              className="border border-[var(--main-color)] p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-[var(--main-color)] focus:border-transparent transition-all duration-200 resize-vertical"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="p-4 text-lg font-semibold rounded-lg bg-[var(--main-color)] text-white hover:bg-[var(--main-color)]/90 transform hover:scale-[1.02] transition-all duration-200 shadow-md hover:shadow-lg"
          >
            Send Message
          </button>
        </form>
      </div>

      {/* Contact Methods */}
      <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        <div className="text-center group">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl group-hover:border-(--main-color)/20 transition-all duration-300">
            <div className="w-12 h-12 bg-(--main-color)/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-(--main-color)/20 transition-colors duration-300">
              <span className="text-(--main-color) text-lg font-bold">
                <MessageSquare />
              </span>
            </div>
            <p className="font-semibold text-gray-700 mb-3">
              Discuss Your Project
            </p>
            <button className="cursor-pointer w-full bg-transparent border border-(--main-color) rounded-xl p-4 text-lg font-medium text-(--main-color) hover:bg-(--main-color) hover:text-white transition-all duration-300 group-hover:shadow-md">
              Live Chat
            </button>
          </div>
        </div>

        <div className="text-center group">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl group-hover:border-(--main-color)/20 transition-all duration-300">
            <div className="w-12 h-12 bg-(--main-color)/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-(--main-color)/20 transition-colors duration-300">
              <span className="text-(--main-color) text-lg font-bold">
                <Phone />
              </span>
            </div>
            <p className="font-semibold text-gray-700 mb-3">Make a Call</p>
            <Link to="tel:+15512884168">
              <button className="cursor-pointer w-full bg-transparent border border-(--main-color) rounded-xl p-4 text-lg font-medium text-(--main-color) hover:bg-(--main-color) hover:text-white transition-all duration-300 group-hover:shadow-md">
                +1-551-288-4168
              </button>
            </Link>
          </div>
        </div>

        <div className="text-center group">
          <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100 group-hover:shadow-xl group-hover:border-(--main-color)/20 transition-all duration-300">
            <div className="w-12 h-12 bg-(--main-color)/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-(--main-color)/20 transition-colors duration-300">
              <span className="text-(--main-color) text-lg font-bold">
                <Mail />
              </span>
            </div>
            <p className="font-semibold text-gray-700 mb-3">Send us Email</p>
            <Link to="mailto:info@ebookwrites.com">
              <button className="cursor-pointer w-full bg-transparent border border-(--main-color) rounded-xl p-4 text-lg font-medium text-(--main-color) hover:bg-(--main-color) hover:text-white transition-all duration-300 group-hover:shadow-md">
                Info@ebookwrites.com
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ContactForm;
