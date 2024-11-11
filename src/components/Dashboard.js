import React, { useState, useEffect } from 'react';
import './Dashboard.css';
import metaIcon from '../assets/meta-icon.png';
import specCert from '../assets/spec.png';
import arCert from '../assets/ar.png';
import hcCert from '../assets/hc.png';
import jsCert from '../assets/js.png';
import rbCert from '../assets/rb.png';
import uiCert from '../assets/ui.png';
import vcCert from '../assets/vc.png';

function Dashboard() {
  const [showCertModal, setShowCertModal] = useState(false);
  const [imageError, setImageError] = useState(false);
  const [selectedCert, setSelectedCert] = useState(null);
  const [isNavSticky, setIsNavSticky] = useState(false);
  const [activeSection, setActiveSection] = useState('about');
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [userReviews, setUserReviews] = useState(() => {
    // Load saved reviews from localStorage on initial render
    const savedReviews = localStorage.getItem('portfolioReviews');
    return savedReviews ? JSON.parse(savedReviews) : [];
  });
  const [userRating, setUserRating] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsNavSticky(window.scrollY > 20);
      
      // Update active section based on scroll position
      const sections = document.querySelectorAll('section[id]');
      sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        if (window.scrollY >= sectionTop) {
          setActiveSection(section.id);
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    localStorage.setItem('portfolioReviews', JSON.stringify(userReviews));
  }, [userReviews]);

  const handleImageError = (e) => {
    console.error('Image failed to load:', e.target.src);
    setImageError(true);
  };

  const certificates = [
    { src: `${process.env.PUBLIC_URL}/assets/spec.png`, alt: 'Specialization Certificate' },
    { src: `${process.env.PUBLIC_URL}/assets/ar.png`, alt: 'Advanced React Certificate' },
    { src: `${process.env.PUBLIC_URL}/assets/hc.png`, alt: 'HTML and CSS Certificate' },
    { src: `${process.env.PUBLIC_URL}/assets/js.png`, alt: 'JavaScript Certificate' },
    { src: `${process.env.PUBLIC_URL}/assets/rb.png`, alt: 'React Basics Certificate' },
    { src: `${process.env.PUBLIC_URL}/assets/ui.png`, alt: 'UI Certificate' },
    { src: `${process.env.PUBLIC_URL}/assets/vc.png`, alt: 'Version Control Certificate' }
  ];

  const deleteReview = (reviewId) => {
    if (window.confirm('Are you sure you want to delete this review?')) {
      const updatedReviews = userReviews.filter(review => review.id !== reviewId);
      setUserReviews(updatedReviews);
    }
  };

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <div className="profile-section">
          <div className="profile-image-container">
            <img 
              src={process.env.PUBLIC_URL + '/MyPic.jpg'} 
              alt="Nabeel Nashath" 
              className="profile-image"
              onError={(e) => {
                console.error('Image failed to load');
                e.target.src = 'https://via.placeholder.com/200'; // Fallback image
              }}
            />
          </div>
          <h1>Nabeel Nashath</h1>
          <p className="title">Frontend Developer</p>
          
          <div className="contact-section">
            <div className="contact-info">
              <div className="contact-item">
                <i className="fas fa-phone"></i>
                <span>+91 8971907782</span>
              </div>
              <div className="contact-item">
                <i className="fas fa-envelope"></i>
                <a href="mailto:nabeelnashath55@gmail.com" className="email-link">
                  nabeelnashath55@gmail.com
                </a>
              </div>
            </div>
            
            <div className="social-links">
              <a href="https://github.com/nabeel5623" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/nabeel-nashath-8b8a7a1b7/" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
            </div>
          </div>
        </div>
      </header>

      <main className="dashboard-main">
        <nav className={`navigation-bar ${isNavSticky ? 'sticky' : ''}`}>
          <div className="nav-container">
            <a 
              href="#about" 
              className={activeSection === 'about' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('about').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <i className="fas fa-user"></i>
              <span>About</span>
            </a>
            <a 
              href="#education" 
              className={activeSection === 'education' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('education').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <i className="fas fa-graduation-cap"></i>
              <span>Education</span>
            </a>
            <a 
              href="#certifications" 
              className={activeSection === 'certifications' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('certifications').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <i className="fas fa-certificate"></i>
              <span>Certifications</span>
            </a>
            <a 
              href="#interests" 
              className={activeSection === 'interests' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('interests').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <i className="fas fa-star"></i>
              <span>Interests</span>
            </a>
            <a 
              href="#skills" 
              className={activeSection === 'skills' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('skills').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <i className="fas fa-tools"></i>
              <span>Skills</span>
            </a>
            <a 
              href="#projects" 
              className={activeSection === 'projects' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('projects').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <i className="fas fa-project-diagram"></i>
              <span>Projects</span>
            </a>
            <a className="hire-link"
              href="#hire" 
              className={activeSection === 'hire' ? 'active' : ''}
              onClick={(e) => {
                e.preventDefault();
                document.getElementById('hire').scrollIntoView({ behavior: 'smooth' });
              }}
            >
              <i className="fas fa-user-tie"></i>
              <span className="hire-text">Hire</span>
            </a>
          </div>
        </nav>

        <section id="about">
          <h2>About Me</h2>
          <p className="about-text">
            As an aspiring Frontend Developer, I am passionate about creating beautiful and intuitive user interfaces. 
            With a fresh perspective and eagerness to learn, I combine my creative mindset with technical skills to build 
            engaging web experiences. While I'm at the beginning of my journey, I'm dedicated to mastering modern web 
            technologies and staying current with industry best practices. My goal is to contribute to meaningful projects 
            while growing as a developer.
          </p>
        </section>

        <section id="education">
          <h2>Education</h2>
          <div className="education-timeline">
            <div className="education-card">
              <div className="education-year">2021 - 2023</div>
              <h3>Mangalore Institute of Technology and Engineering</h3>
              <p className="education-program">Bachelor of Engineering (Incomplete)</p>
              <p className="education-description">
                Pursued Computer Science Engineering until the third year, where I developed a strong foundation in programming 
                and software development. Despite having to discontinue due to medical circumstances (knee surgery), 
                I've transformed this challenge into an opportunity by dedicating myself to self-directed learning 
                in Web development.
              </p>
            </div>

            <div className="education-card">
              <div className="education-year">2018 - 2020</div>
              <h3>Dr. NSAM PU College Nitte</h3>
              <p className="education-program">Pre-University Education</p>
              <p className="education-description">
                Completed PU education with distinction, achieving 75% overall grade. Focused on core subjects that built 
                my analytical and problem-solving abilities, setting a strong foundation for my technical pursuits.
              </p>
            </div>

            <div className="education-card">
              <div className="education-year">2018</div>
              <h3>Dr. NSAM EMHS Nitte</h3>
              <p className="education-program">Secondary School Education</p>
              <p className="education-description">
                Graduated with 78% grade, demonstrating consistent academic performance and developing crucial learning skills. 
                Participated in various extracurricular activities that helped shape my collaborative and creative abilities.
              </p>
            </div>
          </div>
        </section>

        <section id="certifications">
          <h2>Licenses & Certifications</h2>
          
          <div className="certification-card">
            <div className="cert-header">
              <div className="meta-icon-container">
                <img 
                  src={metaIcon}
                  alt="Meta Logo" 
                  className="cert-issuer-logo"
                  onError={(e) => {
                    console.error('Meta icon failed to load');
                    e.target.style.display = 'none';
                  }}
                />
              </div>
              <div className="cert-info">
                <h3>Front-End Development Professional Certificate</h3>
                <p className="cert-issuer">Meta</p>
                <p className="cert-date">Issued 2024</p>
              </div>
            </div>
            
            <div className="cert-description">
              <p>A comprehensive professional certification program covering modern front-end development practices, including React, responsive design, and web development principles.</p>
            </div>
            
            <div className="cert-actions">
              <a 
                href="https://coursera.org/verify/professional-cert/3COJKUJEY04U"
                target="_blank"
                rel="noopener noreferrer"
                className="view-cert-btn"
              >
                <i className="fas fa-certificate"></i>
                View Certificate
              </a>
              
              
            </div>

            {/* Certificate Image Modal */}
            {showCertModal && (
              <div className="cert-modal" onClick={() => setShowCertModal(false)}>
                <div className="cert-modal-content" onClick={e => e.stopPropagation()}>
                  <span 
                    className="close-cert-modal"
                    onClick={() => setShowCertModal(false)}
                  >
                    &times;
                  </span>
                  <img 
                    src="/assets/spec.png"
                    alt="Meta Frontend Certificate" 
                    className="cert-modal-image"
                    onError={handleImageError}
                  />
                </div>
              </div>
            )}
          

            {/* Modal for viewing full certificate */}
            {selectedCert && (
              <div 
                className="cert-modal"
                onClick={() => setSelectedCert(null)}
              >
                <div 
                  className="cert-modal-content"
                  onClick={e => e.stopPropagation()}
                >
                  <span 
                    className="close-modal"
                    onClick={() => setSelectedCert(null)}
                  >
                    &times;
                  </span>
                  <img 
                    src={selectedCert}
                    alt="Certificate"
                    className="cert-modal-image"
                  />
                </div>
              </div>
            )}
          </div>

          
        </section>

        <section id="interests">
          <h2>Personal Interests & Achievements</h2>
          
          <div className="interests-grid">
            <div className="interest-card sports">
              <div className="interest-icon">⚽</div>
              <h3>Football Career</h3>
              <div className="achievement-content">
                <ul>
                  <li>State Level Football Player</li>
                  <li>Former Team Captain at Dr. NSAM PU College</li>
                  <li>Led school team at Dr. NSAM EMHS</li>
                  <li>Developed strong leadership and team management skills through sports</li>
                </ul>
              </div>
            </div>

            <div className="interest-card fitness">
              <div className="interest-icon">💪</div>
              <h3>Fitness Enthusiast</h3>
              <div className="achievement-content">
                <p>
                  Passionate about maintaining peak physical condition through dedicated workout routines 
                  and proper nutrition. My commitment to fitness has taught me discipline, perseverance, 
                  and the importance of setting and achieving personal goals.
                </p>
              </div>
            </div>

            <div className="interest-card gaming">
              <div className="interest-icon">🎮</div>
              <h3>Gaming & Technology</h3>
              <div className="achievement-content">
                <p>
                  My journey with technology began early, sparked by my first PC gaming experiences. 
                  This early exposure to computers naturally evolved into a passion for coding and 
                  development. I still enjoy gaming as a way to unwind and stay connected with the 
                  latest tech trends.
                </p>
              </div>
            </div>

            <div className="interest-card coding">
              <div className="interest-icon">💻</div>
              <h3>Coding Journey</h3>
              <div className="achievement-content">
                <p>
                  What started as curiosity around computers has grown into a deep passion for coding. 
                  I find joy in creating and problem-solving through programming, constantly learning 
                  new technologies and challenging myself to grow as a developer.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section id="skills">
          <h2>Skills</h2>
          <div className="skills-container">
            {/* Technical Skills Section */}
            <div className="skills-section">
              <h3><i className="fas fa-laptop-code"></i> Technical Skills</h3>
              <div className="skills-grid">
                {/* Programming Languages */}
                <div className="skill-card">
                  <i className="fas fa-code"></i>
                  <h4>Languages</h4>
                  <div className="skill-items">
                    <span>JavaScript</span>
                    <span>Python</span>
                    <span>Java</span>
                    <span>C++</span>
                    <span>C</span>
                  </div>
                </div>

                {/* Frontend */}
                <div className="skill-card">
                  <i className="fas fa-desktop"></i>
                  <h4>Frontend</h4>
                  <div className="skill-items">
                    <span>React.js</span>
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>Bootstrap</span>
                    <span>Tailwind</span>
                  </div>
                </div>

                {/* Backend & Database */}
                <div className="skill-card">
                  <i className="fas fa-database"></i>
                  <h4>Backend & Database</h4>
                  <div className="skill-items">
                    <span>Node.js</span>
                    <span>MySQL</span>
                    <span>MongoDB</span>
                    <span>Express.js</span>
                    <span>PostgreSQL</span>
                  </div>
                </div>

                {/* Tools & Others */}
                <div className="skill-card">
                  <i className="fas fa-tools"></i>
                  <h4>Tools & Others</h4>
                  <div className="skill-items">
                    <span>Git</span>
                    <span>GitHub</span>
                    <span>VS Code</span>
                    <span>Postman</span>
                    <span>npm</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Professional Skills */}
            <div className="skills-category">
              <h3>Professional Skills</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <i className="fas fa-users"></i>
                  <span>Team Work</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-lightbulb"></i>
                  <span>Initiative</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-tasks"></i>
                  <span>Project Management</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-comments"></i>
                  <span>Communication</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-puzzle-piece"></i>
                  <span>Problem Solving</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-clock"></i>
                  <span>Time Management</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-sync-alt"></i>
                  <span>Adaptability</span>
                </div>
                <div className="skill-item">
                  <i className="fas fa-chart-line"></i>
                  <span>Leadership</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="projects">
          <h2>My Projects</h2>
          <div className="projects-grid">
            <div className="project-card">
              <div className="project-title">
                <i className="fas fa-briefcase"></i>
                <h3>WorkEase</h3>
              </div>
              <p>I've developed an app that connects users with skilled craftsmen across various trades, offering services at fixed hourly rates for transparency and convenience. This platform is designed not only to meet customer needs efficiently but also to open up new employment opportunities, particularly for craftsmen from underserved communities.</p>
              <div className="project-links">
                <a 
                  href="https://github.com/nabeel5623/WorkEase-App"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="github-link"
                >
                  <i className="fab fa-github"></i> View Code
                </a>
                <a 
                  href="https://musical-pothos-03e823.netlify.app/" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="view-project-btn"
                >
                  Live Demo
                </a>
              </div>
            </div>

            <div className="project-card">
              <div className="project-title">
                <i className="fas fa-bus"></i>
                <h3>BookBus - Redefining Bus Travel</h3>
              </div>
              <p>BookBus is a comprehensive travel booking platform designed for a seamless and versatile experience. Beyond booking buses, users can also book cabs, hotels, and select meal options during their journey planning. Featuring popular locations like Bangalore, Mangalore, Goa, and Mumbai, BookBus integrates an intuitive UI built with React.</p>
              <p><span className="error-text">If page not found click on back to our site! Extremely sorry for the inconvenience</span></p>
              <div className="project-links">
                <a 
                  href="https://github.com/nabeel5623/BookBus-Booking-App"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="github-link"
                >
                  <i className="fab fa-github"></i> View Code
                </a>
                <a 
                  href="https://spectacular-truffle-88cae2.netlify.app/login" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="view-project-btn"
                >
                  Live Demo
                </a>
              </div>
            </div>
            <div className="project-card">
              <div className="project-title">
                <i className="fas fa-briefcase"></i>
                <h3>My Portfolio</h3>
              </div>
              <p>This project is a personal portfolio website showcasing my skills, projects, and experience in web development. Built with a clean and modern design, it highlights my expertise in HTML, CSS, JavaScript, and React. The site includes sections for my professional background, completed projects, and contact information, offering an interactive and user-friendly experience for visitors.</p>
              <p><span className="msg">You're currently scrolling through my portfolio website, showcasing my skills, projects, and professional journey in web development.</span></p>
              <div className="project-links">
                <a 
                  href="https://github.com/nabeel5623/MyPortfolio"
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="github-link"
                >
                  <i className="fab fa-github"></i> View Code
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="view-project-btn"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Add this after Projects section, before Footer */}
        <section className="hire-me-section" id="hire">
          {/* Why Hire Me */}
          <div className="hire-me-container">
            <h2><i className="fas fa-handshake"></i> Why Hire Me?</h2>
            
            <div className="hire-me-grid">
              <div className="hire-me-card">
                <i className="fas fa-rocket"></i>
                <h3>Fast Learner</h3>
                <p>Quick to adapt and master new technologies and frameworks, ensuring your project stays current with industry trends.</p>
              </div>
              
              <div className="hire-me-card">
                <i className="fas fa-users"></i>
                <h3>Team Player</h3>
                <p>Strong collaboration skills with experience in agile environments and cross-functional teams.</p>
              </div>
              
              <div className="hire-me-card">
                <i className="fas fa-lightbulb"></i>
                <h3>Problem Solver</h3>
                <p>Analytical mindset with a track record of delivering innovative solutions to complex challenges.</p>
              </div>
              
              <div className="hire-me-card">
                <i className="fas fa-clock"></i>
                <h3>Deadline Oriented</h3>
                <p>Proven ability to manage time effectively and deliver quality results within project timelines.</p>
              </div>
            </div>

            <div className="hire-me-actions">
              <button 
                className="hire-button"
                onClick={() => {
                  window.location.href = `mailto:nabeelnashath55@gmail.com?subject=Job Opportunity&body=Hi Nabeel,%0D%0A%0D%0AI came across your portfolio and I'm interested in discussing a potential opportunity.%0D%0A%0D%0ABest regards`;
                }}
              >
                <i className="fas fa-paper-plane"></i>
                Hire Me
              </button>
              
              <button 
                className="contact-button"
                onClick={() => {
                  window.location.href = `mailto:nabeelnashath55@gmail.com?subject=Portfolio Contact&body=Hi Nabeel,%0D%0A%0D%0AI would like to connect with you regarding...%0D%0A%0D%0ABest regards`;
                }}
              >
                <i className="fas fa-envelope"></i>
                Contact Me
              </button>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-container" id="contact-form">
            <h3><i className="fas fa-envelope"></i> Get in Touch</h3>
            <form 
              className="contact-form" 
              onSubmit={(e) => {
                e.preventDefault();
                
                // Get form values
                const name = document.querySelector('input[name="name"]').value;
                const email = document.querySelector('input[name="email"]').value;
                const subject = document.querySelector('input[name="subject"]').value;
                const message = document.querySelector('textarea[name="message"]').value;
                
                // Compose email content
                const mailtoLink = `mailto:nabeelnashath55@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                
                // Redirect to email client
                window.location.href = mailtoLink;
              }}
            >
              <div className="form-group">
                <label><i className="fas fa-user"></i> Name</label>
                <input 
                  type="text" 
                  name="name" 
                  placeholder="Your Name" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label><i className="fas fa-envelope"></i> Email</label>
                <input 
                  type="email" 
                  name="email" 
                  placeholder="Your Email" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label><i className="fas fa-briefcase"></i> Subject</label>
                <input 
                  type="text" 
                  name="subject" 
                  placeholder="Subject" 
                  required 
                />
              </div>
              
              <div className="form-group">
                <label><i className="fas fa-comment"></i> Message</label>
                <textarea 
                  name="message" 
                  placeholder="Your Message" 
                  required 
                  rows="5"
                ></textarea>
              </div>
              
              <button 
                type="button" // Changed to button type
                className="submit-button"
                onClick={() => {
                  const name = document.querySelector('input[name="name"]').value;
                  const email = document.querySelector('input[name="email"]').value;
                  const subject = document.querySelector('input[name="subject"]').value;
                  const message = document.querySelector('textarea[name="message"]').value;

                  // Direct Gmail link
                  const gmailLink = `https://mail.google.com/mail/u/0/?view=cm&fs=1&to=nabeelnashath55@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
                  
                  // Open Gmail in new tab
                  window.open(gmailLink, '_blank');
                }}
              >
                <i className="fas fa-paper-plane"></i> Send Message
              </button>
            </form>
          </div>

          {/* Reviews Section */}
          <div className="reviews-container">
            <h3><i className="fas fa-comments"></i> Portfolio Feedback</h3>
            
            <div className="reviews-section">
              {/* Review Form */}
              <div className="review-form-container">
                <h4>Leave a Review</h4>
                <form className="review-form" onSubmit={(e) => {
                  e.preventDefault();
                  
                  // Get form values
                  const name = e.target.elements.reviewName.value;
                  const feedback = e.target.elements.reviewFeedback.value;
                  
                  // Validate inputs
                  if (!name || !feedback || userRating === 0) {
                    alert('Please fill in all fields and select a rating');
                    return;
                  }

                  // Create new review object
                  const newReview = {
                    id: Date.now(),
                    name: name,
                    rating: userRating,
                    text: feedback,
                    date: new Date().toISOString() // Store date as ISO string
                  };

                  // Add new review to the list
                  setUserReviews([newReview, ...userReviews]);

                  // Reset form
                  e.target.reset();
                  setUserRating(0);
                }}>
                  <div className="form-group">
                    <label><i className="fas fa-user"></i> Name</label>
                    <input 
                      type="text" 
                      name="reviewName" 
                      placeholder="Your Name" 
                      required 
                    />
                  </div>
                  
                  <div className="rating-group">
                    <label>Rating</label>
                    <div className="star-rating">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <i 
                          key={star} 
                          className={`${star <= userRating ? 'fas' : 'far'} fa-star`}
                          onClick={() => setUserRating(star)}
                        ></i>
                      ))}
                    </div>
                  </div>
                  
                  <div className="form-group">
                    <label><i className="fas fa-comment"></i> Your Feedback</label>
                    <textarea 
                      name="reviewFeedback" 
                      placeholder="Share your thoughts..." 
                      required 
                      rows="4"
                    ></textarea>
                  </div>
                  
                  <button type="submit" className="submit-review-button">
                    <i className="fas fa-paper-plane"></i> Submit Review
                  </button>
                </form>
              </div>

              {/* Reviews Display */}
              <div className="reviews-display">
                <h4>Recent Feedback</h4>
                <div className="reviews-list">
                  {userReviews.length === 0 ? (
                    <div className="no-reviews">
                      <i className="fas fa-comment-dots"></i>
                      <p>Be the first to leave a review!</p>
                    </div>
                  ) : (
                    userReviews.map(review => (
                      <div key={review.id} className="review-card">
                        <div className="review-header">
                          <div className="reviewer-info">
                            <i className="fas fa-user-circle"></i>
                            <span>{review.name}</span>
                          </div>
                          <div className="review-actions">
                            <div className="review-rating">
                              {[...Array(5)].map((_, index) => (
                                <i 
                                  key={index}
                                  className={`fas fa-star ${index < review.rating ? 'active' : ''}`}
                                ></i>
                              ))}
                            </div>
                            <button 
                              className="delete-review-btn"
                              onClick={() => deleteReview(review.id)}
                              aria-label="Delete review"
                            >
                              <i className="fas fa-trash-alt"></i>
                            </button>
                          </div>
                        </div>
                        <p className="review-text">{review.text}</p>
                        <div className="review-date">
                          {new Date(review.date).toLocaleString('en-US', {
                            year: 'numeric',
                            month: 'short',
                            day: 'numeric',
                            hour: '2-digit',
                            minute: '2-digit'
                          })}
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Add this after your Projects section */}
        <footer className="footer-section">
          <div className="footer-container">
            <div className="footer-grid">
              {/* Contact Section */}
              <div className="footer-column">
                <h4><i className="fas fa-paper-plane"></i> Contact</h4>
                <ul>
                  <li>
                    <a href="mailto:nabeelnashath55@gmail.com">
                      <i className="fas fa-envelope"></i> Email
                    </a>
                  </li>
                  <li>
                    <a href="tel:+919108624676">
                      <i className="fas fa-phone"></i> Phone
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/nabeel-nashath-8b8a7a1b7/" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i> LinkedIn
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/nabeel5623" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-github"></i> GitHub
                    </a>
                  </li>
                </ul>
              </div>

              {/* Quick Links */}
              <div className="footer-column">
                <h4><i className="fas fa-link"></i> Quick Links</h4>
                <ul>
                  <li>
                    <a href="#about"><i className="fas fa-user"></i> About Me</a>
                  </li>
                  <li>
                    <a href="#skills"><i className="fas fa-tools"></i> Skills</a>
                  </li>
                  <li>
                    <a href="#projects"><i className="fas fa-project-diagram"></i> Projects</a>
                  </li>
                  <li>
                    <a href="#certifications"><i className="fas fa-certificate"></i> Certifications</a>
                  </li>
                </ul>
              </div>

              {/* Resources */}
              <div className="footer-column">
                <h4><i className="fas fa-book"></i> Resources</h4>
                <ul>
                  <li>
                    <a href="#"><i className="fas fa-file-pdf"></i> Resume</a>
                  </li>
                  <li>
                    <a href="#"><i className="fas fa-newspaper"></i> Blog</a>
                  </li>
                  <li>
                    <a href="#"><i className="fas fa-question-circle"></i> FAQ</a>
                  </li>
                  <li>
                    <a href="#"><i className="fas fa-headset"></i> Support</a>
                  </li>
                </ul>
              </div>

              {/* Legal */}
              <div className="footer-column">
                <h4><i className="fas fa-shield-alt"></i> Legal</h4>
                <ul>
                  <li>
                    <a href="#"><i className="fas fa-user-shield"></i> Privacy Policy</a>
                  </li>
                  <li>
                    <a href="#"><i className="fas fa-file-contract"></i> Terms of Use</a>
                  </li>
                  <li>
                    <a href="#"><i className="fas fa-cookie"></i> Cookie Policy</a>
                  </li>
                  <li>
                    <a href="#"><i className="fas fa-info-circle"></i> Disclaimer</a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Footer Bottom */}
            <div className="footer-bottom">
              <p>© 2024 Nabeel Nashath. All rights reserved.</p>
              <div className="social-icons">
                <a href="https://github.com/nabeel5623" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/nabeel-nashath-8b8a7a1b7/" target="_blank" rel="noopener noreferrer">
                  <i className="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
}

export default Dashboard;
