import { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import ContactModal from "./ContactModal";

function Layout() {
  const [isContactOpen, setIsContactOpen] = useState(false);
  const { pathname, state } = useLocation();

  // Runs after navigating from another page to a landing section
  useEffect(() => {
    if (pathname === "/" && state?.scrollTo) {
      document.getElementById(state.scrollTo)?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (pathname !== "/") {
      window.scrollTo(0, 0); // new pages open at the top
    }
  }, [pathname, state]);

  return (
    <div className="app">
      <Navbar onTalkClick={() => setIsContactOpen(true)} />
      <Outlet />
      <Footer />
      <ContactModal
        isOpen={isContactOpen}
        onClose={() => setIsContactOpen(false)}
      />
    </div>
  );
}

export default Layout;