import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { supabase } from "@/lib/supabase";


export async function POST(req:Request){

try{


const {
name,
company,
email,
phone,
services,
timeline,
message

}=await req.json();



// SAVE TO DATABASE

const {error}=await supabase
.from("contacts")
.insert([

{
name,
company,
email,
phone,
services: services?.join(", "),
timeline,
message
}

]);



if(error){

console.log(
"SUPABASE ERROR:",
error
);

throw error;

}




// SEND EMAIL


const transporter = nodemailer.createTransport({

host:process.env.SMTP_HOST,

port:587,

secure:false,


auth:{

user:process.env.SMTP_USER,

pass:process.env.SMTP_PASS

},


tls:{
rejectUnauthorized:false
}


});





await transporter.sendMail({

from:
`"Indigen Website" <${process.env.SMTP_USER}>`,


to:
process.env.CONTACT_EMAIL,


replyTo:
email,


subject:
"New Website Inquiry - Indigen Technologies",


html:`

<h2>New Inquiry</h2>

<p>
<b>Name:</b> ${name}
</p>


<p>
<b>Company:</b> ${company}
</p>


<p>
<b>Email:</b> ${email}
</p>


<p>
<b>Phone:</b> ${phone}
</p>


<p>
<b>Services:</b> ${services?.join(", ")}
</p>


<p>
<b>Timeline:</b> ${timeline}
</p>


<p>
<b>Message:</b> ${message}
</p>

`

});




return NextResponse.json({

success:true,
message:"Submitted Successfully"

});



}
catch(error:any){


console.log(
"CONTACT ERROR:",
error.message
);



return NextResponse.json({

success:false,

message:error.message

},
{
status:500
});


}


}