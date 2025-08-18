import React, { useState } from 'react';
import './OneCourse.css';
import { Link } from 'react-router';






const OneCourse = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isEnrolled, setIsEnrolled] = useState(false);

  // Sample course data
  const courseData = {
    id: 1,
    title: "Complete Web Development Bootcamp",
    subtitle: "Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB to become a full-stack developer",
    description: "This comprehensive course will take you from complete beginner to job-ready full-stack developer. You'll learn the most in-demand technologies and build 15+ real-world projects that you can add to your portfolio.",
    instructor: {
      name: "Sarah Johnson",
      title: "Senior Full-Stack Developer",
      experience: "8+ years",
      students: "50,000+",
      courses: "12",
      rating: 4.9,
      bio: "Sarah is a senior full-stack developer with over 8 years of experience working at top tech companies. She has mentored hundreds of developers and is passionate about making programming accessible to everyone.",
      image: "https://images.pexels.com/photos/1181677/pexels-photo-1181677.jpeg?_gl=1*1fuepjd*_ga*MTExMDUwODA0MS4xNzU1Mjc4NDA4*_ga_8JE65Q40S6*czE3NTUzNDkyNTgkbzIkZzEkdDE3NTUzNDkzNDMkajQzJGwwJGgw"
    },
    rating: 4.8,
    reviews: 1250,
    students: 12500,
    duration: "65 hours",
    lessons: 180,
    level: "Beginner",
    category: "Technology",
    language: "English",
    price: 199,
    originalPrice: 299,
    lastUpdated: "January 2025",
      image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?_gl=1*1dpsget*_ga*MTExMDUwODA0MS4xNzU1Mjc4NDA4*_ga_8JE65Q40S6*czE3NTUyNzg0MDckbzEkZzEkdDE3NTUyNzg1OTMkajE0JGwwJGgw",
    skills: [
      "HTML5 & CSS3",
      "JavaScript ES6+",
      "React.js",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Git & GitHub",
      "Responsive Design",
      "API Development",
      "Authentication"
    ],
    requirements: [
      "No programming experience needed",
      "A computer with internet connection",
      "Willingness to learn and practice",
      "Basic computer skills"
    ],
    whatYouLearn: [
      "Build real-world web applications from scratch",
      "Master modern JavaScript and ES6+ features",
      "Create responsive websites with HTML5 and CSS3",
      "Develop full-stack applications with React and Node.js",
      "Work with databases using MongoDB",
      "Implement user authentication and authorization",
      "Deploy applications to production",
      "Use Git for version control",
      "Follow industry best practices",
      "Build a professional portfolio"
    ],
    curriculum: [
      {
        section: "Getting Started",
        lectures: 8,
        duration: "2h 30m",
        lessons: [
          { title: "Course Introduction", duration: "5:30", preview: true },
          { title: "Setting Up Development Environment", duration: "15:45", preview: false },
          { title: "How the Web Works", duration: "12:20", preview: true },
          { title: "Introduction to HTML", duration: "18:30", preview: false },
          { title: "HTML Document Structure", duration: "14:15", preview: false },
          { title: "Common HTML Elements", duration: "22:10", preview: false },
          { title: "HTML Forms", duration: "16:45", preview: false },
          { title: "Section Project: Personal Website", duration: "25:20", preview: false }
        ]
      },
      {
        section: "CSS & Styling",
        lectures: 12,
        duration: "4h 15m",
        lessons: [
          { title: "Introduction to CSS", duration: "8:45", preview: false },
          { title: "CSS Selectors", duration: "12:30", preview: false },
          { title: "Box Model", duration: "15:20", preview: false },
          { title: "Flexbox Layout", duration: "18:45", preview: false },
          { title: "CSS Grid", duration: "20:30", preview: false },
          { title: "Responsive Design", duration: "22:15", preview: false },
          { title: "CSS Animations", duration: "16:30", preview: false },
          { title: "SASS/SCSS", duration: "14:20", preview: false },
          { title: "CSS Frameworks", duration: "11:45", preview: false },
          { title: "Modern CSS Features", duration: "13:30", preview: false },
          { title: "CSS Best Practices", duration: "9:15", preview: false },
          { title: "Project: Responsive Portfolio", duration: "35:45", preview: false }
        ]
      },
      {
        section: "JavaScript Fundamentals",
        lectures: 15,
        duration: "6h 45m",
        lessons: [
          { title: "JavaScript Introduction", duration: "10:30", preview: false },
          { title: "Variables and Data Types", duration: "15:45", preview: false },
          { title: "Functions", duration: "18:20", preview: false },
          { title: "Arrays and Objects", duration: "20:15", preview: false },
          { title: "Loops and Conditionals", duration: "16:30", preview: false },
          { title: "DOM Manipulation", duration: "22:45", preview: false },
          { title: "Event Handling", duration: "18:30", preview: false },
          { title: "Asynchronous JavaScript", duration: "24:15", preview: false },
          { title: "Promises and Async/Await", duration: "19:45", preview: false },
          { title: "Fetch API", duration: "17:30", preview: false },
          { title: "ES6+ Features", duration: "21:15", preview: false },
          { title: "Error Handling", duration: "12:45", preview: false },
          { title: "Local Storage", duration: "14:30", preview: false },
          { title: "JavaScript Best Practices", duration: "16:15", preview: false },
          { title: "Project: Interactive Web App", duration: "45:30", preview: false }
        ]
      },
      {
        section: "React.js",
        lectures: 20,
        duration: "8h 30m",
        lessons: [
          { title: "React Introduction", duration: "12:30", preview: false },
          { title: "Components and JSX", duration: "18:45", preview: false },
          { title: "Props and State", duration: "16:30", preview: false }
          // ... more lessons
        ]
      },
      {
        section: "Node.js & Backend",
        lectures: 18,
        duration: "7h 20m",
        lessons: [
          { title: "Node.js Introduction", duration: "14:30", preview: false },
          { title: "Express.js Setup", duration: "16:45", preview: false }
          // ... more lessons
        ]
      }
    ],
    reviewsList: [
      {
        id: 1,
        name: "Alex Thompson",
        rating: 5,
        date: "2 weeks ago",
        comment: "Absolutely amazing course! Sarah explains everything so clearly and the projects are really practical. I went from knowing nothing about web development to building my own full-stack applications.",
        helpful: 45
      },
      {
        id: 2,
        name: "Maria Rodriguez",
        rating: 5,
        date: "1 month ago",
        comment: "Best programming course I've ever taken. The curriculum is well-structured and up-to-date with industry standards. Highly recommend!",
        helpful: 32
      },
      {
        id: 3,
        name: "David Chen",
        rating: 4,
        date: "3 weeks ago",
        comment: "Great course with lots of hands-on practice. The only minor issue is that some videos could be a bit shorter, but overall excellent content.",
        helpful: 28
      },
      {
        id: 4,
        name: "Jennifer Smith",
        rating: 5,
        date: "1 week ago",
        comment: "This course changed my career! I'm now working as a junior developer thanks to the skills I learned here. The portfolio projects really helped during interviews.",
        helpful: 52
      }
    ]
  };

  const renderStars = (rating) => {
    const validRating = typeof rating === 'number' ? rating : 5;
    const fullStars = Math.floor(validRating);
    const hasHalfStar = validRating % 1 !== 0;
    return "★".repeat(fullStars) + (hasHalfStar ? "☆" : "");
  };

  const formatNumber = (num) => {
    if (typeof num === 'number') {
      return num.toLocaleString();
    }
    return String(num);
  };

  const handleEnroll = () => {
    setIsEnrolled(true);
  };

  return (
    <div className="course-detail-container">
      {/* Navigation Bar */}
      <nav className="navbar">
        <div className="logo-section">
          <div className="logo-icon">L</div>
          <span className="logo-text">Learnify</span>
        </div>
        <div className="nav-center">
        <Link to="/" className="nav-button" style={{ textDecoration: "none" }} >Home</Link>
        <Link to="/AllCourses" className="nav-button active" style={{ textDecoration: "none" }} >Courses</Link>
        </div>
        <div className="auth-buttons">
        <Link to="/Login" className="login-btn" style={{ textDecoration: "none" }} >Login</Link>
        <Link to="/SignUp" className="signup-btn" style={{ textDecoration: "none" }} >Sign Up</Link>
        </div>
      </nav>

      {/* Course Hero Section */}
      <div className="course-hero">
        <div className="container">
          <div className="hero-content">
            <div className="course-info">
              <div className="breadcrumb">
                <span>Courses</span> / <span>{courseData.category}</span> / <span>{courseData.title}</span>
              </div>
              
              <h1 className="course-title">{courseData.title}</h1>
              <p className="course-subtitle">{courseData.subtitle}</p>
              
              <div className="course-meta">
                <div className="rating">
                  <span className="stars">{renderStars(courseData.rating)}</span>
                  <span className="rating-text">{courseData.rating}</span>
                  <span className="reviews-count">({courseData.reviews} reviews)</span>
                </div>
                <div className="students-count">{formatNumber(courseData.students)} students</div>
              </div>
              
              
              
              <div className="course-details">
                <div className="detail-item">
                  <span className="icon">•</span>
                  <span>{courseData.duration}</span>
                </div>
                <div className="detail-item">
                  <span className="icon">•</span>
                  <span>{courseData.lessons} lectures</span>
                </div>
                <div className="detail-item">
                  <span className="icon">•</span>
                  <span>{courseData.level}</span>
                </div>
                <div className="detail-item">
                  <span className="icon">•</span>
                  <span>{courseData.language}</span>
                </div>
                <div className="detail-item">
                  <span className="icon">•</span>
                  <span>Last updated {courseData.lastUpdated}</span>
                </div>
              </div>
            </div>
            
            <div className="course-preview">
              <div className="preview-card">
                <img src={courseData.image} alt={courseData.title} />
                <div className="preview-content">
                  <div className="price-section">
                    <span className="current-price">${courseData.price}</span>
                    <span className="original-price">${courseData.originalPrice}</span>
                    <span className="discount">33% off</span>
                  </div>
                  
                  {!isEnrolled ? (
                    <button className="enroll-btn" onClick={handleEnroll}>
                      Enroll Now
                    </button>
                  ) : (
                    <button className="enrolled-btn">
                      ✓ Enrolled
                    </button>
                  )}
                  
                  <div className="course-includes">
                    <h4>This course includes:</h4>
                    <ul>
                      <li><span className="icon">•</span> {courseData.duration} on-demand video</li>
                      <li><span className="icon">•</span> 15 downloadable resources</li>
                      <li><span className="icon">•</span> Full lifetime access</li>
                      <li><span className="icon">•</span> Access on mobile and TV</li>
                      <li><span className="icon">•</span> Certificate of completion</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content Tabs */}
      <div className="course-content">
        <div className="container">
          <div className="content-tabs">
            <button
              className={`tab-btn ${activeTab === 'overview' ? 'active' : ''}`}
              onClick={() => setActiveTab('overview')}
            >
              Overview
            </button>
            <button
              className={`tab-btn ${activeTab === 'curriculum' ? 'active' : ''}`}
              onClick={() => setActiveTab('curriculum')}
            >
              Curriculum
            </button>
            <button
              className={`tab-btn ${activeTab === 'instructor' ? 'active' : ''}`}
              onClick={() => setActiveTab('instructor')}
            >
              Instructor
            </button>
            <button
              className={`tab-btn ${activeTab === 'reviews' ? 'active' : ''}`}
              onClick={() => setActiveTab('reviews')}
            >
              Reviews
            </button>
          </div>

          <div className="tab-content">
            {activeTab === 'overview' && (
              <div className="overview-content">
                <div className="content-grid">
                  <div className="main-content">
                    <section className="about-course">
                      <h2>About this course</h2>
                      <p>{courseData.description}</p>
                    </section>

                    <section className="what-learn">
                      <h2>What you'll learn</h2>
                      <div className="learn-grid">
                        {courseData.whatYouLearn && courseData.whatYouLearn.map((item, index) => (
                          <div key={index} className="learn-item">
                            <span className="check-icon">✓</span>
                            <span>{String(item)}</span>
                          </div>
                        ))}
                      </div>
                    </section>

                    <section className="requirements">
                      <h2>Requirements</h2>
                      <ul>
                        {courseData.requirements && courseData.requirements.map((req, index) => (
                          <li key={index}>{String(req)}</li>
                        ))}
                      </ul>
                    </section>
                  </div>

                  <div className="sidebar-content">
                    <section className="skills-section">
                      <h3>Skills you'll gain</h3>
                      <div className="skills-tags">
                        {courseData.skills && courseData.skills.map((skill, index) => (
                          <span key={index} className="skill-tag">{String(skill)}</span>
                        ))}
                      </div>
                    </section>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div className="curriculum-content">
                <div className="curriculum-header">
                  <h2>Course curriculum</h2>
                  <p>{courseData.lessons} lectures • {courseData.duration} total length</p>
                </div>
                
                {courseData.curriculum && courseData.curriculum.map((section, sectionIndex) => (
                  <div key={sectionIndex} className="curriculum-section">
                    <div className="section-header">
                      <h3>{section.section}</h3>
                      <span className="section-info">
                        {section.lectures} lectures • {section.duration}
                      </span>
                    </div>
                    <div className="section-lessons">
                      {section.lessons && section.lessons.map((lesson, lessonIndex) => (
                        <div key={lessonIndex} className="lesson-item">
                          <div className="lesson-info">
                            <span className="lesson-icon">
                              {lesson.preview ? '▶' : '•'}
                            </span>
                            <span className="lesson-title">{lesson.title}</span>
                          </div>
                          <div className="lesson-meta">
                            {lesson.preview && <span className="preview-badge">Preview</span>}
                            <span className="lesson-duration">{lesson.duration}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'instructor' && (
              <div className="instructor-content">
                <div className="instructor-card">
                  <div className="instructor-header">
                    <img src={courseData.instructor.image} alt={courseData.instructor.name} />
                    <div className="instructor-details">
                      <h2>{courseData.instructor.name}</h2>
                      <p className="instructor-title">{courseData.instructor.title}</p>
                      <div className="instructor-stats">
                        <div className="stat-item">
                          <span className="stat-icon">★</span>
                          <span>{courseData.instructor.rating} Instructor Rating</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-icon">•</span>
                          <span>{courseData.instructor.students} Students</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-icon">•</span>
                          <span>{courseData.instructor.courses} Courses</span>
                        </div>
                        <div className="stat-item">
                          <span className="stat-icon">•</span>
                          <span>{courseData.instructor.experience} Experience</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="instructor-bio">
                    <h3>About the instructor</h3>
                    <p>{courseData.instructor.bio}</p>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'reviews' && (
              <div className="reviews-content">
                <div className="reviews-header">
                  <h2>Student reviews</h2>
                  <div className="reviews-summary">
                    <div className="rating-overview">
                      <span className="big-rating">{courseData.rating}</span>
                      <div className="rating-details">
                        <div className="stars">{renderStars(courseData.rating)}</div>
                        <span className="reviews-count">{courseData.reviews} reviews</span>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="reviews-list">
                  {courseData.reviewsList && Array.isArray(courseData.reviewsList) && courseData.reviewsList.map((review) => (
                    <div key={review.id} className="review-item">
                      <div className="review-header">
                        <div className="reviewer-info">
                          <div className="reviewer-avatar">
                            {review.name && typeof review.name === 'string' ? review.name.charAt(0) : 'U'}
                          </div>
                          <div className="reviewer-details">
                            <span className="reviewer-name">{review.name || 'Anonymous'}</span>
                            <div className="review-meta">
                              <span className="review-rating">{renderStars(review.rating)}</span>
                              <span className="review-date">{review.date || 'Recently'}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="review-comment">{review.comment || 'No comment provided'}</p>
                      <div className="review-actions">
                        <span className="helpful">Helpful ({review.helpful || 0})</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <div className="footer-logo">
                <div className="logo-icon">L</div>
                <span>Learnify</span>
              </div>
              <p>Empowering learners worldwide with quality education and expert instruction.</p>
            </div>
            <div className="footer-section">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#instructors">Instructors</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Categories</h4>
              <ul>
                <li><a href="#programming">Programming</a></li>
                <li><a href="#design">Design</a></li>
                <li><a href="#business">Business</a></li>
                <li><a href="#marketing">Marketing</a></li>
              </ul>
            </div>
            <div className="footer-section">
              <h4>Support</h4>
              <ul>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2025 Learnify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OneCourse;