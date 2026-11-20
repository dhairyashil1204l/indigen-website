"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { SOLUTIONS_DATA } from "@/lib/data";


function SolutionCard({
  data,
  active = false,
  blur = false,
  outer = false,
}: {
  data:{
    title:string;
    description:string;
  };
  active?:boolean;
  blur?:boolean;
  outer?:boolean;
}) {


return (

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
border-blue-400
bg-[#0B1F3A]
shadow-[0_25px_100px_rgba(37,99,235,0.55)]
scale-[1.03]
`

:

`
relative
z-10
border-white/20
bg-white/[0.10]
backdrop-blur-xl

${blur ? "blur-[2px] opacity-80" : ""}

${outer ? "blur-[4px] opacity-65" : ""}

`

}

`}

>


<h3

className="
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
mt-5
text-sm
leading-7
text-slate-300
"

>

{data.description}

</p>




<div

className="
mt-8
h-px
bg-white/15
"

/>





<p

className="
mt-5
text-sm
font-semibold
text-blue-300
"

>

Explore Solution →

</p>



</div>

);

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








return (


<section

id="solutions"

className="
relative
overflow-hidden
bg-gradient-to-b
from-[#07152F]
via-[#050B1C]
to-[#050B1C]
py-28
text-white
"

>


{/* INDUSTRIES TO SOLUTIONS PREMIUM BLEND */}


<div

className="
absolute
top-0
left-1/2
-translate-x-1/2
w-[800px]
h-[180px]
rounded-full
bg-blue-500/20
blur-[140px]
"

/>



<div

className="
absolute
top-0
left-0
w-full
h-32
bg-gradient-to-b
from-[#07152F]
to-transparent
pointer-events-none
"

/>






<div

className="
absolute
inset-0
opacity-[0.05]
bg-[linear-gradient(#3b82f6_1px,transparent_1px),linear-gradient(90deg,#3b82f6_1px,transparent_1px)]
bg-[size:40px_40px]
"

/>





<div className="container-x relative z-10">





<div className="text-center">


<p

className="
text-sm
font-bold
uppercase
tracking-[0.35em]
text-blue-400
"

>

Our Solutions

</p>



<h2

className="
mt-5
text-5xl
font-extrabold
"

>

Technology Solutions

</h2>


</div>









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

data={
SOLUTIONS_DATA[getIndex(-2)]
}

outer

/>







<SolutionCard

data={
SOLUTIONS_DATA[getIndex(-1)]
}

blur

/>









{/* FRONT CENTER CARD */}

<div className="relative z-30">

<SolutionCard

data={
SOLUTIONS_DATA[active]
}

active

/>

</div>








<SolutionCard

data={
SOLUTIONS_DATA[getIndex(1)]
}

blur

/>








<SolutionCard

data={
SOLUTIONS_DATA[getIndex(2)]
}

outer

/>






</motion.div>









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
border-white/20
bg-white/10
text-2xl
hover:bg-blue-500/20
transition
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
border-white/20
bg-white/10
text-2xl
hover:bg-blue-500/20
transition
"

>

→

</button>



</div>






</div>

</section>

);

}