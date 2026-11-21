"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { PROJECTS } from "@/lib/data";


export default function Projects(){


const [active,setActive]=useState(0);



const nextProject=()=>{

setActive((prev)=>

prev === PROJECTS.length - 1
?
0
:
prev + 1

);

};





const getIndex=(offset:number)=>{

let index = active + offset;


while(index >= PROJECTS.length){

index -= PROJECTS.length;

}


return index;

};








function ProjectCard({

index,
position,
activeCard=false


}:{

index:number;
position:number;
activeCard?:boolean;

}){


const project = PROJECTS[index];



return(


<motion.div



initial={{

y:position * 25,

scale:1-position*0.04,

opacity:activeCard ? 1 : 0.65

}}



animate={{

y:position * 25,

scale:1-position*0.04,

opacity:activeCard ? 1 : 0.65

}}



exit={

activeCard

?

{

y:-600,
opacity:0,
scale:0.92,
rotateX:-15

}

:

undefined

}



transition={{

duration:0.65,

ease:[0.22,1,0.36,1]

}}




onClick={activeCard ? nextProject : undefined}



className={`

absolute

inset-0



rounded-tl-[60px]

rounded-br-[60px]

rounded-tr-none

rounded-bl-none




border

border-white/20




bg-white/[0.06]


backdrop-blur-2xl



p-12




shadow-[0_30px_90px_rgba(0,0,0,0.55)]



overflow-hidden



${

activeCard

?

"z-30 cursor-pointer"

:

"z-10"

}

`}


>








{/* GOLD GLASS SHINE */}



<div

className="

absolute

inset-0


bg-gradient-to-br

from-white/20

via-transparent

to-[#FCA311]/20


pointer-events-none

"

/>








<div

className="

relative

z-10

"

>









{/* NUMBER BOX */}



<div

className="

relative

flex

h-16

w-16


items-center

justify-center


overflow-hidden


rounded-2xl



border

border-[#FCA311]/40



bg-gradient-to-br


from-[#FCA311]

to-[#d97706]



font-bold


text-xl


text-black



shadow-[0_15px_40px_rgba(252,163,17,0.45)]

"

>


{String(index+1).padStart(2,"0")}






<div

className="

absolute

inset-0


bg-gradient-to-tr

from-white/50

via-transparent

to-transparent

"

/>


</div>









<h3

className="

mt-8

text-4xl

font-extrabold

text-white

"

>

{project.title}

</h3>









<p

className="

mt-5

max-w-3xl

text-lg

leading-8

text-[#E5E5E5]

"

>

{project.description}

</p>









{/* BUTTON */}



<button

onClick={(e)=>{

e.stopPropagation();

}}


className="

mt-10


rounded-xl


bg-[#FCA311]


px-8


py-4


font-semibold


text-black



shadow-[0_15px_40px_rgba(252,163,17,0.35)]


transition-all


hover:scale-105


hover:bg-[#ffb733]

"

>

View Project →

</button>






</div>








</motion.div>


)


}











return(


<section

id="projects"

className="

relative

overflow-hidden


bg-gradient-to-b

from-black

via-[#14213D]

to-black


py-32

text-white

"

>








{/* GOLD GLOW */}



<div

className="

absolute

top-0

left-1/2


-translate-x-1/2


h-[300px]


w-[700px]


rounded-full


bg-[#FCA311]/10


blur-[150px]

"

/>







<div className="container-x">








{/* HEADER */}



<div className="text-center">



<p

className="

text-sm

uppercase

tracking-[0.35em]


font-bold


text-[#FCA311]

"

>

Portfolio

</p>








<h2

className="

mt-5

text-5xl

font-extrabold

"

>

Our Projects

</h2>









<p

className="

mt-5

text-lg

text-[#E5E5E5]

"

>

Innovative software products developed for industrial automation,
engineering and business applications.

</p>





</div>









{/* STACK */}



<div

className="

mt-20

relative

mx-auto


h-[430px]


max-w-[1100px]

"


style={{

perspective:"1200px"

}}

>






<AnimatePresence mode="popLayout">



<ProjectCard

index={getIndex(2)}

position={2}

/>






<ProjectCard

index={getIndex(1)}

position={1}

/>






<ProjectCard

index={active}

position={0}

activeCard

/>





</AnimatePresence>



</div>









<p

className="

mt-10

text-center

text-sm

text-[#E5E5E5]

"

>

Click the card to explore next project

</p>






</div>


</section>


);

}