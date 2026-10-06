import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import LinkedInSidebar from "./components/LinkedInSidebar";
import ContactModal from "./components/ContactModal";

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
        </main>

        <LinkedInSidebar />
      </div>

      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default App;