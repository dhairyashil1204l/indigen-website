"use client";

import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";


export default function Projects() {


return (

<section

id="projects"

className="
bg-[#E8F2FE]
py-24
dark:bg-[#050B1C]
"

>


<div className="container-x">





{/* Heading */}


<div className="text-center">


<p className="
mb-3
font-semibold
text-[#334DAF]
">

Portfolio

</p>



<h2

className="
text-4xl
font-extrabold
text-[#091F5C]
lg:text-5xl
dark:text-white
"

>

Our Projects

</h2>



<p

className="
mt-4
text-lg
text-slate-600
dark:text-slate-300
"

>

Innovative software products developed for industrial automation,
engineering and business applications.

</p>



</div>









{/* Projects Grid */}


<div

className="
mt-12
grid
gap-8
sm:grid-cols-2
lg:grid-cols-3
"

>



{PROJECTS.map((project,index)=>(



<motion.div


key={project.title}



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

group

rounded-3xl

border

border-[#D0E4FE]

bg-white

p-7

shadow-card

transition-all

duration-300

hover:-translate-y-2

dark:border-[#334DAF]

dark:bg-[#091F5C]

"



>





{/* Number */}


<div

className="
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-[#334DAF]
font-bold
text-white
transition
group-hover:bg-[#091F5C]
"

>

{String(index+1).padStart(2,"0")}


</div>







<h3

className="
mt-6
text-xl
font-bold
text-[#091F5C]
dark:text-white
"

>

{project.title}

</h3>






<p

className="
mt-3
leading-7
text-slate-600
dark:text-slate-300
"

>

{project.description}

</p>






<button

className="

mt-6

rounded-xl

bg-[#334DAF]

px-5

py-3

text-sm

font-semibold

text-white

transition

hover:bg-[#091F5C]

"

>

View Details

</button>






{/* Accent line */}


<div

className="
mt-6
h-1
w-10
rounded-full
bg-[#7096D1]
transition-all
group-hover:w-20
"

/>




</motion.div>



))}



</div>




</div>


</section>


);

}