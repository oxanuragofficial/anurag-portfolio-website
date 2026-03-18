import React from 'react';
import './Experience.css';

function Experience() {
  const experiences = [
    {
      id: 1,
      title: 'Senior IT Specialist',
      company: 'Ethnotech Academy',
      location: 'Vadodara, Gujarat',
      period: 'April 2025 - Present',
      type: 'Contract',
      description: 'Delivered industry-focused training in Web Development, Django, Flask, Cisco Networking, Python, and Data Science with hands-on, project-based learning.',
      achievements: [
        'Conducted advanced JavaScript and full-stack training at Parul University, Vadodara',
        'Mentored 1000+ students through lectures, labs, and practical assessments',
        'Designed structured learning paths aligned with industry requirements'
      ]
      ,
      technologies: ['Web Development', 'Django', 'Flask', 'Cisco Networking', 'Python', 'Data Science', 'JavaScript']
    },
    {
      id: 2,
      title: 'Senior IT Instructor',
      company: 'W3Grads',
      location: 'GITA University',
      period: 'February 2025 - March 2025',
      type: 'Contract',
      description: 'Served as a Web Development Trainer at GITA University in collaboration with W3Grads, delivering hands-on and project-based learning.',
      achievements: [
        'Trained and mentored 450+ students, independently managing lectures and lab sessions',
        'Delivered comprehensive web development training covering theory and practical implementation'
      ]
      ,
      technologies: ['Web Development', 'HTML', 'CSS', 'JavaScript', 'React']
    },
    {
      id: 3,
      title: '  IT Instructor',
      company: 'Databits Technologies',
      location: 'GLA University',
      period: 'August 2024 - December 2024',
      type: 'Contract',
      description: 'Worked as an AI/ML Instructor, delivering industry-aligned training in machine learning and deep learning concepts with practical applications.',
      achievements: [
        'Covered machine learning types, neural networks, deep learning, and bias–variance tradeoff',
        'Taught model training, testing, evaluation, and feature engineering',
        'Designed interactive learning materials aligned with current industry practices'
      ]
      ,
      technologies: ['Python', 'Machine Learning', 'Deep Learning', 'Neural Networks', 'TensorFlow', 'scikit-learn']
    },
    {
      id: 4,
      title: '  IT Instructor',
      company: 'Gyeint',
      location: 'Sarala Birla University',
      period: 'May 2024 - July 2024',
      type: 'Contract',
      description: 'Delivered Python training at Sarala Birla University in collaboration with Gyeint, focusing on practical, real-world problem solving.',
      achievements: [
        'Trained and mentored 350+ students through classroom and lab sessions',
        'Covered Core Python, Data Structures, and Algorithms with hands-on implementation'
      ]
      ,
      technologies: ['Python', 'Data Structures', 'Algorithms', 'Problem Solving']
    },
    {
      id: 5,
      title: '  IT Instructor',
      company: 'Coding Blocks',
      location: 'Shri Nath University',
      period: 'January 2024 - April 2024',
      type: 'Contract',
      description: 'Worked as a MERN Stack Trainer, specializing in building scalable, real-world web applications at Shri Nath University in collaboration with Coding Blocks.',
      achievements: [
        'Trained and mentored 550+ students, managing lectures, hands-on labs, and project execution',
        'Covered complete MERN Stack including MongoDB, Express.js, React.js, and Node.js',
        'Focused on building scalable, production-ready web applications',
        'Delivered comprehensive full-stack development training with practical projects'
      ],
      technologies: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'JavaScript', 'Full Stack Development']
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