import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
  } from "../assets";
  
  import MCSE from "../assets/MCSE.png";
  import MCSA from "../assets/MCSA.png";
  import teksavvy from "../assets/company/teksavvy.png";
  import canadaInc from "../assets/company/canadaInc.png";
  import sql from "../assets/tech/sql.png";
  import powerbi from "../assets/tech/powerbi.png";
  import csharp from "../assets/tech/csharp.png";
  import cpp from "../assets/tech/cpp.png";
  import angular from "../assets/tech/angular.png";
  import crypto from "../assets/crypto.png"; 
  import senator from "../assets/senator.png";

  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];

  const certs = [
    { title: "MCSE: Data Management and Analytics", icon: MCSE, link: 'https://www.credly.com/badges/1ee4c062-f71e-4d85-b9d6-c539bc8b8685?source=linked_in_profile' },
    { title: "MCSA: SQL 2016 Database Administration", icon: MCSA, link: 'https://www.credly.com/badges/01800547-7a39-482f-8d70-71abd6c26bb7?source=linked_in_profile' },
  ]

  const exams = [
    { title: 'Implementing a Data Warehouse', number: '70-767' },
    { title: 'Provisioning SQL Databases' , number: '70-765' },
    { title: 'Administering a SQL Database Infrastructure', number: '70-764' },

  ]
  
  const services = [
    {
      title: "MCSE",
      icon: MCSE,
    },
    {
      title: "MCSA",
      icon: MCSA,
    },    
  ];
  
  const technologies = [
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "PowerBi",
      icon: powerbi,
    },
    {
      name: "C#",
      icon: csharp,
    },
    {
      name: "C++",
      icon: cpp,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "JavaScript",
      icon: javascript,
    },
    {
      name: "TypeScript",
      icon: typescript,
    },
    {
      name: "React JS",
      icon: reactjs,
    },
    {
      name: "Angular JS",
      icon: angular,
    },
    {
      name: "Redux Toolkit",
      icon: redux,
    },
    {
      name: "Tailwind CSS",
      icon: tailwind,
    },
    {
      name: "Node JS",
      icon: nodejs,
    },
    {
      name: "MongoDB",
      icon: mongodb,
    },
    {
      name: "git",
      icon: git,
    },
  ];
  
  const experiences = [
    {
      title: "IT Specialist",
      company_name: "Teksavvy",
      icon: teksavvy,
      iconBg: "#383E56",
      date: "January 2018 - January 2019 ",
      points: [
        "Provided technical support to customers via phone, email, and chat, resolving issues related to internet connectivity, software and hardware problems, and billing inquiries.",
        "Developed and maintained internal IT systems and infrastructure, including servers, network devices, and software applications, ensuring their reliability, security, and scalability.",
        "Assisted in the design and implementation of new IT projects, such as software upgrades, network expansions, and cloud migrations, providing technical expertise and project management skills",
        "Conducted training sessions for colleagues and customers, teaching them how to use new software and systems, as well as troubleshooting techniques for common issues.",
        "Collaborated with cross-functional teams, such as marketing, sales, and product development, to identify and implement IT solutions that enhance customer experience and satisfaction."
      ],
    },
    {
      title: "Full-Stack/BI Developer & DBA ",
      company_name: "1261411 Canada inc.",
      icon: canadaInc,
      iconBg: "#E6DEDD",
      date: "January 2019 – July 2019",
      points: [
        "Designed and developed web APIs using .NET Core, C#, and SQL Server, enabling data integration and communication between different applications and systems.",
        "Created interactive and visually appealing BI solutions using Power BI and SSRS, allowing stakeholders to make data-driven decisions and gain insights into business operations and performance.",
        "Worked collaboratively with application development, server, and storage groups to ensure optimal performance and efficiency of IT systems, and identified areas for improvement and optimization.",
        "Conducted tests and debugging to ensure the quality and functionality of applications, identifying and resolving issues in a timely manner.",
        "Provided quick and constructive feedback to team members and stakeholders, contributing to a positive and productive work environment.",
        "Environment: SQL Server 2016/2017, SSMS, SSIS, SSRS, Team Foundation Server, Azure DevOps, Visual Studio 2019, SharePoint 2014/2016, SSIS, Microsoft Dynamic 365, Power BI."
      ],
    },
    {
      title: "Software Developer and BI Developer ",
      company_name: "1261411 Canada inc.",
      icon: canadaInc,
      iconBg: "#383E56",
      date: "July 2019 – January 2020",
      points: [
        "Repaired an outdated solution for generating offline cubes, converting old .NET Framework code to .NET Core for improved functionality and compatibility.",
        "Created automation using PowerShell, reducing manual effort and improving efficiency in cube processing and availability.",
        "Built an offline multi-function script that streamlined the cube processing and availability process, improving accessibility and ease of use for end-users.",
        "Documented the process and implementation of the solution, enabling future maintenance and development.",
        "Worked in an environment that included SQL Server 2016/2017, SSMS, SSIS, SSRS, Team Foundation Server, Azure DevOps, Visual Studio 2019, SharePoint 2014/2016, SSIS, Microsoft Dynamic 365, and Power BI, demonstrating versatility in working with various tools and technologies.",
        "Developed a custom solution to automate the creation and maintenance of SQL Server Analysis Services (SSAS) cubes, reducing manual effort and improving the accuracy and timeliness of the data.",
        "Implemented JSON data formatting and processing for improved data integration and analysis within the SSAS cubes.",
        "Utilized PowerShell scripting to automate the deployment and maintenance of the SSAS cubes, improving the efficiency and reliability of the system.",
        "Designed and implemented security protocols for the SSAS cubes, ensuring the protection and confidentiality of sensitive data.",
      ],
    },
    {
      title: "Software Developer and BI Developer ",
      company_name: "1261411 Canada inc.",
      icon: canadaInc,
      iconBg: "#E6DEDD",
      date: "January 2020 – March 2021",
      points: [
        "Designed and implemented a custom solution for automating the cleaning and formatting of Excel reports, reducing manual effort and improving the accuracy and timeliness of data analysis.",
        "Linked SQL servers to Excel spreadsheets, enabling seamless integration and data transfer between systems.",
        "Created automation using PowerShell scripting, allowing for the efficient and reliable execution of the report cleaning and formatting process.",
        "Utilized pivot tables and charts to analyze and display the data in a user-friendly and visually appealing manner, improving comprehension and decision-making.",
        "Documented the process and implementation of the solution, enabling future maintenance and development.",
        "Worked with a range of technologies, including PowerShell, Excel, and SSMS, demonstrating versatility and expertise in various tools and systems.",
      ],
    },
    {
      title: "Software Developer and BI Developer ",
      company_name: "1261411 Canada inc.",
      icon: canadaInc,
      iconBg: "#E6DEDD",
      date: "March 2021 – December 2021",
      points: [
        "Analyzed and translated complex data findings into visually appealing and informative reports using tools such as SSIS, SSRS, and Power BI.",
        "Modified and massaged data to ensure its quality and consistency, improving the accuracy and reliability of the analysis.",
        "Created and implemented an ETL (Extract, Transform, Load) package, allowing for the efficient transfer and processing of data between systems.",
        "Created a database job using SSMS to execute the ETL packages, improving the automation and reliability of the system.",
        "Followed up on maintenance and support needs of clients, ensuring their satisfaction and providing a high level of customer service.",
        "Documented the process and implementation of the solution, enabling future maintenance and development.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];

  const educations = [
    {
      title: "Computer Engineering",
      school: "La Cite Collegiale",
      date: "2017 - 2019",
    },
    {
      title: "Computer Programming",
      school: "La Cite Collegiale",
      date: "2019 - 2020",
    }
  ];
  
  const projects = [
    {
      name: "Crypto Tracker",
      description:
        "Web-based platform that allows users to search, analyze and compare various cryptocurrencies, and track their performance over time with interactive charts and up-to-date news. Users can also access a comprehensive database of coins, gaining valuable insights into historical data, project developments, and community sentiment for informed decision-making.",
      tags: [
        {
          name: "restapi",
          color: "blue-text-gradient",
        },
        {
          name: "javascript",
          color: "green-text-gradient",
        },
        {
          name: "css",
          color: "pink-text-gradient",
        },
        {
          name: "html",
          color: "blue-text-gradient",
        },
      ],
      image: crypto,
      source_code_link: "https://lucent-empanada-961828.netlify.app/",
    },
    {
      name: "Senator stock tracker",
      description:
        "Web scrapper that watches https://www.capitoltrades.com/trades for new trades made by USA senator's in case you want to copy their action with your own portfolio. They often have priviledged information not accessible to the public, so it's a good idea to be up to date to their actions in the stock market.",
      tags: [
        {
          name: "python",
          color: "blue-text-gradient",
        },
        {
          name: "json",
          color: "green-text-gradient",
        },
        {
          name: "beautifulSoup",
          color: "pink-text-gradient",
        },
        {
          name: "oauth2",
          color: "blue-text-gradient",
        },
        {
          name: "email",
          color: "green-text-gradient",
        },
      ],
      image: senator,
      source_code_link: "https://github.com/icevu1/senator_stock_tracker",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects, certs, exams, educations };