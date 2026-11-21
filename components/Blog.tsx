"use client";

import Link from "next/link";
import { BLOGS } from "@/lib/blogs";


export default function BlogSection(){


return(

<section

id="blogs"

className="
relative
overflow-hidden
bg-white
py-28
text-black
"

>





<div className="container-x relative z-10">







{/* HEADING */}



<div className="text-center mb-16">



<p

className="
text-[#FCA311]
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
text-[#111111]
"

>

Latest Blogs

</h2>








<p

className="
mt-4
text-gray-600
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

border-gray-300



bg-[#171717]



block



transition-all

duration-500



hover:-translate-y-2



hover:border-[#FCA311]



hover:shadow-[0_20px_50px_rgba(252,163,17,0.25)]



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








{/* DARK OVERLAY */}



<div

className="

absolute

inset-0


bg-gradient-to-t


from-black


via-black/70


to-transparent

"

/>








{/* GOLD HOVER EFFECT */}



<div

className="

absolute

inset-0


bg-gradient-to-br


from-transparent


via-transparent


to-[#FCA311]/30


opacity-0


transition


duration-500


group-hover:opacity-100

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

text-[#FCA311]

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

text-white

"

>

{blog.title}

</h3>








<p

className="

mt-3

text-sm

text-gray-300

"

>

{blog.description}

</p>








<div

className="

mt-5

font-semibold

text-[#FCA311]

"

>

Read More →

</div>







</div>








</Link>


)

}