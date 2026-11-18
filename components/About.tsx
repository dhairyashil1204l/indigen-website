"use client";

import { motion } from "framer-motion";


export default function About() {


return (

<section
id="about"
className="
relative
bg-[#050B1C]
pt-16
pb-28
text-white
"
>


<div className="container-x">

  <div
className="
mx-auto
mb-16
h-px

"
/>



{/* HEADER */}

<div className="max-w-4xl">


<p
className="
text-sm
uppercase
tracking-[0.3em]
text-blue-400
"
>

About Indigen

</p>


<h2
className="
mt-5
text-4xl
font-extrabold
leading-tight
lg:text-5xl
"
>

Building Digital Systems
That Power Industrial Innovation

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

We engineer custom software solutions that connect
technology, automation and intelligence to help
businesses achieve operational excellence.

</p>



</div>







{/* MAIN */}


<div
className="
mt-16
grid
gap-14
lg:grid-cols-2
items-center
"
>





{/* STORY */}


<motion.div

initial={{
opacity:0,
x:-30
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

Engineering Beyond Software

</h3>



<p
className="
mt-5
leading-8
text-slate-300
"
>

At Indigen Technologies, we combine software engineering,
industrial expertise and emerging technologies to build
solutions for modern enterprises.

</p>



<p
className="
mt-5
leading-8
text-slate-300
"
>

From enterprise applications and industrial automation
to AI-powered platforms, we help organizations transform
their ideas into scalable digital solutions.

</p>






<div
className="
mt-10
flex
gap-10
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









{/* TECHNOLOGY PANEL */}



<motion.div

initial={{
opacity:0,
scale:.95
}}

whileInView={{
opacity:1,
scale:1
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
backdrop-blur
"

>


<p
className="
text-blue-400
font-semibold
"
>
Our Capabilities
</p>



<div
className="
mt-8
space-y-6
"
>


{
[
"Custom Software Development",
"Industrial Automation Systems",
"AI & Intelligent Applications",
"Enterprise Digital Solutions"
].map((item)=>(
<div
key={item}
className="
flex
items-center
gap-4
border-b
border-white/10
pb-5
"
>


<div
className="
h-3
w-3
rounded-full
bg-blue-500
"
/>


<p
className="
text-lg
"
>
{item}
</p>


</div>
))
}


</div>



</motion.div>





</div>






{/* VALUES */}


<div
className="
mt-20
grid
gap-8
md:grid-cols-3
"
>


{
[
{
title:"Engineering Excellence",
desc:"Reliable and scalable solutions built with precision."
},
{
title:"Industry Focus",
desc:"Technology solutions designed for real business needs."
},
{
title:"Future Ready",
desc:"AI-driven systems prepared for tomorrow."
}
].map((item)=>(
<div
key={item.title}
className="
border-t
border-blue-500/40
pt-6
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
text-slate-400
"
>
{item.desc}
</p>


</div>
))
}


</div>





</div>


</section>


);

}