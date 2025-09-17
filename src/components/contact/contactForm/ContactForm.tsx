import React, { useState } from "react";

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
    console.log("Form Data:", formData);
    alert("Form submitted! Check console for data.");
  };

  return (
    <div className="max-w-3xl mt-31 mx-auto">
      {/* Heading */}
      <h2 className="text-5xl font-bold text-center text-Black mb-4">
        Get Your Confidential Consultation
      </h2>
      <p className="text-Black80 text-center text-base mb-8">
        At ABD Law Corporation, we value clear communication and timely support.
        If you need legal advice or wish to discuss your case, our team is here
        to guide you. Every inquiry is handled with professionalism,
        confidentiality, and respect.
      </p>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        {/* First + Last Name */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-Gray1">
              First Name
            </label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className="mt-1 block w-full border h-13 border-Gray1 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-Gray1">
              Last Name
            </label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 block w-full border h-13 border-Gray1 rounded-md px-3 py-2"
            />
          </div>
        </div>

        {/* Contact Method */}
        <div>
          <label className="block text-sm font-medium text-Gray1 mb-2">
            Would you like us to contact you via phone or email?
          </label>
          <div className="flex gap-6">
            <label className="flex items-center gap-2 text-Gray1">
              <input
                type="checkbox"
                value="phone"
                checked={formData.contactMethod.includes("phone")}
                onChange={(e) => handleCheckbox(e, "contactMethod")}
              />
              Phone number
            </label>
            <label className="flex items-center gap-2 text-Gray1">
              <input
                type="checkbox"
                value="email"
                checked={formData.contactMethod.includes("email")}
                onChange={(e) => handleCheckbox(e, "contactMethod")}
              />
              Email
            </label>
          </div>
        </div>

        {/* Phone + Email */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-Gray1">
              Phone Number
            </label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full h-13 border border-Gray1 rounded-md px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-Gray1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block h-13 w-full border border-Gray1 rounded-md px-3 py-2"
            />
          </div>
        </div>

        {/* Legal Matter */}
        <div>
          <label className="block text-sm font-medium text-Gray1">
            Which Legal matter are you inquiring about?
          </label>
          <select
            name="legalMatter"
            value={formData.legalMatter}
            onChange={handleChange}
            className="mt-1 block w-full h-13 border border-Gray1 rounded-md px-3 py-2 text-Gray1"
          >
            <option value="">Select</option>
            <option value="family">Family Law</option>
            <option value="real-estate">Real Estate</option>
            <option value="immigration">Immigration</option>
          </select>
        </div>

        {/* Message */}
        <div>
          <label className="block text-sm font-medium text-Gray1">
            How can we help you
          </label>
          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="mt-1 block w-full border h-32 border-Gray1 rounded-md px-3 py-2"
          />
        </div>

        {/* Referral */}
        <div>
          <label className="block text-sm font-medium text-Gray1 mb-2">
            How did you hear about us?
          </label>
          <div className="flex flex-wrap gap-6">
            {["Website", "Google", "Facebook", "Linkedin", "Referred by someone"].map(
              (item) => (
                <label key={item} className="flex items-center text-base text-Gray1 gap-2">
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
          className="bg-Yellow hover:bg-yellow-600 text-white w-1/2 px-6 py-3 rounded-md font-medium"
        >
          Submit
        </button>
      </form>
    </div>
  );
}
