"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SOLUTIONS_DATA } from "@/lib/data";



function SolutionCard({

data,
active=false,
blur=false,
outer=false,

}:{

data:{
title:string;
description:string;
};

active?:boolean;
blur?:boolean;
outer?:boolean;

}){


return(

<div

className={`

h-[340px]

w-[330px]

rounded-3xl

border

p-8

flex

flex-col

justify-center

transition-all

duration-500



${
active

?

`

relative

z-30


border-black


bg-[#111827]


shadow-[0_25px_70px_rgba(0,0,0,0.45)]


scale-[1.05]

`

:

`

relative

z-10


border-black/40


bg-[#1F1F1F]


backdrop-blur-2xl



${blur ? "blur-[2px] opacity-80" : ""}



${outer ? "blur-[4px] opacity-65" : ""}


`

}

`}

>





{/* WHITE TOP LINE */}


<div

className="

absolute

top-0

left-8

right-8

h-1

rounded-full

bg-white

"

/>







<h3

className="

relative

z-10


text-2xl


font-bold


leading-tight


text-white


"

>

{data.title}

</h3>








<p

className="

relative

z-10


mt-5


text-sm


leading-7


text-gray-300


"

>

{data.description}

</p>








<div

className="

relative

z-10


mt-8


h-px


bg-white/20


"

/>







<p

className="

relative

z-10


mt-5


text-sm


font-semibold


text-[#FCA311]


"

>

Explore Solution →

</p>





</div>


)

}









export default function Solutions(){



const [active,setActive]=useState(0);







const next=()=>{


setActive((prev)=>

prev===SOLUTIONS_DATA.length-1

?

0

:

prev+1

);


};








const previous=()=>{


setActive((prev)=>

prev===0

?

SOLUTIONS_DATA.length-1

:

prev-1

);


};









const getIndex=(offset:number)=>{


let index=active+offset;



while(index<0){

index+=SOLUTIONS_DATA.length;

}



while(index>=SOLUTIONS_DATA.length){

index-=SOLUTIONS_DATA.length;

}



return index;


};








return(



<section

id="solutions"

className="

relative

overflow-hidden


bg-[#FCA311]


py-28


text-black

"

>







<div className="container-x relative z-10">









{/* HEADER */}



<div className="text-center">



<p

className="

text-sm


font-bold


uppercase


tracking-[0.35em]


text-black

"

>

Our Solutions

</p>








<h2

className="

mt-5


text-5xl


font-extrabold


text-black

"

>

Technology Solutions

</h2>








<p

className="

mt-5


text-lg


text-[#3A3A3A]

"

>

Innovative technology solutions designed to
transform business operations and accelerate
digital growth.

</p>



</div>














{/* CARDS */}



<motion.div



key={active}



initial={{

opacity:0,

x:40

}}



animate={{

opacity:1,

x:0

}}



transition={{

duration:0.35

}}




drag="x"



dragConstraints={{

left:0,

right:0

}}



dragElastic={0.15}





onDragEnd={(e,info)=>{


if(info.offset.x < -80){

next();

}



if(info.offset.x > 80){

previous();

}



}}



className="

relative


mt-16


grid


grid-cols-5


gap-5


cursor-grab


"

>







<SolutionCard

data={SOLUTIONS_DATA[getIndex(-2)]}

outer

/>







<SolutionCard

data={SOLUTIONS_DATA[getIndex(-1)]}

blur

/>








<div className="relative z-30">


<SolutionCard

data={SOLUTIONS_DATA[active]}

active

/>


</div>







<SolutionCard

data={SOLUTIONS_DATA[getIndex(1)]}

blur

/>







<SolutionCard

data={SOLUTIONS_DATA[getIndex(2)]}

outer

/>





</motion.div>












{/* BUTTONS */}



<div

className="

mt-12


flex


justify-center


gap-5

"

>





<button

onClick={previous}

className="

h-14

w-14


rounded-full


border


border-black


bg-black


text-2xl


text-white


transition


hover:bg-white


hover:text-black


"

>

←

</button>








<button

onClick={next}

className="

h-14

w-14


rounded-full


border


border-black


bg-black


text-2xl


text-white


transition


hover:bg-white


hover:text-black


"

>

→

</button>





</div>








</div>






</section>


)

}