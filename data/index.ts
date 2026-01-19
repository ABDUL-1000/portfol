

export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#Project" },
    { name: "Testimonials", link: "#clients" },
    { name: "Contact", link: "#Footer" },
  ];
  
  export const gridItems = [
    {
      id: 1,
      title: "I prioritize client collaboration, fostering open communication ",
      description: "",
      className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
      imgClassName: "w-full h-full",
      titleClassName: "justify-end",
      img: "/grid.svg",
      spareImg: "",
    },
    {
      id: 2,
      title: "I'm very flexible with time zone communications",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "",
      spareImg: "",
    },
    {
      id: 3,
      title: "My tech stack",
      description: "I constantly try to improve",
      className: "lg:col-span-2 md:col-span-3 md:row-span-2",
      imgClassName: "",
      titleClassName: "justify-center",
      img: "",
      spareImg: "",
    },
    {
      id: 4,
      title: "Tech enthusiast with a passion for development.",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-start",
      img: "/b4.svg",
      spareImg: "/b4.svg",
    },
  
    {
      id: 5,
      title: "Currently building a JS Animation library",
      description: "The Inside Scoop",
      className: "md:col-span-3 md:row-span-2",
      imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
      titleClassName: "justify-center md:justify-start lg:justify-center",
      img: "/b5.svg",
      spareImg: "/grid.svg",
    },
    {
      id: 6,
      title: "Do you want to start a project together?",
      description: "",
      className: "lg:col-span-2 md:col-span-3 md:row-span-1",
      imgClassName: "",
      titleClassName: "justify-center md:max-w-full max-w-60 text-center",
      img: "",
      spareImg: "",
    },
  ];
  
export const projects = [
  {
    id: 1,
    title: "BridgePay",
    subtitle: "Fintech Payment Platform",
    des: "Developed a responsive and interactive fintech app with user authentication. Enhanced user experience with secure payment processing and financial management features.",
    img: "/img/bridgepay.png",
    iconLists: [
      "/re.svg", 
      "/tail.svg", 
      "/ts.svg", 
      "/three.svg", 
      "/fm.svg" 
    ],
    link: "https://bridgepay.com.ng",
    features: [
      "User authentication & authorization",
      "Secure payment processing",
      "Real-time transaction tracking",
      "Responsive design",
      "API integration"
    ],
    status: "Live"
  },
  {
    id: 2,
    title: "WebTray",
    subtitle: "Inventory Management System",
    des: "Built a responsive inventory management app with user authentication and database for user watchlist management. Features include real-time stock tracking and analytics.",
    img: "/img/webtray.png", 
    iconLists: [
      "/re.svg", 
      "/tail.svg", 
      "/ts.svg", 
      "/three.svg", 
      "/fm.svg" 
    ],
    link: "https://webtray.ng",
    features: [
      "User authentication system",
      "Real-time inventory tracking",
      "Watchlist management",
      "Advanced search & filters",
      "Dashboard analytics",
      "Role-based access control"
    ],
    status: "Live"
  },
  {
    id: 3,
    title: "Lumina",
    subtitle: "Green Energy Platform",
    des: "Developed a responsive platform for green energy solutions. Focused on clean UI/UX design with interactive components and modern web technologies.",
    img: "/img/luminagreen.png", 
    iconLists: [
      "/re.svg", 
      "/tail.svg", 
      "/ts.svg", 
      "/three.svg", 
      "/fm.svg" 
    ],
    link: "https://luminagreen360.com",
    features: [
      "Responsive design",
      "Interactive UI components",
      "Smooth animations",
      "Modern dashboard",
      "Mobile-first approach"
    ],
    status: "Live"
  },
  {
    id: 4,
    title: "TMMMS Transports",
    subtitle: "Transport Management System",
    des: "Transport management website showcasing logistics services with modern UI/UX design and interactive features.",
    img: "/p1.svg", 
    iconLists: [
      "/re.svg", 
      "/tail.svg", 
      "/ts.svg", 
      "/three.svg", 
      "/fm.svg" 
    ],
    link: "https://tmms-transport.vercel.app/",
    features: [
      "Service showcase",
      "Booking system",
      "Route tracking",
      "Fleet management",
      "Customer portal"
    ],
    status: "Live"
  },
  {
    id: 5,
    title: "SIMKASH",
    subtitle: "Fintech Super Admin Dashboard",
    des: "Comprehensive fintech platform offering seamless financial services with admin dashboard for managing SIM card distributions, transactions, and user management.",
    img: "/img/simkash.png", 
    iconLists: [
      "/re.svg", 
      "/tail.svg", 
      "/ts.svg", 
      "/three.svg", 
      "/fm.svg" 
    ],
    link: "https://simkash.com/landingpage",
    features: [
      "SIM card management",
      "Transaction tracking",
      "User authentication",
      "Real-time analytics",
      "Multi-role dashboard",
      "Export/Import functionality"
    ],
    status: "Live"
  }
];
  
  export const testimonials = [
    {
      quote:
        "Collaborating with Abdulkarim on the Simkash project has been one of the smoothest frontend-backend partnerships I’ve experienced. As the backend developer providing APIs, I was genuinely impressed with how efficiently Abdulkarim integrated them on the frontend using Next.js. His clear communication, attention to detail, and quick understanding of API structures made our workflow seamless." ,
      name: "Farouq Abiodun",
      title: "Backend Developer, Simkash",
    },
    {
      quote:
        "Working with Abdulkarim on the Simkash project was a great experience. As the UI/UX designer, I appreciated how well he translated my designs into clean, functional, and responsive interfaces using Next.js. He paid close attention to design details, maintained consistency with the UI guidelines, and often suggested smart improvements to enhance user experience.",
      name: "Yusuf A Baba",
      title: "UIUX designer Simkash",
    },
    {
      quote:
        "Working with Abdulkarim on multiple projects has been an outstanding experience. On the Simkash platform, Abdulkarim consistently delivered clean, efficient, and scalable frontend solutions using Next.js, collaborating seamlessly with Farouq Abiodun, Yusuf, and the rest of the team. His attention to detail and ability to translate UI/UX designs into functional, high-performance interfaces stood out throughout the project.",
      name: "Bukhari M.",
      title: "Founder of Simkash",
    },
    {
      quote:
        "We also partnered on the TMMS Transporters and TMMS Marketers platforms, where Abdulkarim played a vital role in implementing responsive, user-friendly interfaces and integrating key frontend functionalities. His problem-solving skills, clear communication, and dedication to delivering on time made him an invaluable part of the team. I would gladly recommend Abdulkarim for any frontend development role — he's a reliable, skilled, and proactive developer.",
         name: "Abdurrahman Abdussalam.",
      title: "CTO TMMMS TEAM ",
    },
   
  ];
  
  export const companies = [
    {
      id: 1,
      name: "cloudinary",
      img: "/cloud.svg",
      nameImg: "/cloudName.svg",
    },
    {
      id: 2,
      name: "appwrite",
      img: "/app.svg",
      nameImg: "/appName.svg",
    },
    {
      id: 3,
      name: "HOSTINGER",
      img: "/host.svg",
      nameImg: "/hostName.svg",
    },
    {
      id: 4,
      name: "stream",
      img: "/s.svg",
      nameImg: "/streamName.svg",
    },
    {
      id: 5,
      name: "docker.",
      img: "/dock.svg",
      nameImg: "/dockerName.svg",
    },
  ];
  
  export const workExperience = [
    {
      id: 1,
      title: "Frontend Engineer Intern @ Stem-Lab Kano",
      desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
      className: "md:col-span-2",
      thumbnail: "/exp1.svg",
    },
    {
      id: 2,
      title: "Frontend Developer @ InnoSpaceX Kano ",
      desc: "Assisted in developing various projects, and also facilitate interns ",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 3,
      title: "Frontend Developer @ InnoSpaceX Kano ",
      desc: "Assisted in developing various projects, and also facilitate interns ",
      className: "md:col-span-2",
      thumbnail: "/exp2.svg",
    },
    {
      id: 4,
      title: "Build a Fintech web App @ Simkash Solutions",
      desc: "Led the dev of a TMMS APP for a client, from initial concept to deployment.",
      className: "md:col-span-2", 
      thumbnail: "/exp3.svg",
    },
    {
      id: 5,
      title: "Frontend Developer @ webtray",
      desc: "Collaborte with frontend developers in building an inventory system.",
      className: "md:col-span-2",
      thumbnail: "/exp4.svg",
    },
  ];
  
  export const socialMedia = [
    {
      id: 1,
      img: '/git.svg',
      alt: 'GitHub',
      href: 'https://github.com/ABDUL-1000', 
    },
    {
      id: 2,
      img: '/twit.svg',
      alt: 'https://x.com/ABDULKARIM98104',
      href: 'https://x.com/ABDULKARIM98104',
    },
    {
      id: 3,
      img: '/link.svg',
      alt: 'LinkedIn',
      href: 'www.linkedin.com/in/abdullatif-abdulkarim-104397235www.linkedin.com/in/abdullatif-abdulkarim-104397235',
    },
    {
      id: 4,
      img: '/wha.svg',
      alt: 'whatsAPP',
      href: 'http://wa.me/2349065866898',
    },
  ];