"use client";


import Link from "next/link";


export default function Hero(){


return (

<section

id="home"

className="
relative
min-h-screen
overflow-hidden
flex
items-center
"

>


{/* BACKGROUND IMAGE */}

<div

className="
absolute
inset-0
bg-cover
bg-center
"

style={{

backgroundImage:
"url('/images/bgimg.jpg')"

}}

/>





{/* OVERLAY */}

<div

className="
absolute
inset-0
bg-gradient-to-r
from-[#050B1C]/90
via-[#091F5C]/70
to-[#091F5C]/30
"

/>







{/* CONTENT */}

<div

className="
relative
z-10
container-x
pt-32
pb-40
"

>


<div

className="
max-w-4xl
"

>


<p

className="
mb-5
text-sm
font-semibold
uppercase
tracking-[0.35em]
text-blue-300
"

>

Industrial Software Solutions

</p>





<h1

className="
text-5xl
font-extrabold
leading-tight
text-white
md:text-6xl
lg:text-7xl
"

>

Engineering Intelligent
<br/>

Software Solutions
<br/>

For Industrial Excellence

</h1>





<p

className="
mt-7
max-w-2xl
text-lg
leading-8
text-slate-200
"

>

We build scalable software solutions,
automation systems and AI-driven platforms
that help businesses transform operations
and achieve digital growth.

</p>







<div

className="
mt-10
flex
flex-wrap
gap-5
"

>
<Link

href="#contact"

className="
group
relative
overflow-hidden
inline-flex
items-center
justify-center
rounded-xl
bg-[#2563EB]
px-8
py-4
text-sm
font-semibold
text-white
shadow-[0_10px_30px_rgba(37,99,235,0.35)]
transition-all
duration-300
hover:bg-[#1D4ED8]
hover:-translate-y-1
"

>

<span className="relative z-10">
Get Started
</span>


<div
className="
absolute
inset-0
translate-x-[-100%]
bg-gradient-to-r
from-transparent
via-white/30
to-transparent
transition-transform
duration-700
group-hover:translate-x-[100%]
"
/>


</Link>






<Link

href="#services"

className="
group
inline-flex
items-center
justify-center
rounded-xl
border
border-white/30
bg-white/10
px-8
py-4
text-sm
font-semibold
text-white
backdrop-blur-xl
transition-all
duration-300
hover:-translate-y-1
hover:border-white/60
hover:bg-white
hover:text-[#091F5C]
"

>

Explore Services

</Link>



</div>




</div>


</div>







{/* BOTTOM FADE */}

<div

className="
absolute
bottom-0
left-0
h-72
w-full
bg-gradient-to-t
from-[#050B1C]
via-[#050B1C]/70
to-transparent
"

 />



</section>


);


}