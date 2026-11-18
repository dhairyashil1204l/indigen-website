"use client";

import Link from "next/link";
import { useEffect, useState } from "react";


const navLinks = [
  {name:"Home", href:"#home"},
  {name:"About", href:"#about"},
  {name:"Services", href:"#services"},
  {name:"Industries", href:"#industries"},
  {name:"Solutions", href:"#solutions"},
  {name:"Technologies", href:"#technologies"},
  {name:"Projects", href:"#projects"},
  {name:"Blogs", href:"#blogs"},
  {name:"Contact", href:"#contact"},
];



export default function Navbar(){


const [scrolled,setScrolled]=useState(false);

const [open,setOpen]=useState(false);



useEffect(()=>{


const handleScroll=()=>{

setScrolled(window.scrollY>40);

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
top-0
left-0
z-50
w-full
transition-all
duration-300

${
scrolled

?

"bg-white/90 backdrop-blur-lg shadow-lg py-3"

:

"bg-transparent py-6"

}

`}

>


<div className="container-x">


<div className="
flex
items-center
justify-between
">





{/* LOGO */}


<Link href="#home">


<div>


<h1

className={`

text-2xl

font-extrabold

tracking-wide

${
scrolled
?
"text-[#091F5C]"
:
"text-white"
}

`}

>

INDIGEN

</h1>



<p

className={`

text-[10px]

tracking-[0.45em]

font-medium

${
scrolled
?
"text-[#334DAF]"
:
"text-[#D0E4FE]"
}

`}

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

className={`

text-sm

font-medium

transition

${
scrolled

?

"text-[#091F5C] hover:text-[#334DAF]"

:

"text-white hover:text-[#D0E4FE]"

}

`}

>

{item.name}

</Link>


))


}



</nav>









{/* CTA */}



<Link


href="#contact"


className={`

hidden

lg:block

rounded-xl

px-6

py-3

font-semibold

transition


${
scrolled

?

"bg-[#334DAF] text-white hover:bg-[#091F5C]"

:

"border border-white text-white hover:bg-white hover:text-[#091F5C]"

}

`}


>

Get Quote

</Link>









{/* MOBILE BUTTON */}



<button


onClick={()=>setOpen(!open)}


className="
lg:hidden
text-2xl
"

>


<span

className={

scrolled

?

"text-[#091F5C]"

:

"text-white"

}

>

{open ? "✕":"☰"}

</span>



</button>





</div>









{/* MOBILE MENU */}



{
open && (

<div

className="
lg:hidden
mt-5
rounded-2xl
bg-white
p-6
shadow-xl
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
text-[#091F5C]
hover:text-[#334DAF]
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