"use client";

import { useState } from "react";


export default function Contact(){


const [loading,setLoading]=useState(false);



const [form,setForm]=useState({

name:"",
company:"",
email:"",
phone:"",
message:""

});





const handleChange=(e:any)=>{

setForm({

...form,

[e.target.name]:e.target.value

});

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
message:""

});


}

catch(error){

alert("Something went wrong");

}


finally{

setLoading(false);

}


};







return(

<section

id="contact"

className="
relative
overflow-hidden
bg-[#050B1C]
py-28
text-white
"

>


{/* Background Glow */}


<div

className="
absolute
left-1/2
top-0
h-[450px]
w-[450px]
-translate-x-1/2
rounded-full
bg-blue-600/20
blur-[140px]
"

/>







<div className="container-x relative">








{/* Heading */}



<div

className="
mb-16
text-center
"

>


<p

className="
font-semibold
uppercase
tracking-[0.35em]
text-cyan-400
"

>

Contact Us

</p>





<h2

className="
mt-5
text-5xl
font-extrabold
"

>

Let's Build Something Great

</h2>






<p

className="
mt-5
text-lg
text-slate-300
"

>

Have a project idea? Let's discuss how we can create
powerful digital solutions together.

</p>



</div>









<div

className="
grid
gap-14
lg:grid-cols-2
"

>









{/* LEFT CONTENT */}



<div

className="
flex
flex-col
justify-center
"

>



<h3

className="
text-4xl
font-extrabold
"

>

Get In Touch

</h3>





<p

className="
mt-5
max-w-lg
leading-8
text-slate-300
"

>

Whether you need enterprise software,
industrial automation solutions or digital
transformation services, our team is ready
to help you.

</p>








<div

className="
mt-10
space-y-8
"

>







<div>


<p

className="
text-sm
font-semibold
uppercase
tracking-wider
text-cyan-400
"

>

Email

</p>


<p

className="
mt-2
text-xl
font-medium
"

>

enquiry@indigentech.com

</p>


</div>








<div>


<p

className="
text-sm
font-semibold
uppercase
tracking-wider
text-cyan-400
"

>

Phone

</p>


<p

className="
mt-2
text-xl
font-medium
"

>

+91 90750 00427

</p>


</div>








<div>


<p

className="
text-sm
font-semibold
uppercase
tracking-wider
text-cyan-400
"

>

Location

</p>


<p

className="
mt-2
text-xl
font-medium
"

>

Baner, Maharastra, India

</p>


</div>






</div>







</div>













{/* FORM */}



<form

onSubmit={submitForm}

className="
rounded-3xl
border
border-white/20

bg-white/[0.08]

backdrop-blur-2xl

p-10

shadow-[0_25px_80px_rgba(0,0,0,0.35)]

"

>






<div

className="
grid
gap-5
md:grid-cols-2
"

>





<input

name="name"

placeholder="Your Name"

value={form.name}

onChange={handleChange}

className="
rounded-xl
border
border-white/20
bg-white/10
px-5
py-4
text-white
outline-none
placeholder:text-slate-400
focus:border-cyan-400
"

/>







<input

name="company"

placeholder="Company Name"

value={form.company}

onChange={handleChange}

className="
rounded-xl
border
border-white/20
bg-white/10
px-5
py-4
text-white
outline-none
placeholder:text-slate-400
focus:border-cyan-400
"

/>



</div>








<input

name="email"

placeholder="Email Address"

value={form.email}

onChange={handleChange}

className="
mt-5
w-full
rounded-xl
border
border-white/20
bg-white/10
px-5
py-4
text-white
outline-none
placeholder:text-slate-400
focus:border-cyan-400
"

/>








<input

name="phone"

placeholder="Phone Number"

value={form.phone}

onChange={handleChange}

className="
mt-5
w-full
rounded-xl
border
border-white/20
bg-white/10
px-5
py-4
text-white
outline-none
placeholder:text-slate-400
focus:border-cyan-400
"

/>








<textarea

name="message"

rows={5}

placeholder="Tell us about your project"

value={form.message}

onChange={handleChange}

className="
mt-5
w-full
rounded-xl
border
border-white/20
bg-white/10
px-5
py-4
text-white
outline-none
placeholder:text-slate-400
focus:border-cyan-400
"

/>









<button

disabled={loading}

className="
mt-6
w-full
rounded-xl

bg-gradient-to-r

from-blue-500

to-cyan-400


py-4

font-bold

text-white


transition

hover:scale-[1.02]

disabled:opacity-50

"

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