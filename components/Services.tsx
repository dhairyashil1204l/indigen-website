"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SERVICES } from "@/lib/data";


export default function Services() {


const [active,setActive] = useState<number | null>(null);



return (


<section

id="services"

className="
bg-surface
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
text-brand
">

Our Expertise

</p>



<h2

className="
text-4xl
font-extrabold
text-brand-dark
lg:text-5xl
dark:text-white
"

>

Our Services

</h2>



<p

className="
mt-4
text-lg
text-slate-600
dark:text-slate-300
"

>

Software solutions and engineering services for industrial transformation.

</p>



</div>







{/* Service Cards */}



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



transition={{

duration:0.5

}}



className="

rounded-3xl

border

border-[#D0E4FE]

bg-white

p-8

shadow-card

transition

hover:-translate-y-2

dark:border-[#334DAF]

dark:bg-[#091F5C]

"



>



<button


onClick={()=>


setActive(

active===index

?

null

:

index

)


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

text-brand-dark

dark:text-white

"

>

{service.title}

</h3>



<span

className="

text-3xl

font-light

text-brand

"

>

{active===index ? "-" : "+"}

</span>



</button>







{/* Sub Services */}



{active===index && (



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

border

border-[#D0E4FE]

bg-[#F9FBFF]

p-6

dark:border-[#334DAF]

dark:bg-[#102A63]

"

>



<h4

className="

text-xl

font-bold

text-brand-dark

dark:text-white

"

>

{item.title}

</h4>





<p

className="

mt-3

leading-7

text-slate-600

dark:text-slate-300

"

>

{item.description}

</p>







{item.features.length > 0 && (


<ul

className="

mt-4

list-disc

space-y-2

pl-5

text-slate-600

dark:text-slate-300

"

>


{item.features.map((feature)=>(


<li key={feature}>

{feature}

</li>


))}


</ul>


)}








<a

href={item.pdf}

target="_blank"

className="

mt-5

inline-flex

rounded-xl

bg-brand

px-5

py-3

text-sm

font-semibold

text-white

transition

hover:bg-brand-dark

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