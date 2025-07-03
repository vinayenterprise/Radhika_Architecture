import React, { useState } from 'react';
import aboutImage from '../assets/Ias.jpg'; // make sure the path is correct

const About = () => {
  const [showFullText, setShowFullText] = useState(false);
  const handleToggle = () => setShowFullText(prev => !prev);

  const fullText = `जी नमस्कार! मेरा नाम आनंद सिंह है और मैं राधिका आर्किटेक्चरल सर्विसेज का संस्थापक हूँ! हमारे द्वारा सभी प्रकार की सेवाओं को बहुत ही उचित तरीके से प्रदान किया जाता है! घर का निर्माण हो या किसी भी प्रकार का रेनोवेशन सम्बन्धी कोई कार्य हो सभी कार्यों को कुशलता पूर्वक किया जाता है एवं सिर्फ कार्य ही नहीं बल्कि हमेशा के लिए एक अच्छा मजबूत सम्बन्ध!`;

  const previewText = fullText.slice(0, 250) + '...';

  return (
    <section id="about" className="w-full bg-white py-12 px-4 sm:px-6 lg:px-12">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        
        {/* Image */}
        <div className="w-full lg:w-1/2">
          <img
            src={aboutImage}
            alt="Interior"
            className="w-full h-auto object-cover rounded-lg shadow-lg"
          />
        </div>

        {/* Text Content */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-yellow-700 font-semibold text-sm mb-2 uppercase tracking-wide">
            About RADHIKA Architectural Services
          </h2>
          <h1 className="text-3xl sm:text-4xl font-bold leading-snug mb-6 text-gray-900">
            Transforming Spaces with Style and Elegance
          </h1>
          <p className="text-gray-700 text-base sm:text-lg mb-6 leading-relaxed">
            {showFullText ? fullText : previewText}
            {showFullText && (
              <span className="text-yellow-700 font-medium italic block mt-4">
               "Long term good business relationship"
              </span>
            )}
          </p>
          <button
            onClick={handleToggle}
            className="bg-yellow-600 text-white font-semibold px-5 py-2.5 rounded-full hover:bg-yellow-700 transition-all duration-300 text-sm sm:text-base"
          >
            {showFullText ? 'SHOW LESS' : 'SHOW MORE'}
          </button>
        </div>
      </div>
    </section>
  );
};

export default About;
