"use client";

import { useState, useRef, useEffect } from "react";


interface Message {

  role: "user" | "assistant";

  content: string;

  lead?: {

    name?: string;

    company?: string;

    email?: string;

    phone?: string;

    requirement?: string;

  };

}



export default function Chatbot() {


  const [open, setOpen] = useState(false);

  const [loading, setLoading] = useState(false);

  const [input, setInput] = useState("");


  const messagesEndRef = useRef<HTMLDivElement>(null);



  const [messages, setMessages] = useState<Message[]>([

    {

      role:"assistant",

      content:
      "Welcome to Indigen Technologies.\n\nHow can I help you today?"

    }

  ]);





  useEffect(()=>{

    messagesEndRef.current?.scrollIntoView({

      behavior:"smooth"

    });


  },[messages,loading]);







  const sendMessage = async () => {


    if(!input.trim() || loading) return;



    const userText = input;



    const userMessage:Message = {

      role:"user",

      content:userText

    };



    setMessages((prev)=>[

      ...prev,

      userMessage

    ]);



    setInput("");

    setLoading(true);



    try{


      const res = await fetch("/api/chatbot",{


        method:"POST",


        headers:{

          "Content-Type":"application/json"

        },


        body:JSON.stringify({


          message:userText,


          history:messages


        })


      });





      const data = await res.json();




      if(!res.ok){

        throw new Error(

          data.error || "Something went wrong"

        );

      }





      const assistantMessage:Message = {


        role:"assistant",


        content:data.reply,


        lead:data.lead


      };




      setMessages((prev)=>[


        ...prev,


        assistantMessage


      ]);



    }


    catch(error){


      setMessages((prev)=>[


        ...prev,


        {

          role:"assistant",

          content:
          "Sorry, I am unable to respond right now. Please try again."

        }


      ]);


    }


    finally{


      setLoading(false);


    }


  };







return (

<>


<button

onClick={()=>setOpen(!open)}

className="
fixed
bottom-6
right-6
h-16
w-16
rounded-full
bg-red-600
text-white
text-2xl
shadow-xl
hover:bg-red-700
transition
z-50
"

>

{open ? "✕" : "🤖"}

</button>





{open && (


<div

className="
fixed
bottom-24
right-4
sm:right-6
w-[calc(100%-32px)]
sm:w-[360px]
h-[550px]
bg-white
rounded-2xl
shadow-2xl
border
flex
flex-col
overflow-hidden
z-50
"

>


<div

className="
bg-red-600
text-white
p-4
"

>


<h3 className="font-bold">

Indigen AI Assistant

</h3>


<p className="text-xs">

Online

</p>


</div>






<div

className="
flex-1
overflow-y-auto
p-4
space-y-4
bg-slate-50
"

>


{messages.map((msg,index)=>(


<div

key={index}

className={`max-w-[85%] rounded-xl px-4 py-3 text-sm whitespace-pre-wrap ${
msg.role==="user"
?
"ml-auto bg-red-600 text-white"
:
"bg-white border text-gray-800"
}`}

>


{msg.content}


</div>


))}





{loading && (

<div

className="
bg-white
border
rounded-xl
px-4
py-3
text-sm
w-fit
"

>

Thinking...

</div>

)}




<div ref={messagesEndRef}/>


</div>






<div

className="
p-4
border-t
flex
gap-2
"

>


<textarea


value={input}


onChange={(e)=>setInput(e.target.value)}


onKeyDown={(e)=>{


if(e.key==="Enter" && !e.shiftKey){


e.preventDefault();


sendMessage();


}


}}



placeholder="Type your message..."


className="
flex-1
border
rounded-xl
px-4
py-3
resize-none
outline-none
"



/>




<button


onClick={sendMessage}


disabled={loading}


className="
px-5
rounded-xl
bg-red-600
text-white
disabled:opacity-50
"


>

Send

</button>


</div>



</div>


)}


</>

);


}