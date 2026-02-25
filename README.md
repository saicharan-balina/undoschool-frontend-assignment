# UndoSchool Course Browse Page

## 📋 Project Overview

This is a pixel-perfect implementation of the UndoSchool Course Browse Page, built with **React** and **TailwindCSS** as per the Figma design specifications. The project showcases modern web development practices with attention to design accuracy, responsiveness, and user experience.

---

## 👤 Submission Details

- **Candidate Name:** Sai Charan Balina
- **Submission Date:** February 23, 2026
- **Assignment:** UndoSchool Front-End Developer Position
- **Design Reference:** [Figma Prototype Link](https://www.figma.com/design/gtOTbbNMT9gTNznnkFm4h7/Course-browse-page-web-design)

---

## 🚀 Features Implemented

### Core Requirements ✅
- ✅ **Pixel-Perfect Design Replication** - Faithful reproduction of the Figma prototype
- ✅ **Fully Responsive** - Optimized for mobile (~375px) and desktop (~1440px) screens
- ✅ **React + TailwindCSS** - Modern tech stack with component-based architecture
- ✅ **Interactive Elements** - Hover states, smooth transitions, and animations
- ✅ **Clean Code** - Semantic HTML5, organized CSS, and maintainable component structure

### Creative Enhancements ✨

#### 1. **Professional SVG Icons**
- Replaced all emoji icons with custom SVG vector graphics
- Ensures consistent rendering across all devices and browsers
- Scalable and professional appearance
- Custom-designed icons for:
  - Course categories (Coding, Public Speaking, Chess, etc.)
  - Time slots (Morning, Afternoon, Evening, Night)
  - User interface elements (ratings, cart, user profiles)

#### 2. **Advanced Animations**
- **Fade-in-up animations** for hero content entrance
- **Scale-in animations** for stat badges
- **Float animations** for decorative background elements
- **Gentle-bounce effects** for engaging user attention
- **Hover transformations** on cards (scale, translate, shadow)
- **Image zoom effect** on course card hover

#### 3. **Enhanced Visual Design**
- **Gradient backgrounds** with smooth color transitions
- **Backdrop blur effects** for modern glassmorphism style
- **Professional color palette** matching the Figma specifications:
  - Primary Purple: `#6B21A8`
  - Accent Colors: Yellow `#EAB308`, Orange `#F97316`, Pink `#EC4899`
- **Category cards with gradient backgrounds** - Each category has its unique color scheme
- **Improved shadows** using CSS custom properties for consistency

#### 4. **Typography System**
- Integrated **Poppins and Nunito** font families as per design specs
- Proper font weights (300-800) for visual hierarchy
- Optimized line heights and letter spacing for readability

#### 5. **Professional Navigation**
- Sticky navbar with backdrop blur effect
- Active link indicator with underline animation
- Smooth hover states with color transitions
- Elevated shadow on scroll for depth perception

#### 6. **Enhanced Course Cards**
- **Professional layout** with improved spacing
- **Detailed metadata** with visual icons
- **Rating badges** with star icons
- **Hover effects** including image zoom and card lift
- **Color-coded tags** for language, level, and class count
- **Currency formatting** for pricing

#### 7. **Time Filter Section**
- **Custom SVG icons** for different times of day:
  - Animated sunrise icon for morning classes
  - Bright sun for afternoon classes
  - Crescent moon for evening and late evening
- **Color-coded cards** matching the time period
- **Smooth hover animations** with rotation effects

---

## 🛠️ Technologies Used

- **React 18** - Modern React with functional components and hooks
- **Vite** - Lightning-fast build tool and dev server
- **TailwindCSS 3** - Utility-first CSS framework
- **PostCSS** - CSS processing and optimization
- **JavaScript ES6+** - Modern JavaScript features

---

## 📦 Project Structure

```
undoschool-frontend/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx              # Top navigation bar
│   │   ├── Hero.jsx                # Hero section with search
│   │   ├── SearchBar.jsx           # Search input component
│   │   ├── AgeSelector.jsx         # Age filter chips
│   │   ├── CourseCard.jsx          # Individual course card
│   │   ├── CategoryCard.jsx        # Category selection card
│   │   ├── TeacherCard.jsx         # Teacher profile card
│   │   └── TimeFilterCard.jsx      # Time slot filter card
│   ├── data/
│   │   └── courses.js              # Mock data for courses
│   ├── pages/
│   │   └── BrowseCourses.jsx       # Main page component
│   ├── App.jsx                     # Root component
│   ├── main.jsx                    # Application entry point
│   └── index.css                   # Global styles and animations
├── public/                         # Static assets
├── index.html                      # HTML template
├── package.json                    # Dependencies and scripts
├── tailwind.config.js              # Tailwind configuration
├── postcss.config.js               # PostCSS configuration
├── vite.config.js                  # Vite configuration
└── README.md                       # This file
```

---

## 🎯 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn package manager

### Steps to Run Locally

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd undoschool-frontend
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   - Navigate to `http://localhost:5173`
   - The page will hot-reload on file changes

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder, ready for deployment.

### Preview Production Build

```bash
npm run preview
```

---

## 🌐 Deployment

### Option 1: Netlify
1. Create account at [netlify.com](https://netlify.com)
2. Connect GitHub repository
3. Build command: `npm run build`
4. Publish directory: `dist`

### Option 2: Vercel
1. Create account at [vercel.com](https://vercel.com)
2. Import GitHub repository
3. Vercel auto-detects Vite configuration

### Option 3: GitHub Pages
```bash
npm run build
# Deploy the dist/ folder to gh-pages branch
```

---

## 📱 Responsive Breakpoints

- **Mobile:** 375px - 639px
- **Tablet:** 640px - 1023px
- **Desktop:** 1024px - 1440px
- **Large Desktop:** 1440px+

All components are tested and optimized for these breakpoints.

---

## ✨ Key Code Highlights

### Custom CSS Variables
```css
:root {
  --primary: #6B21A8;
  --primary-light: #A855F7;
  --accent-yellow: #EAB308;
  --accent-orange: #F97316;
  /* ... more design tokens */
}
```

### Professional Animations
```css
@keyframes fade-in-up {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
```

### Component Patterns
- Functional components with React hooks
- Props-based customization
- Reusable card components
- Consistent naming conventions

---

## 🎨 Design Specifications Met

✅ Typography - Poppins/Nunito fonts
✅ Color Palette - Exact hex values from Figma
✅ Spacing - Consistent padding and margins
✅ Shadows - `0px 4px 16px rgba(0,0,0,0.08)` for cards
✅ Border Radius - Consistent 12px-24px values
✅ Gradients - Purple gradient for hero section
✅ Icons - Professional SVG replacements
✅ Layout - Max-width 1440px containers

---

## 🔄 Future Enhancements (Not Required)

- Backend API integration for dynamic course data
- User authentication and profile management
- Shopping cart functionality
- Course filtering and search
- Pagination for large course lists
- Dark mode theme toggle
- Accessibility improvements (ARIA labels, keyboard navigation)
- Unit tests with Jest/Vitest
- E2E tests with Cypress/Playwright

---

## 📝 Notes

- All components are modular and reusable
- Code follows React best practices
- TailwindCSS utility classes used for rapid development
- No external UI libraries used (built from scratch)
- Performance optimized with Vite bundler
- Images use Unsplash URLs (replace with actual course images)

---

## 📞 Contact

For any questions or clarifications regarding this submission:

- **Email:** [your.email@example.com]
- **LinkedIn:** [your-linkedin-profile]
- **GitHub:** [your-github-profile]

---

## 📄 License

This project was created as part of the UndoSchool Front-End Developer assignment.

---

**Thank you for reviewing my submission! I look forward to discussing the implementation details.**
