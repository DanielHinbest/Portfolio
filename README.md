# Daniel Hinbest's Portfolio

A professional portfolio website showcasing my skills, education, and projects as a software developer and computer science student.

## 🌐 Live Website

Visit the live portfolio at [https://danielhinbest.github.io/Portfolio/](https://danielhinbest.github.io/Portfolio/)

## ✨ Features

- **Responsive Design**: Looks great on all devices from mobile to desktop
- **Modern UI**: Clean, professional interface with intuitive navigation
- **Project Showcase**: Detailed project descriptions with technology stacks
- **Interactive Elements**: Smooth transitions and engaging user experience
- **Skills & Education**: Comprehensive overview of technical skills and educational background
- **Professional Experience**: Highlights of work history and accomplishments

## 🛠️ Technologies Used

- **React**: Frontend library for building the user interface
- **Bootstrap 5**: CSS framework for responsive design
- **Font Awesome**: Icon library for enhanced visual elements
- **GitHub Pages**: Hosting solution for the portfolio

## 🚀 Project Structure

```
portfolio-website/
├── public/
│   ├── images/           # Project and profile images
│   └── index.html        # Entry HTML file
├── src/
│   ├── components/       # React components
│   │   ├── About.js      # About component for displaying personal info
│   │   ├── AboutList.js  # List of About components
│   │   ├── Carousel.js   # Image carousel component
│   │   ├── Footer.js     # Footer component
│   │   ├── Header.js     # Header/navigation component
│   │   ├── Main.js       # Main content component
│   │   ├── Project.js    # Individual project component
│   │   └── ProjectList.js # List of Project components
│   ├── css/              # Stylesheet files
│   │   ├── App.css       # Core application styles
│   │   ├── carousel.css  # Carousel-specific styles
│   │   └── custom.css    # Custom styles for the portfolio
│   ├── App.js            # Main App component
│   └── index.js          # React entry point
└── package.json          # Project dependencies and scripts
```

## 📋 Features and Components

### Header Component
- Navigation links to GitHub, LinkedIn, and resume
- Responsive mobile-friendly design

### Hero Section
- Professional introduction with profile image
- Quick overview of key skills
- Call-to-action buttons

### About Sections
- Education background
- Work experience
- Technical skills overview
- Accomplishments

### Projects Section
- Detailed project descriptions
- Technology stacks used for each project
- Links to GitHub repositories
- Project screenshots

### Footer
- Contact information
- Social media links
- Copyright information

## 🔧 Setup and Deployment

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Installation
1. Clone the repository:
   ```
   git clone https://github.com/DanielHinbest/Portfolio.git
   cd Portfolio
   ```

2. Install dependencies:
   ```
   npm install
   ```

3. Start the development server:
   ```
   npm start
   ```

### Building for Production
1. Build the project:
   ```
   $env:BUILD_PATH = 'docs'; npm run build
   ```

2. The build will be generated in the `docs` folder for GitHub Pages deployment

### Deployment to GitHub Pages
1. Push the changes to your GitHub repository:
   ```
   git add .
   git commit -m "Built project for GitHub Pages"
   git push origin main
   ```

2. Configure GitHub Pages in your repository settings to use the `docs` folder on the `main` branch

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 📬 Contact

LinkedIn: [https://www.linkedin.com/in/daniel-hinbest](https://www.linkedin.com/in/daniel-hinbest)

GitHub: [https://github.com/DanielHinbest](https://github.com/DanielHinbest)