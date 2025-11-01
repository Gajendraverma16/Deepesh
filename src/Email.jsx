import React, { useState, useEffect } from "react";
import emailjs from "emailjs-com";
import { X, CheckCircle } from "lucide-react";

const emailll = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    number: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [success, setSuccess] = useState(null);

  // 🔒 Lock scroll when popup opens
  useEffect(() => {
    document.body.style.overflow = isFormOpen ? "hidden" : "auto";
  }, [isFormOpen]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSending(true);
    setSuccess(null);

    emailjs
      .send(
        "service_bmb8cnp", // ✅ Your EmailJS Service ID
        "template_c74zia3", // ✅ Your EmailJS Template ID
        formData,
        "D6l7o6WbWhRymadRn" // ✅ Your EmailJS Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setIsSending(false);
          setSuccess(true);
          setFormData({ name: "", email: "", message: "", number: "" });

          // Auto close after few seconds
          setTimeout(() => {
            setSuccess(null);
            setIsFormOpen(false);
          }, 3000);
        },
        (error) => {
          console.log(error.text);
          setIsSending(false);
          setSuccess(false);
        }
      );
  };

  return (
    <div className="relative flex justify-center items-center">
      {/* 🔘 Trigger Button */}
      <button
        onClick={() => setIsFormOpen(true)}
        className="bg-gray-900 text-white px-6 py-3 rounded-full font-medium hover:bg-gray-800 transition-all border border-gray-300 shadow-md"
      >
        Let’s Connect
      </button>

      {/* 📋 Popup Form */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm px-4">
          <div className="relative bg-white rounded-2xl p-6 md:p-8 w-full max-w-md shadow-2xl animate-fade-in">
            {/* ❌ Close Button */}
            <button
              onClick={() => setIsFormOpen(false)}
              className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 transition"
            >
              <X size={24} strokeWidth={2.5} />
            </button>

            {/* 🏷️ Title */}
            <h2 className="text-2xl md:text-3xl font-serif text-center text-gray-900 mb-6">
              Contact Us
            </h2>

            {/* 📮 Form */}
            <form onSubmit={sendEmail} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full p-3 md:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-800"
              />

              <input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full p-3 md:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-800"
              />

              <input
                type="number"
                name="number"
                placeholder="Your Phone Number"
                value={formData.number}
                onChange={handleChange}
                required
                className="w-full p-3 md:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-800"
              />

              <textarea
                name="message"
                placeholder="Your Message"
                rows="4"
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full p-3 md:p-4 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-gray-900 text-gray-800 resize-none"
              ></textarea>

              <button
                type="submit"
                disabled={isSending}
                className="w-full bg-gray-900 text-white py-3 md:py-4 rounded-full hover:bg-gray-800 transition-all font-medium tracking-wide"
              >
                {isSending ? "Sending..." : "Submit"}
              </button>
            </form>

            {/* ✅ Thank You Overlay */}
            {success === true && (
              <div className="absolute inset-0 bg-white/95 flex flex-col items-center justify-center text-center rounded-2xl p-6 animate-fade-in">
                <CheckCircle className="text-green-600 w-16 h-16 mb-3 animate-bounce" />
                <h3 className="text-2xl font-serif text-gray-900 mb-2">
                  Thank You!
                </h3>
                <p className="text-gray-600 text-sm md:text-base">
                  Your message has been sent successfully. <br /> We’ll get back
                  to you soon 😊
                </p>
              </div>
            )}

            {/* ❌ Error Message */}
            {success === false && (
              <p className="text-red-600 text-center mt-4">
                ❌ Failed to Send. Try again.
              </p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default emailll;
