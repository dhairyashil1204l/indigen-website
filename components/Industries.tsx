"use client";

import { motion } from "framer-motion";
import { INDUSTRIES } from "@/lib/data";


export default function Industries(){


return(

<section

id="industries"

className="
relative
overflow-hidden

bg-[#F7F7F5]

py-28

text-black
"

>


<div className="container-x">








{/* HEADER */}



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

className="max-w-4xl"

>



<p

className="
text-sm
font-bold
uppercase
tracking-[0.35em]
text-[#FCA311]
"

>

INDUSTRIES

</p>








<h2

className="
mt-5
text-5xl
font-extrabold
lg:text-6xl
"

>

Industries We Serve

</h2>








<p

className="
mt-5
max-w-3xl
text-lg
leading-8
text-gray-600
"

>

We deliver intelligent software solutions
and automation systems designed for
diverse industrial sectors.

</p>



</motion.div>









{/* INDUSTRY CARDS */}



<div

className="
mt-16

grid

gap-7

md:grid-cols-2

lg:grid-cols-3

"

>



{

INDUSTRIES.map((industry,index)=>(



<motion.div


key={industry.title}


initial={{

opacity:0,

y:40

}}



whileInView={{

opacity:1,

y:0

}}



viewport={{

once:true

}}



transition={{

delay:index*0.08

}}



className="

group

relative

overflow-hidden


rounded-[30px]


bg-[#171717]


border

border-[#333]


p-8


text-white


transition-all


duration-500



hover:-translate-y-3



hover:border-[#FCA311]

hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]

"

>









{/* TOP GOLD LINE */}



<div

className="
absolute
top-0
left-0
h-1
w-0
bg-[#FCA311]
transition-all
duration-500
group-hover:w-full
"

/>









{/* NUMBER */}



<div

className="
flex
h-14
w-14
items-center
justify-center

rounded-2xl

bg-[#FCA311]

text-xl

font-extrabold

text-black

"

>

0{index+1}

</div>









<h3

className="
mt-7

text-2xl

font-bold

"

>

{industry.title}

</h3>








<p

className="
mt-4

leading-7

text-gray-400

"

>

{industry.description}

</p>









<div

className="
mt-7

h-[2px]

w-12

bg-[#FCA311]

transition-all

duration-300

group-hover:w-full

"

/>







</motion.div>



))


}



</div>






</div>






</section>


)

}