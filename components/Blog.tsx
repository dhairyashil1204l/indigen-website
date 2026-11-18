"use client";

import { motion } from "framer-motion";
import { BLOGS } from "@/lib/data";


export default function Blog() {


return (

<section

id="blogs"

className="
bg-white
py-24
dark:bg-[#050B1C]
"

>


<div className="container-x">





{/* Heading */}


<div className="text-center">


<p

className="
mb-3
font-semibold
text-[#334DAF]
"

>

Insights

</p>



<h2

className="
text-4xl
font-extrabold
text-[#091F5C]
lg:text-5xl
dark:text-white
"

>

Our Blog

</h2>




<p

className="
mt-4
text-lg
text-slate-600
dark:text-slate-300
"

>

Insights, innovations and knowledge about industrial software and technology.

</p>



</div>








{/* Blog Cards */}



<div

className="
mt-12
grid
gap-8
md:grid-cols-2
lg:grid-cols-3
"

>



{BLOGS.map((blog,index)=>(



<motion.article



key={blog.title}



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

duration:0.5,

delay:index*0.1

}}




className="

group

rounded-3xl

border

border-[#D0E4FE]

bg-[#F9FBFF]

p-7

transition-all

duration-300

hover:-translate-y-2

hover:shadow-card

dark:border-[#334DAF]

dark:bg-[#091F5C]

"





>






{/* Category */}


<span

className="

inline-flex

rounded-full

bg-[#E8F2FE]

px-4

py-1.5

text-sm

font-semibold

text-[#334DAF]

dark:bg-[#102A63]

dark:text-[#D0E4FE]

"

>

{blog.category}

</span>









<h3

className="

mt-5

text-xl

font-bold

text-[#091F5C]

dark:text-white

"

>

{blog.title}

</h3>







<p

className="

mt-3

leading-7

text-slate-600

dark:text-slate-300

"

>

{blog.description}

</p>








<button

className="

mt-6

text-sm

font-semibold

text-[#334DAF]

transition

hover:text-[#091F5C]

dark:text-[#7096D1]

"

>

Read More →

</button>







<div

className="
mt-6
h-1
w-10
rounded-full
bg-[#7096D1]
transition-all
group-hover:w-20
"

/>




</motion.article>



))}



</div>






</div>


</section>


);

}