import React from 'react';
import { Collections } from './ProjectCollections';

const Projects = () => {
  return (
    <section id="projects" className="py-20">
      <h2 className="text-3xl text-center mb-10">Editing & VFX Skills</h2>
      <div className="flex flex-wrap justify-center w-full">
        {Collections.map((value, index) => (
          <div key={value.id} className="p-3 w-full sm:w-1/2 lg:w-1/3 flex justify-center">
            <iframe
              src={value.videoUrl}
              title="YouTube video"
              className="w-full h-[200px] sm:h-[250px] lg:h-[300px] rounded-md"
            ></iframe>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
