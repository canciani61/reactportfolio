import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink, Navigate } from 'react-router-dom';
import './App.css';

// Header Component
function Header() {
  return (
    <header className="header">
      <h1>Your Name</h1>
      <Navigation />
    </header>
  );
}

// Navigation Component
function Navigation() {
  return (
    <nav className="navigation">
      <NavLink to="/about" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        About Me
      </NavLink>
      <NavLink to="/portfolio" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Portfolio
      </NavLink>
      <NavLink to="/contact" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Contact
      </NavLink>
      <NavLink to="/resume" className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}>
        Resume
      </NavLink>
    </nav>
  );
}

// Project Component
function Project({ title, image, deployedLink, githubLink, description }) {
  return (
    <div className="project">
      <img src={image} alt={title} className="project-image" />
      <div className="project-info">
        <h3>{title}</h3>
        {description && <p>{description}</p>}
        <div className="project-links">
          <a href={deployedLink} target="_blank" rel="noopener noreferrer">Deployed App</a>
          <a href={githubLink} target="_blank" rel="noopener noreferrer">GitHub Repo</a>
        </div>
      </div>
    </div>
  );
}

// Footer Component
function Footer() {
  return (
    <footer className="footer">
      <div className="social-links">
        <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-github"></i> GitHub
        </a>
        <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-linkedin"></i> LinkedIn
        </a>
        <a href="https://stackoverflow.com/users/yourid" target="_blank" rel="noopener noreferrer">
          <i className="fab fa-stack-overflow"></i> Stack Overflow
        </a>
      </div>
      <p>&copy; {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </footer>
  );
}

// About Page
function About() {
  return (
    <section className="about">
      <h2>About Me</h2>
      <div className="about-content">
        <img src="path/to/your/profile.jpg" alt="Developer" className="profile-image" />
        <div className="bio">
          <p>
            Hello! I'm a passionate web developer with a background in [your background]. 
            I specialize in building responsive, user-friendly web applications using 
            modern technologies such as React, Node.js, and more.
          </p>
        </div>
      </div>
    </section>
  );
}

// Portfolio Page
function Portfolio() {
  const projects = [
    {
      id: 1,
      title: "Project One",
      image: "path/to/project1.jpg",
      deployedLink: "https://project1.example.com",
      githubLink: "https://github.com/yourusername/project1",
      description: "A brief description of the project and technologies used."
    },
    {
      id: 2,
      title: "Project Two",
      image: "path/to/project2.jpg",
      deployedLink: "https://project2.example.com",
      githubLink: "https://github.com/yourusername/project2",
      description: "A brief description of the project and technologies used."
    }
  ];

  return (
    <section className="portfolio">
      <h2>Portfolio</h2>
      <div className="projects-grid">
        {projects.map(project => (
          <Project
            key={project.id}
            title={project.title}
            image={project.image}
            deployedLink={project.deployedLink}
            githubLink={project.githubLink}
            description={project.description}
          />
        ))}
      </div>
    </section>
  );
}

// Contact Page
function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form Submitted!');
  };

  return (
    <section className="contact">
      <h2>Contact Me</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input 
            type="text" 
            name="name" 
            value={formData.name} 
            onChange={handleChange}
          />
        </label>
        <label>
          Email:
          <input 
            type="email" 
            name="email" 
            value={formData.email} 
            onChange={handleChange}
          />
        </label>
        <label>
          Message:
          <textarea 
            name="message" 
            value={formData.message} 
            onChange={handleChange}
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}

// Resume Page
function Resume() {
  return (
    <section className="resume">
      <h2>Resume</h2>
      <p>Insert your resume details here.</p>
    </section>
  );
}

// Main App Component
function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="content">
          <Routes>
            <Route path="/about" element={<About />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="*" element={<Navigate to="/about" replace />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
