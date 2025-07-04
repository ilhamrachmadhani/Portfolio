# 🎭 Panduan Framer Motion - Portfolio Website

Dokumentasi lengkap penggunaan Framer Motion dalam proyek portfolio website ini.

## 📚 Konsep Dasar Framer Motion

### 1. **motion Components**
Framer Motion mengubah elemen HTML biasa menjadi animatable components:
```jsx
import { motion } from 'framer-motion'

// HTML biasa
<div>Content</div>

// Dengan Framer Motion
<motion.div>Content</motion.div>
```

### 2. **Animation Properties**
- **initial**: State awal elemen sebelum muncul
- **animate**: State target yang ingin dicapai
- **exit**: State saat elemen hilang
- **whileHover**: State saat di-hover
- **whileTap**: State saat di-click/tap

## 🎨 Implementasi Animasi dalam Portfolio

### 1. **Page Transitions** 
*File: `src/App.jsx`*

```jsx
const pageVariants = {
  initial: {
    opacity: 0,
    y: 20
  },
  in: {
    opacity: 1,
    y: 0
  },
  out: {
    opacity: 0,
    y: -20
  }
};

// Implementasi
<AnimatePresence mode="wait">
  <Routes location={location} key={location.pathname}>
    <Route path="/" element={
      <motion.div
        initial="initial"
        animate="in"
        exit="out"
        variants={pageVariants}
        transition={{ duration: 0.4 }}
      >
        <Home />
      </motion.div>
    } />
  </Routes>
</AnimatePresence>
```

**Penjelasan:**
- `AnimatePresence` memungkinkan animasi exit
- `mode="wait"` menunggu animasi exit selesai sebelum mulai animasi entrance
- `variants` mendefinisikan berbagai state animasi
- `key={location.pathname}` memastikan re-render saat route berubah

### 2. **Navbar Entrance Animation**
*File: `src/components/Navbar.jsx`*

```jsx
<motion.nav 
  initial={{ y: -100, opacity: 0 }}
  animate={{ y: 0, opacity: 1 }}
  transition={{ duration: 0.6, ease: "easeOut" }}
  className="fixed top-0..."
>
```

**Penjelasan:**
- `y: -100` menggeser navbar 100px ke atas (hidden)
- `opacity: 0` membuat navbar transparan
- `ease: "easeOut"` memberikan efek natural deceleration

### 3. **Staggered Animations (Hero Section)**
*File: `src/pages/Home.jsx`*

```jsx
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,      // Delay sebelum anak mulai
      staggerChildren: 0.2     // Interval antar anak
    }
  }
};

const itemVariants = {
  hidden: { y: 50, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

// Implementasi
<motion.div
  variants={containerVariants}
  initial="hidden"
  animate="visible"
>
  <motion.h1 variants={itemVariants}>Title</motion.h1>
  <motion.p variants={itemVariants}>Description</motion.p>
  <motion.div variants={itemVariants}>Buttons</motion.div>
</motion.div>
```

**Penjelasan:**
- Parent container mengontrol timing semua children
- `delayChildren` memberikan delay sebelum children mulai animasi
- `staggerChildren` membuat children muncul berurutan dengan interval

### 4. **Scroll-Triggered Animations**
*File: `src/components/ProjectCard.jsx`*

```jsx
<motion.div
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: index * 0.1 }}
>
```

**Penjelasan:**
- `whileInView` trigger animasi saat element masuk viewport
- `viewport={{ once: true }}` animasi hanya terjadi sekali
- `delay: index * 0.1` menciptakan sequential delay berdasarkan urutan

### 5. **Hover Interactions**
*File: Multiple files*

```jsx
// Scale on hover
<motion.button
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
>

// Lift effect
<motion.div
  whileHover={{ y: -8 }}
  transition={{ duration: 0.2 }}
>

// Color change with layout
<motion.div
  whileHover={{ backgroundColor: "#f3f4f6" }}
  transition={{ duration: 0.3 }}
>
```

### 6. **Progress Bar Animation**
*File: `src/pages/Resume.jsx`*

```jsx
<motion.div
  initial={{ width: 0 }}
  whileInView={{ width: `${skill.level}%` }}
  transition={{ duration: 1, delay: 0.5 }}
  className="bg-gradient-to-r from-primary-500 to-secondary-500 h-2 rounded-full"
/>
```

**Penjelasan:**
- Animasi width dari 0 ke nilai percentage
- Delay memberikan efek sequential pada multiple skill bars

### 7. **Loading States**
*File: `src/pages/Contact.jsx`*

```jsx
// Button dengan loading spinner
<motion.button
  whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
  whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
  disabled={isSubmitting}
>
  {isSubmitting ? (
    <svg className="animate-spin h-5 w-5">
      {/* Spinner SVG */}
    </svg>
  ) : (
    "Send Message"
  )}
</motion.button>

// Success message
{submitStatus === 'success' && (
  <motion.div
    initial={{ opacity: 0, scale: 0.8 }}
    animate={{ opacity: 1, scale: 1 }}
    className="success-message"
  >
    Success!
  </motion.div>
)}
```

### 8. **Floating Elements**
*File: `src/pages/Home.jsx`*

```jsx
<motion.div
  animate={{ y: [0, -10, 0] }}
  transition={{ 
    duration: 2, 
    repeat: Infinity, 
    ease: "easeInOut" 
  }}
  className="floating-element"
>
  💻
</motion.div>
```

**Penjelasan:**
- `y: [0, -10, 0]` menciptakan movement naik-turun
- `repeat: Infinity` mengulang animasi tanpa henti
- Array values menciptakan keyframe animation

## 🎯 Best Practices

### 1. **Performance Optimization**
```jsx
// ✅ Gunakan viewport once untuk animasi yang tidak perlu repeat
<motion.div
  whileInView={{ opacity: 1 }}
  viewport={{ once: true }}
>

// ✅ Hindari animating width/height, gunakan scale
<motion.div
  whileHover={{ scale: 1.05 }}  // ✅ Better
  // whileHover={{ width: 120 }} // ❌ Slower
>
```

### 2. **Responsive Considerations**
```jsx
// ✅ Conditional animations berdasarkan screen size
const isMobile = window.innerWidth < 768;

<motion.div
  whileHover={!isMobile ? { scale: 1.05 } : {}}
>
```

### 3. **Accessibility**
```jsx
// ✅ Respect user preferences
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

<motion.div
  initial={{ opacity: 0, y: prefersReducedMotion ? 0 : 50 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: prefersReducedMotion ? 0 : 0.6 }}
>
```

## 🔧 Custom Easing Functions

```jsx
// Predefined easings
transition={{ ease: "easeInOut" }}
transition={{ ease: "anticipate" }}

// Custom cubic-bezier
transition={{ ease: [0.43, 0.13, 0.23, 0.96] }}

// Spring physics
transition={{ type: "spring", stiffness: 100, damping: 10 }}
```

## 📱 Mobile Optimizations

```jsx
// Reduce complex animations on mobile
const complexAnimation = {
  scale: [1, 1.2, 1],
  rotate: [0, 180, 360],
  transition: { duration: 2 }
};

const simpleAnimation = {
  scale: [1, 1.1, 1],
  transition: { duration: 1 }
};

<motion.div
  animate={isMobile ? simpleAnimation : complexAnimation}
>
```

## 🚀 Tips untuk Development

1. **Debug Animations**: Gunakan browser DevTools untuk melihat performance
2. **Start Simple**: Mulai dengan animasi sederhana, tambahkan kompleksitas bertahap
3. **Consistent Timing**: Gunakan duration yang konsisten (0.3s, 0.6s, 0.9s)
4. **Test on Devices**: Selalu test di device mobile untuk performance
5. **Meaningful Motion**: Pastikan animasi memiliki purpose, bukan hanya decorative

## 📖 Resources Tambahan

- [Framer Motion API Reference](https://www.framer.com/motion/animation/)
- [Motion Examples](https://www.framer.com/motion/examples/)
- [Performance Tips](https://www.framer.com/motion/guide-reduce-bundle-size/)

---

**Happy Animating! ✨**