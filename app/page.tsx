import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Services from "@/components/Services";
import Industries from "@/components/Industries";
import Solutions from "@/components/Solutions";
import Technologies from "@/components/Technology";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/contact";
import Footer from "@/components/Footer";
import Chatbot from "@/components/chatbot";
import { PROJECTS } from "@/lib/data";


export default function Home() {

  return (

    <>

      <Navbar />


      <main>


        {/* Main Introduction */}

        <Hero />



        {/* Company Information */}

        <About />



        {/* Core Services */}

        <Services />



        {/* Target Industries */}

        <Industries />



        {/* Business Solutions */}

        <Solutions />



        {/* Technical Expertise */}

        <Technologies/>



        {/* Software Products */}

        <Projects/>



        {/* Knowledge Section */}

        <Blog />



        {/* Lead Generation */}

        <Contact />


      </main>

      
      <Chatbot />





      <Footer />


    </>

  );
}