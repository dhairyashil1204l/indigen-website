import { serviceCategories } from "@/data/services";
import Link from "next/link";


export default function ServiceDetailPage({

  params,

}: {

  params:{
    slug:string
  }

}) {


  let service:any = null;


  serviceCategories.forEach((category)=>{

    const found = category.services.find(

      (item)=>item.slug === params.slug

    );


    if(found){

      service = found;

    }

  });



  if(!service){

    return(

      <div className="p-10">

        <h1 className="text-3xl font-bold">
          Service Not Found
        </h1>

      </div>

    )

  }




return (

<div className="max-w-5xl mx-auto px-6 py-20">



<h1 className="text-4xl font-bold">

{service.title}

</h1>




<p className="mt-6 text-lg text-gray-600">

{service.description}

</p>





<h2 className="text-2xl font-bold mt-10">

Key Features

</h2>




<ul className="mt-5 space-y-3">


{

service.points.map((point:string)=>(


<li key={point}>

✓ {point}

</li>


))

}


</ul>






{

service.pdf && (

<a

href={service.pdf}

target="_blank"

className="
inline-block
mt-10
bg-red-600
text-white
px-6
py-3
rounded-lg
"

>

View Project PDF

</a>

)

}




<Link

href="/contact"

className="
inline-block
mt-10
ml-4
border
px-6
py-3
rounded-lg
"

>

Contact Us

</Link>



</div>

)


}