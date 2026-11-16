"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";


export default function Products() {

  return (

    <section
      id="projects"
      className="bg-slate-50 py-24"
    >

      <div className="container-x">


        {/* Heading */}

        <div className="text-center">

          <h2
            className="
            text-4xl
            font-extrabold
            text-slate-900
            lg:text-5xl
            "
          >
            Our Projects
          </h2>


          <p
            className="
            mt-4
            text-lg
            text-slate-600
            "
          >
            Innovative software products developed for industrial automation,
            engineering and business applications.
          </p>


        </div>





        {/* Products Grid */}


        <div
          className="
          mt-12
          grid
          gap-6
          sm:grid-cols-2
          lg:grid-cols-3
          "
        >


          {
            PROJECTS.map((projects,index)=>(


              <motion.div

                key={projects.title}


                initial={{
                  opacity:0,
                  y:30
                }}


                whileInView={{
                  opacity:1,
                  y:0
                }}


                viewport={{
                  once:true
                }}


                transition={{
                  duration:0.5,
                  delay:index*0.05
                }}


                className="
                rounded-3xl
                border
                border-slate-200
                bg-white
                p-7
                shadow-sm
                transition
                hover:-translate-y-1
                hover:shadow-xl
                "

              >



                {/* Number */}






                <h3
                  className="
                  mt-6
                  text-xl
                  font-bold
                  text-slate-900
                  "
                >
                  {projects.title}
                </h3>




                <p
                  className="
                  mt-3
                  leading-7
                  text-slate-600
                  "
                >
                  {projects.description}
                </p>





                <button
                  className="
                  mt-6
                  rounded-xl
                  bg-red-600
                  px-5
                  py-2.5
                  text-sm
                  font-medium
                  text-white
                  hover:bg-red-700
                  "
                >
                  View Details
                </button>




              </motion.div>


            ))
          }


        </div>


      </div>


    </section>

  );
}