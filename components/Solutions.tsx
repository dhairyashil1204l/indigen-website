"use client";

import { motion } from "framer-motion";
import { SOLUTIONS_DATA } from "@/lib/data";


export default function Solutions(){


return (

<section

id="solutions"

className="
py-24
bg-[#E8F2FE]
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

Our Expertise

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

Our Solutions

</h2>



<p

className="
mt-4
text-lg
text-slate-600
dark:text-slate-300
"

>

Innovative technology solutions designed for industrial transformation.

</p>



</div>









<div

className="
mt-12
grid
gap-6
md:grid-cols-2
lg:grid-cols-3
"

>


{SOLUTIONS_DATA.map((solution,index)=>(



<motion.div


key={solution.title}


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

group

rounded-3xl

border

border-[#D0E4FE]

bg-white

p-8

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

text-lg

font-bold

text-white

transition

group-hover:bg-[#091F5C]

"

>

{String(index + 1).padStart(2,"0")}

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

{solution.title}

</h3>







<p

className="

mt-3

leading-7

text-slate-600

dark:text-slate-300

"

>

{solution.description}

</p>






{/* Bottom Accent */}


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

></div>




</motion.div>



))}



</div>





</div>


</section>


);

}