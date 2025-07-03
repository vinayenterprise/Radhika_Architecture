import React from 'react';
import { motion } from 'framer-motion';
import { slideUpVariants, zoomInVariants } from './animation';
import { clients } from '../export';

const Testimonials = () => {
  return (
    <div id="clients" className="w-full bg-black">
      <motion.div
        initial="hidden"
        whileInView="visible"
        variants={slideUpVariants}
        className="lg:w-[80%] w-[90%] mx-auto py-[60px] flex flex-col items-center gap-6"
      >
        {/* Section Header */}
        <h2 className="text-yellow-700 text-2xl font-semibold">TESTIMONIALS</h2>

        <h1 className="text-white uppercase text-[32px] md:text-[40px] font-bold text-center">
          What Our Clients Say
        </h1>

        <div className="w-[120px] h-[6px] bg-yellow-700" />

        {/* Testimonials Grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          variants={zoomInVariants}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 mt-10 w-full"
        >
          {clients.map((item, index) => (
            <motion.div
              key={index}
              variants={zoomInVariants}
              className="relative bg-white/5 border border-white rounded-lg p-6 flex flex-col items-center text-center transition-all hover:bg-yellow-700 hover:text-black"
            >
              {/* Client Message */}
              <p className="text-white hover:text-black transition-colors duration-300 text-lg mb-16">
                {item.about}
              </p>

              {/* Client Info */}
              <div className="absolute -bottom-16 flex flex-col items-center">
                <img
                  src={item.image}
                  alt={`${item.name} profile`}
                  className="w-20 h-20 rounded-full border-4 border-yellow-700 object-cover"
                />
                <h3 className="mt-3 text-xl font-bold uppercase text-white hover:text-black">
                  {item.name}
                </h3>
                <p className="text-yellow-700 text-sm font-medium">{item.post}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Spacer for absolute positioning */}
      <div className="h-24" />
    </div>
  );
};

export default Testimonials;
