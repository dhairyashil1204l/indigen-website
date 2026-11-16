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




const timelineList = [
  "ASAP",
  "Within 1 Month",
  "1-3 Months",
  "Flexible",
];


export default function Contact() {


  const [formData,setFormData] = useState({

    name:"",
    company:"",
    email:"",
    phone:"",
    services:[] as string[],
    budget:"",
    timeline:"",
    message:""

  });


  const [status,setStatus] = useState("");



  const handleChange = (
    e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  )=>{


    setFormData({

      ...formData,

      [e.target.name]:e.target.value

    });


  };




  const handleServiceChange = (service:string)=>{


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





  const handleSubmit = async(e:React.FormEvent)=>{


    e.preventDefault();


    setStatus("Sending...");



    try{


      const res = await fetch("/api/contact",{

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


        setStatus(
          "Something went wrong."
        );


      }



    }

    catch(error){


      setStatus(
        "Failed to send message."
      );


    }



  };




return (

<section
id="contact"
className="bg-slate-50 py-24"
>


<div className="container-x">


<div className="grid gap-12 lg:grid-cols-2">



{/* LEFT */}

<div>


<h2
className="
text-4xl
font-extrabold
text-slate-900
"
>

Contact Us

</h2>



<p
className="
mt-4
text-lg
leading-8
text-slate-600
"
>

Have a project in mind? Let's discuss how
Indigen Technologies can help transform your business.

</p>




<div
className="
mt-8
space-y-5
text-slate-700
"
>


<p>

Indigen Technologies
<br/>
Pune, Maharashtra, India

</p>


<p>
✉ enquiry@indigentech.com
</p>


<p>
☎ +91 9075000427
</p>


</div>



</div>





{/* FORM */}


<div
className="
rounded-3xl
bg-white
p-8
shadow-xl
border
border-slate-200
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
px-4
py-3
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
px-4
py-3
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
px-4
py-3
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
px-4
py-3
"

/>





{/* SERVICES */}


<div>


<h4
className="
mb-3
font-semibold
text-slate-900
"
>

Services Interested In

</h4>


<div
className="
grid
sm:grid-cols-2
gap-3
"
>


{
servicesList.map((service)=>(


<label
key={service}
className="
flex
items-center
gap-2
text-sm
text-slate-700
"
>


<input

type="checkbox"

checked={
formData.services.includes(service)
}

onChange={()=>
handleServiceChange(service)
}

className="h-4 w-4"

/>


{service}


</label>


))

}


</div>


</div>












{/* TIMELINE */}


<select

name="timeline"

value={formData.timeline}

onChange={handleChange}

className="
w-full
rounded-xl
border
px-4
py-3
"

>

<option value="">
Project Timeline
</option>


{
timelineList.map((item)=>(

<option key={item}>
{item}
</option>

))
}


</select>





<textarea

name="message"

value={formData.message}

onChange={handleChange}

rows={5}

placeholder="Describe your project requirement"

className="
w-full
rounded-xl

border
px-4
py-3
"

/>





<button

type="submit"

className="
w-full
rounded-lg
bg-red-600
px-6
py-3
font-semibold
text-white
transition
duration-300
hover:bg-red-700
focus:ring-2
focus:ring-red-500
"

>

Send Inquiry

</button>





{
status && (

<p
className="
text-sm
text-red-600
"
>

{status}

</p>

)

}



</form>



</div>



</div>


</div>


</section>

);


}