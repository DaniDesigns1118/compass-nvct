import React, { useState, ChangeEvent, FormEvent } from 'react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  trainingType: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    trainingType: '',
    message: ''
  });

  const [status, setStatus] = useState({
    submitted: false,
    submitting: false,
    info: { error: false, msg: '' }
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(prevStatus => ({ ...prevStatus, submitting: true }));

    try {
      const response = await fetch("https://ua6d0y44vc.execute-api.us-east-1.amazonaws.com/test/sendEmail", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error("Network response was not ok")
      }

      setStatus({
        submitted: true,
        submitting: false,
        info: {error: false, msg: 'Thank you! We will contact you soon.'}
      })

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        trainingType: '',
        message: ''
      });
    } catch (error) {
      console.error("Error processing email: ", error);
      setStatus({
        submitted: false,
        submitting: false,
        info: { error: true, msg: 'There was a problem sending your message. Please try again.' }
      });
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <div className="max-w-lg mx-auto">
      <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
        {/* Status Messages */}
        {status.info.error && (
          <div className="mb-6 p-4 bg-red-100 border border-red-400 text-red-700 rounded-lg">
            <p className="text-center">{status.info.msg}</p>
          </div>
        )}
        {status.submitted && !status.info.error && (
          <div className="mb-6 p-4 bg-green-100 border border-green-400 text-green-700 rounded-lg">
            <p className="text-center">{status.info.msg}</p>
          </div>
        )}

        {/* Name Field */}
        <div className="mb-6">
          <label 
            htmlFor="name" 
            className="block mb-2 text-blue-900 font-bold"
          >
            Name:
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 text-blue-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your full name"
          />
        </div>

        {/* Email Field */}
        <div className="mb-6">
          <label 
            htmlFor="email" 
            className="block mb-2 text-blue-900 font-bold"
          >
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 text-blue-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="your@email.com"
          />
        </div>

        {/* Phone Field */}
        <div className="mb-6">
          <label 
            htmlFor="phone" 
            className="block mb-2 text-blue-900 font-bold"
          >
            Phone:
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 rounded-md text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="(123) 456-7890"
          />
        </div>

        {/* Training Type Field */}
        <div className="mb-6">
          <label 
            htmlFor="trainingType" 
            className="block mb-2 text-blue-900 font-bold"
          >
            Training Type:
          </label>
          <select
              id="trainingType"
              name="trainingType"
              value={formData.trainingType}
              onChange={handleChange}
              required
              className="w-full p-3 border border-gray-300 rounded-md text-blue-900 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
          >
            <option value="">Select Training Type</option>
            <option value="annual">Annual Training (2 hours)</option>
            <option value="new-hire">New Hire Training (4 hours)</option>
            <option value="ane-residential">ANE Residential Training (8 hours)</option>
            <option value="ane-outpatient">ANE Outpatient Training (2 hours)</option>
          </select>
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label 
            htmlFor="message" 
            className="block mb-2 text-blue-900 font-bold"
          >
            Message:
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full p-3 border border-gray-300 text-blue-900 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 h-32 resize-y"
            placeholder="Please share any specific questions or requirements..."
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          disabled={status.submitting}
          className={`w-full p-4 rounded-md font-bold text-white transition-colors duration-200
            ${status.submitting 
              ? 'bg-gray-400 cursor-not-allowed' 
              : 'bg-blue-700 hover:bg-blue-800'}`}
        >
          {status.submitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : (
            'Send Message'
          )}
        </button>
      </form>
    </div>
  );
};

export default ContactForm;