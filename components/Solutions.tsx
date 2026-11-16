"use client";

import { motion } from "framer-motion";
import { SOLUTIONS_DATA } from "@/lib/data";


export default function Solutions(){

return(

<section
id="solutions"
className="
py-24
bg-white
"
>

<div className="container-x">


<div className="text-center">

<h2
className="
text-4xl
lg:text-5xl
font-extrabold
text-slate-900
"
>

Our Solutions

</h2>


<p
className="
mt-4
text-lg
text-slate-600
"
>

Innovative technology solutions designed for industrial transformation.

</p>


</div>



<div
className="
mt-12
grid
md:grid-cols-2
lg:grid-cols-3
gap-6
"
>


{
SOLUTIONS_DATA.map((solution,index)=>(


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
duration:.5,
delay:index*0.1
}}

className="
rounded-3xl
border
border-slate-200
bg-slate-50
p-8
hover:bg-white
hover:shadow-xl
transition
"

>


<div
className="
h-12
w-12
rounded-xl
bg-red-600
flex
items-center
justify-center
text-white
font-bold
text-xl
"
>
{index + 1}
</div>


<h3
className="
mt-6
text-xl
font-bold
text-slate-900
"
>

{solution.title}

</h3>


<p
className="
mt-3
text-slate-600
leading-7
"
>

{solution.description}

</p>


</motion.div>


))

}


</div>


</div>


</section>

);

}