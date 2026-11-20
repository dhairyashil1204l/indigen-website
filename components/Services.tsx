"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SERVICES } from "@/lib/data";


export default function Services() {


const [active,setActive] = useState<number | null>(null);



return (
    
<section

id="services"

className="
relative
overflow-hidden
bg-gradient-to-b
from-[#07152F]
via-[#0A2454]
to-[#07152F]
py-24
text-white
"

>


{/* TECH GRID BACKGROUND */}

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

<div className="max-w-4xl">


<p

className="
text-sm
font-bold
uppercase
tracking-[0.35em]
text-blue-300
"

>

Our Expertise

</p>



<h2
className="
mt-5
text-5xl
font-extrabold
"
>
Our Services
</h2>



<p
className="
mt-5
text-lg
leading-8
text-slate-300
"
>

Software solutions and engineering services
for industrial transformation.

</p>


</div>







{/* SERVICES */}

<div

className="
mt-14
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
relative
overflow-hidden
rounded-3xl
border
border-white/15
bg-white/[0.08]
backdrop-blur-2xl
px-8
py-6
shadow-[0_20px_50px_rgba(0,0,0,0.25)]
transition-all
duration-500
hover:-translate-y-2
hover:border-blue-400/50
hover:bg-white/[0.12]
hover:shadow-[0_0_45px_rgba(59,130,246,0.25)]
"

>



{/* HEADER */}


<button

onClick={()=>setActive(
active === index ? null : index
)}

className="
group
flex
w-full
items-center
justify-between
p-7
text-left
"

>


<div>





<h3

className="
mt-3
text-3xl
font-bold
"

>

{service.title}

</h3>


</div>





<span

className="
flex
h-11
w-11
items-center
justify-center
rounded-full
border
border-blue-300/30
bg-white/10
backdrop-blur-xl
text-2xl
text-blue-300
transition
duration-300
group-hover:bg-blue-500/20
"

>

{
active === index ? "−" : "+"
}

</span>



</button>








{/* EXPAND AREA */}


<AnimatePresence>


{
active === index && (


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



className="
overflow-hidden
"

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
group
rounded-2xl
border
border-white/10
bg-white/[0.05]
backdrop-blur-xl
p-7
transition-all
duration-300
hover:-translate-y-1
hover:border-blue-400/50
hover:bg-white/[0.1]
hover:shadow-[0_0_30px_rgba(59,130,246,0.18)]
"

>



<h4

className="
text-xl
font-bold
"

>

{item.title}

</h4>




<p

className="
mt-3
leading-7
text-slate-300
"

>

{item.description}

</p>







{
item.features.length > 0 && (


<ul

className="
mt-5
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
text-slate-300
"

>


<span

className="
mt-1
flex
h-5
w-5
items-center
justify-center
rounded-full
bg-blue-500/20
text-xs
text-blue-400
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
bg-blue-500/10
px-5
py-2.5
text-sm
font-semibold
text-blue-400
transition
hover:bg-blue-500/20
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


);

}