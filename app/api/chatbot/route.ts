import { NextRequest, NextResponse } from "next/server";
import Groq from "groq-sdk";

import { COMPANY_KNOWLEDGE } from "@/lib/companyKnowledge";
import { savechatbotLead } from "@/lib/chatbotLead";

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});


function mergeLead(oldLead:any, newLead:any){

  return {

    name:
      newLead.name || oldLead?.name || "",

    company:
      newLead.company || oldLead?.company || "",

    email:
      newLead.email || oldLead?.email || "",

    phone:
      newLead.phone || oldLead?.phone || "",

    requirement:
      newLead.requirement || oldLead?.requirement || ""

  };

}

export async function POST(req: NextRequest) {
  console.log("CHATBOT REQUEST RECEIVED");

  try {
    const { message, history = [] } = await req.json();

    console.log("MESSAGE:",message);

    console.log("HISTORY:");
    console.log(JSON.stringify(history,null,2));

    const historyText = history
      .map(
        (msg: any) =>
          `${msg.role === "user" ? "User" : "Assistant"}: ${msg.content}`
      )
      .join("\n");

    const prompt = `
${COMPANY_KNOWLEDGE}

You are the official AI Assistant of Indigen Technologies.

Your job is to:

- Answer company-related questions.
- Help visitors understand our services.
- Detect sales enquiries.
- Collect lead information professionally.

Return ONLY valid JSON.

Format:

{
  "type":"chat" | "lead",
  "reply":"Your response",
  "lead":{
      "name":"",
      "company":"",
      "email":"",
      "phone":"",
      "requirement":""
  }
}

Rules:

1. Normal questions:
type = "chat"

2. If user is asking for:
- quotation
- pricing
- proposal
- software development
- ERP
- CRM
- automation
- custom software
- AI chatbot
- web development

type = "lead"

3. Never invent user information.

4. Extract information if the user already provided it.

5. If details are missing, politely ask ONLY for the missing fields.

IMPORTANT:

Use conversation history.

If user provided information earlier,
do not ask again.

Merge previous lead details with current message.

Always return the complete lead object.

Conversation History:

${historyText}

Current User Message:

${message}
`;

    console.log("SENDING TO GROQ");

    const completion = await groq.chat.completions.create({
      model: "openai/gpt-oss-120b",

      temperature: 0.2,

      messages: [
        {
          role: "system",
          content:
            "You are an enterprise AI assistant. Always return only valid JSON.",
        },
        {
          role: "user",
          content: prompt,
        },
      ],
    });

    const text = completion.choices[0]?.message?.content;

    if (!text) {
      throw new Error("No response from Groq");
    }

    console.log("RAW RESPONSE:");
    console.log(text);

    const cleanText = text
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    const json = JSON.parse(cleanText);

    if (json.type === "lead") {
      const lead = json.lead;

      const isComplete =
        lead.name &&
        lead.company &&
        lead.email &&
        lead.phone &&
        lead.requirement;

      if (isComplete) {
        const saved = await savechatbotLead(lead);

        if (saved) {
          console.log("Lead saved successfully");
        } else {
          console.log("Lead save failed");
        }
      }
    }

    return NextResponse.json({
      reply: json.reply,
    });
  } catch (error) {
    console.error("CHATBOT ERROR:", error);

    return NextResponse.json(
      {
        reply:
          "Sorry, I'm experiencing a temporary issue. Please try again in a moment.",
      },
      {
        status: 500,
      }
    );
  }
}