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







{/* CHAT BUTTON */}



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



overflow-hidden



border

border-white/30



bg-gradient-to-br

from-blue-500

via-blue-700

to-[#14213D]



shadow-[0_15px_45px_rgba(37,99,235,0.45)]



flex

items-center

justify-center

text-white

"

>


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

border-blue-400/30



bg-[#071426]/95



backdrop-blur-2xl



shadow-[0_30px_100px_rgba(37,99,235,0.35)]



flex

flex-col

"

>


{/* ROBOT BACKGROUND */}



<div

className="

absolute

inset-0

bg-cover

bg-center

opacity-[0.18]

"

style={{

backgroundImage:

"url('/images/robotbg.jpg')"

}}

/>







<div

className="

absolute

inset-0

bg-gradient-to-b

from-[#071426]/40

via-[#071426]/80

to-[#071426]

"

/>









{/* HEADER */}



<div

className="

relative

z-10

px-6

py-5


bg-gradient-to-r

from-blue-600

via-blue-500

to-cyan-500


text-white


overflow-hidden

"

>



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

h-12

w-12

rounded-full


bg-white/20


border

border-white/40


flex

items-center

justify-center


backdrop-blur-xl

"

>

🤖

</div>




<div>


<h3 className="font-bold text-lg">

Indigen AI Assistant

</h3>


<p className="text-xs text-blue-100">

● Online

</p>



</div>


</div>


</div>









{/* CHAT AREA */}



<div

className="

relative

z-10

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

"bg-blue-600 text-white border-blue-300/30 rounded-br-sm"


:

"bg-white/10 text-white border-white/20 backdrop-blur-xl rounded-bl-sm"

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

bg-blue-500/20

border

border-blue-300/30

px-4

py-3

text-sm

text-blue-100

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

relative

z-10

border-t

border-white/10

p-4

flex

gap-3

bg-black/20

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

focus:border-blue-400

"

 />






<button


onClick={sendMessage}

disabled={loading}


className="

h-12

w-12


rounded-xl



bg-gradient-to-br

from-blue-500

to-cyan-400



flex

items-center

justify-center



text-white



shadow-lg

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