import Link from "next/link";


export default function Footer(){


return (


<footer

className="
bg-[#091F5C]
text-white
"

>


<div className="
container-x
py-16
">



<div

className="
grid
gap-10
md:grid-cols-2
lg:grid-cols-4
"

>





{/* COMPANY */}


<div>


<h3

className="
text-2xl
font-extrabold
"

>

INDIGEN

</h3>


<p

className="
mt-1
text-sm
tracking-[0.35em]
text-[#7096D1]
"

>

TECHNOLOGIES

</p>



<p

className="
mt-5
leading-7
text-slate-300
"

>

Engineering intelligent software solutions
for manufacturing, automation and enterprise
transformation.

</p>


</div>







{/* QUICK LINKS */}


<div>


<h4

className="
text-lg
font-semibold
"

>

Quick Links

</h4>



<ul

className="
mt-5
space-y-3
text-slate-300
"

>


<li>

<Link

className="hover:text-[#7096D1]"

href="#about"

>

About Us

</Link>

</li>



<li>

<Link

className="hover:text-[#7096D1]"

href="#services"

>

Services

</Link>

</li>



<li>

<Link

className="hover:text-[#7096D1]"

href="#projects"

>

Projects

</Link>

</li>




<li>

<Link

className="hover:text-[#7096D1]"

href="#contact"

>

Contact

</Link>

</li>



</ul>


</div>









{/* SERVICES */}



<div>


<h4

className="
text-lg
font-semibold
"

>

Services

</h4>



<ul

className="
mt-5
space-y-3
text-slate-300
"

>


<li>Software Development</li>

<li>AI & Automation</li>

<li>Industrial Solutions</li>

<li>Enterprise Software</li>



</ul>



</div>









{/* CONTACT */}



<div>


<h4

className="
text-lg
font-semibold
"

>

Contact

</h4>



<div

className="
mt-5
space-y-4
text-slate-300
"

>


<p>

📍 Pune, Maharashtra, India

</p>


<p>

✉ enquiry@indigentech.com

</p>



<p>

☎ +91 9075000427

</p>


</div>



</div>





</div>










{/* MAP */}


<div

className="
mt-12
overflow-hidden
rounded-3xl
border
border-[#334DAF]
"

>


<iframe


src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2580295033003!2d73.7837066!3d18.5624023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2becde2274201%3A0xe4a108f6a3e26367!2sIndigen%20Technologies!5e0!3m2!1sen!2sin!4v1793012472920!5m2!1sen!2sin"


width="100%"

height="350"

loading="lazy"

className="
w-full
border-0
"


allowFullScreen


referrerPolicy="strict-origin-when-cross-origin"


/>


</div>





</div>








{/* COPYRIGHT */}



<div

className="
border-t
border-white/20
py-5
text-center
text-sm
text-slate-300
"

>


© 2026 Indigen Technologies. All Rights Reserved.


</div>





</footer>


);


}