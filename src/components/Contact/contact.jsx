import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="py-20 text-center bg-gray-100">
      <h2 className="text-4xl font-bold mb-10">Contact Info</h2>
      <div className="container mx-auto bg-white shadow-lg rounded-lg p-6">
        {/* Social Links */}
        <div className="mt-8 flex justify-center space-x-6">
          {/* YouTube */}
          <a
            href="https://www.youtube.com/@AnonymousAnuraG"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-red-500 transition-colors duration-300"
          >
            <img
              src="https://img.icons8.com/color/48/youtube-play.png"
              alt="YouTube"
              className="h-8 w-8"
            />
          </a>

          {/* Instagram */}
          <a
            href="https://www.instagram.com/_anuuuurag/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition-colors duration-300"
          >
            <img
              src="https://img.icons8.com/color/48/instagram-new.png"
              alt="Instagram"
              className="h-8 w-8"
            />
          </a>

          {/* Email */}
          <a
            href="mailto:anuragpal63866@gmail.com"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <img
              src="https://img.icons8.com/color/48/secured-letter.png"
              alt="Email"
              className="h-8 w-8"
            />
          </a>

          {/* Twitter/X */}
          <a
            href="https://x.com/_anuuurag"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transition-colors duration-300"
          >
            <img
              src="https://img.icons8.com/color/48/twitter--v1.png"
              alt="Twitter"
              className="h-8 w-8"
            />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;
