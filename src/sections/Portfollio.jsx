import React, { useState } from 'react';

// Your image imports...
import upidr from '../assets/upidr.jpg';
import phdcci from '../assets/phdcc.jpg';
import hos from '../assets/hosp.jpg';

import Rajesh from '../assets/Rajesh.jpg';
import Dalmau from '../assets/Dalmau.jpg';

import oyo from '../assets/oyo_tI.avif';
import ornate from '../assets/ornate.avif';
import assh from '../assets/aashiya.avif';
import citrus from '../assets/citrus.png';
import lili from '../assets/proj9.jpg';
import kukud from '../assets/kukud.avif';

import doctor from '../assets/doctor.jpg';
import jindal from '../assets/jindal.jpg';
import bank  from '../assets/Bank.jpg';

import judge from '../assets/judge.jpg';
import Arvind from '../assets/Arvind.jpg';
import Gaurav from '../assets/Gaurav.jpg';
import Jitendra from '../assets/Jitendra.jpg';
import Shalimar from '../assets/inter.jpg';
import har from '../assets/harmeet.jpg';

const governmentProjects = [
  { image: upidr, title: 'UPIDR' },
  { image: phdcci, title: 'PHDCCI' },
  { image: hos, title: 'Pandeypur District Hospital, Varanasi' },
];

const commercialProjects = [
  { image: Rajesh, title: 'Rajesh Masala & Raghav Bhog' },
  { image: Dalmau, title: 'Dalmau Food Plant' },
  { image: doctor, title: 'Dr. Hriday Ji Heart Hospital' },
  { image: bank, title: 'Bank DBS Gomti Nagar, Lavanya Height' },
  { image: citrus, title: 'Citrus Restaurant & Banquets Ashiyana, Lucknow' },
  { image: oyo, title: 'Hotel Town House, Indira Nagar, Lucknow' },
  { image: ornate, title: 'Hotel Ornate, Telibagh, Lucknow' },
  { image: assh, title: 'Oyo Town House, Ashiyana, Lucknow' },
  { image: lili, title: 'Hotel Lili Villas, Lucknow' },
  { image: kukud, title: 'Kukkad Rangila The Family Restaurant' },
  { image: jindal, title: 'Jindal Farm House' },
];

const residentialProjects = [
  { image: judge, title: 'Honorable Judge Residence' },
  { image: Arvind, title: 'Mr. Arvind Singh (Chief Manager UBI) ' },
  { image: Gaurav, title: 'Mr. Gaurav Residence' },
  { image: Jitendra, title: 'Mr. Jitendra Residence' },
  { image: Shalimar, title: 'Shalimar One World Vista, Gomtinagar, Lucknow' },
  { image: har, title: 'Mr. Harmeet Singh Ji, Krishna Nagar Shubham City, Lucknow' },
];

const Portfolio = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const handleImageClick = (image) => setSelectedImage(image);
  const closeModal = () => setSelectedImage(null);

  const renderProjectGrid = (projects) => (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
      {projects.map((project, idx) => (
        <div
          key={idx}
          className="bg-white border rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer"
          onClick={() => handleImageClick(project.image)}
        >
          <div className="w-full h-[220px] bg-white flex items-center justify-center overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="object-contain w-full h-full"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl text-black text-center">{project.title}</h3>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div className="w-full bg-white text-black" id="projects">
      {/* Header */}
      <div className="lg:w-[80%] w-[90%] mx-auto py-[60px] flex flex-col items-center justify-center gap-6">
        <h1 className="text-yellow-600  text-[32px] md:text-[40px] font-normal text-center">
          Our Portfolio
        </h1>
        <div className="w-[120px] h-[6px] bg-yellow-700" />
      </div>

      {/* Sections */}
      <div className="w-[90%] mx-auto pb-16">
        <h2 className="text-2xl font-semibold mb-4">Government Projects</h2>
        {renderProjectGrid(governmentProjects)}
      </div>

      <div className="w-[90%] mx-auto pb-16">
        <h2 className="text-2xl font-semibold mb-4">Commercial Projects</h2>
        {renderProjectGrid(commercialProjects)}
      </div>

      <div className="w-[90%] mx-auto pb-16">
        <h2 className="text-2xl font-semibold mb-4">Residential Projects</h2>
        {renderProjectGrid(residentialProjects)}
      </div>

      {/* Modal */}
      {selectedImage && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4">
          <div className="relative">
            <button
              onClick={closeModal}
              className="absolute -top-4 -right-4 bg-white text-black rounded-full w-10 h-10 flex items-center justify-center shadow-lg hover:bg-red-600 hover:text-white transition"
              aria-label="Close"
            >
              &times;
            </button>
            <img
              src={selectedImage}
              alt="Full View"
              className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl"
            />
          </div>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
