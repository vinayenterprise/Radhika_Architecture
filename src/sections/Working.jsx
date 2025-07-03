import React from 'react';
import img1 from '../assets/walldec.webp';
import img2 from '../assets/wall2.webp';
import img3 from '../assets/wall3.jpg';

const workData = [
  {
    title: 'Wall Decoration',
    image: img1,
    description: 'We add visual interest to your walls with textures, panels, and creative finishes that elevate every room.'
  },
  {
    title: 'Interior Decoration',
    image: img2,
    description: 'From furniture selection to lighting and accessories, we style interiors that blend elegance and comfort.'
  },
  {
    title: 'Interior Architecture',
    image: img3,
    description: 'We combine architectural insight with functional design to create spaces that truly inspire and perform.'
  }
];

const Working = () => {
  return (
    <section className="px-8 py-12 bg-gray-50">
      <h2 className="text-yellow-700 font-semibold text-sm mb-2 text-center">WORKING PROCESS</h2>
      <h1 className="text-4xl font-bold mb-8 text-gray-800 text-center">Our Innovative and Stylish Working Process</h1>
      
      <div className="grid md:grid-cols-3 gap-6">
        {workData.map((item, i) => (
          <div key={i} className="bg-white rounded shadow hover:shadow-lg transition-shadow duration-300">
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-60 object-contain rounded-t"
            />
            <div className="p-4">
              <h3 className="font-semibold text-lg mb-2 text-gray-900">{item.title}</h3>
              <p className="text-sm text-gray-600">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Working;
