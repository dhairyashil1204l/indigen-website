import { Code2, Cog, HeartPulse, Box, ClipboardCheck, LayoutDashboard, type LucideIcon } from "lucide-react";

export const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "About Us", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Industries", href: "#industries" },
  { label: "Solutions", href: "#solutions" },
  { label: "Technologies", href: "#technologies" },
  { label: "Projects", href: "#projects" },
  { label: "Blogs", href: "#blog" },
  { label: "Contact", href: "#contact" },
] as const;

export const STATS = [
  { value: 20, label: "Years experience" },
  { value: 100, label: "Projects delivered" },
  { value: 10, label: "Industries served" },
  { value: 50, label: "Happy clients" },
] as const;

export interface Service {
  title: string;
  icon: LucideIcon;
  items: readonly string[];
}

export const SERVICES = [
  {
    title: "SaaS Software as a Service",

    items: [
      {
        title: "Exhibition Management Software",

        description:
          "Complete exhibition management software solutions for managing exhibitions, visitors, vendors and business operations.",

        features: [
          "Exhibition Management Software Solutions",
        ],

        pdf: "/pdf/exhibition-management.pdf",
      },


      {
        title: "Web Based Workflow Management System",

        description:
          "Web-based workflow solutions designed to automate business processes and enterprise operations.",

        features: [
          "GST Registration Portal",
          "Vendor Customer Master Portal",
        ],

        pdf: "/pdf/workflow-management.pdf",
      },

    ],
  },



  {
    title: "Software Development Services",

    items: [

      {
        title: "Engraving Software",

        description:
          "Custom engraving software solutions designed for industrial applications.",

        features: [
          "Engraving Software Solutions",
        ],

        pdf: "/pdf/engraving-software.pdf",
      },


      {
        title: "Medical Instrument Software",

        description:
          "Software solutions developed for medical equipment and diagnostic instruments.",

        features: [
          "Automatic Coagulation Analyzer Software",
          "Semi Automatic ELISA Analyzer Software",
          "Semi Automatic Biochemistry Analyzer Software",
        ],

        pdf: "/pdf/medical-instrument.pdf",
      },


      {
        title: "Metal Analysis Software",

        description:
          "Advanced software solutions for material testing and analysis systems.",

        features: [
          "Spectrometer Software",
          "Metallurgical Image Analyzer Software",
        ],

        pdf: "/pdf/metal-analysis.pdf",
      },


      {
        title: "Battery Formation Software",

        description:
          "Battery testing and formation software solutions for industrial applications.",

        features: [
          "Battery Formation Software Solutions",
        ],

        pdf: "/pdf/battery-formation.pdf",
      },


      {
        title: "Electrostatic Precipitation Management Software",

        description:
          "Software solutions for electrostatic precipitator monitoring and management systems.",

        features: [
          "Electrostatic Precipitation Management Software Solutions",
        ],

        pdf: "/pdf/electrostatic-management.pdf",
      },


      {
        title: "Welding Unit Controller Software",

        description:
          "Industrial welding control software solutions for automated welding systems.",

        features: [],

        pdf: "/pdf/welding-controller.pdf",
      },

    ],
  },
];



export const FOOTER_COLUMNS = [
  { title: "Company", links: [["About Us", "#about"], ["Careers", "#careers"], ["Projects", "#projects"]] },
  { title: "Services", links: [["Industrial software", "#services"], ["Manufacturing", "#services"], ["Simulation", "#services"]] },
  { title: "Industries", links: [["Manufacturing", "#industries"], ["Medical technology", "#industries"], ["Power", "#industries"]] },
  { title: "Resources", links: [["Case studies", "#projects"], ["Technologies", "#technologies"], ["Work process", "#process"]] },
] as const;


export const HERO_DATA= {
  title: "Software Solutions for Industrial Automation",
  
  description:
  "Indigen Technologies is an established software company providing software products, software design and development services for industrial automation, manufacturing, medical equipment and engineering applications.",

  established: "Incepted in 2003",
  location: "Pune, Maharastra, India",

  primaryButton: "Explore Solutions",
  secondaryButton: "Contact Us",

  highlights: [
    "Industrial Automation Software",
    "CNC & Manufacturing Solutions",
    "Medical Equipment Software",
    "2D / 3D Simulation & Modelling",
 
  ],
};

export const ABOUT_DATA = {
  title: "ABOUT INDIGEN",

  description:
    "Founded in 2003, Indigen Technologies is a trusted software engineering company specializing in industrial automation, enterprise software, AI-driven solutions, and digital transformation. With over two decades of experience, we develop customized software products that help organizations improve productivity, automate complex processes, and accelerate innovation across multiple industries.",

  subDescription:
    "With more than two decades of experience, Indigen Technologies delivers reliable software solutions for industrial automation, engineering applications, manufacturing systems, medical equipment and enterprise platforms.",


  mission:
    "To provide valuable, innovative, and cost-effective software solutions to industries across the globe while delivering exceptional quality and long-term customer value.",

  vision:
    "To be a premier software product company focused on delivering customized solutions that meet every customer's unique business requirements.",
  stats: [
    {
      value: "20+",
      label: "Years Experience",
    },

    {
      value: "100+",
      label: "Projects Delivered",
    },

    {
      value: "10+",
      label: "Industries Served",
    },

    {
      value: "",
      label: "Happy Clients",
    },
  ],
};




export const INDUSTRIES = [

{
title:"Manufacturing",
description:
"Smart software solutions and automation systems to optimize industrial operations."
},


{
title:"Healthcare",
description:
"Reliable software platforms for medical instruments, diagnostics and healthcare management."
},


{
title:"Automotive",
description:
"Digital solutions that improve automotive engineering, production and workflow efficiency."
},


{
title:"Engineering",
description:
"Advanced software solutions supporting engineering processes and industrial innovation."
},


{
title:"Energy",
description:
"Intelligent systems for monitoring, automation and efficient energy management."
},


{
title:"Enterprise",
description:
"Scalable business applications that enhance productivity and digital transformation."
}

];

export const SOLUTIONS_DATA = [

  {
    title: "Industrial Automation Solutions",
    description:
      "Complete automation software solutions for manufacturing industries including process control, monitoring and machine integration.",
  },

  {
    title: "CNC Machine Solutions",
    description:
      "Software solutions for CNC lathe, CNC milling machines and automated production systems.",
  },

  {
    title: "Simulation & Modelling",
    description:
      "Advanced 2D and 3D simulation solutions for engineering analysis and product development.",
  },

  {
    title: "Testing & Inspection Systems",
    description:
      "Automated testing, quality control and inspection software for industrial applications.",
  },

  {
    title: "Enterprise Software Solutions",
    description:
      "Custom business applications, portals and software systems integrated with enterprise workflows.",
  },

  {
    title: "Medical Software Solutions",
    description:
      "Reliable software development solutions for medical equipment and healthcare technology.",
  },

];


export const PROJECTS = [
  {
    title: "Electrostatic Precipitator Management System",
    description:
      "Software solution for monitoring and management of electrostatic precipitator systems used in industrial applications.",
  },

  {
    title: "Battery Formation and Testing System",
    description:
      "Automation software solution for battery formation, testing and production monitoring.",
  },

  {
    title: "Medical Equipment Software",
    description:
      "Software solutions developed for various biochemistry analysers and medical equipment applications.",
  },

  {
    title: "CNC Machine Software",
    description:
      "Software solutions for CNC lathe, CNC milling and industrial machine automation.",
  },

  {
    title: "Profile Cutting Machine Software",
    description:
      "Software solutions for automated profile cutting machines using plasma and gas torch technology.",
  },

  {
    title: "Automated Welding Machine Software",
    description:
      "Controller software solutions for automated welding systems.",
  },

  {
    title: "Vendor & Customer Master Portal",
    description:
      "Web-based portal solutions for vendor and customer data management.",
  },

  {
    title: "2D / 3D Simulation and Modelling",
    description:
      "Engineering simulation and modelling solutions for industrial applications.",
  },

  {
    title: "Industrial Testing & Inspection System",
    description:
      "Software solutions for automated testing and quality inspection systems.",
  },

  {
    title: "Exhibition Management Software",
    description:
      "Complete exhibition management software solutions.",
  },

  {
    title: "Metal Analysis Software",
    description:
      "Software solutions for spectrometer and metallurgical image analysis systems.",
  },
];


export const BLOGS = [

  {
    title:
      "Industrial Automation: The Future of Smart Manufacturing",

    description:
      "Explore how automation software and digital solutions are transforming modern manufacturing industries.",

    category:
      "Industrial Automation",
  },


  {
    title:
      "How Software Solutions Improve Manufacturing Efficiency",

    description:
      "Understanding the role of software systems in improving productivity, monitoring and operational efficiency.",

    category:
      "Manufacturing",
  },


  {
    title:
      "Role of Simulation and Modelling in Engineering",

    description:
      "How 2D and 3D simulation technologies help engineers design and optimize industrial solutions.",

    category:
      "Engineering",
  },


  {
    title:
      "Digital Transformation in Industrial Applications",

    description:
      "Learn how industries are adopting modern software technologies for better performance.",

    category:
      "Technology",
  },


  {
    title:
      "Medical Equipment Software Solutions",

    description:
      "Software innovations supporting modern medical instruments and diagnostic systems.",

    category:
      "Medical Technology",
  },


  {
    title:
      "Latest Trends in Industrial Automation",

    description:
      "Discover emerging technologies shaping the future of industrial automation.",

    category:
      "Innovation",
  },

];

export const CONTACT_DATA = {
  title: "Get In Touch",

  description:
    "Have a project or business requirement? Connect with our team for innovative software solutions.",

  address:
    "Indigen Technologies, Pune, Maharashtra, India",

  email:
    "enquiry@indigentech.com",

  phone:
    "+91 9075000427",
};