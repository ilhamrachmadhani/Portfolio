// Data dummy untuk portfolio website
export const personalInfo = {
  name: "John Doe",
  title: "Full Stack Developer",
  email: "john.doe@example.com",
  phone: "+62 812-3456-7890",
  location: "Jakarta, Indonesia",
  bio: "Passionate full-stack developer with 3+ years of experience in creating modern web applications. I love turning complex problems into simple, beautiful designs and building amazing user experiences.",
  profileImage: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
  resume: "/resume.pdf"
};

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/johndoe",
    icon: "github"
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/johndoe",
    icon: "linkedin"
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

export const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "Full-stack e-commerce application dengan payment gateway integration dan admin dashboard.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=300&fit=crop",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    githubUrl: "https://github.com/johndoe/ecommerce-platform",
    liveUrl: "https://ecommerce-demo.vercel.app",
    category: "Full Stack"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "Aplikasi manajemen tugas dengan fitur kolaborasi real-time dan drag & drop interface.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=300&fit=crop",
    technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
    githubUrl: "https://github.com/johndoe/task-manager",
    liveUrl: "https://taskmanager-demo.vercel.app",
    category: "Frontend"
  },
  {
    id: 3,
    title: "Weather Forecast API",
    description: "RESTful API untuk data cuaca dengan caching dan rate limiting, dokumentasi lengkap dengan Swagger.",
    image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=300&fit=crop",
    technologies: ["Node.js", "Express", "Redis", "PostgreSQL", "Docker"],
    githubUrl: "https://github.com/johndoe/weather-api",
    liveUrl: "https://weather-api-demo.herokuapp.com",
    category: "Backend"
  },
  {
    id: 4,
    title: "Social Media Dashboard",
    description: "Dashboard analytics untuk social media dengan data visualization dan reporting features.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=300&fit=crop",
    technologies: ["Vue.js", "D3.js", "Laravel", "MySQL", "Chart.js"],
    githubUrl: "https://github.com/johndoe/social-dashboard",
    liveUrl: "https://social-dashboard-demo.vercel.app",
    category: "Full Stack"
  },
  {
    id: 5,
    title: "Mobile Banking App UI",
    description: "Modern dan clean UI design untuk aplikasi mobile banking dengan React Native.",
    image: "https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=600&h=300&fit=crop",
    technologies: ["React Native", "Expo", "TypeScript", "Styled Components"],
    githubUrl: "https://github.com/johndoe/banking-app-ui",
    liveUrl: null,
    category: "Mobile"
  },
  {
    id: 6,
    title: "AI Chatbot Integration",
    description: "Chatbot AI customer service dengan Natural Language Processing dan machine learning.",
    image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?w=600&h=300&fit=crop",
    technologies: ["Python", "TensorFlow", "Flask", "OpenAI API", "React"],
    githubUrl: "https://github.com/johndoe/ai-chatbot",
    liveUrl: "https://ai-chatbot-demo.vercel.app",
    category: "AI/ML"
  }
];

export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "Vue.js", level: 85 },
      { name: "TypeScript", level: 88 },
      { name: "JavaScript", level: 95 },
      { name: "HTML/CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 },
      { name: "Sass/SCSS", level: 85 }
    ]
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Python", level: 85 },
      { name: "Laravel", level: 80 },
      { name: "RESTful API", level: 92 },
      { name: "GraphQL", level: 75 }
    ]
  },
  {
    category: "Database",
    items: [
      { name: "MongoDB", level: 85 },
      { name: "PostgreSQL", level: 88 },
      { name: "MySQL", level: 90 },
      { name: "Redis", level: 80 },
      { name: "Firebase", level: 85 }
    ]
  },
  {
    category: "Tools & Others",
    items: [
      { name: "Git", level: 95 },
      { name: "Docker", level: 80 },
      { name: "AWS", level: 75 },
      { name: "Figma", level: 85 },
      { name: "Webpack", level: 80 }
    ]
  }
];

export const experiences = [
  {
    id: 1,
    type: "work",
    title: "Senior Frontend Developer",
    company: "TechCorp Indonesia",
    location: "Jakarta, Indonesia",
    startDate: "Jan 2022",
    endDate: "Present",
    description: "Lead frontend development team untuk membangun aplikasi web skala enterprise. Mengoptimalkan performance aplikasi hingga 40% dan implement best practices dalam development workflow.",
    responsibilities: [
      "Memimpin tim frontend developer (4 orang)",
      "Architect dan develop complex React applications",
      "Code review dan mentoring junior developers",
      "Optimize aplikasi performance dan SEO",
      "Kolaborasi dengan UI/UX team dan Backend developers"
    ]
  },
  {
    id: 2,
    type: "work",
    title: "Full Stack Developer",
    company: "StartupHub Solutions",
    location: "Bandung, Indonesia",
    startDate: "Jun 2020",
    endDate: "Dec 2021",
    description: "Develop dan maintain multiple web applications untuk berbagai klien startup. Bertanggung jawab dari frontend hingga backend development.",
    responsibilities: [
      "Build responsive web applications dengan React & Node.js",
      "Design dan implement RESTful APIs",
      "Database design dan optimization",
      "Deploy applications ke cloud platforms",
      "Client communication dan project management"
    ]
  },
  {
    id: 3,
    type: "work",
    title: "Junior Web Developer",
    company: "Digital Agency XYZ",
    location: "Yogyakarta, Indonesia",
    startDate: "Aug 2019",
    endDate: "May 2020",
    description: "Pertama kali bekerja sebagai web developer. Fokus pada frontend development dan belajar berbagai teknologi web modern.",
    responsibilities: [
      "Develop responsive websites dengan HTML, CSS, JavaScript",
      "Convert design mockups ke functional websites",
      "Basic WordPress development",
      "Cross-browser testing dan debugging",
      "Collaborate dengan design team"
    ]
  }
];

export const education = [
  {
    id: 1,
    type: "education",
    degree: "Bachelor of Computer Science",
    institution: "Universitas Indonesia",
    location: "Depok, Indonesia",
    startDate: "Aug 2015",
    endDate: "Jul 2019",
    gpa: "3.75",
    description: "Mengambil konsentrasi Software Engineering dengan fokus pada web development dan database systems.",
    achievements: [
      "Cumulative GPA: 3.75/4.00",
      "Best Final Project Award - Web Development Category",
      "Active member of Computer Science Student Association",
      "Teaching Assistant for Web Programming course (2 semesters)"
    ]
  },
  {
    id: 2,
    type: "education",
    degree: "Full Stack Web Development Bootcamp",
    institution: "Hacktiv8 Indonesia",
    location: "Jakarta, Indonesia",
    startDate: "Mar 2019",
    endDate: "Jun 2019",
    gpa: null,
    description: "Intensive 16-week bootcamp covering modern web development technologies and best practices.",
    achievements: [
      "Top 5 graduate with excellent final project",
      "Mastered MERN Stack development",
      "Built 10+ real-world projects",
      "Collaborative team projects dengan agile methodology"
    ]
  }
];

export const certifications = [
  {
    name: "AWS Certified Solutions Architect",
    issuer: "Amazon Web Services",
    date: "Mar 2023",
    credentialId: "AWS-CSA-2023-001234"
  },
  {
    name: "Google Cloud Professional Developer",
    issuer: "Google Cloud",
    date: "Jan 2023",
    credentialId: "GCP-PD-2023-567890"
  },
  {
    name: "Meta React Developer Certificate",
    issuer: "Meta via Coursera",
    date: "Nov 2022",
    credentialId: "META-REACT-2022-789012"
  }
];

export const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Product Manager at TechCorp",
    company: "TechCorp Indonesia",
    avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face",
    content: "John adalah developer yang sangat talented dan professional. Kemampuan problem-solving nya luar biasa dan selalu deliver high-quality code on time."
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "CEO",
    company: "StartupHub Solutions",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face",
    content: "Working with John was a game-changer for our startup. Dia tidak hanya technical expert tapi juga understand business requirements dengan sangat baik."
  }
];