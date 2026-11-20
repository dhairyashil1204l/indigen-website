"use client";

import { motion } from "framer-motion";


const stats = [
  {
    number: "50+",
    label: "Projects Delivered",
  },
  {
    number: "10+",
    label: "Technologies",
  },
  {
    number: "24/7",
    label: "Support",
  },
  {
    number: "100%",
    label: "Client Focus",
  },
];



export default function About() {
<div
className="
absolute
top-0
left-1/2
h-40
w-[600px]
-translate-x-1/2
rounded-full
bg-blue-500/20
blur-[120px]
"
/>

return (

<section

id="about"

className="
relative
overflow-hidden
bg-gradient-to-b
from-[#050B1C]
via-[#07152F]
to-[#07152F]
py-28
text-white
"

>



{/* GRID BACKGROUND */}

<div

className="
absolute
inset-0
opacity-[0.05]
bg-[linear-gradient(#3b82f6_1px,transparent_1px),linear-gradient(90deg,#3b82f6_1px,transparent_1px)]
bg-[size:40px_40px]
"

/>





{/* GLOW EFFECT */}


<div className="
absolute
inset-0
pointer-events-none
">


<div

className="
absolute
right-[-120px]
top-20
h-[450px]
w-[450px]
rounded-full
bg-blue-500/15
blur-[150px]
"

/>



<div

className="
absolute
left-[-120px]
bottom-0
h-[350px]
w-[350px]
rounded-full
bg-cyan-400/10
blur-[130px]
"

/>


</div>







<div className="container-x relative z-10">






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

className="max-w-5xl"

>


<p

className="
text-sm
font-bold
uppercase
tracking-[0.35em]
text-blue-400
"

>

ABOUT INDIGEN TECHNOLOGIES

</p>




<h2

className="
mt-6
text-5xl
font-extrabold
leading-tight
lg:text-6xl
"

>

Engineering Solutions

<span className="block text-blue-400">

Built For The Future Of Industry

</span>


</h2>




<p

className="
mt-8
max-w-4xl
text-lg
leading-8
text-slate-300
"

>

Indigen Technologies is dedicated to delivering
advanced digital engineering solutions that bridge
the gap between technology and industry. We design
intelligent software platforms, automation systems,
and innovative solutions that enable organizations
to enhance performance, streamline processes, and
adapt to a rapidly evolving digital landscape.

</p>


</motion.div>









{/* CONTENT */}



<div

className="
mt-20
grid
gap-14
lg:grid-cols-2
"

>






{/* LEFT */}



<motion.div

initial={{
opacity:0,
x:-40
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
text-4xl
font-bold
"

>

Who We Are

</h3>



<p

className="
mt-6
leading-8
text-slate-300
"

>

With a strong focus on quality, reliability,
and innovation, we collaborate with businesses
to develop scalable and secure technology
solutions tailored to their unique requirements.

</p>



<p

className="
mt-5
leading-8
text-slate-300
"

>

Our mission is to develop reliable and
future-ready systems that optimize industrial
operations, improve efficiency, and deliver
sustainable business growth.

</p>


</motion.div>









{/* RIGHT STATS */}



<motion.div

initial={{
opacity:0,
x:40
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

className="
grid
grid-cols-2
gap-5
"

>


{
stats.map((item)=>(


<div

key={item.label}

className="
rounded-3xl
border
border-blue-300/20
bg-blue-500/[0.08]
p-7
backdrop-blur-xl
transition
duration-300
hover:-translate-y-2
hover:border-blue-300/50
hover:bg-blue-500/[0.12]
"

>


<h3

className="
text-5xl
font-extrabold
text-blue-300
"

>

{item.number}

</h3>



<p

className="
mt-3
text-sm
uppercase
tracking-widest
text-slate-300
"

>

{item.label}

</p>



</div>


))

}



</motion.div>






</div>




</div>






{/* SECTION TRANSITION */}

<div

className="
absolute
bottom-0
left-0
h-32
w-full
bg-gradient-to-t
from-[#07152F]
to-transparent
"

/>



</section>


);

}