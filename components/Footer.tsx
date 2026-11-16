import Link from "next/link";


export default function Footer() {

  return (

    <footer
      className="
      bg-gradient-to-br
      from-red-900
      to-red-500
      
      text-white
      "
    >

      <div
        className="
        container-x
        py-16
        "
      >


        <div
          className="
          grid
          gap-10
          md:grid-cols-2
          lg:grid-cols-4
          "
        >



          






          {/* QUICK LINKS */}

          <div>

            <h4
              className="
              text-lg
              font-semibold
              "
            >
              QUICK LINKS
            </h4>


            <ul
              className="
              mt-4
              space-y-3
              text-white/100
              "
            >

              <li>
                <Link href="#about">
                  About Us
                </Link>
              </li>


              <li>
                <Link href="#services">
                  Services
                </Link>
              </li>


            


              <li>
                <Link href="#blog">
                  Blogs
                </Link>
              </li>


              <li>
                <Link href="#contact">
                  Contact
                </Link>
              </li>


            </ul>


          </div>








          {/* SERVICES */}

          <div>

            <h4
              className="
              text-lg
              font-semibold
              "
            >
              SERVICES
            </h4>


            <ul
              className="
              mt-4
              space-y-3
              text-white/100
              "
            >

              <li>
                SaaS Software Solutions
              </li>


              <li>
                Software Development
              </li>


              <li>
                Industrial Automation
              </li>


              <li>
                Engineering Software
              </li>


            </ul>


          </div>









          {/* CONTACT */}

          <div>

            <h4
              className="
              text-lg
              font-semibold
              "
            >
              CONTACT
            </h4>



            <div
              className="
              mt-3
              space-y-4
              text-white/100
              "
            >

              
                Indigen Technologies, Pune, Maharashtra, India
              


              <p>
                enquiry@indigentech.com
              </p>


              <p>
                +91 9075000427
              </p>


            </div>


          </div>



        </div>







        {/* GOOGLE MAP */}


        <div
          className="
          mt-12
          overflow-hidden
          rounded-3xl
          border
          border-white/500
          "
        >

          <iframe

            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2580295033003!2d73.7837066!3d18.5624023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2becde2274201%3A0xe4a108f6a3e26367!2sIndigen%20Technologies!5e0!3m2!1sen!2sin!4v1793012472920!5m2!1sen!2sin"

            width="100%"

            height="350"

            loading="lazy"

            className="
            w-full
            border-0
            "

            allowFullScreen

            referrerPolicy="strict-origin-when-cross-origin"

          />

        </div>



      </div>







      {/* COPYRIGHT */}


      <div
        className="
        border-t
        border-white/30
        py-5
        text-center
        text-sm
        text-white/900
        "
      >

        © 2026 Indigen Technologies. All Rights Reserved.

      </div>



    </footer>

  );

}