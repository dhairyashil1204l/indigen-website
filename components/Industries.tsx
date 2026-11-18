import SectionHeading from "./SectionHeading";
import { INDUSTRIES } from "@/lib/data";


export default function Industries() {


return (

<section

id="industries"

className="
bg-[#F9FBFF]
py-20
md:py-24
dark:bg-[#050B1C]
"

>


<div className="container-x">



<SectionHeading

id="industries-heading"

title="Industries We Serve"

lead="Delivering software solutions across multiple industrial sectors with engineering expertise and innovation."

/>





<div

className="
mt-10
grid
gap-6
sm:grid-cols-2
lg:grid-cols-3
"

>



{INDUSTRIES.map((industry)=>(



<div


key={industry.title}


className="

group

rounded-2xl

border

border-[#D0E4FE]

bg-white

p-6

transition-all

duration-300

hover:-translate-y-2

hover:shadow-card

dark:border-[#334DAF]

dark:bg-[#091F5C]

"



>



<h3

className="

text-xl

font-bold

text-[#091F5C]

transition

group-hover:text-[#334DAF]

dark:text-white

dark:group-hover:text-[#7096D1]

"

>

{industry.title}

</h3>





<p

className="

mt-3

leading-7

text-slate-600

dark:text-slate-300

"

>

{industry.description}

</p>





<div

className="

mt-5

h-1

w-12

rounded-full

bg-[#334DAF]

transition-all

group-hover:w-20

"

></div>



</div>



))}



</div>



</div>


</section>


);

}