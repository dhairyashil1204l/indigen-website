"use client";

import Link from "next/link";
import { BLOGS } from "@/lib/blogs";


export default function BlogSection(){


return(

<section

id="blogs"

className="
bg-[#050B1C]
py-28
text-white
"

>


<div className="container-x">



{/* Heading */}


<div className="text-center mb-16">


<p

className="
text-blue-400
font-semibold
uppercase
tracking-widest
"

>

Insights

</p>



<h2

className="
mt-4
text-5xl
font-extrabold
"

>

Latest Blogs

</h2>


<p

className="
mt-4
text-slate-300
"

>

Explore our latest technology insights and industry updates.

</p>


</div>









<div

className="
grid
gap-6

lg:grid-cols-3
"

>





{/* LEFT */}

<div className="flex flex-col gap-6">



<BlogCard

blog={BLOGS[0]}

large

/>



<BlogCard

blog={BLOGS[1]}

/>



</div>









{/* CENTER FEATURE */}



<BlogCard

blog={BLOGS[2]}

large

featured

/>









{/* RIGHT */}


<div className="flex flex-col gap-6">


<BlogCard

blog={BLOGS[3]}

/>



<BlogCard

blog={BLOGS[4]}

large

/>



</div>







</div>







</div>


</section>

)

}








function BlogCard({

blog,
large=false,
featured=false

}:any){


return(

<Link

href={`/blogs/${blog.slug}`}

className={`
group
relative
overflow-hidden

rounded-3xl

border
border-white/20

bg-white/10

backdrop-blur-xl

block


${large?"h-[420px]":"h-[190px]"}

${featured?"h-[610px]":""}

`}

>


<img

src={blog.image}

alt={blog.title}

className="
absolute
inset-0

h-full
w-full

object-cover

transition
duration-700

group-hover:scale-110

"

/>





<div

className="
absolute
inset-0
bg-gradient-to-t
from-black
via-black/50
to-transparent
"

/>





<div

className="
absolute
bottom-0
p-7
"

>


<span

className="
text-sm
text-cyan-300
font-semibold
"

>

{blog.category}

</span>




<h3

className="
mt-3
text-2xl
font-bold
"

>

{blog.title}

</h3>




<p

className="
mt-3
text-sm
text-slate-300
"

>

{blog.description}

</p>





<div

className="
mt-5
font-semibold
text-blue-400
"

>

Read More →

</div>




</div>





</Link>


)

}