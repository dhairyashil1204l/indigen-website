"use client";

import { motion } from "framer-motion";
import { INDUSTRIES } from "@/lib/data";


export default function Industries(){


return (

<section

id="industries"

className="
relative
overflow-hidden
bg-gradient-to-b
from-[#07152F]
to-[#050B1C]
py-24
text-white
"

>


{/* GRID */}

<div

className="
absolute
inset-0
opacity-[0.05]
bg-[linear-gradient(#3b82f6_1px,transparent_1px),linear-gradient(90deg,#3b82f6_1px,transparent_1px)]
bg-[size:40px_40px]
"

/>



<div className="container-x relative z-10">



{/* Heading */}


<div className="max-w-3xl">


<p

className="
text-l
font-bold
uppercase
tracking-[0.35em]
text-blue-400
"

>

Industries

</p>



<h2

className="
mt-5
text-5xl
font-extrabold
"

>

Industries We Serve

</h2>



<p

className="
mt-5
text-lg
leading-8
text-slate-300
"

>

We deliver intelligent software solutions and
automation systems designed for diverse
industrial sectors.

</p>


</div>






{/* Cards */}


<div

className="
mt-14
grid
gap-6
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
group
relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/[0.06]
p-8
backdrop-blur-xl
transition-all
duration-300
hover:-translate-y-2
hover:border-blue-400/40
hover:bg-white/[0.08]
hover:shadow-[0_10px_30px_rgba(37,99,235,0.15)]
"
>


<div

className="
flex
h-12
w-12
items-center
justify-center
rounded-xl
bg-blue-500/20
text-xl
text-blue-300
"

>

0{index+1}

</div>



<h3

className="
mt-6
text-2xl
font-bold
"

>

{industry.title}

</h3>



<p

className="
mt-3
leading-7
text-slate-300
"

>

{industry.description}

</p>



</motion.div>


))

}



</div>


</div>

{/* PREMIUM SECTION TRANSITION */}

<div
className="
absolute
bottom-0
left-0
w-full
h-48
bg-gradient-to-b
from-transparent
via-[#07152F]
to-[#07152F]
pointer-events-none
"
/>


<div

className="
absolute
bottom-[-100px]
left-1/2
-translate-x-1/2
w-[800px]
h-[220px]
rounded-full
bg-blue-500/20
blur-[140px]
"

></div>
</section>


);

}