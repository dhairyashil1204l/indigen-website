"use client";

import Link from "next/link";
import { useEffect, useState } from "react";


const navLinks = [
  {name:"Home", href:"#home"},
  {name:"About", href:"#about"},
  {name:"Services", href:"#services"},
  {name:"Industries", href:"#industries"},
  {name:"Solutions", href:"#solutions"},
 
  {name:"Projects", href:"#projects"},
  {name:"Blogs", href:"#blogs"},
  {name:"Contact", href:"#contact"},
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
className="
fixed
top-5
left-0
z-50
w-full
"
>


<div className="container-x">


<div

className="
relative
overflow-hidden
flex
items-center
justify-between
rounded-3xl
border
border-white/30
bg-white/10
backdrop-blur-2xl
shadow-[0_0_35px_rgba(59,130,246,0.35)]
px-6
py-4
transition-all
duration-500
"

>

  <div
  className="
  absolute
  -inset-[2px]
  rounded-3xl
  bg-gradient-to-r
  from-transparent
  via-blue-400/50
  to-transparent
  opacity-60
  blur-sm
  animate-pulse
  pointer-events-none

  "
  />



{/* GLASS SHINE */}

<div

className="
absolute
inset-0
bg-gradient-to-r
from-transparent
via-white/25
to-transparent
opacity-10
pointer-events-none
"

/>



{/* INNER CONTENT */}

<div

className="
relative
z-10
flex
w-full
items-center
justify-between
"

>



{/* LOGO */}


<Link href="#home">


<div>


<h1

className="
text-2xl
font-extrabold
tracking-wide
text-white
"

>

INDIGEN

</h1>


<p

className="
text-[10px]
font-medium
tracking-[0.45em]
text-blue-100
"

>

TECHNOLOGIES

</p>


</div>


</Link>








{/* DESKTOP NAV */}


<nav

className="
hidden
lg:flex
items-center
gap-7
"

>


{
navLinks.map((item)=>(


<Link

key={item.name}

href={item.href}

className="
text-sm
font-medium
text-white
transition
hover:text-blue-200
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
rounded-xl
border
border-white/30
bg-white/10
px-6
py-3
text-sm
font-semibold
text-white
backdrop-blur-md
transition
hover:bg-white
hover:text-[#091F5C]
lg:block
"

>

Get Quote

</Link>









{/* MOBILE BUTTON */}


<button

onClick={()=>setOpen(!open)}

className="
lg:hidden
relative
z-10
text-2xl
text-white
"

>

{open ? "✕":"☰"}

</button>



</div>


</div>









{/* MOBILE MENU */}


{

open && (

<div

className="
mt-4
rounded-3xl
border
border-white/20
bg-[#091F5C]/90
p-6
backdrop-blur-xl
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
navLinks.map(item=>(


<Link

key={item.name}

href={item.href}

onClick={()=>setOpen(false)}

className="
font-medium
text-white
hover:text-blue-200
"

>

{item.name}

</Link>


))

}



<Link

href="#contact"

className="
rounded-xl
bg-[#334DAF]
px-5
py-3
text-center
font-semibold
text-white
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


);

}