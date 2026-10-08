import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";

import Layout from "./components/Layout";
import Hero from "./components/Hero";
import About from "./components/About";
import Journey from "./components/Journey";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import LinkedInSidebar from "./components/LinkedInSidebar";
import Ebooks from "./pages/Ebooks";
import Training from "./pages/Training";

function Home() {
  return (
    <div className="page-layout">
      <main className="main-content">
        <Hero />
        <About />
        <Journey />
        <Skills />
        <Projects />
        <Experience />
      </main>
      <LinkedInSidebar />
    </div>
  );
}

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/ebooks" element={<Ebooks />} />
          <Route path="/training" element={<Training />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;