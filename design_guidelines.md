# Video Editing Course Website - Design Guidelines

## Design Approach

**Selected Approach:** Reference-Based with Custom Premium Aesthetic

This is a conversion-focused marketing website requiring a unique, aspirational visual identity. Drawing inspiration from premium SaaS landing pages (Stripe, Linear) and lifestyle-focused platforms (Airbnb) while creating a bold, freedom-oriented brand personality.

**Key Design Principles:**
- Premium over cheap - high-value investment aesthetic
- Aspiration over explanation - sell the transformation
- Bold over safe - make visual statements that inspire
- Movement over static - subtle animations create energy

---

## Core Design Elements

### A. Typography

**Font System:**
- Primary: Modern sans-serif (Inter, Poppins, or similar via Google Fonts CDN)
- Accent: Same family with varied weights for hierarchy

**Hierarchy:**
- Hero H1: `text-7xl lg:text-8xl` (80px+), `font-bold`, tight `leading-tight`
- Section H2: `text-5xl lg:text-6xl`, `font-bold`, `leading-tight`
- Section H3: `text-3xl lg:text-4xl`, `font-semibold`
- Body Large: `text-xl lg:text-2xl`, `font-normal`, `leading-relaxed` (1.6-1.8)
- Body Regular: `text-base lg:text-lg`, `leading-relaxed`
- Small Text: `text-sm`, `font-medium`

**Typography Guidelines:**
- Use generous line heights for readability (1.6-1.8 for body)
- Bold weights for all headlines to make statements
- Mix font weights within sections for visual interest
- Ensure high contrast against dark backgrounds

---

### B. Layout System

**Spacing Primitives:** Use Tailwind units of `4, 6, 8, 12, 16, 20, 24, 32` for consistent rhythm
- Section padding: `py-20 lg:py-32` for major sections
- Component spacing: `space-y-8` or `gap-8` for vertical rhythm
- Container max-widths: `max-w-7xl mx-auto px-6 lg:px-8`
- Card padding: `p-6 lg:p-8`

**Grid Systems:**
- Hero: Full viewport `min-h-screen` with centered content
- Feature grids: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` with `gap-8`
- Two-column splits: `grid-cols-1 lg:grid-cols-2` with `gap-12 lg:gap-16`
- Timeline: Vertical layout with connecting lines

**Container Strategy:**
- Full-width sections with inner `max-w-7xl` containers
- Content areas use `max-w-4xl` for readability
- Maintain consistent horizontal padding `px-6 lg:px-8`

---

### C. Component Library

**Navigation:**
- Fixed header with glassmorphism effect `backdrop-blur-md bg-opacity-80`
- Logo left, navigation center/right
- CTA button in header `text-base font-semibold px-6 py-3 rounded-full`

**Hero Section:**
- Full viewport `min-h-screen flex items-center`
- Animated gradient background (CSS animations or Framer Motion)
- Large hero image or video background with overlay
- Primary CTA: `text-lg px-8 py-4 rounded-full font-bold` with gradient background
- Secondary CTA: `text-lg px-8 py-4 rounded-full font-semibold border-2` ghost style

**Cards:**
- Pain point cards: `rounded-2xl p-8 backdrop-blur-md bg-opacity-10 border border-opacity-20`
- Testimonial cards: `rounded-xl p-6 bg-opacity-5` with student photo `w-16 h-16 rounded-full`
- Module cards: Accordion style with expand/collapse, `rounded-lg border-b`
- Hover effects: `transform hover:-translate-y-2 transition-all duration-300`

**Pricing Cards:**
- Three-tier comparison: `grid-cols-1 lg:grid-cols-3 gap-8`
- Middle tier elevated: `scale-105 shadow-2xl` with "MOST POPULAR" badge
- Card structure: `rounded-2xl p-8 border-2`
- Feature lists: Checkmark icons with `space-y-4`
- CTA buttons: Full-width `w-full py-4 text-lg font-bold rounded-xl`

**Timeline Component:**
- Vertical milestone cards with connector lines
- Week numbers in accent circles
- Each milestone: Icon + title + description in `rounded-xl p-6 border-l-4`
- Progress visualization between steps

**FAQ Accordion:**
- Each item: `border-b py-6` with toggle icon
- Question: `text-xl font-semibold`
- Answer: `text-lg leading-relaxed text-opacity-80` with smooth height transition

**Forms:**
- Input fields: `rounded-lg px-4 py-3 bg-opacity-10 border border-opacity-30`
- Focus states: `focus:border-opacity-100 focus:ring-2`
- Button: `rounded-lg px-6 py-3 font-semibold`

---

### D. Visual Effects & Animations

**Background Treatments:**
- Hero gradient: Animated diagonal gradient using multiple colors
- Section alternation: Alternate between solid dark and subtle gradient backgrounds
- Glassmorphism: `backdrop-blur-lg bg-white bg-opacity-5 border border-white border-opacity-10`

**Scroll Animations:**
- Fade-in on scroll for sections using Intersection Observer
- Floating animations for cards and images: `animate-float` with subtle up/down movement
- Parallax background elements in hero section
- Icon animations on scroll reveal

**Interactive States:**
- Card hover: Lift effect `hover:-translate-y-2 hover:shadow-2xl`
- Button hover: Gradient shift or brightness increase
- Smooth transitions: `transition-all duration-300 ease-in-out`

---

### E. Images

**Hero Section:**
- Large hero image: Laptop with editing software in exotic location (beach/mountain)
- Image treatment: Subtle overlay with gradient to ensure text readability
- Floating UI elements: Small icons (camera, laptop, plane) with gentle animations

**Personal Story Section:**
- Professional photo with gradient border `rounded-full w-48 h-48 lg:w-64 lg:h-64 border-4`
- Small travel photo grid: 3-4 images in masonry or grid layout `rounded-lg`

**Instructor Section:**
- Large professional photo `rounded-2xl w-full lg:w-1/2`
- Portfolio screenshots or work samples

**Testimonial Section:**
- Student photos: `rounded-full w-12 h-12 lg:w-16 lg:h-16`
- Optional: Video testimonial thumbnails with play button overlay

**Throughout:**
- Use GIF snippets of editing work in timeline/curriculum sections
- Screenshots of editing software interfaces
- Lifestyle images showing remote work scenarios

---

### F. Section-Specific Guidelines

**Section Backgrounds:**
- Hero: Animated gradient (blues to purples)
- Transformation Story: Solid dark with subtle texture
- Pain Points: Darker shade for contrast
- Solution/Timeline: Lighter background for energy
- Testimonials: Gradient background
- Pricing: Clean, focused background
- FAQ: Subtle gradient

**Accent Color Usage:**
- Primary CTAs: Orange/coral gradients
- Links and highlights: Vibrant blue
- Success indicators: Green
- Progress elements: Purple gradients
- Maintain 60-30-10 rule: 60% dark base, 30% accent colors, 10% bright CTAs

---

### G. Responsive Behavior

**Mobile Optimizations:**
- Stack all grid layouts to single column
- Reduce hero headline to `text-5xl`
- Adjust section padding to `py-12`
- Full-width buttons and forms
- Collapse navigation to hamburger menu
- Testimonial carousel on mobile vs grid on desktop

**Tablet:**
- Two-column grids where appropriate
- Maintain readability with `max-w-3xl` content areas
- Scale typography between mobile and desktop sizes