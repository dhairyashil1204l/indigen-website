import nodemailer from "nodemailer";

export async function sendLeadEmail(lead:any){

    try{

        const transporter = nodemailer.createTransport({

            host: process.env.SMTP_HOST,

            port: Number(process.env.SMTP_PORT),

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

            from: process.env.SMTP_USER,

            to: process.env.CONTACT_EMAIL,

            subject:
            "New Chatbot Lead Received - Indigen Technologies",


            html:`
            
            <h2>New Chatbot Lead</h2>
            
            <p><b>Name:</b>${lead.name}</p>
            
            <p><b>Company::</b>${lead.company}</p>
            
            <p><b>Email:</b>${lead.email}</p>
            
            <p><b>Phone:</b>${lead.phone}</p>
            
            <p><b>Requirement:</b>${lead.requirement}</p>`

            
        });

        console.log(
            "Lead email send successfully"
        );

        return true;


    }

    catch(error){

        console.error(

            "Lead email error:",
            error
        );

        return false;
    }
}