import React, { useState } from "react";
import { motion, useInView } from "framer-motion";

const RegistrationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    year: "",
    contact: "",
    section: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Partial<typeof formData>>({});

  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });

  const validate = () => {
    const newErrors: Partial<typeof formData> = {};
    if (!formData.name) newErrors.name = "Full Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.year) newErrors.year = "Year is required";
    if (!formData.contact) newErrors.contact = "Contact Number is required";
    if (!formData.section) newErrors.section = "Please select section";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("loading");
    try {
      const res = await fetch(
        "https://rkgitm.app.n8n.cloud/webhook/registration-form",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );
      if (!res.ok) throw new Error("Network response not ok");
      setStatus("success");
      // clear form...
    } catch (err) {
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const formVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  const getInputClass = (fieldName: keyof typeof formData) => {
    return `w-full bg-secondary border ${
      errors[fieldName] ? "border-red-500" : "border-gray-700"
    } text-white p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent transition-all duration-300`;
  };

  return (
    <section id="register" className="py-20 bg-black">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-orbitron font-bold">
            Register <span className="text-primary">Now</span>
          </h2>
          <p className="text-lg text-accent mt-4">
            Secure your spot and be part of the innovation.
          </p>
        </div>

        <motion.div
          ref={ref}
          variants={formVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-2xl mx-auto bg-secondary/50 p-8 rounded-lg border border-primary/30"
        >
          {status === "success" ? (
            <div className="flex flex-col items-center justify-center text-center py-16 px-6 bg-gradient-to-br from-gray-900 via-gray-800 to-black rounded-2xl shadow-2xl max-w-md mx-auto mt-10">
  <h3 className="text-3xl md:text-4xl font-extrabold text-green-400 animate-bounce">
    🎉 Registration Successful!
  </h3>

  <p className="text-gray-300 mt-4 text-base md:text-lg leading-relaxed">
    Thank you for registering! We’ve sent a confirmation email to your inbox.  
    You can also join our WhatsApp community for updates and support.
  </p>

  <a
    href="https://chat.whatsapp.com/DplM6izf2iJLegmHhC86AS?mode=wwt"
    target="_blank"
    rel="noopener noreferrer"
    className="mt-6 inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-full transition-all duration-300 transform hover:scale-105"
  >
    <span>Join WhatsApp Group</span>
  </a>

  {/* QR Code Section */}
  <div className="mt-10 bg-gray-800/50 p-6 rounded-xl shadow-lg flex flex-col items-center">
    <h4 className="text-lg font-semibold text-green-400 mb-3">
      Or scan the QR code:
    </h4>
    <img
      src="/whatsapp.png"
      alt="WhatsApp Group QR"
      className="w-40 h-40 md:w-48 md:h-48 rounded-lg border border-green-400 shadow-md hover:scale-105 transition-transform duration-300"
    />
  </div>

  <div className="mt-8 text-sm text-gray-500">
    You’ll receive all future announcements and updates there.
  </div>
</div>

          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  className={getInputClass("name")}
                />
                {errors.name && (
                  <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                )}
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleChange}
                  className={getInputClass("email")}
                />
                {errors.email && (
                  <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="year"
                  placeholder="Year 1/2/3/4"
                  value={formData.year}
                  onChange={handleChange}
                  className={getInputClass("college")}
                />
                {errors.year && (
                  <p className="text-red-500 text-sm mt-1">{errors.year}</p>
                )}
              </div>
              <div>
                <input
                  type="text"
                  name="contact"
                  placeholder="Contact Number"
                  value={formData.contact}
                  onChange={handleChange}
                  className={getInputClass("contact")}
                />
                {errors.contact && (
                  <p className="text-red-500 text-sm mt-1">{errors.contact}</p>
                )}
              </div>
              <div>
                <select
                  name="section"
                  value={formData.event}
                  onChange={handleChange}
                  className={getInputClass("event")}
                >
                  <option value="">Select section</option>
                  <option value="A">A</option>
                  <option value="B">B</option>
                  <option value="C">C</option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                </select>
                {errors.section && (
                  <p className="text-red-500 text-sm mt-1">{errors.section}</p>
                )}
              </div>
              <div>
                <textarea
                  name="message"
                  placeholder="Message (Optional)"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  className={getInputClass("message")}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full bg-primary text-black font-bold py-3 px-6 rounded-md hover:bg-orange-400 transition-all duration-300 disabled:bg-gray-500 disabled:cursor-not-allowed flex justify-center items-center"
              >
                {status === "loading" ? (
                  <svg
                    className="animate-spin h-5 w-5 text-white"
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
                    ></circle>
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                    ></path>
                  </svg>
                ) : (
                  "Submit Registration"
                )}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default RegistrationForm;
