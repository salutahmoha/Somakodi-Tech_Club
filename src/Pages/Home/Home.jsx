import React from "react";
import Hero from "../../components/Hero/Hero";
import About from "../../components/About/About";
import Testimonials from "../../components/Testimonials/Testimonials";
import Footer from "../../components/Footer/Footer";
function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Testimonials />
      <Footer />
    </div>
  );
}

export default Home;
