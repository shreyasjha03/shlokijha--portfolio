export default function Page() {
  return (
    <div className="container">
      {/* About Section */}
      <section id="about" className="section about">
        <div className="about-content">
          <img src="/shloki.png" alt="Shloki Jha" className="about-photo" />
          <div className="about-text">
            <h2>About Me</h2>
            <p>
              Hello! I am <strong>Shloki Jha</strong>, a passionate data science student at the <em>University of Michigan</em>.
              I specialize in machine learning, statistical modeling, and data visualization. I enjoy solving real-world problems 
              through data-driven approaches.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section skills">
        <h2>Skills</h2>
        <ul className="skills-list">
          <li>Programming: Python, R, SQL</li>
          <li>Data Visualization: Tableau, Matplotlib, Seaborn</li>
          <li>Machine Learning: Scikit-learn, TensorFlow, PyTorch</li>
          <li>Big Data: Hadoop, Spark</li>
          <li>Cloud Platforms: AWS, Google Cloud</li>
        </ul>
      </section>

      {/* Projects Section */}
      <section id="projects" className="section projects">
        <h2>Projects</h2>
        <div className="project-card">
          <h3>Predictive Analytics for Healthcare</h3>
          <p>Built a predictive model to analyze patient data and forecast disease risks, achieving 85% accuracy.</p>
        </div>
        <div className="project-card">
          <h3>Customer Segmentation</h3>
          <p>Implemented clustering techniques to segment customers based on purchasing behavior.</p>
        </div>
        <div className="project-card">
          <h3>Interactive Data Visualization</h3>
          <p>Designed an interactive dashboard to visualize large datasets using Tableau and D3.js.</p>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section contact">
        <h2>Contact</h2>
        <p>Email: <a href="mailto:shloki.jha@umich.edu">shloki.jha@umich.edu</a></p>
        <p>LinkedIn: <a href="https://linkedin.com/in/shlokijha">linkedin.com/in/shlokijha</a></p>
        <p>GitHub: <a href="https://github.com/shlokijha">github.com/shlokijha</a></p>
      </section>
    </div>
  );
}
