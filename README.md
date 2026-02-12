# Pono Pono Peace Initiative

This is a React-based website for the Pono Pono Peace Initiative built with Vite.

## Table of Contents

- [File Navigation](#file-navigation)
- [Installation](#installation)
- [Technologies & Libraries](#technologies--libraries)
- [Licenses](#licenses)
- [Getting Started](#getting-started)

## File Navigation

### Repository Structure

```
PonoPonoPeaceInitiative/
├── index.html                    # Entry HTML file
├── package.json                  # Project dependencies and scripts
├── package-lock.json             # Locked dependency versions
├── vite.config.js               # Vite configuration
├── README.md                    # Project documentation
│
├── src/                         # Source code directory
│   ├── main.jsx                 # Application entry point
│   ├── App.jsx                  # Root component with routing
│   │
│   ├── components/              # React components
│   │   ├── Header.jsx           # Navigation header
│   │   ├── Header.css           # Header styles
│   │   ├── Footer.jsx           # Footer with links
│   │   ├── Footer.css           # Footer styles
│   │   ├── Hero.jsx             # Homepage hero section
│   │   ├── Hero.css             # Hero styles
│   │   ├── About.jsx            # About us page
│   │   ├── About.css            # About page styles
│   │   ├── ProjectPage.jsx      # Projects showcase
│   │   ├── ProjectPage.css      # Projects styles
│   │   ├── BlogPage.jsx         # Blog listing
│   │   ├── BlogPage.css         # Blog styles
│   │   ├── Contact.jsx          # Contact form/info
│   │   ├── Contact.css          # Contact styles
│   │   ├── DonatePage.jsx       # Donation page
│   │   ├── DonatePage.css       # Donation styles
│   │   ├── Popup.jsx            # Popup/Modal component
│   │   │
│   │   └── cards/               # Team member card components
│   │       ├── Card_Brian.jsx
│   │       ├── Card_Maclaine.jsx
│   │       ├── Card_Naomi.jsx
│   │       ├── Card_Rebecca.jsx
│   │       ├── Card_Reka.jsx
│   │       └── Card_Steve.jsx
│   │
│   ├── data/                    # Data management
│   │   └── updateManager.js     # Data update utilities
│   │
│   └── images/                  # Image assets
│       └── ponologo.png         # Pono Pono logo
│
└── node_modules/                # Dependencies (auto-generated)
```

### Key Files Description

- **index.html**: Root HTML file that loads the React application
- **src/main.jsx**: Entry point that renders the App component into the DOM
- **src/App.jsx**: Main component containing React Router configuration
- **vite.config.js**: Build tool configuration for development and production

## Installation

### Prerequisites

Before installing this project, ensure you have the following installed:

- **Node.js**: Version 14.x or higher (recommended: 18.x or 20.x)

  - Download from: https://nodejs.org/
  - Verify installation: `node --version`

- **npm**: Comes bundled with Node.js (version 6.x or higher)
  - Verify installation: `npm --version`

### Installation Steps

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd PonoPonoPeaceInitiative
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

   This command installs all required packages listed in package.json

3. **Verify installation**
   ```bash
   npm run dev
   ```
   The development server should start at http://localhost:5173

### Troubleshooting Installation

- If you encounter permission errors, try using `sudo npm install` (macOS/Linux) or run as Administrator (Windows)
- Clear npm cache if installation fails: `npm cache clean --force`
- Delete `node_modules` and `package-lock.json`, then run `npm install` again

## Technologies & Libraries

### Core Dependencies

| Library              | Version | License | Purpose                                       | Source                                         |
| -------------------- | ------- | ------- | --------------------------------------------- | ---------------------------------------------- |
| **react**            | ^18.2.0 | MIT     | Core React library for building UI components | https://www.npmjs.com/package/react            |
| **react-dom**        | ^18.2.0 | MIT     | React rendering for web browsers              | https://www.npmjs.com/package/react-dom        |
| **react-router-dom** | ^7.9.5  | MIT     | Declarative routing for React applications    | https://www.npmjs.com/package/react-router-dom |

### Development Dependencies

| Library                  | Version | License | Purpose                                          | Source                                             |
| ------------------------ | ------- | ------- | ------------------------------------------------ | -------------------------------------------------- |
| **vite**                 | ^7.2.2  | MIT     | Fast build tool and development server           | https://vitejs.dev/                                |
| **@vitejs/plugin-react** | ^4.0.0  | MIT     | Official Vite plugin for React with Fast Refresh | https://www.npmjs.com/package/@vitejs/plugin-react |
| **@types/react**         | ^18.2.0 | MIT     | TypeScript type definitions for React            | https://www.npmjs.com/package/@types/react         |
| **@types/react-dom**     | ^18.2.0 | MIT     | TypeScript type definitions for React DOM        | https://www.npmjs.com/package/@types/react-dom     |

### Build Tools & Plugins

- **Vite**: Next-generation frontend build tool providing fast HMR (Hot Module Replacement)
- **ESBuild**: JavaScript bundler used by Vite (bundled dependency)
- **Rollup**: Module bundler for production builds (bundled dependency)

### CSS Framework

- **CSS3**: Vanilla CSS with no additional frameworks
- Custom component-level stylesheets

## Licenses

### Project License

This project's license is not yet specified. Please consult with the project sponsors.

### Third-Party Licenses

All dependencies are licensed under the **MIT License**, which permits:

- Commercial use
- Modification
- Distribution
- Private use

#### Key Library Licenses

- **React & React-DOM**: MIT License - © Meta Platforms, Inc.
- **React Router**: MIT License - © Remix Software Inc.
- **Vite**: MIT License - © 2019-present, Yuxi (Evan) You and contributors

## Getting Started

### Development

To run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173`

Features in development mode:

- Hot Module Replacement (HMR)
- Fast refresh for React components
- Detailed error messages
- Source maps for debugging

### Build for Production

To build the application for production:

```bash
npm run build
```

This creates an optimized production build in the `dist/` directory:

- Minified JavaScript and CSS
- Optimized asset loading
- Tree-shaking to remove unused code

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

This serves the production build from the `dist/` directory for testing before deployment.
