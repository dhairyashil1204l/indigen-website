"use client";

import Link from "next/link";
import { motion } from "framer-motion";


export default function Hero(){


return(


<section

id="home"

className="
relative
overflow-hidden
min-h-[850px]
pt-40
pb-32
flex
items-center
"

style={{

backgroundImage:"url('/images/bgimg.jpg')",

backgroundSize:"cover",

backgroundPosition:"center",

}}

>


{/* Overlay */}

<div

className="
absolute
inset-0
bg-[#091F5C]/60
"

/>


<div

className="
absolute
inset-0
bg-gradient-to-r
from-[#091F5C]
via-[#091F5C]/80
to-transparent
"

/>






<div className="container-x relative z-10">



<div

className="
grid
gap-12
lg:grid-cols-2
items-center
"

>








{/* LEFT CONTENT */}


<motion.div


initial={{

opacity:0,

y:40

}}


animate={{

opacity:1,

y:0

}}


transition={{

duration:.8

}}



>










<h1

className="
text-5xl
font-extrabold
leading-tight
text-white
sm:text-7xl
lg:text-6xl
"

>


Engineering Intelligent


<span

className="
block
text-[#7096D1]
"

>

Software Solutions

</span>


For Industrial Excellence


</h1>







<p

className="
mt-6
max-w-2xl
text-lg
leading-8
text-slate-200
"

>


Indigen Technologies delivers customized software,
industrial automation, AI-powered applications and
enterprise solutions for modern businesses.


</p>







{/* Buttons */}



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
rounded-xl
bg-[#334DAF]
px-8
py-4
font-semibold
text-white
transition
hover:bg-white
hover:text-[#091F5C]
"

>

Get Started

</Link>




<Link

href="#services"

className="
rounded-xl
border
border-white/50
px-8
py-4
font-semibold
text-white
transition
hover:bg-white
hover:text-[#091F5C]
"

>

Explore Services

</Link>




</div>












</motion.div>
















</div>



</div>



</section>


);


}