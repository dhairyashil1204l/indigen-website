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
bg-white
"

>


{/* RIGHT IMAGE */}


<div

className="
absolute
right-[-120px]
top-24
h-[700px]
w-[700px]
bg-cover
bg-center
opacity-90
"

style={{

backgroundImage:
"url('/images/bgimg.jpg')"

}}

/>





{/* IMAGE BLEND */}


<div

className="
absolute
inset-0
bg-gradient-to-r
from-white
via-white/80
to-transparent
"

></div>







{/* GOLD SIDE PANEL */}


<div

className="
absolute
right-0
top-0
h-full
w-[35%]
bg-[#FCA311]/10
rounded-l-[180px]
"

></div>










{/* CONTENT */}



<div

className="
relative
z-10
container-x
pt-32
pb-32
"

>


<div

className="
max-w-3xl
"

>





<p

className="
mb-6
text-sm
font-bold
uppercase
tracking-[0.35em]
text-[#FCA311]
"

>

Industrial Software Solutions

</p>









<h1

className="
text-5xl
font-extrabold
leading-tight
text-[#14213D]

md:text-6xl

lg:text-7xl

"

>

Engineering Intelligent

<br/>


Software Solutions

<br/>


<span

className="
text-[#FCA311]
"

>

For Industrial Excellence

</span>


</h1>









<p

className="
mt-8
max-w-2xl
text-lg
leading-8
text-gray-700
"

>

We design and develop scalable software solutions,
intelligent automation systems, and AI-powered
platforms that enable businesses to optimize
operations, improve efficiency, and accelerate
digital transformation.

</p>









<div

className="
mt-10
flex
flex-wrap
gap-5
"

>








{/* PRIMARY BUTTON */}


<Link

href="#contact"

className="

rounded-xl

bg-[#FCA311]

px-8

py-4

text-sm

font-bold

text-black

transition-all

duration-300


hover:-translate-y-1

hover:bg-[#14213D]

hover:text-white


"

>

Get Started →

</Link>









{/* SECONDARY BUTTON */}



<Link

href="#services"

className="

rounded-xl

border-2

border-[#14213D]

px-8

py-4

text-sm

font-bold

text-[#14213D]


transition-all

duration-300


hover:bg-[#14213D]

hover:text-white


"

>

Explore Services

</Link>






</div>







</div>



</div>









{/* BOTTOM TRANSITION */}


<div

className="
absolute
bottom-0
left-0
h-28
w-full
bg-gradient-to-t
from-[#E5E5E5]
to-transparent
"

></div>







</section>


);

}