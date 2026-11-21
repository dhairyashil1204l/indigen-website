"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Linkedin, Instagram, Twitter } from "lucide-react";


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
bg-white
text-black
pt-16
"

>



<div

className="
container-x
overflow-hidden
rounded-t-[50px]

border
border-gray-200

bg-[#FCA311]

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


<Image

src="/images/Finllogo.png"

alt="Indigen Technologies Logo"

width={230}

height={90}

className="
object-contain
"

priority

/>






<p

className="
mt-6
leading-8
text-gray-800
"

>

Engineering intelligent software solutions
for manufacturing, automation and enterprise
digital transformation.

</p>



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
text-gray-800
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
text-gray-800
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
text-gray-800
"

>


<li>

<Link

href="#about"

className="hover:text-white transition"

>

About Us

</Link>

</li>




<li>

<Link

href="#services"

className="hover:text-white transition"

>

Services

</Link>

</li>





<li>

<Link

href="#projects"

className="hover:text-white transition"

>

Projects

</Link>

</li>





<li>

<Link

href="#blogs"

className="hover:text-white transition"

>

Blogs

</Link>

</li>





<li>

<Link

href="#contact"

className="hover:text-white transition"

>

Contact Us

</Link>

</li>



</ul>


</div>








</div>









{/* BOTTOM BAR */}



<div

className="

mx-10

mb-8

rounded-2xl

border

border-black/10

bg-black/10

px-8

py-6


flex

flex-col

gap-6


md:flex-row

md:items-center

md:justify-between

"

>






{/* EMAIL LEFT */}



<div>


<p

className="

text-sm

font-semibold

text-gray-700

"

>

Email

</p>



<a

href="mailto:enquiry@indigentech.com"

className="

text-lg

font-bold

hover:text-white

transition

"

>

enquiry@indigentech.com

</a>


</div>









{/* COPYRIGHT CENTER */}



<div

className="

text-sm

text-gray-800

text-center

"

>

© 2026 Indigen Technologies.
All Rights Reserved.

</div>









{/* SOCIAL RIGHT */}



<div

className="

flex

items-center

gap-5

"

>


<a

href="#"

className="

transition

hover:text-white

"

>

<Linkedin size={24}/>

</a>





<a

href="#"

className="

transition

hover:text-white

"

>

<Twitter size={24}/>

</a>





<a

href="#"

className="

transition

hover:text-white

"

>

<Instagram size={24}/>

</a>



</div>







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



bg-[#FCA311]



text-black



shadow-[0_10px_40px_rgba(252,163,17,0.45)]



transition



hover:scale-110

"

>


<ArrowUp size={28}/>


</button>







</footer>


)

}