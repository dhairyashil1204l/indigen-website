"use client";

import { useState } from "react";


const servicesList = [
"Software Development",
"AI Chatbot & Automation",
"SaaS Solutions",
"Website Development",
"Mobile App Development",
"Industrial Automation",
"Power BI Dashboard",
"Digital Transformation",
"Cloud Solutions",
"SEO & Digital Marketing",
];


const timelineList=[
"ASAP",
"Within 1 Month",
"1-3 Months",
"Flexible",
];



export default function Contact(){


const [formData,setFormData]=useState({

name:"",
company:"",
email:"",
phone:"",
services:[] as string[],
budget:"",
timeline:"",
message:""

});


const [status,setStatus]=useState("");




const handleChange=(e:any)=>{

setFormData({

...formData,

[e.target.name]:e.target.value

});

};





const handleServiceChange=(service:string)=>{


setFormData({

...formData,

services:

formData.services.includes(service)

?

formData.services.filter(
(item)=>item!==service
)

:

[
...formData.services,
service
]

});


};







const handleSubmit=async(e:React.FormEvent)=>{


e.preventDefault();


setStatus("Sending...");


try{


const res=await fetch("/api/contact",{

method:"POST",

headers:{
"Content-Type":"application/json"
},

body:JSON.stringify(formData)

});



if(res.ok){

setStatus(
"Thank you! We will contact you soon."
);


setFormData({

name:"",
company:"",
email:"",
phone:"",
services:[],
budget:"",
timeline:"",
message:""

});


}
else{

setStatus("Something went wrong.");

}


}

catch{

setStatus(
"Failed to send message."
);

}



};







return(


<section

id="contact"

className="
bg-[#E8F2FE]
py-24
dark:bg-[#050B1C]
"

>


<div className="container-x">



<div className="grid gap-12 lg:grid-cols-2">







{/* LEFT */}


<div>


<p className="
font-semibold
text-[#334DAF]
">

Get In Touch

</p>



<h2

className="
mt-3
text-4xl
font-extrabold
text-[#091F5C]
dark:text-white
"

>

Let's Build Something
Great Together

</h2>





<p

className="
mt-5
text-lg
leading-8
text-slate-600
dark:text-slate-300
"

>

Have a project in mind? Let's discuss how
Indigen Technologies can help transform your business
with intelligent software solutions.

</p>







<div

className="
mt-8
rounded-3xl
bg-[#091F5C]
p-8
text-white
"

>



<p>

📍 Pune, Maharashtra, India

</p>


<p className="mt-4">

✉ enquiry@indigentech.com

</p>


<p className="mt-4">

☎ +91 9075000427

</p>



</div>



</div>









{/* FORM */}



<div

className="
rounded-3xl
border
border-[#D0E4FE]
bg-white
p-8
shadow-card
dark:border-[#334DAF]
dark:bg-[#091F5C]
"

>


<form

onSubmit={handleSubmit}

className="space-y-5"

>





<input

name="name"

value={formData.name}

onChange={handleChange}

placeholder="Your Name"

className="
w-full
rounded-xl
border
border-[#D0E4FE]
px-4
py-3
outline-none
focus:border-[#334DAF]
"

/>






<input

name="company"

value={formData.company}

onChange={handleChange}

placeholder="Company Name"

className="
w-full
rounded-xl
border
border-[#D0E4FE]
px-4
py-3
outline-none
focus:border-[#334DAF]
"

/>







<input

name="email"

type="email"

value={formData.email}

onChange={handleChange}

placeholder="Email Address"

className="
w-full
rounded-xl
border
border-[#D0E4FE]
px-4
py-3
outline-none
focus:border-[#334DAF]
"

/>







<input

name="phone"

value={formData.phone}

onChange={handleChange}

placeholder="Phone Number"

className="
w-full
rounded-xl
border
border-[#D0E4FE]
px-4
py-3
outline-none
focus:border-[#334DAF]
"

/>







<div>


<h4 className="
mb-3
font-semibold
text-[#091F5C]
dark:text-white
">

Services Interested In

</h4>



<div className="
grid
gap-3
sm:grid-cols-2
">


{servicesList.map(service=>(


<label

key={service}

className="
flex
gap-2
text-sm
text-slate-600
dark:text-slate-300
"

>


<input

type="checkbox"

checked={
formData.services.includes(service)
}

onChange={()=>handleServiceChange(service)}

className="accent-[#334DAF]"

/>


{service}


</label>


))}



</div>


</div>







<select

name="timeline"

value={formData.timeline}

onChange={handleChange}

className="
w-full
rounded-xl
border
border-[#D0E4FE]
px-4
py-3
"

>


<option value="">
Project Timeline
</option>


{timelineList.map(item=>(

<option key={item}>
{item}
</option>

))}


</select>









<textarea

name="message"

rows={5}

value={formData.message}

onChange={handleChange}

placeholder="Describe your project requirement"

className="
w-full
rounded-xl
border
border-[#D0E4FE]
px-4
py-3
"

/>









<button

className="
w-full
rounded-xl
bg-[#334DAF]
px-6
py-3
font-semibold
text-white
transition
hover:bg-[#091F5C]
"

>

Send Inquiry

</button>





{status && (

<p className="
text-sm
font-medium
text-[#334DAF]
">

{status}

</p>

)}



</form>


</div>






</div>



</div>


</section>


);


}