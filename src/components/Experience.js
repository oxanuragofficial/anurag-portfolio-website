import React from 'react';
import './Experience.css';

function Experience() {
 const experience = [
  {
    id: 1,
    title: 'Founder & Web Developer',
    company: 'Bharat Webstudio',
    location: 'Vadodara, Gujarat',
    period: '2024 - Present',
    type: 'Freelance / Self-Employed',
    description: 'Building modern and responsive websites for clients while continuously improving frontend development skills.',
    achievements: [
      'Developed responsive websites using HTML, CSS, and JavaScript',
      'Worked with clients to understand requirements and deliver customized solutions',
      'Improved UI/UX design skills through real-world projects'
    ],
    technologies: ['HTML', 'CSS', 'JavaScript', 'React']
  },
  {
    id: 2,
    title: 'Frontend Developer (Learning Phase)',
    company: 'Personal Projects',
    location: 'Remote',
    period: '2024 - Present',
    type: 'Self-Learning',
    description: 'Actively building projects and improving problem-solving skills through hands-on development.',
    achievements: [
      'Built personal portfolio website using React',
      'Practiced problem-solving and logic building',
      'Learned modern frontend concepts including components and state management'
    ],
    technologies: ['React', 'JavaScript', 'HTML', 'CSS']
  }
];

  return (
    <section id="experience" className="experience">
      <h2>Work Experience</h2>

      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={exp.id} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
            <div className="timeline-dot"></div>
            <div className="timeline-content">
              <div className="experience-header">
                <div className="experience-title-section">
                  <h3>{exp.title}</h3>
                  <div className="company-info">
                    <span className="company">{exp.company}</span>
                    <span className="location">📍 {exp.location}</span>
                  </div>
                </div>
                <div className="experience-meta">
                  <span className="period">{exp.period}</span>
                  <span className="type">{exp.type}</span>
                </div>
              </div>

              <p className="description">{exp.description}</p>

              <div className="achievements">
                <h4>Key Achievements:</h4>
                <ul>
                  {exp.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              </div>

              <div className="technologies">
                <strong>Technologies:</strong>
                <div className="tech-tags">
                  {exp.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;