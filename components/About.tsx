"use client";

import { motion } from "framer-motion";
import { ABOUT_DATA } from "@/lib/data";

export default function About() {
  return (
    <section
      id="about"
      className="bg-gray py-24"
    >

      <div className="container-x">


        {/* HEADER */}

        <motion.div
          initial={{
            opacity: 0,
            y: 30,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
        >

          <h2
            className="
            text-4xl
            font-extrabold
            text-slate-900
            lg:text-5xl
            "
          >
            {ABOUT_DATA.title}
          </h2>


          <p
            className="
            mt-5
            max-w-4xl
            text-lg
            leading-8
            text-slate-600
            "
          >
            {ABOUT_DATA.description}
          </p>

        </motion.div>



        {/* MAIN CONTENT */}


        <div
          className="
          mt-14
          grid
          gap-10
          lg:grid-cols-2
          "
        >



          {/* LEFT SIDE */}

          <motion.div
            initial={{
              opacity:0,
              x:-30
            }}

            whileInView={{
              opacity:1,
              x:0
            }}

            viewport={{
              once:true
            }}
          >


            <h3
              className="
              text-2xl
              font-bold
              text-red-600
              "
            >
              Engineering Excellence
            </h3>


            <p
              className="
              mt-4
              leading-8
              text-slate-600
              "
            >
              {ABOUT_DATA.subDescription}
            </p>



            {/* STATS */}


            <div
              className="
              mt-8
              grid
              grid-cols-2
              gap-5
              "
            >

              {ABOUT_DATA.stats.map((stat) => (

                <div
                  key={stat.label}
                  className="
                  rounded-2xl
                  border
                  border-slate-200
                  bg-slate-50
                  p-6
                  "
                >

                  <h4
                    className="
                    text-4xl
                    font-extrabold
                    text-red-600
                    "
                  >
                    {stat.value}
                  </h4>


                  <p
                    className="
                    mt-2
                    text-slate-600
                    "
                  >
                    {stat.label}
                  </p>


                </div>

              ))}


            </div>


          </motion.div>





          {/* RIGHT SIDE */}


          <div
            className="
            grid
            gap-6
            "
          >


            {/* MISSION */}


            <motion.div
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
              bg-gradient-to-br
              from-red-900
              to-red-500
              p-8
              text-white
              "
            >

              <h3
                className="
                text-2xl
                font-bold
                "
              >
                Our Mission
              </h3>


              <p
                className="
                mt-4
                leading-7
                text-blue-50
                "
              >
                {ABOUT_DATA.mission}
              </p>


            </motion.div>





            {/* VISION */}


          <motion.div
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
              bg-gradient-to-br
              from-red-900
              to-red-500
              p-8
              text-white
              "
            >

              <h3
                className="
                text-2xl
                font-bold
                "
              >
                Our Vision
              </h3>


              <p
                className="
                mt-4
                leading-7
                text-blue-50
                "
              >
                {ABOUT_DATA.vision}
              </p>
            </motion.div>


          </div>


        </div>



      </div>


    </section>
  );
}