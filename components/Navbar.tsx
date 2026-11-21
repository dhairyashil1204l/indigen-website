"use client";

import Link from "next/link";
import { useEffect, useState } from "react";


const navLinks = [
  { name: "Home", href:"#home" },
  { name: "About", href:"#about" },
  { name: "Services", href:"#services" },
  { name: "Industries", href:"#industries" },
  { name: "Solutions", href:"#solutions" },
  { name: "Projects", href:"#projects" },
  { name: "Blogs", href:"#blogs" },
  { name: "Contact", href:"#contact" },
];



export default function Navbar(){


const [scrolled,setScrolled]=useState(false);
const [open,setOpen]=useState(false);



useEffect(()=>{

const handleScroll=()=>{

setScrolled(window.scrollY > 40);

};


window.addEventListener(
"scroll",
handleScroll
);


return()=>{

window.removeEventListener(
"scroll",
handleScroll
);

}

},[]);





return(


<header

className={`
fixed
left-0
z-50
w-full
transition-all
duration-500

${scrolled ? "top-3":"top-5"}

`}

>


<div className="container-x">



<div

className="

flex
items-center
justify-between

rounded-2xl

border

border-black/10

bg-white/90

backdrop-blur-xl

px-6
py-4

shadow-[0_10px_30px_rgba(0,0,0,0.08)]

"

>






{/* LOGO */}



<Link href="#home">


<div>


<h1

className="
text-2xl
font-extrabold
tracking-wider
text-[#14213D]
"

>

INDIGEN

</h1>



<p

className="
text-[10px]
font-semibold
tracking-[0.45em]
text-[#FCA311]
"

>

TECHNOLOGIES

</p>



</div>


</Link>









{/* DESKTOP MENU */}



<nav

className="
hidden
lg:flex
items-center
gap-8
"

>


{
navLinks.map((item)=>(


<Link

key={item.name}

href={item.href}

className="

relative

text-sm

font-semibold

text-[#14213D]

transition-all

duration-300


hover:text-[#FCA311]


after:absolute

after:left-0

after:-bottom-2

after:h-[2px]

after:w-0

after:bg-[#FCA311]

after:transition-all

after:duration-300

hover:after:w-full

"

>

{item.name}

</Link>


))

}


</nav>









{/* CTA */}



<Link

href="#contact"

className="

hidden

lg:flex

items-center

justify-center


rounded-xl


bg-[#FCA311]


px-6

py-3


text-sm

font-bold


text-black


transition-all

duration-300


hover:-translate-y-1

hover:bg-black

hover:text-white

"

>

Get Quote

</Link>








{/* MOBILE BUTTON */}



<button

onClick={()=>setOpen(!open)}

className="

lg:hidden

text-2xl

font-bold

text-[#14213D]

"

>

{

open ? "✕":"☰"

}

</button>



</div>









{/* MOBILE MENU */}



{

open && (


<div

className="

mt-4

rounded-2xl

border

border-black/10

bg-white

p-6

shadow-xl

lg:hidden

"

>


<nav

className="

flex

flex-col

gap-5

"

>


{
navLinks.map((item)=>(


<Link

key={item.name}

href={item.href}

onClick={()=>setOpen(false)}

className="

font-semibold

text-[#14213D]

transition

hover:text-[#FCA311]

"

>

{item.name}

</Link>


))

}






<Link

href="#contact"

className="

mt-2

rounded-xl

bg-[#FCA311]

py-3

text-center

font-bold

text-black

"

>

Get Quote

</Link>



</nav>



</div>


)

}


</div>


</header>


)

}