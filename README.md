# KC Overseas - Website Assignment

A modern, responsive website for KC Overseas built with React, TypeScript, and Vite. This project demonstrates a clean architecture, component-based design, and a comprehensive design system.

## 🚀 Features

- **Responsive Design**: Fully responsive layout
- **Modern Tech Stack**: Built with React 19, TypeScript, and Vite
- **Component Architecture**: Modular, reusable components with SCSS modules
- **Design System**: Comprehensive design system with typography, colors, and mixins
- **Custom Icons**: SVG-based icon components
- **Type Safety**: Full TypeScript implementation for better code quality

## 📋 Project Structure

```
src/
├── assets/
│   ├── fonts/          # Custom AOK Buenos Aires font family
│   ├── Icons/          # SVG icon components
│   └── Images/         # Image assets
├── components/         # Reusable components (Carousel, Dropdown)
├── designSystem/      # Design tokens, typography, colors, mixins
├── hooks/             # Custom React hooks (useIsMobile)
├── pages/
│   ├── Homepage/      # Homepage sections
│   │   ├── Events/
│   │   ├── HighlightSteps/
│   │   ├── LatestUpdates/
│   │   ├── Promotion/
│   │   ├── Services/
│   │   └── Testimonials/
│   └── Layout/        # Layout components (Header, Footer)
└── App.tsx            # Main application component
```

## 🛠️ Tech Stack

- **React 19.2.0** - UI library
- **TypeScript 5.9.3** - Type safety
- **Vite 7.2.4** - Build tool and dev server
- **SCSS** - Styling with CSS modules
- **ESLint** - Code linting

## 📦 Installation

1. Clone the repository:

```bash
git clone <repository-url>
cd kc-overseas
```

2. Install dependencies:

```bash
npm install
```

## 🏃 Running the Application

### Development Server

Start the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port specified by Vite).

> **⚠️ Important Note for Reviewers**: When testing responsive behavior by resizing the browser window from full screen to mobile size, please **refresh the page** to see the mobile layout. This is due to the `useIsMobile` hook implementation. The responsive behavior works correctly when the application is directly opened on a mobile device or when the browser is initially loaded at a mobile size.

### Build for Production

Build the application for production:

```bash
npm run build
```

The optimized build will be in the `dist` directory.

### Preview Production Build

Preview the production build locally:

```bash
npm run preview
```

### Linting

Run ESLint to check for code quality issues:

```bash
npm run lint
```

## 🎨 Design System

The project includes a comprehensive design system located in `src/designSystem/`:

- **Typography**: Custom font system with AOK Buenos Aires font family
- **Colors**: Primary and secondary color palettes
- **Mixins**: Reusable SCSS mixins for common patterns
- **Box Shadows**: Consistent shadow utilities
- **Classes**: Shared utility classes

## 📱 Responsive Breakpoints

The application uses a custom `useIsMobile` hook for responsive behavior:

- Mobile breakpoint: 576px

## 📝 Code Quality

- TypeScript for type safety
- ESLint for code linting
- SCSS modules for scoped styling
- Component-based architecture
- Custom hooks for reusable logic

## 🎯 Assignment Highlights

This project demonstrates:

- Modern React development practices
- TypeScript implementation
- Responsive design principles
- Component reusability
- Design system implementation
- Clean code architecture

## 📄 License

This project is part of an interview assignment.
