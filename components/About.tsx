"use client";

import { motion } from "framer-motion";


export default function About(){


return(

<section

id="about"

className="
relative
bg-[#050B1C]
py-28
text-white
"

>


<div className="container-x">



{/* HEADER */}


<div
className="
max-w-4xl
"
>


<p

className="
text-sm
uppercase
tracking-[0.3em]
text-blue-400
font-semibold
"

>

About Indigen Technologies

</p>



<h2

className="
mt-5
text-4xl
font-extrabold
leading-tight
md:text-5xl
lg:text-6xl
"

>

Building Intelligent Systems
That Empower Industries

</h2>



<p

className="
mt-6
max-w-3xl
text-lg
leading-8
text-slate-300
"

>

We design and develop reliable software solutions
that combine engineering expertise, automation and
emerging technologies to help businesses grow in
the digital era.

</p>



</div>







{/* MAIN CONTENT */}



<div

className="
mt-16
grid
items-center
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
text-2xl
font-bold
"

>

Engineering Excellence

</h3>



<p

className="
mt-5
leading-8
text-slate-300
"

>

At Indigen Technologies, we build scalable
enterprise applications, industrial automation
systems and AI-powered platforms designed
around real business requirements.

</p>



<p

className="
mt-5
leading-8
text-slate-300
"

>

Our approach focuses on innovation, performance
and long-term reliability to deliver technology
solutions that create measurable impact.

</p>






{/* STATS */}



<div

className="
mt-10
flex
gap-12
"

>


<div>

<h4
className="
text-4xl
font-bold
text-blue-400
"
>
50+
</h4>

<p
className="
text-sm
text-slate-400
"
>
Projects
</p>

</div>




<div>

<h4
className="
text-4xl
font-bold
text-blue-400
"
>
10+
</h4>

<p
className="
text-sm
text-slate-400
"
>
Technologies
</p>

</div>




<div>

<h4
className="
text-4xl
font-bold
text-blue-400
"
>
24/7
</h4>

<p
className="
text-sm
text-slate-400
"
>
Support
</p>

</div>


</div>



</motion.div>










{/* RIGHT PANEL */}



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

className="
rounded-3xl
border
border-white/10
bg-white/5
p-10
backdrop-blur-xl
"

>


<p

className="
text-blue-400
uppercase
tracking-widest
text-sm
font-semibold
"

>
Our Expertise
</p>




<h3

className="
mt-5
text-3xl
font-bold
"

>

Technology Built
For Industry Needs

</h3>




<div

className="
mt-8
space-y-5
"

>


{
[
"Custom Software Development",
"Industrial Automation",
"Artificial Intelligence",
"Enterprise Solutions"
].map((item)=>(


<div

key={item}

className="
flex
items-center
gap-4
border-b
border-white/10
pb-4
"

>


<span

className="
h-3
w-3
rounded-full
bg-blue-400
"

/>


<p>
{item}
</p>


</div>


))
}


</div>



</motion.div>




</div>




</div>


</section>


);

}