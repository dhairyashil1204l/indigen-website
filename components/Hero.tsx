"use client";

import Link from "next/link";
import {motion} from "framer-motion";

export default function Hero() {
  return(
    <section
      id="home"
      className="relative overflow-hidden pt-32 pb-24 lg:pt-40"
      style={{
        backgroundImage: "url('/images/bgimg.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",

      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"/>

      {/* Red Gradient Overlay*/}
      <div className="absolute inset-0 bg-gradient-to-r from-red-900/90 via-red-800/50 to-black/0"/>

      {/* Decorative Blur*/}
      <div className="absolute top-0 right-0 h-96 w-96 rounded-full bg-red-600/20 blur-3xl"/>
      <div className="absolute bottom-0 left-0 h-80 rounded-full bg-red-500/10 blur-3xl"/>

      <div className="container-x relative z-10">
        <div className="flex min-h-[80vh] items-center">
          <motion.div
            initial={{opacity:0, y:35 }}
            animate={{ opacity:1, y:0 }}
            transition={{ duration:0.8 }}
            className="max-w-3xl"
          >

            {/* Badge*/}

            <h1 className="mt-8 text-5xl font-extrabold leading-tight text-white sm:text-6xl lg:text-8xl">
              Engineering Intelligent
              <span className="block text-red-600">
                Software Solutions
              </span>
              for Industrial Excellence
            </h1>
            

            {/* Description */}

            <p className="mt-8  max-w-2xl text-lg leading-8 text-gray-200">
              Indigen Technologies empowers manufacturing,
              engineering and enterprise businesses with 
              customized software solutions, Industrial
              automation, AI-powered applications, Enterprise IoT
              and digital tranformation services.
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-5">
              <Link
                href="#contact"
                className="rounded-lg bg-red-600 px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:bg-red-700 hover:shadow-xl"
              >
                Get Started
              </Link>

              <Link
                href="services"
                className="rounded-lg border border-white px-8 py-4 text-base font-semibold text-white transition-all duration-300 hover:text-red-700"
              >
                Explore Services
              </Link>
            </div>

  
          </motion.div>
        </div>

      </div>

    </section>
  )
}