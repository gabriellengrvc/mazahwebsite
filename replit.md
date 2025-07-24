# Mazah - Full-Stack Web Application

## Overview

This is a full-stack web application called "Mazah" - a food waste fighting app built with React, Express, and PostgreSQL. The application features a modern landing page showcasing a mobile app that helps users track food expiration dates, discover recipes for leftover ingredients, find nearby donation centers, and monitor their environmental impact. The architecture follows a monorepo structure with shared types and schemas between frontend and backend.

## User Preferences

Preferred communication style: Simple, everyday language.
App color scheme: #547253 (green) and #fffad4 (cream) - updated throughout the website design.
Major achievement: Winner of National Geographic Slingshot Challenge - featured prominently on website.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Styling**: TailwindCSS with shadcn/ui component library
- **State Management**: TanStack Query (React Query) for server state
- **Routing**: Wouter for lightweight client-side routing
- **Animations**: Framer Motion for smooth animations
- **UI Components**: Extensive shadcn/ui component collection with Radix UI primitives

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ESM modules
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Session Management**: PostgreSQL-based sessions with connect-pg-simple
- **Development**: Hot reloading with tsx

### Monorepo Structure
```
├── client/          # React frontend application
├── server/          # Express backend application
├── shared/          # Shared types, schemas, and utilities
├── migrations/      # Database migration files
└── dist/           # Production build output
```

## Key Components

### Frontend Components
- **Navigation**: Fixed header with smooth scrolling navigation
- **Hero Section**: Landing page with app download buttons and ratings
- **Features Section**: Grid layout showcasing app capabilities
- **Screenshots Section**: Visual gallery of app interfaces
- **Testimonials Section**: User reviews and feedback
- **Download Section**: App store download links and promotional content
- **Footer**: Company information and social links

### Backend Components
- **Routes Handler**: Centralized route registration system
- **Storage Interface**: Abstracted data access layer with in-memory implementation
- **Vite Integration**: Development server with HMR support
- **Error Handling**: Centralized error middleware

### Shared Components
- **Database Schema**: Drizzle schema definitions with Zod validation
- **Type Definitions**: Shared TypeScript interfaces and types

## Data Flow

### Frontend Data Flow
1. Components use TanStack Query for server state management
2. API requests handled through centralized `apiRequest` function
3. Form validation using React Hook Form with Zod resolvers
4. Toast notifications for user feedback

### Backend Data Flow
1. Express middleware processes requests
2. Routes delegate to storage interface for data operations
3. Storage interface abstracts database operations
4. Responses formatted consistently across endpoints

### Database Schema
- **Users Table**: Basic user authentication with username/password
- **Extensible Design**: Schema structured for easy expansion

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React, React DOM, React Hook Form
- **UI Framework**: Radix UI components, Lucide React icons
- **Styling**: TailwindCSS, CVA for component variants
- **Utilities**: Date-fns, clsx, nanoid
- **Development**: Vite, TypeScript, ESLint

### Backend Dependencies
- **Core**: Express, TypeScript, tsx for development
- **Database**: Drizzle ORM, Neon Database serverless driver
- **Session**: connect-pg-simple for PostgreSQL sessions
- **Build**: esbuild for production bundling

### Development Tools
- **Database**: Drizzle Kit for migrations and schema management
- **Build**: Vite for frontend, esbuild for backend
- **Type Checking**: TypeScript with strict configuration
- **Replit Integration**: Custom plugins for development environment

## Deployment Strategy

### Build Process
1. **Frontend Build**: Vite builds optimized React application to `dist/public`
2. **Backend Build**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command

### Production Configuration
- **Environment**: NODE_ENV=production
- **Database**: PostgreSQL connection via DATABASE_URL
- **Static Files**: Express serves built frontend from dist/public
- **Process**: Single Node.js process serving both API and static files

### Development Workflow
- **Hot Reloading**: Vite middleware integrated with Express for instant updates
- **Database Schema**: Push schema changes directly to development database
- **Type Safety**: Shared types ensure consistency between frontend and backend

### Key Architectural Decisions

1. **Monorepo Structure**: Chose monorepo to share types and schemas between frontend/backend, reducing duplication and ensuring consistency.

2. **Drizzle ORM**: Selected for type-safe database operations and excellent TypeScript integration over alternatives like Prisma.

3. **TanStack Query**: Implemented for robust server state management, caching, and background updates.

4. **Vite + Express Integration**: Custom integration allows hot reloading in development while serving static files in production.

5. **Storage Interface Pattern**: Abstracted data access to allow switching between in-memory (development) and database (production) implementations.

6. **shadcn/ui Component System**: Provides consistent, accessible UI components while maintaining full customization control.