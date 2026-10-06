import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import LinkedInSidebar from "./components/LinkedInSidebar";
import About from "./components/About";

function App() {
  return (
    <div className="app">
      <Navbar />

      <div className="page-layout">
        <main className="main-content">
          <Hero />
          <About />
        </main>

        <LinkedInSidebar />
      </div>
    </div>
  );
}

export default App;