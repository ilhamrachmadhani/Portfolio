// Personal Information
export const personalInfo = {
  name: "John Doe",
  title: "Full Stack Developer",
  description: "Passionate developer who loves creating beautiful and functional web applications. I enjoy solving complex problems and learning new technologies.",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  email: "john.doe@example.com",
  phone: "+62 812-3456-7890",
  location: "Jakarta, Indonesia"
};

// Projects Data
export const projects = [
  {
    id: 1,
    title: "E-Commerce Website",
    description: "Full-stack e-commerce platform with user authentication, payment integration, and admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe API"],
    githubUrl: "https://github.com/johndoe/ecommerce-website",
    liveUrl: "https://ecommerce-demo.vercel.app",
    category: "Web Development"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Collaborative task management application with real-time updates and team collaboration features.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=500&h=300&fit=crop",
    technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
    githubUrl: "https://github.com/johndoe/task-manager",
    liveUrl: "https://taskmanager-demo.netlify.app",
    category: "Web Development"
  },
  {
    id: 3,
    title: "Weather Dashboard",
    description: "Modern weather application with location-based forecasts and interactive maps.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=500&h=300&fit=crop",
    technologies: ["Vue.js", "OpenWeather API", "Chart.js", "Mapbox"],
    githubUrl: "https://github.com/johndoe/weather-dashboard",
    liveUrl: "https://weather-dashboard-demo.vercel.app",
    category: "Web Development"
  },
  {
    id: 4,
    title: "Mobile Fitness App",
    description: "Cross-platform fitness tracking app with workout plans and progress monitoring.",
    image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=500&h=300&fit=crop",
    technologies: ["React Native", "Redux", "SQLite", "Health API"],
    githubUrl: "https://github.com/johndoe/fitness-app",
    liveUrl: null,
    category: "Mobile Development"
  }
];

// Experience Data
export const experience = [
  {
    id: 1,
    type: "work",
    title: "Senior Frontend Developer",
    company: "Tech Innovations Inc.",
    location: "Jakarta, Indonesia",
    startDate: "2022-01",
    endDate: "Present",
    description: [
      "Led a team of 4 developers in building responsive web applications",
      "Implemented modern React patterns and state management solutions",
      "Improved application performance by 40% through code optimization",
      "Mentored junior developers and conducted code reviews"
    ]
  },
  {
    id: 2,
    type: "work",
    title: "Frontend Developer",
    company: "Digital Solutions Co.",
    location: "Bandung, Indonesia",
    startDate: "2020-06",
    endDate: "2021-12",
    description: [
      "Developed and maintained multiple client websites using React and Vue.js",
      "Collaborated with UX/UI designers to implement pixel-perfect designs",
      "Integrated REST APIs and third-party services",
      "Participated in agile development processes"
    ]
  },
  {
    id: 3,
    type: "education",
    title: "Bachelor of Computer Science",
    company: "University of Indonesia",
    location: "Jakarta, Indonesia",
    startDate: "2016-08",
    endDate: "2020-05",
    description: [
      "Graduated Summa Cum Laude with GPA 3.8/4.0",
      "Specialized in Software Engineering and Web Technologies",
      "Active member of Programming Club and Hackathon participant",
      "Final project: AI-powered recommendation system"
    ]
  }
];

// Skills Data
export const skills = {
  frontend: [
    { name: "React.js", level: 90 },
    { name: "Vue.js", level: 85 },
    { name: "JavaScript", level: 95 },
    { name: "TypeScript", level: 80 },
    { name: "HTML/CSS", level: 95 },
    { name: "Tailwind CSS", level: 90 },
    { name: "Sass/SCSS", level: 85 }
  ],
  backend: [
    { name: "Node.js", level: 85 },
    { name: "Express.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "PHP", level: 70 },
    { name: "MySQL", level: 80 },
    { name: "MongoDB", level: 85 },
    { name: "PostgreSQL", level: 75 }
  ],
  tools: [
    { name: "Git", level: 90 },
    { name: "Docker", level: 75 },
    { name: "AWS", level: 70 },
    { name: "Figma", level: 80 },
    { name: "VS Code", level: 95 },
    { name: "Postman", level: 85 },
    { name: "Webpack", level: 75 }
  ]
};

// Social Media Links
export const socialLinks = [
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/johndoe",
    icon: "linkedin"
  },
  {
    name: "GitHub",
    url: "https://github.com/johndoe",
    icon: "github"
  },
  {
    name: "Instagram",
    url: "https://instagram.com/johndoe",
    icon: "instagram"
  },
  {
    name: "Twitter",
    url: "https://twitter.com/johndoe",
    icon: "twitter"
  }
];