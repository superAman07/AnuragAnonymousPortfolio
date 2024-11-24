import React, { Suspense, lazy } from "react";
import Bar from "./components/Bar/bar.jsx";
const Navbar = lazy(()=>import("./components/Navbar/navbar.jsx"));
const Header = lazy(() => import("./components/Header/header.jsx"));
const Footer = lazy(() => import("./components/Footer/footer.jsx"));
const About = lazy(() => import("./components/About/about.jsx"));
const Contact = lazy(() => import("./components/Contact/contact.jsx"));
const Projects = lazy(() => import("./components/Projects/projects.jsx"));
const Dot = lazy(() => import("./components/Dot/dot.jsx"));

function App() {
  return (
    <div className="w-full overflow-hidden">
      <Suspense fallback={<div className="text-center py-10">Anurag's Portfolio is loading...</div>}>
          <Navbar />
          <Header />
          <Projects />
          <Bar/>
          <About />
          <Contact />
          <Footer /> 
      </Suspense>
    </div>
  );
}

export default App;
