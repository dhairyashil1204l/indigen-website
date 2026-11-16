import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);



export async function POST(req: Request) {


  try {


    const { message } = await req.json();



    if (!message) {

      return NextResponse.json(
        {
          reply: "Please enter your message."
        }
      );

    }





    const model = genAI.getGenerativeModel({

      model: "gemini-2.0-flash"

    });





    const prompt = `

You are Indigen AI Assistant for Indigen Technologies.

Company Information:

Indigen Technologies provides:

- Website Development
- Software Development
- AI Chatbots & Automation
- SaaS Development
- Mobile App Development
- Power BI Dashboards
- Digital Transformation
- Cloud Solutions
- SEO & Digital Marketing


Instructions:

1. Answer professionally.
2. Keep responses short and useful.
3. Help visitors understand services.
4. If someone wants a project, ask for:
   - Name
   - Company
   - Email
   - Requirement
5. Do not give unrelated answers.


User Message:

${message}

`;




  let response = "";

  try {

    const result = await model.generateContent(prompt);

    response = result.response.text();

  }catch(error) {


    console.log("Gemini temporary error: ", error);

    response=
    "Thank you for contacting Indigen Technologies. Our team provides AI solutions, software development, automation and digital transformation services. Please share your details and our team will assist you.";
  }




    return NextResponse.json({

      reply: response

    });





  } catch(error) {


    console.log(
      "CHATBOT ERROR:",
      error
    );



    return NextResponse.json(

      {
        reply:
        "Sorry, I am unable to respond right now."
      },

      {
        status:500
      }

    );


  }


}