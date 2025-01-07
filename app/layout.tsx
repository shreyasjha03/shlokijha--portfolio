import './globals.css';
import React from 'react';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <title>Shloki Jha - Portfolio</title>
        <meta name="description" content="Portfolio of Shloki Jha, a data science student at the University of Michigan." />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap" rel="stylesheet" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css" />
      </head>
      <body>
        <header className="header">
          <div className="hero">
            <h1 className="title">Shloki Jha</h1>
            <p className="subtitle">Data Science Student | University of Michigan</p>
            <nav className="nav">
              <a href="#about">About</a>
              <a href="#skills">Skills</a>
              <a href="#projects">Projects</a>
              <a href="#contact">Contact</a>
            </nav>
          </div>
        </header>
        <main>{children}</main>
        <footer className="footer">
          <p>&copy; 2025 Shloki Jha. All Rights Reserved.</p>
        </footer>
      </body>
    </html>
  );
}
