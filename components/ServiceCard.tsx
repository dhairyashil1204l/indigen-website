interface ServiceCardProps {
  title: string;
  items: readonly string[];
}


export default function ServiceCard({
  title,
  items,
}: ServiceCardProps) {


return (

<div

className="
group
relative
overflow-hidden
rounded-3xl
border
border-white/10
bg-white/[0.05]
p-8
backdrop-blur-xl
transition-all
duration-300
hover:-translate-y-2
hover:border-blue-400/40
hover:bg-white/[0.08]
"

>


{/* Glow Effect */}

<div

className="
absolute
right-0
top-0
h-32
w-32
rounded-full
bg-blue-500/20
blur-3xl
opacity-0
transition
duration-500
group-hover:opacity-100
"

 />




<div className="relative">


<h3

className="
text-2xl
font-bold
text-white
"

>

{title}

</h3>





<ul

className="
mt-6
space-y-4
"

>


{
items.map((item)=>(


<li

key={item}

className="
flex
items-start
gap-4
text-slate-300
"

>


<span

className="
mt-2
h-2.5
w-2.5
shrink-0
rounded-full
bg-blue-400
shadow-[0_0_12px_rgba(59,130,246,0.8)]
"

/>



<span

className="
leading-7
"

>

{item}

</span>


</li>


))

}


</ul>





<button

className="
mt-8
flex
items-center
gap-2
text-sm
font-semibold
text-blue-400
transition-all
group-hover:gap-4
"

>

Explore Solution

<span>
→
</span>

</button>



</div>



</div>


);

}