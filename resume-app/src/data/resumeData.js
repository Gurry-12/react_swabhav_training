const resumeData = {
  personalInfo: {
    name: "Gurpreet Singh",
    title: "Backend & Full-Stack Development",
    phone: "+91-9376847944",
    email: "work.gurpreetsw@gmail.com",
    location: "Bhiwadi, Rajasthan",
    github: "#",
    linkedin: "#",
  },

  summary:
    "A driven Computer Science graduate (2025) with experience developing robust backend services using modern frameworks. Proficient in creating secure authentication flows, building API integrations, and optimizing performance.",

  education: [
    {
      id: 1,
      college: "Gulzar College of Engineering",
      location: "Ludhiana, Punjab",
      degree:
        "B.Tech - Computer Science and Engineering, IoT & Cyber Security with Blockchain",
      duration: "Jun 2021 - Jun 2025",
    },
    {
      id: 2,
      college: "H. S. Sr. Sec. School",
      location: "Tapukara Alwar, Rajasthan",
      degree: "Intermediate in Mathematics",
      duration: "2020 - 2021",
    },
  ],

  experience: [
    {
      id: 1,
      role: "Software Developer Intern",
      company: "Anviam Solutions Pvt. Ltd.",
      location: "Mohali, Punjab",
      duration: "Jan 2025 - Aug 2025",
      points: [
        "Developed 6+ backend modules in ASP.NET Core using EF Core.",
        "Designed and tested JWT-secured APIs with Swagger.",
        "Contributed to Angular-based frontend migration.",
        "Applied Agile practices in team-driven environment.",
      ],
    },
    {
      id: 2,
      role: "Student Placement Coordinator",
      company: "Gulzar Group of Institute",
      location: "Ludhiana, Punjab",
      duration: "Feb 2024 - Jul 2025",
      points: [
        "Coordinated 10+ placement drives for 2,000+ students.",
        "Built Excel automation improving efficiency by 25%.",
      ],
    },
  ],

  projects: [
    {
      id: 1,
      title: "Whispering Pages",
      tech: "ASP.NET Core, SQL Server, Razor Pages",
      duration: "Mar 2025 - Apr 2025",
      points: [
        "Engineered secure full-stack portal.",
        "Optimized EF Core integration.",
        "Implemented unit testing and error handling.",
      ],
    },
    {
      id: 2,
      title: "Sentiment Analysis Model",
      tech: "Python, Flask, NLTK, Kaggle",
      duration: "Aug 2022 - Dec 2022",
      points: [
        "Built sentiment analysis tool with 85% accuracy.",
        "Enhanced validation metrics and testing.",
      ],
    },
  ],

  skills: {
    languages: ["C#", "Python", "JavaScript", "SQL", "C++", "HTML", "CSS"],
    frameworks: [
      "ASP.NET Core",
      "Flask",
      "Razor Pages",
      "Entity Framework Core",
      "Angular",
      "Bootstrap",
      "jQuery",
    ],
    databases: ["SQL Server", "MySQL"],
    tools: ["Git", "GitHub", "GitLab", "Visual Studio", "Postman", "Swagger"],
    concepts: [
      "DSA",
      "REST APIs",
      "Clean Architecture",
      "Microservices",
      "JWT",
    ],
  },
};

export default resumeData;
