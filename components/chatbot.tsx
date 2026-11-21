"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";


interface Message {

role:"user" | "assistant";

content:string;

lead?:{

name?:string;

company?:string;

email?:string;

phone?:string;

requirement?:string;

};

}



export default function Chatbot(){


const [open,setOpen]=useState(false);

const [loading,setLoading]=useState(false);

const [input,setInput]=useState("");

const messagesEndRef=useRef<HTMLDivElement>(null);





const [messages,setMessages]=useState<Message[]>([

{

role:"assistant",

content:
"Welcome to Indigen Technologies. 👋\n\nHow can I help you today?"

}

]);







useEffect(()=>{

messagesEndRef.current?.scrollIntoView({

behavior:"smooth"

});

},[messages,loading]);









const sendMessage=async()=>{


if(!input.trim() || loading) return;



const userText=input;



setMessages(prev=>[

...prev,

{

role:"user",

content:userText

}

]);



setInput("");

setLoading(true);





try{


const res=await fetch("/api/chatbot",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

message:userText,

history:messages

})

});





const data=await res.json();





if(!res.ok){

throw new Error(data.error);

}





setMessages(prev=>[

...prev,

{

role:"assistant",

content:data.reply,

lead:data.lead

}

]);




}

catch{


setMessages(prev=>[

...prev,

{

role:"assistant",

content:"Sorry, I am unable to respond right now."

}

]);


}


finally{

setLoading(false);

}


};











return(

<>







{/* FLOAT BUTTON */}



<motion.button


whileHover={{
scale:1.1
}}


whileTap={{
scale:0.95
}}



onClick={()=>setOpen(!open)}


className="

fixed

bottom-8

right-8

z-50



h-16

w-16



rounded-full



flex

items-center

justify-center



overflow-hidden



border

border-white/40



bg-[#FCA311]



text-black



shadow-[0_15px_45px_rgba(252,163,17,0.45)]

"

>


<div className="absolute inset-0 bg-gradient-to-br from-white/60 via-transparent to-transparent"/>


<div className="relative">


{

open

?

<X size={28}/>

:

<MessageCircle size={30}/>

}


</div>


</motion.button>









<AnimatePresence>


{

open &&



<motion.div


initial={{

opacity:0,

y:40,

scale:0.9

}}



animate={{

opacity:1,

y:0,

scale:1

}}



exit={{

opacity:0,

y:40,

scale:0.9

}}



transition={{

duration:0.3

}}




className="

fixed

bottom-28

right-6

z-50


w-[calc(100%-48px)]

sm:w-[390px]



h-[560px]



rounded-3xl



overflow-hidden



border

border-gray-200



bg-white



shadow-[0_30px_100px_rgba(0,0,0,0.25)]



flex

flex-col

"

>









{/* HEADER */}



<div

className="

relative

px-6

py-5

bg-[#FCA311]

text-black

"

>



<div className="flex items-center gap-3">



<div

className="

h-12

w-12

rounded-full

bg-white

border

border-black/10

flex

items-center

justify-center

overflow-hidden

"

>


<Image

src="/images/Finllogo.png"

alt="logo"

width={45}

height={45}

className="object-contain"

/>


</div>





<div>


<h3 className="font-extrabold text-lg">

Indigen AI Assistant

</h3>


<p className="text-xs text-black/70">

● Online

</p>



</div>


</div>


</div>









{/* MESSAGES */}



<div

className="

flex-1

overflow-y-auto

p-5

space-y-4

bg-gray-50

"

>


{

messages.map((msg,index)=>(


<div

key={index}

className={`flex ${
msg.role==="user"

?

"justify-end"

:

"justify-start"

}`}

>


<div


className={`

max-w-[85%]

rounded-2xl

px-4

py-3

text-sm

leading-6

whitespace-pre-wrap

shadow-sm



${
msg.role==="user"

?

"bg-[#FCA311] text-black rounded-br-sm"

:

"bg-white text-gray-800 border border-gray-200 rounded-bl-sm"

}

`}

>


{msg.content}


</div>


</div>


))


}





{

loading &&

<div

className="

w-fit

rounded-xl

bg-[#FCA311]/20

px-4

py-3

text-sm

text-gray-700

"

>

Thinking...

</div>


}




<div ref={messagesEndRef}/>


</div>









{/* INPUT */}



<div

className="

border-t

border-gray-200

p-4

flex

gap-3

bg-white

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

h-12

resize-none

rounded-xl

bg-gray-100

border

border-gray-300

px-4

py-3

text-black

outline-none

focus:border-[#FCA311]

"

 />






<button


onClick={sendMessage}

disabled={loading}


className="

h-12

w-12


rounded-xl



bg-[#FCA311]



flex

items-center

justify-center



text-black



shadow-lg

hover:scale-105

transition

"

>


<Send size={20}/>


</button>



</div>








</motion.div>


}



</AnimatePresence>



</>

)

}