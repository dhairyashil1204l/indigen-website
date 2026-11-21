"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "@/lib/data";


export default function Services(){

const [active,setActive]=useState<number | null>(null);



return(

<section

id="services"

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

OUR EXPERTISE

</p>





<h2

className="
mt-5
text-5xl
font-extrabold
lg:text-6xl
"

>

Our Services

</h2>






<p

className="
mt-5
text-lg
leading-8
text-gray-600
"

>

Software solutions and engineering services
designed to transform industries and
accelerate digital growth.

</p>



</motion.div>









{/* SERVICE LIST */}



<div

className="
mt-16
space-y-6
"

>


{

SERVICES.map((service,index)=>(



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

group

overflow-hidden

rounded-[30px]

border

border-[#333]

bg-[#171717]

text-white

transition-all

duration-500


hover:-translate-y-2


hover:border-[#FCA311]

hover:shadow-[0_20px_50px_rgba(0,0,0,0.25)]

"

>









{/* HEADER */}



<button

onClick={()=>setActive(
active===index ? null : index
)}

className="

flex

w-full

items-center

justify-between

px-8

py-8

text-left

"

>



<div>



<h3

className="
text-3xl
font-bold
"

>

{service.title}

</h3>



<p

className="
mt-2
text-sm
text-gray-400
"

>

Explore our professional solutions

</p>



</div>







<span

className="

flex

h-12

w-12

items-center

justify-center


rounded-full


bg-[#FCA311]


text-2xl


font-bold


text-black


transition


group-hover:scale-110

"

>

{

active===index
?
"−"
:
"+"

}

</span>





</button>









{/* EXPAND */}



<AnimatePresence>


{

active===index && (



<motion.div


initial={{

height:0,

opacity:0

}}


animate={{

height:"auto",

opacity:1

}}


exit={{

height:0,

opacity:0

}}


transition={{

duration:0.4

}}



>



<div

className="

border-t

border-white/10

p-8

"

>







<div

className="
grid
gap-6
md:grid-cols-2
"

>



{

service.items.map((item)=>(



<div

key={item.title}

className="

rounded-2xl

bg-[#252525]

border

border-white/10

p-7


transition-all


duration-300


hover:-translate-y-1


hover:border-[#FCA311]

"

>




<h4

className="
text-xl
font-bold
text-white
"

>

{item.title}

</h4>







<p

className="
mt-4
leading-7
text-gray-400
"

>

{item.description}

</p>








{

item.features.length>0 && (



<ul

className="
mt-6
space-y-3
"

>



{

item.features.map((feature)=>(



<li

key={feature}

className="
flex
items-start
gap-3
text-sm
text-gray-300
"

>



<span

className="
flex
h-5
w-5
items-center
justify-center
rounded-full
bg-[#FCA311]
text-black
text-xs
font-bold
"

>

✓

</span>


{feature}



</li>



))


}



</ul>



)

}







<a

href={item.pdf}

target="_blank"

className="

mt-7

inline-flex

rounded-full

bg-[#FCA311]

px-5

py-3


text-sm

font-bold

text-black


transition


hover:bg-black

hover:text-white

"

>

View Solution Details →

</a>







</div>



))



}



</div>






</div>



</motion.div>



)

}



</AnimatePresence>







</motion.div>



))


}



</div>






</div>






</section>


)

}