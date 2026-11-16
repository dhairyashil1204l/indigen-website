"use client";

import { motion } from "framer-motion";
import { BLOGS } from "@/lib/data";


export default function Blog() {

  return (

    <section
      id="blog"
      className="bg-white py-24"
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
            Our Blog
          </h2>


          <p
            className="
            mt-4
            text-lg
            text-slate-600
            "
          >
            Insights, innovations and knowledge about industrial software and technology.
          </p>


        </div>




        {/* Blog Cards */}


        <div
          className="
          mt-12
          grid
          gap-6
          md:grid-cols-2
          lg:grid-cols-3
          "
        >

          {
            BLOGS.map((blog,index)=>(


              <motion.article

                key={blog.title}


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
                  delay:index*0.1
                }}


                className="
                rounded-3xl
                border
                border-slate-200
                bg-slate-50
                p-7
                transition
                hover:-translate-y-1
                hover:bg-white
                hover:shadow-xl
                "

              >


                {/* Category */}

                <span
                  className="
                  rounded-full
                  bg-red-100
                  px-4
                  py-1
                  text-sm
                  font-medium
                  text-red-700
                  "
                >
                  {blog.category}
                </span>



                <h3
                  className="
                  mt-5
                  text-xl
                  font-bold
                  text-slate-900
                  "
                >
                  {blog.title}
                </h3>



                <p
                  className="
                  mt-3
                  leading-7
                  text-slate-600
                  "
                >
                  {blog.description}
                </p>



                <button
                  className="
                  mt-6
                  text-sm
                  font-semibold
                  text-red-600
                  hover:text-blue-800
                  "
                >
                  Read More →
                </button>



              </motion.article>


            ))
          }


        </div>


      </div>


    </section>

  );

}