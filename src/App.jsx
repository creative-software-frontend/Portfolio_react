import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import LinkedInSidebar from "./components/LinkedInSidebar";
import ContactModal from "./components/ContactModal";
import Skills from "./components/Skills";
import Footer from "./components/Footer";
import Projects from "./components/Projects";

function App() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="app">
      <Navbar onTalkClick={() => setIsContactOpen(true)} />

      <div className="page-layout">
        <main className="main-content">
          <Hero />
          <About />
          <Journey />
          <Skills />
          <Projects />
        </main>

        <LinkedInSidebar />
      </div>
      <Footer onTalkClick={() => setIsContactOpen(true)} />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;