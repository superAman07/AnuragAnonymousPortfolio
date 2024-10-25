import React from 'react';

const Footer = () => {
  return (
    <footer className="py-10 text-center">
      <p>&copy; {new Date().getFullYear()} Anurag Pal</p>
      <div className="mt-4">
        <a href="#" className="mx-2"><i className="ti-facebook"></i></a>
        <a href="#" className="mx-2"><i className="ti-twitter-alt"></i></a>
        <a href="#" className="mx-2"><i className="ti-google"></i></a>
        <a href="#" className="mx-2"><i className="ti-instagram"></i></a>
        <a href="#" className="mx-2"><i className="ti-rss"></i></a>
      </div>
    </footer>
  );
};

export default Footer;
