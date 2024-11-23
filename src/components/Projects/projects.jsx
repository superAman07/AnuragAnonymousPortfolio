import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { Collections } from './ProjectCollections';

const Projects = () => {
  // Initialize AOS
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration
      easing: 'ease-in-out', // Smooth easing
      once: false, // Allow animations to repeat
      mirror: true, // Repeat animation when scrolling up
    });
  }, []);

  return (
    <section id="projects" className="p-5 bg-gray-100">
      <h2
        className="text-3xl md:text-4xl font-bold text-center mb-10"
        data-aos="fade-up"
      >
        Editing & VFX Skills
      </h2>
      <div className="flex flex-col items-center space-y-16">
        {Collections.map((value, index) => (
          <div
            key={value.id}
            data-aos={index % 2 === 0 ? 'fade-right' : 'fade-left'} // Alternate animation direction
            className={`flex flex-col ${
              index % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'
            } items-center w-full lg:w-4/5 gap-4`}
          >
            {/* Video Section */}
            <div className="flex-shrink-0 w-full sm:w-1/2 transition-transform duration-300 transform hover:scale-105">
              <iframe
                src={value.videoUrl}
                className="w-full h-[200px] sm:h-[250px] md:h-[300px] lg:h-[350px] rounded-md shadow-lg"
                title={value.title}
                allowFullScreen
              ></iframe>
            </div>
            {/* Description Section */}
            <div
              className="w-full sm:w-1/2 px-5 text-center sm:text-left"
              data-aos="fade-up"
            >
              <h3 className="text-xl sm:text-2xl font-semibold text-gray-800 transition-transform duration-300 transform hover:scale-105">
                {value.title}
              </h3>
              <p className="text-gray-600 mt-3 leading-relaxed">
                {value.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
