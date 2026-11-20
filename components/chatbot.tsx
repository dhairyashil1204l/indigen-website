"use client";

import { useState, useRef, useEffect } from "react";
import { MessageCircle, X, Send } from "lucide-react";
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





{/* FLOATING BUTTON */}


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


flex

h-16

w-16

items-center

justify-center



rounded-full



bg-gradient-to-br

from-blue-400

via-blue-600

to-blue-800



border

border-white/30



shadow-[0_15px_45px_rgba(37,99,235,0.55)]



text-white


overflow-hidden

"

>


{/* glossy shine */}


<div

className="

absolute

top-0

left-0

h-1/2

w-full

bg-gradient-to-b

from-white/50

to-transparent

"

/>



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

duration:0.25

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

border-blue-300/30



bg-[#071426]/95



backdrop-blur-2xl



shadow-[0_30px_100px_rgba(37,99,235,0.35)]



flex

flex-col

"

>









{/* HEADER */}



<div

className="

relative

overflow-hidden

px-6

py-5



bg-gradient-to-r

from-[#2563EB]

to-[#06B6D4]

text-white

"

>


{/* shine */}


<div

className="

absolute

inset-0

bg-gradient-to-br

from-white/40

via-transparent

to-transparent

"

/>




<div className="relative flex items-center gap-3">


<div

className="

h-11

w-11

rounded-full

bg-white/20

border

border-white/30

flex

items-center

justify-center

backdrop-blur-xl

"

>

🤖

</div>



<div>


<h3

className="

font-bold

text-lg

"

>

Indigen AI Assistant

</h3>



<p

className="

text-xs

text-blue-100

"

>

● Online

</p>


</div>


</div>


</div>









{/* CHAT AREA */}



<div

className="

flex-1

overflow-y-auto

p-5

space-y-4

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



border



${
msg.role==="user"


?

"bg-gradient-to-r from-blue-600 to-cyan-500 text-white border-blue-400/30 rounded-br-sm shadow-lg"


:


"bg-white/10 text-slate-100 border-white/10 rounded-bl-sm backdrop-blur-xl"


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

rounded-2xl

bg-blue-500/10

border

border-blue-400/20

px-4

py-3

text-sm

text-blue-200

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

border-white/10

p-4

flex

gap-3

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


bg-white/10


border

border-white/20


px-4

py-3


text-white


outline-none


placeholder:text-slate-400


focus:border-cyan-400

"

/>







<button


onClick={sendMessage}

disabled={loading}


className="

relative

overflow-hidden


h-12

w-12


rounded-xl



bg-gradient-to-br

from-blue-500

to-cyan-400



text-white


flex

items-center

justify-center



shadow-[0_10px_30px_rgba(6,182,212,0.45)]

"

>


<div

className="

absolute

top-0

left-0

h-1/2

w-full

bg-white/30

"

/>



<Send size={20}/>


</button>




</div>







</motion.div>


}



</AnimatePresence>



</>

)

}