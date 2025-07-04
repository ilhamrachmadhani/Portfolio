# Portfolio Website - React.js & Framer Motion

Sebuah website portofolio pribadi yang dibangun menggunakan React.js dengan Vite, Tailwind CSS, dan Framer Motion untuk animasi yang menarik.

## 🚀 Fitur Utama

### ✅ Halaman Utama
- **Homepage (Beranda)**: Hero section dengan nama, foto profil, deskripsi, dan tombol navigasi
- **Projects Page**: Daftar proyek dalam bentuk card/grid dengan filtering
- **Resume Page**: Timeline pendidikan & pengalaman kerja, serta skill bars
- **Contact Page**: Form kontak dan informasi sosial media

### 🎨 Desain & Animasi
- **Responsive Design**: Optimized untuk mobile, tablet, dan desktop
- **Modern UI**: Menggunakan Tailwind CSS dengan custom color palette
- **Smooth Animations**: Powered by Framer Motion

### ⚙️ Teknologi
- **React.js** dengan Vite (build tool)
- **React Router Dom** untuk navigasi
- **Framer Motion** untuk animasi
- **Tailwind CSS** untuk styling
- **Dummy Data** menggunakan JavaScript objects

## 📦 Instalasi & Setup

### Prerequisites
- Node.js (v14 atau lebih baru)
- npm atau yarn

### Langkah Instalasi

1. **Clone atau download project ini**
```bash
# Jika menggunakan git
git clone <repository-url>
cd portfolio-website

# Atau extract jika download ZIP
```

2. **Install dependencies**
```bash
npm install
# atau
yarn install
```

3. **Jalankan development server**
```bash
npm run dev
# atau
yarn dev
```

4. **Buka browser dan akses**
```
http://localhost:5173
```

## 🏗️ Struktur Direktori

```
portfolio-website/
├── public/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation component
│   │   ├── Footer.jsx          # Footer component
│   │   └── ProjectCard.jsx     # Project card component
│   ├── pages/
│   │   ├── Home.jsx           # Homepage
│   │   ├── Projects.jsx       # Projects page
│   │   ├── Resume.jsx         # Resume/CV page
│   │   └── Contact.jsx        # Contact page
│   ├── data/
│   │   └── portfolioData.js   # Dummy data
│   ├── App.jsx               # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css           # Global styles
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎭 Penjelasan Penggunaan Framer Motion

### 1. **Page Transitions** (App.jsx)
```jsx
const pageVariants = {
  initial: { opacity: 0, y: 20 },
  in: { opacity: 1, y: 0 },
  out: { opacity: 0, y: -20 }
};
```
- Animasi transisi antar halaman dengan fade dan slide effect
- Menggunakan `AnimatePresence` untuk smooth transitions

### 2. **Navbar Animations** (components/Navbar.jsx)
```jsx
// Navbar slide down dari atas
<motion.nav 
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
>
```
- Navbar muncul dengan slide down animation
- Hover effects pada menu items

### 3. **Hero Section** (pages/Home.jsx)
```jsx
// Staggered animation untuk text elements
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2
    }
  }
};
```
- **Staggered animations**: Text elements muncul berurutan
- **Floating elements**: Animasi naik-turun pada profile image
- **Hover effects**: Scale dan rotate pada profile image

### 4. **Project Cards** (components/ProjectCard.jsx)
```jsx
// Card entrance animation
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
  whileHover={{ y: -8 }}
>
```
- **Scroll-triggered animations**: Cards muncul saat di-scroll
- **Hover lift effect**: Card terangkat saat di-hover
- **Sequential delay**: Cards muncul berurutan

### 5. **Timeline Animation** (pages/Resume.jsx)
```jsx
// Timeline item dengan animated dot
<motion.div
  whileHover={{ scale: 1.2 }}
  className="w-8 h-8 rounded-full bg-primary-500"
>
  <div className="absolute inset-0 rounded-full animate-ping opacity-20" />
</motion.div>
```
- **Timeline dots**: Pulse animation dan hover scale
- **Skill bars**: Animated progress bars
- **Slide-in effects**: Content muncul dari samping

### 6. **Contact Form** (pages/Contact.jsx)
```jsx
// Form input animations
<motion.div
  initial={{ opacity: 0, y: 20 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.6, delay: 0.3 }}
>
```
- **Sequential form appearance**: Input fields muncul berurutan
- **Button interactions**: Scale dan loading animations
- **Success message**: Scale animation untuk feedback

### 7. **Scroll Animations**
```jsx
// Trigger animation saat element terlihat
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6 }}
>
```
- **viewport**: Animation trigger saat element masuk viewport
- **once: true**: Animation hanya terjadi sekali

## 🎨 Kustomisasi

### Mengubah Data Pribadi
Edit file `src/data/portfolioData.js`:
```javascript
export const personalInfo = {
  name: "Nama Anda",
  title: "Job Title Anda",
  description: "Deskripsi tentang Anda",
  profileImage: "URL foto profil Anda",
  // ...
};
```

### Mengubah Warna
Edit `tailwind.config.js`:
```javascript
theme: {
  extend: {
    colors: {
      primary: {
        500: '#your-color',
        600: '#your-darker-color',
      }
    }
  }
}
```

### Menambah Proyek
Tambahkan object baru di `projects` array dalam `portfolioData.js`:
```javascript
{
  id: 5,
  title: "Project Baru",
  description: "Deskripsi project",
  technologies: ["React", "Node.js"],
  // ...
}
```

## 📱 Responsive Design

- **Mobile First**: Design dimulai dari mobile lalu scale up
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Grid System**: Responsive grid untuk layout yang fleksibel

## 🚀 Build untuk Production

```bash
# Build untuk production
npm run build

# Preview build
npm run preview
```

File build akan tersedia di folder `dist/`.

## 📝 Scripts

- `npm run dev` - Jalankan development server
- `npm run build` - Build untuk production
- `npm run preview` - Preview production build
- `npm run lint` - Check code dengan ESLint

## 🎯 Tips Pengembangan

1. **Performance**: Gunakan `viewport={{ once: true }}` untuk animasi yang tidak perlu repeat
2. **Accessibility**: Pertimbangkan `prefers-reduced-motion` untuk users yang sensitive terhadap animasi
3. **Mobile**: Test semua animasi di device mobile untuk performance
4. **Loading**: Implement lazy loading untuk images di production

## 📖 Resources

- [Framer Motion Documentation](https://www.framer.com/motion/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Router Documentation](https://reactrouter.com/)
- [Vite Documentation](https://vitejs.dev/)

## 🤝 Contributing

1. Fork project ini
2. Buat feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add some AmazingFeature'`)
4. Push ke branch (`git push origin feature/AmazingFeature`)
5. Buat Pull Request

---

**Selamat coding! 🚀**