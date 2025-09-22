import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ConsultationForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contactMethod: [] as string[],
    phone: "",
    email: "",
    legalMatter: "",
    message: "",
    referral: [] as string[],
  });

  const [status, setStatus] = useState<"success" | "error" | "">("");

  // Handle text/select/textarea change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle checkbox change
  const handleCheckbox = (e: React.ChangeEvent<HTMLInputElement>, key: "contactMethod" | "referral") => {
    const { value, checked } = e.target;
    setFormData((prev) => {
      const updated = checked
        ? [...prev[key], value]
        : prev[key].filter((item) => item !== value);
      return { ...prev, [key]: updated };
    });
  };

  // Handle submit
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const templateParams = {
      firstName: formData.firstName,
      lastName: formData.lastName,
      contactMethod: formData.contactMethod.join(", "),
      phone: formData.phone,
      email: formData.email,
      legalMatter: formData.legalMatter,
      message: formData.message,
      referral: formData.referral.join(", "),
    };

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID!,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID!,
        templateParams,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY!
      )
      .then(() => {
        setStatus("success");
        setFormData({
          firstName: "",
          lastName: "",
          contactMethod: [],
          phone: "",
          email: "",
          legalMatter: "",
          message: "",
          referral: [],
        });
      })
      .catch(() => setStatus("error"));
  };

  return (
    <div className="xl:w-3/5 md:w-4/5 md:px-0 px-6 mx-auto md:mt-31 mt-16">
      {/* Heading */}
      <h2 className="xl:text-4xl text-2xl xl:leading-11 leading-8 font-bold text-center text-Black mb-4">
        Get Your Confidential Consultation
      </h2>
      <p className="text-gray-600 text-center xl:text-base text-sm xl:leading-6 leading-[22px] xl:mb-8 mb-6">
        At ABD Law Corporation, we value clear communication and timely support. 
        If you need legal advice or wish to discuss your case, our team is here 
        to guide you with professionalism and confidentiality.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* First + Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
        </div>

        {/* Contact Method */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Would you like us to contact you via phone or email?
          </label>
          <div className="flex gap-6">
            {["phone", "email"].map((method) => (
              <label key={method} className="flex items-center gap-2 text-gray-700">
                <input
                  type="checkbox"
                  value={method}
                  checked={formData.contactMethod.includes(method)}
                  onChange={(e) => handleCheckbox(e, "contactMethod")}
                />
                {method.charAt(0).toUpperCase() + method.slice(1)}
              </label>
            ))}
          </div>
        </div>

        {/* Phone + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
              required
            />
          </div>
        </div>

        {/* Legal Matter */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            Which legal matter are you inquiring about?
          </label>
          <select
            name="legalMatter"
            value={formData.legalMatter}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2"
            required
          >
            <option value="">Select</option>
            <option value="family">Family Law</option>
            <option value="real-estate">Real Estate</option>
            <option value="immigration">Immigration</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-gray-700">
            How can we help you?
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 h-28"
            required
          />
        </div>

        {/* Referral */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            How did you hear about us?
          </label>
          <div className="flex flex-wrap gap-6">
            {["Website", "Google", "Facebook", "LinkedIn", "Referred by someone"].map(
              (item) => (
                <label key={item} className="flex items-center gap-2 text-gray-700">
                  <input
                    type="checkbox"
                    value={item}
                    checked={formData.referral.includes(item)}
                    onChange={(e) => handleCheckbox(e, "referral")}
                  />
                  {item}
                </label>
              )
            )}
          </div>
        </div>

        {/* Submit */}
        <button
          type="submit"
          className="bg-yellow-600 hover:bg-yellow-700 text-white md:w-1/2 w-full px-6 py-3 rounded-md font-medium"
        >
          Submit
        </button>
      </form>

      {/* Success / Error message */}
      {status === "success" && (
        <p className="mt-4 text-green-600 font-medium text-center">
          ✅ Your message has been sent successfully!
        </p>
      )}
      {status === "error" && (
        <p className="mt-4 text-red-600 font-medium text-center">
          ❌ Something went wrong. Please try again later.
        </p>
      )}
    </div>
  );
}
