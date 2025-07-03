import React, { useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from 'emailjs-com';
import { slideUpVariants, zoomInVariants } from './animation';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone_number: '',
    message: '',
  });

  const [loading, setLoading] = useState(false); 

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true); 

    emailjs
      .send(
        'service_s59vwic',
        'template_q7dayz9',
        formData,
        'V9OJ7XmtzDV29Rgib'
      )
      .then(
        () => {
          toast.success('Message sent successfully!');
          setFormData({ name: '', email: '', phone_number: '', message: '' });
          setLoading(false); 
        },
        () => {
          toast.error('An error occurred. Please try again later.');
          setLoading(false); 
        }
      );
  };

  return (
    <div id="contact" className="bg-white w-full">
      <div className="lg:w-[80%] w-[90%] mx-auto py-[60px] flex lg:flex-row flex-col justify-between items-start gap-[50px]">
        
        {/* Left Side – Text */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={slideUpVariants}
          className="lg:w-[60%] w-full flex flex-col items-start justify-center gap-6"
        >
          <h2 className="text-yellow-700 text-2xl font-semibold">CONTACT US</h2>
          <h1 className="text-black uppercase text-[32px] md:text-[40px] font-bold">
            Reach Us For Any Query
          </h1>
          <div className="w-[120px] h-[6px] bg-yellow-700" />
          <p className="text-xl italic text-gray-600 mt-10">
            Have a project in mind? Let’s build something together. Reach out and we'll get back to you quickly.
          </p>
        </motion.div>

        {/* Right Side – Form */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="lg:w-[40%] w-full"
        >
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full">
            <input
              type="text"
              name="name"
              placeholder="Enter Your Full Name"
              aria-label="Full Name"
              required
              value={formData.name}
              onChange={handleChange}
              className="px-6 py-3 border-2 border-black text-black rounded-lg w-full focus:outline-yellow-700"
            />
            <input
              type="email"
              name="email"
              placeholder="Enter Your Email"
              aria-label="Email"
              required
              value={formData.email}
              onChange={handleChange}
              className="px-6 py-3 border-2 border-black text-black rounded-lg w-full focus:outline-yellow-700"
            />
            <input
              type="tel"
              name="phone_number"
              placeholder="Enter Your Mobile Number"
              aria-label="Phone Number"
              required
              value={formData.phone_number}
              onChange={handleChange}
              className="px-6 py-3 border-2 border-black text-black rounded-lg w-full focus:outline-yellow-700"
            />
            <textarea
              name="message"
              placeholder="Enter Your Message"
              aria-label="Message"
              required
              rows="4"
              value={formData.message}
              onChange={handleChange}
              className="px-6 py-3 border-2 border-black text-black rounded-lg w-full focus:outline-yellow-700"
            />
            <motion.button
              type="submit"
              variants={zoomInVariants}
              disabled={loading}
              className={`${
                loading
                  ? 'opacity-50 cursor-not-allowed'
                  : 'hover:bg-black hover:text-white'
              } bg-yellow-700 px-10 py-4 rounded-lg text-black font-bold transition-all duration-300 w-full`}
            >
              {loading ? 'Sending...' : 'SUBMIT'}
            </motion.button>
          </form>
        </motion.div>
      </div>

      {/* Toast container */}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default Contact;
