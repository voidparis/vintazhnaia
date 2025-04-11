# 1stDibs Clone

A modern, responsive clone of the 1stDibs e-commerce platform built with React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Fully responsive layout that works seamlessly on mobile, tablet, and desktop devices
- **Interactive Navigation**: Hamburger menu for mobile and mega menu for desktop
- **Enhanced Search Bar**: Expandable search that responds to user interactions and scrolling
- **Dynamic Product Pages**: Product detail pages with tabbed information sections
- **Account Management**: User account, favorites, and cart functionality
- **Mobile-Optimized Experience**: Special attention to mobile UX with slide-in menus and touch-friendly controls

## Technology Stack

- **Frontend Framework**: React with TypeScript
- **Styling**: Tailwind CSS for utility-first styling
- **Build Tool**: Vite for fast development and optimized production builds
- **Package Manager**: Bun for efficient dependency management
- **State Management**: React Hooks for local state management
- **Routing**: React Router v6 for navigation
- **Version Control**: Git and GitHub

## Getting Started

### Prerequisites

- Node.js 16+ or Bun 1.0+

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/1stdibs-clone.git
cd 1stdibs-clone
```

2. Install dependencies
```bash
bun install
# or
npm install
```

3. Start the development server
```bash
bun run dev
# or
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## Project Structure

```
1stdibs-clone/
├── public/            # Static assets
│   ├── fonts/         # Custom fonts
│   └── images/        # Images and icons
├── src/
│   ├── components/    # React components
│   │   ├── account/   # Account-related components
│   │   ├── catalog/   # Product catalog components
│   │   ├── home/      # Homepage components
│   │   ├── layout/    # Layout components like Header and Footer
│   │   ├── product/   # Product detail components
│   │   └── ui/        # Reusable UI components
│   ├── data/          # Mock data for products
│   ├── App.tsx        # Main App component with routing
│   ├── main.tsx       # Entry point
│   └── index.css      # Global styles
├── .gitignore         # Git ignore file
├── index.html         # HTML entry point
├── package.json       # Project dependencies and scripts
├── tsconfig.json      # TypeScript configuration
└── vite.config.ts     # Vite configuration
```

## Development Workflow

- Run `bun run dev` to start the development server
- Run `bun run build` to create a production build
- Run `bun run preview` to preview the production build locally

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- Design inspired by [1stDibs](https://www.1stdibs.com/)
- Icons from [Heroicons](https://heroicons.com/)
- Product images sourced from various public domain sources

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request
