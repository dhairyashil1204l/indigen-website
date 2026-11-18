import {supabase} from "@/lib/supabase";
import { sendLeadEmail } from "./sendLeadEmail";


export async function savechatbotLead(data:any){


    const {error} = await supabase
       .from("chatbot_leads")
       .insert([

        {

            name:data.name,

            company:data.company,

            email:data.email,

            phone:data.phone,

            requirement:data.requirement

        }

    ]);

    if(error){

        console.error(
            "Lead save error:",
            error
        );

        return false;

    }

    await sendLeadEmail(data);

    return true;
}