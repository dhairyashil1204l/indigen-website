"use client";

import { motion } from "framer-motion";


const stats = [

{
number:"50+",
label:"Projects Delivered"
},

{
number:"10+",
label:"Technologies"
},

{
number:"24/7",
label:"Support"
},

{
number:"100%",
label:"Client Focus"
}

];



export default function About(){


return(

<section

id="about"

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

className="
max-w-5xl
"

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

ABOUT INDIGEN TECHNOLOGIES

</p>






<h2

className="
mt-5
text-5xl
font-extrabold
leading-tight
lg:text-6xl
"

>

Engineering Solutions

<span

className="
block
text-[#FCA311]
"

>

Built For The Future Of Industry

</span>


</h2>






<p

className="
mt-7
max-w-4xl
text-lg
leading-8
text-gray-600
"

>

Indigen Technologies delivers advanced
digital engineering solutions that connect
technology with industry. We design intelligent
software platforms, automation systems and
enterprise solutions that help businesses
improve efficiency, optimize operations and
accelerate digital transformation.

</p>


</motion.div>









{/* MAIN SECTION */}



<div

className="
mt-20
grid
items-center
gap-16
lg:grid-cols-2
"

>









{/* IMAGE AREA */}



<motion.div

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

className="
relative
flex
justify-center
"

>





{/* GOLD CIRCLE */}



<div

className="
absolute
left-5
top-1/2
-translate-y-1/2

h-[430px]
w-[430px]

rounded-full

bg-[#FCA311]

"

>

</div>







{/* IMAGE */}



<div

className="
relative
z-10

h-[430px]
w-[430px]

overflow-hidden

rounded-[45px]

border-[14px]

border-[#F7F7F5]

"

>


<img

src="/images/about.jpg"

alt="Indigen Technologies"

className="
h-full
w-full
object-cover
"

/>


</div>






</motion.div>









{/* RIGHT CARD */}



<motion.div

initial={{
opacity:0,
x:50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

className="
rounded-[35px]

bg-[#171717]

p-10

text-white

"

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
text-gray-300
"

>

With a strong focus on innovation,
quality and reliability, we collaborate
with businesses to build scalable,
secure and future-ready technology
solutions.

</p>








<p

className="
mt-5
leading-8
text-gray-300
"

>

Our mission is to develop intelligent
systems that optimize industrial
operations, improve productivity and
enable sustainable business growth.

</p>









{/* STATS */}



<div

className="
mt-10
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
rounded-2xl

bg-[#252525]

border
border-white/10

p-6

transition

hover:-translate-y-2

"

>


<h4

className="
text-4xl
font-extrabold
text-[#FCA311]
"

>

{item.number}

</h4>





<p

className="
mt-3

text-xs

uppercase

tracking-widest

text-gray-400

"

>

{item.label}

</p>



</div>


))


}


</div>






</motion.div>







</div>







</div>







</section>


)

}