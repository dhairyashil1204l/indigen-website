import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Solutions from "@/components/Solutions";

import Projects from "@/components/Projects";
import Blogs from "@/components/Blog";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/chatbot";


export default function Home() {


  return (

    <main className="overflow-hidden bg-surface">

      {/* Navigation */}
      <Navbar />


      {/* Hero Section */}
      <Hero />


      {/* About Company */}
      <About />


      {/* Services */}
      <Services />


      {/* Industries */}
      <Industries />


      {/* Solutions */}
      <Solutions />


  


      {/* Projects */}
      <Projects />


      {/* Blogs */}
      <Blogs />


      {/* Contact */}
      <Contact />


      {/* Footer */}
      <Footer />


      {/* AI Chatbot */}
      <Chatbot />


    </main>

  );

}