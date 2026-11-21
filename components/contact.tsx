"use client";

import { useState } from "react";


const SERVICES=[
"Web Development",
"AI Chatbot Development",
"Custom Software Development",
"Automation Solutions",
"CRM Integration",
"Power BI Dashboard",
"Digital Transformation",
"Cloud Solutions",
"Enterprise Software",
"Maintenance & Support"
];


const TIMELINE=[
"Immediate",
"1-3 Months",
"3-6 Months",
"6+ Months",
"Just Exploring"
];



export default function Contact(){

const [loading,setLoading]=useState(false);

const [serviceOpen,setServiceOpen]=useState(false);


const [form,setForm]=useState<any>({
name:"",
company:"",
email:"",
phone:"",
services:[],
timeline:"",
message:""
});



const inputStyle=
"w-full rounded-xl border border-gray-300 bg-gray-50 px-5 py-4 text-black outline-none focus:border-[#FCA311] focus:ring-2 focus:ring-[#FCA311]/20";



const handleChange=(e:any)=>{

setForm({
...form,
[e.target.name]:e.target.value
});

};



const handleService=(service:string)=>{

setForm((prev:any)=>({

...prev,

services:prev.services.includes(service)

?

prev.services.filter((x:string)=>x!==service)

:

[...prev.services,service]

}));

};



const submitForm=async(e:any)=>{

e.preventDefault();

setLoading(true);


try{

await fetch("/api/contact",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(form)

});


alert("Thank you! We will contact you soon.");


setForm({
name:"",
company:"",
email:"",
phone:"",
services:[],
timeline:"",
message:""
});


}
catch{

alert("Something went wrong");

}

finally{

setLoading(false);

}

};




return(

<section
id="contact"
className="bg-white py-28 text-black"
>


<div className="container-x">



<div className="mb-16 text-center">

<p className="font-semibold uppercase tracking-[0.35em] text-[#FCA311]">
Contact Us
</p>


<h2 className="mt-5 text-5xl font-extrabold">
Let's Build Something Great
</h2>


<p className="mt-5 text-lg text-gray-600">
Have a project idea? Let's discuss how we can create powerful digital solutions together.
</p>

</div>





<div className="grid gap-14 lg:grid-cols-2">





{/* LEFT */}


<div>


<h3 className="text-4xl font-extrabold">
Get In Touch
</h3>



<div className="mt-10 space-y-8">


<div>
<p className="text-sm font-semibold uppercase text-[#FCA311]">
Email
</p>

<p className="mt-2 text-xl">
enquiry@indigentech.com
</p>
</div>



<div>
<p className="text-sm font-semibold uppercase text-[#FCA311]">
Phone
</p>

<p className="mt-2 text-xl">
+91 90750 00427
</p>
</div>




<div>
<p className="text-sm font-semibold uppercase text-[#FCA311]">
Location
</p>

<p className="mt-2 text-xl">
Baner, Maharashtra, India
</p>
</div>


</div>





<div className="mt-12 overflow-hidden rounded-3xl border border-gray-200 shadow-xl">

<iframe

src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2580295033003!2d73.7837066!3d18.5624023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2becde2274201%3A0xe4a108f6a3e26367!2sIndigen%20Technologies!5e0!3m2!1sen!2sin!4v1793012472920!5m2!1sen!2sin"

width="100%"
height="350"
loading="lazy"
className="border-0"

/>

</div>



</div>







{/* FORM */}



<form

onSubmit={submitForm}

className="rounded-3xl border border-gray-200 bg-white p-10 shadow-[0_20px_60px_rgba(0,0,0,.08)]"

>



<div className="grid gap-5 md:grid-cols-2">


<input
name="name"
placeholder="Your Name"
value={form.name}
onChange={handleChange}
className={inputStyle}
/>


<input
name="company"
placeholder="Company Name"
value={form.company}
onChange={handleChange}
className={inputStyle}
/>


</div>





<div className="mt-5 grid gap-5 md:grid-cols-2">


<input
name="email"
placeholder="Email Address"
value={form.email}
onChange={handleChange}
className={inputStyle}
/>


<input
name="phone"
placeholder="Phone Number"
value={form.phone}
onChange={handleChange}
className={inputStyle}
/>


</div>







{/* SERVICE DROPDOWN */}


<div className="mt-6 relative">


<button

type="button"

onClick={()=>setServiceOpen(!serviceOpen)}

className="w-full flex justify-between items-center rounded-xl border border-gray-300 bg-gray-50 px-5 py-4"

>


<span>

{

form.services.length

?

form.services.join(", ")

:

"Select Services"

}

</span>


<span className={serviceOpen?"rotate-180":"rotate-0"}>

⌄

</span>


</button>





{

serviceOpen &&

<div className="absolute z-20 mt-2 w-full rounded-xl border bg-white p-3 shadow-xl">


{

SERVICES.map((service)=>(


<label

key={service}

className="flex gap-3 rounded-lg px-3 py-3 hover:bg-gray-100 cursor-pointer"

>


<input

type="checkbox"

checked={form.services.includes(service)}

onChange={()=>handleService(service)}

/>


{service}


</label>


))


}


</div>

}


</div>







<select

name="timeline"

value={form.timeline}

onChange={handleChange}

className={inputStyle+" mt-5"}

>


<option value="">
Project Timeline
</option>


{

TIMELINE.map(t=>(

<option key={t}>
{t}
</option>

))

}


</select>






<textarea

name="message"

rows={5}

placeholder="Tell us about your project"

value={form.message}

onChange={handleChange}

className={inputStyle+" mt-5"}

/>






<button

disabled={loading}

className="mt-6 w-full rounded-xl bg-[#FCA311] py-4 font-bold text-black hover:bg-[#ffb733] transition"

>


{

loading

?

"Sending..."

:

"Send Message →"

}


</button>




</form>




</div>


</div>


</section>

)

}