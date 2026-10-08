import { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Experience from "./components/Experience";
import LinkedInSidebar from "./components/LinkedInSidebar";
import ContactModal from "./components/ContactModal";
import Ebooks from "./pages/Ebooks";
import Training from "./pages/Training";

function Home() {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <div className="app">
      <Navbar onTalkClick={() => setIsContactOpen(true)} />

      <div className="page-layout">
        <main className="main-content">
          <Hero />
          <About />
          <Journey />
          <Experience />
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

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/training" element={<Training />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;