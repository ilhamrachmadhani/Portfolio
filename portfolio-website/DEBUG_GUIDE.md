# 🔧 Debug Guide - Portfolio Website

## ✅ Problem Fixed: Vite Config Error

### **Issue Resolved:**
```
Error [ERR_MODULE_NOT_FOUND]: Cannot find package '@vitejs/plugin-react'
```

### **Solution Applied:**
1. **Full dependency reinstall:**
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

2. **Clear Vite cache:**
   ```bash
   rm -rf .vite
   ```

## 🚀 How to Start the Project

### **Method 1: Development Server**
```bash
cd portfolio-website
npm run dev
```
- Opens on `http://localhost:5173` (or next available port)
- Hot reload enabled for development

### **Method 2: Production Preview**
```bash
npm run build
npm run preview
```
- Builds optimized production version
- Preview server shows final result

## 🔍 Troubleshooting Common Issues

### **If you get module errors:**
1. Clear everything and reinstall:
   ```bash
   rm -rf node_modules package-lock.json .vite
   npm install
   ```

2. Clear npm cache:
   ```bash
   npm cache clean --force
   ```

### **If dev server won't start:**
1. Check if port is already in use
2. Try different port:
   ```bash
   npm run dev -- --port 3000
   ```

### **If Tailwind styles don't load:**
1. Verify `tailwind.config.js` content paths
2. Check `src/index.css` has Tailwind directives:
   ```css
   @tailwind base;
   @tailwind components;
   @tailwind utilities;
   ```

## ✅ Project Status
- ✅ **Build successful** - Production build works
- ✅ **Dependencies resolved** - All packages installed correctly
- ✅ **Tailwind CSS working** - v3.4.0 properly configured
- ✅ **Framer Motion ready** - Animations will work correctly
- ✅ **React Router configured** - Navigation between pages working

## 📁 Key Files to Customize

1. **Personal Data:** `src/data/portfolioData.js`
2. **Colors/Styling:** `tailwind.config.js`
3. **Components:** `src/components/` and `src/pages/`

## 🌐 Next Steps

1. **Start development server:** `npm run dev`
2. **Customize your data** in `portfolioData.js`
3. **Test all pages** (Home, Projects, Resume, Contact)
4. **Deploy when ready** (Vercel, Netlify, etc.)

---
**Your React.js portfolio website is ready to use! 🎉**