import { NextResponse } from "next/server";
import { GoogleGenerativeAI } from "@google/generative-ai";


const genAI = new GoogleGenerativeAI(
  process.env.GEMINI_API_KEY!
);



export async function POST(req: Request) {


  try {


    const { message } = await req.json();



    const model = genAI.getGenerativeModel({

      model: "gemini-1.5-flash"

    });



    const prompt = `

You are Indigen Technologies AI Assistant.

Company information:

Indigen Technologies provides software solutions for:
- CNC Software
- Industrial Automation
- Medical Instrument Software
- Metal Analysis Software
- Battery Formation Software
- Workflow Management Systems
- Engineering Software Solutions


Answer user questions professionally.
If user wants quotation or project discussion, ask for contact details.


User question:
${message}

`;



    const result = await model.generateContent(prompt);



    const response =
      result.response.text();



    return NextResponse.json({

      reply: response

    });



  } catch(error){


    console.log(error);


    return NextResponse.json(

      {
        error:"Something went wrong"
      },

      {
        status:500
      }

    );


  }


}