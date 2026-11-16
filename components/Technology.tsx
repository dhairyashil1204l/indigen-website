export default function Technologies() {

    const technologyGroups = [

        {
            title: "Programming Language",
            technologies: [
                "C",
                "C++",
                "Java",
                "C#",
                "Python",
                "JavaScript"
            ]
        },

        {
            title: "Web & Application Development",
            technologies: [
                "ReactJS",
                "React Native",
                "HTML5",
                "CSS",
                "REST APIs",
                "SOAP",
                "ASP.NET",
                "C#.NET",
                "Spring Framework",
                "Spring Boot"
            ]
        },

        {
            title: "Enterprise & Backend Technologies",
            technologies: [
                "J2EE",
                ".NET",
                "Microservices Development",
                "Middleware Development"
            ]
        },

        {
            title: "Desktop & Cross Platform Development",
            technologies: [
                "MFC",
                "ATL",
                "STL",
                "Win32",
                "WPF",
                "WCF",
                "Java Swing",
                "JavaFX",
                "WxWidgets"
            ]
        },

        {
            title:"Industrial Automation & Communication ",
            technologies: [
                "LabVIEW",
                "OPC",
                "Socket Programming",
                "Modbus RTU/TCP",
                "Serial Communication",
                "S7 Protocol",
                "PLC Ladder Programming"
            ]
        },

        {
            title: "Graphics & Visualization",
            technologies: [
                "OpenGL",
                "DirectX",
                "VTK",
                "QT "
            ]
        },

        {
            title: "Image Processing & AI",
            technologies: [
                "OpenCV",
                "ITK",
                "AI Agents Development"
            ]
        },

        {
            title: "Database",
            technologies: [
                "MS SQL",
                "MySQL",
                "MS Access",
                "MongoDB"
            ]
        },

        {
            title: "Operating Systems & Platforms",
            technologies: [
                "Windows",
                "CentOS",
                "Ubuntu",
                "Windows Embedded",
                "Torizon OS"
            ]
        },

        {
            title: "Application Services",
            technologies: [
                "IIS",
                "Apache Tomcat",
                "J2EE",
                "SFDC"
            ]
        }
    ];

    return (

        <section
          id="technologies"
          className="py-24 bg-white"
        >
            <div className="container-x">

                <div className="text-center mb-14">

                    <h2 className="
                    text-4xl
                    font-extrabold
                    text-slate-900
                    ">

                        Technologies We Work With
                        
                    </h2>
                    
                </div>

                <div className="
                grid
                md:grid-cols-2
                lg:grid-cols-3
                gap-8
                ">
                    
                    {
                        technologyGroups.map((group,index) => (
                            <div
                            key={index}
                            className="
                            rounded-2xl
                            border
                            p-6
                            hover:shadow-lg
                            transition
                            "
                            >

                                <h3 className="
                                text-xl
                                font-bold
                                text-slate-900
                                mb-4
                                "
                                >
                                    {group.title}

                                </h3>

                                <div className="
                                flex
                                flex-wrap
                                gap-2
                                ">
                                    {
                                        group.technologies.map((tech) => (

                                            <span
                                            key={tech}
                                            className="
                                            px-3
                                            py-2
                                            rounded-full
                                            bg-red-50
                                            text-red-700
                                            text-sm
                                            font-medium
                                            ">
                                                {tech}

                                            </span>
                                        ))
                                    }

                                </div>

                            </div>
                        ))
                    }
                    
                </div>

            </div>

        </section>
    );
}