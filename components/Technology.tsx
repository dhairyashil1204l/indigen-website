export default function Technologies() {


const technologyGroups = [

{
title:"Programming Language",
technologies:[
"C",
"C++",
"Java",
"C#",
"Python",
"JavaScript"
]
},


{
title:"Web & Application Development",
technologies:[
"ReactJS",
"React Native",
"HTML5",
"CSS",
"REST APIs",
"SOAP",
"ASP.NET",
"C#.NET",
"Spring Framework",
"Spring Boot"
]
},


{
title:"Enterprise & Backend Technologies",
technologies:[
"J2EE",
".NET",
"Microservices Development",
"Middleware Development"
]
},


{
title:"Desktop & Cross Platform Development",
technologies:[
"MFC",
"ATL",
"STL",
"Win32",
"WPF",
"WCF",
"Java Swing",
"JavaFX",
"WxWidgets"
]
},


{
title:"Industrial Automation & Communication",
technologies:[
"LabVIEW",
"OPC",
"Socket Programming",
"Modbus RTU/TCP",
"Serial Communication",
"S7 Protocol",
"PLC Ladder Programming"
]
},


{
title:"Graphics & Visualization",
technologies:[
"OpenGL",
"DirectX",
"VTK",
"QT"
]
},


{
title:"Image Processing & AI",
technologies:[
"OpenCV",
"ITK",
"AI Agents Development"
]
},


{
title:"Database",
technologies:[
"MS SQL",
"MySQL",
"MS Access",
"MongoDB"
]
},


{
title:"Operating Systems & Platforms",
technologies:[
"Windows",
"CentOS",
"Ubuntu",
"Windows Embedded",
"Torizon OS"
]
},


{
title:"Application Services",
technologies:[
"IIS",
"Apache Tomcat",
"J2EE",
"SFDC"
]
}


];



return (


<section

id="technologies"

className="
py-24
bg-[#F9FBFF]
dark:bg-[#050B1C]
"

>


<div className="container-x">



<div className="text-center mb-14">


<p className="
mb-3
font-semibold
text-[#334DAF]
">

Technology Stack

</p>



<h2

className="
text-4xl
font-extrabold
text-[#091F5C]
lg:text-5xl
dark:text-white
"

>

Technologies We Work With

</h2>



<p

className="
mt-4
text-lg
text-slate-600
dark:text-slate-300
"

>

Modern technologies powering enterprise applications and industrial solutions.

</p>



</div>







<div

className="
grid
gap-8
md:grid-cols-2
lg:grid-cols-3
"

>



{technologyGroups.map((group,index)=>(



<div

key={index}

className="

group

rounded-3xl

border

border-[#D0E4FE]

bg-white

p-6

shadow-card

transition-all

duration-300

hover:-translate-y-2

dark:border-[#334DAF]

dark:bg-[#091F5C]

"

>



<h3

className="
mb-5
text-xl
font-bold
text-[#091F5C]
dark:text-white
"

>

{group.title}

</h3>







<div

className="
flex
flex-wrap
gap-2
"

>



{group.technologies.map((tech)=>(



<span

key={tech}

className="

rounded-full

border

border-[#D0E4FE]

bg-[#E8F2FE]

px-3

py-2

text-sm

font-medium

text-[#334DAF]

transition

hover:bg-[#334DAF]

hover:text-white

dark:border-[#7096D1]

dark:bg-[#102A63]

dark:text-[#D0E4FE]

"

>

{tech}

</span>



))}



</div>





<div

className="
mt-6
h-1
w-10
rounded-full
bg-[#7096D1]
transition-all
group-hover:w-20
"

/>



</div>



))}



</div>



</div>


</section>


);

}
