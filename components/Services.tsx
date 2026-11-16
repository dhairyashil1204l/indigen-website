"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";


export default function Services() {

  const [active, setActive] = useState<number | null>(null);


  return (

    <section
      id="services"
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
            Our Services
          </h2>


          <p
            className="
            mt-4
            text-lg
            text-slate-600
            "
          >
            Software solutions and engineering services for industrial transformation.
          </p>

        </div>




        {/* MAIN SERVICE CARDS */}


        <div
          className="
          mt-12
          grid
          gap-8
          md:grid-cols-2
          "
        >


          {SERVICES.map((service,index)=>(

            <motion.div

              key={service.title}

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


              className="
              rounded-3xl
              border
              border-slate-400
              bg-red
              p-8
              shadow-sm
              "
            >


              <button

                onClick={()=> 
                  setActive(active === index ? null : index)
                }


                className="
                flex
                w-full
                items-center
                justify-between
                text-left
                "
              >


                <h3
                  className="
                  text-2xl
                  font-bold
                  text-red-600
                  "
                >
                  {service.title}
                </h3>


                <span
                  className="
                  text-3xl
                  text-slate-400
                  "
                >
                  {active === index ? "-" : "+"}
                </span>


              </button>





              {/* SUB SERVICES */}


              {active === index && (

                <motion.div

                  initial={{
                    opacity:0,
                    height:0
                  }}

                  animate={{
                    opacity:1,
                    height:"auto"
                  }}


                  className="
                  mt-8
                  space-y-5
                  "
                >


                  {service.items.map((item)=>(


                    <div

                      key={item.title}

                      className="
                      rounded-2xl
                      bg-slate-50
                      border
                      border-slate-200
                      p-6
                      "

                    >


                      <h4
                        className="
                        text-xl
                        font-bold
                        text-slate-900
                        "
                      >
                        {item.title}
                      </h4>



                      <p
                        className="
                        mt-3
                        leading-7
                        text-slate-600
                        "
                      >
                        {item.description}
                      </p>




                      {/* FEATURES */}

                      {
                        item.features.length > 0 && (

                          <ul
                            className="
                            mt-4
                            list-disc
                            space-y-2
                            pl-5
                            text-slate-600
                            "
                          >

                            {item.features.map((feature)=>(

                              <li key={feature}>
                                {feature}
                              </li>

                            ))}

                          </ul>

                        )
                      }





                      {/* PDF BUTTON */}


                      <a

                        href={item.pdf}

                        target="_blank"

                        className="
                        mt-5
                        inline-flex
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
                        View Project Details
                      </a>



                    </div>


                  ))}


                </motion.div>

              )}



            </motion.div>


          ))}


        </div>


      </div>


    </section>

  );
}