# Portfolio Website - React.js

> Modern personal portfolio website built with React.js, Vite, Tailwind CSS, and Framer Motion

## 🚀 Features

### ✨ **Main Pages**
- **Homepage (Beranda)**: Heroic landing section with personal intro, profile photo, and navigation
- **Projects Page**: Interactive project gallery with filtering and search functionality  
- **Resume Page**: Professional timeline with experience, education, skills, and certifications
- **Contact Page**: Contact form with social media links and FAQ section

### 🎨 **Design & Animation**
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, professional design with consistent spacing and typography
- **Smooth Animations**: Framer Motion animations for page transitions and component interactions
- **Interactive Elements**: Hover effects, button animations, and scroll-triggered animations

### ⚙️ **Technology Stack**
- **Frontend**: React.js 18+ with Vite build tool
- **Styling**: Tailwind CSS for responsive design
- **Animations**: Framer Motion for smooth page transitions
- **Routing**: React Router Dom for single-page application navigation
- **Data**: Static JSON data structure for easy content management

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar with mobile menu
│   ├── Footer.jsx      # Footer with social links
│   └── ProjectCard.jsx # Individual project card component
├── pages/              # Main application pages
│   ├── Home.jsx        # Landing page with hero section
│   ├── Projects.jsx    # Projects gallery with filtering
│   ├── Resume.jsx      # Professional timeline and skills
│   └── Contact.jsx     # Contact form and information
├── data/               # Static data files
│   └── portfolioData.js # All website content and data
├── App.jsx             # Main application component
├── main.jsx            # Application entry point
└── index.css           # Global styles and Tailwind imports
```

## 🔧 Setup Instructions

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project**
   ```bash
   cd portfolio-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open browser**
   Navigate to `http://localhost:5173` (or the port shown in terminal)

### Build for Production

```bash
# Create production build
npm run build

# Preview production build locally
npm run preview
```

## 📋 Customization Guide

### 1. **Personal Information**
Edit `src/data/portfolioData.js`:

```javascript
export const personalInfo = {
  name: "Your Name",
  title: "Your Title",
  email: "your.email@example.com",
  bio: "Your bio description...",
  profileImage: "your-profile-image-url"
};
```

### 2. **Projects**
Add your projects to the projects array:

```javascript
export const projects = [
  {
    id: 1,
    title: "Project Name",
    description: "Project description",
    technologies: ["React", "Node.js"],
    githubUrl: "https://github.com/username/repo",
    liveUrl: "https://your-demo.com"
  }
];
```

### 3. **Experience & Education**
Update your professional timeline:

```javascript
export const experiences = [
  {
    title: "Job Title",
    company: "Company Name",
    startDate: "Jan 2022",
    endDate: "Present",
    description: "Job description...",
    responsibilities: ["Task 1", "Task 2"]
  }
];
```

### 4. **Skills**
Customize your technical skills:

```javascript
export const skills = [
  {
    category: "Frontend",
    items: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 95 }
    ]
  }
];
```

## 🎭 Framer Motion Animations

### **Animation Types Used:**

1. **Page Transitions**
   - Smooth fade and slide transitions between routes
   - Consistent easing and timing

2. **Component Animations**
   - Staggered children animations for lists
   - Scroll-triggered animations with `whileInView`
   - Hover and tap animations for interactive elements

3. **Layout Animations**
   - Layout ID animations for navbar active states
   - Smooth skill bar progress animations

### **Key Animation Features:**

```javascript
// Page transitions
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};

// Staggered animations
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};
```

## 🎨 Tailwind CSS Customization

### **Custom Color Palette**
The project uses a custom primary color scheme defined in `tailwind.config.js`:

```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... more shades
  }
}
```

### **Custom Components**
Reusable component classes in `src/index.css`:

- `.btn-primary` - Primary button styling
- `.btn-secondary` - Secondary button styling  
- `.card` - Card component with shadow and hover effects
- `.section-padding` - Consistent section spacing

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: 0px - 768px
- **Tablet**: 768px - 1024px  
- **Desktop**: 1024px+

Key responsive features:
- Mobile-first navigation with hamburger menu
- Responsive grid layouts
- Optimized typography scaling
- Touch-friendly interactive elements

## 🔍 Performance Features

- **Lazy Loading**: Components load when they come into viewport
- **Optimized Images**: Unsplash URLs with appropriate sizing
- **Efficient Animations**: Hardware-accelerated CSS transforms
- **Code Splitting**: React Router handles route-based code splitting

## 🚀 Deployment Options

### **Vercel (Recommended)**
```bash
npm install -g vercel
vercel --prod
```

### **Netlify**
```bash
npm run build
# Upload dist/ folder to Netlify
```

### **GitHub Pages**
```bash
npm install --save-dev gh-pages
npm run build
npm run deploy
```

## 📝 Content Management

All website content is centralized in `src/data/portfolioData.js` for easy management:

- **Personal Info**: Basic information and contact details
- **Projects**: Portfolio projects with links and descriptions  
- **Experience**: Work history and responsibilities
- **Education**: Academic background and achievements
- **Skills**: Technical skills with proficiency levels
- **Social Links**: Social media and professional profiles

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio. If you make improvements, consider submitting a pull request!

---

**Built with ❤️ using React.js, Tailwind CSS, and Framer Motion**
