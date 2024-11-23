import React, { Suspense, lazy } from "react";
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
        <Suspense fallback={<div>Loading Header...</div>}>
          <Header />
        </Suspense>
        <Dot />
        <Suspense fallback={<div>Loading Projects...</div>}>
          <Projects />
        </Suspense>
        <Dot />
        <Suspense fallback={<div>Loading About Section...</div>}>
          <About />
        </Suspense>
        <Dot />
        <Suspense fallback={<div>Loading Contact Section...</div>}>
          <Contact />
        </Suspense>
        <Dot />
        <Suspense fallback={<div>Loading Footer...</div>}>
          <Footer />
        </Suspense>
      </Suspense>
    </div>
  );
}

export default App;
