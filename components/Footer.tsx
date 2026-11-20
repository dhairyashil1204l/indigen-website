"use client";

import Link from "next/link";
import { ArrowUp } from "lucide-react";


export default function Footer(){



const scrollTop=()=>{

window.scrollTo({

top:0,

behavior:"smooth"

});

};




return(


<footer

className="
bg-[#050B1C]
text-white
pt-16
"

>



<div

className="
container-x
overflow-hidden
rounded-t-[50px]
border
border-white/10
bg-[#101F2D]
"

>







<div

className="
grid
gap-12
px-10
py-14

md:grid-cols-2

lg:grid-cols-4

"

>








{/* COMPANY */}



<div>


<h3

className="
text-3xl
font-extrabold
tracking-wide
"

>

INDIGEN

</h3>


<p

className="
mt-1
text-sm
tracking-[0.4em]
text-cyan-400
"

>

TECHNOLOGIES

</p>






<p

className="
mt-6
leading-8
text-slate-300
"

>

Engineering intelligent software solutions
for manufacturing, automation and enterprise
digital transformation.

</p>








<div

className="
mt-8
space-y-4
text-slate-300
"

>





</div>





</div>









{/* SERVICES */}


<div>


<h4

className="
text-xl
font-bold
"

>

Services

</h4>




<ul

className="
mt-6
space-y-4
text-slate-300
"

>


<li>

Software Development

</li>


<li>

AI & Automation

</li>


<li>

Industrial Solutions

</li>


<li>

Enterprise Software

</li>



<li>

Digital Transformation

</li>



</ul>


</div>













{/* INDUSTRIES */}



<div>


<h4

className="
text-xl
font-bold
"

>

Industries

</h4>



<ul

className="
mt-6
space-y-4
text-slate-300
"

>


<li>

Manufacturing

</li>


<li>

Automation

</li>


<li>

Healthcare

</li>


<li>

Engineering

</li>


<li>

Enterprise

</li>


</ul>


</div>













{/* QUICK LINKS */}



<div>


<h4

className="
text-xl
font-bold
"

>

Quick Links

</h4>




<ul

className="
mt-6
space-y-4
text-slate-300
"

>


<li>

<Link href="#about">

About Us

</Link>

</li>




<li>

<Link href="#services">

Services

</Link>

</li>





<li>

<Link href="#projects">

Projects

</Link>

</li>





<li>

<Link href="#blogs">

Blogs

</Link>

</li>





<li>

<Link href="#contact">

Contact Us

</Link>

</li>



</ul>


</div>








</div>









{/* MAP */}



<div

className="
mx-10
mb-10
overflow-hidden
rounded-3xl
border
border-white/10
"

>


<iframe


src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2580295033003!2d73.7837066!3d18.5624023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2becde2274201%3A0xe4a108f6a3e26367!2sIndigen%20Technologies!5e0!3m2!1sen!2sin!4v1793012472920!5m2!1sen!2sin"


width="100%"

height="300"

loading="lazy"

className="
border-0
"

/>

</div>









{/* SOCIAL BAR */}



<div

className="
mx-10
mb-8
rounded-2xl
border
border-white/10
px-8
py-6

flex

flex-wrap

justify-between

gap-5

text-slate-300

"

>


<span>

in LinkedIn

</span>


<span>

◎ Instagram

</span>


<span>

𝕏 Twitter

</span>


<span>

f Facebook

</span>



</div>









{/* COPYRIGHT */}



<div

className="
border-t
border-white/10
px-10
py-6

flex

flex-col

gap-4

md:flex-row

justify-between

text-sm

text-slate-400

"

>


<p>

© 2026 Indigen Technologies. All Rights Reserved.

</p>





<p>

Privacy Policy | Terms & Conditions

</p>




</div>






</div>









{/* BACK TO TOP */}



<button

onClick={scrollTop}

className="
fixed
bottom-8
right-8

flex
h-16
w-16
items-center
justify-center

rounded-full

bg-blue-600

text-white

shadow-xl

transition

hover:scale-110

"

>


<ArrowUp size={28}/>


</button>







</footer>


)

}