import { NextResponse } from "next/server";
import nodemailer from "nodemailer";


export async function POST(req: Request) {

  try {

    const {

      name,
      company,
      email,
      phone,
      services,
      timeline,
      message

    } = await req.json();



    console.log("SMTP DETAILS", {
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS ? "FOUND" : "MISSING"
    });



    const transporter = nodemailer.createTransport({

      host: process.env.SMTP_HOST,

      port: 587,

      secure: false,

      auth: {

        user: process.env.SMTP_USER,

        pass: process.env.SMTP_PASS,

      },

      tls: {

        rejectUnauthorized:false

      }

    });





    await transporter.sendMail({


      from: `"Indigen Website" <${process.env.SMTP_USER}>`,


      to: process.env.CONTACT_EMAIL,


      replyTo: email,


      subject: "New Website Inquiry - Indigen Technologies",



      html: `


      <div style="font-family:Arial,sans-serif">


      <h2>
      New Contact Form Submission
      </h2>


      <hr/>


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




      <h3>
      Interested Services
      </h3>


      <p>
      ${
        services && services.length > 0
        ?
        services.join(", ")
        :
        "Not Selected"
      }
      </p>





      <h3>
      Project Timeline
      </h3>


      <p>
      ${
        timeline
        ?
        timeline
        :
        "Not Selected"
      }
      </p>





      <h3>
      Project Requirement
      </h3>


      <p>
      ${message}
      </p>




      <hr/>


      <p>
      Sent from Indigen Technologies Website
      </p>


      </div>


      `


    });





    return NextResponse.json({

      success:true

    });



  }

  catch(error){


    console.log(
      "MAIL ERROR:",
      error
    );



    return NextResponse.json(

      {

        success:false,

        message:String(error)

      },

      {

        status:500

      }

    );


  }


}