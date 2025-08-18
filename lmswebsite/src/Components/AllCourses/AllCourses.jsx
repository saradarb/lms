import React, { useState } from 'react';
import './AllCourses.css';
import { Link } from "react-router-dom";

const AllCourses = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedLevel, setSelectedLevel] = useState('all');

  // Sample courses data
  const coursesData = [
    {
      id: 1,
      title: "Complete Web Development Bootcamp",
      description: "Learn HTML, CSS, JavaScript, React, Node.js, and MongoDB to become a full-stack developer. Build 15+ real-world projects.",
      instructor: "Sarah Johnson",
      rating: 4.8,
      reviews: 1250,
      duration: "65h",
      students: 1250,
      price: 199,
      category: "technology",
      level: "beginner",
      image: "https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?_gl=1*1dpsget*_ga*MTExMDUwODA0MS4xNzU1Mjc4NDA4*_ga_8JE65Q40S6*czE3NTUyNzg0MDckbzEkZzEkdDE3NTUyNzg1OTMkajE0JGwwJGgw"
    },
    {
      id: 2,
      title: "Advanced React & Redux Masterclass",
      description: "Master React hooks, context API, Redux toolkit, and modern React patterns. Build enterprise-level applications.",
      instructor: "Michael Chen",
      rating: 4.9,
      reviews: 850,
      duration: "45h",
      students: 850,
      price: 149,
      category: "technology",
      level: "advanced",
      image: "https://images.pexels.com/photos/577585/pexels-photo-577585.jpeg?_gl=1*ulzc6u*_ga*MTExMDUwODA0MS4xNzU1Mjc4NDA4*_ga_8JE65Q40S6*czE3NTUyNzg0MDckbzEkZzEkdDE3NTUyNzg1NDckajYwJGwwJGgw"
    },
    {
      id: 3,
      title: "Python for Data Science and programming",
      description: "Learn Python programming, pandas, numpy, matplotlib, and machine learning fundamentals for data analysis.",
      instructor: "Emily Rodriguez",
      rating: 4.7,
      reviews: 920,
      duration: "55h",
      students: 920,
      price: 179,
      category: "technology",
      level: "intermediate",
      image: "https://images.pexels.com/photos/1181359/pexels-photo-1181359.jpeg?_gl=1*18zi41l*_ga*MTExMDUwODA0MS4xNzU1Mjc4NDA4*_ga_8JE65Q40S6*czE3NTUyNzg0MDckbzEkZzEkdDE3NTUyNzg2NDUkajQxJGwwJGgw"
    },
    {
      id: 4,
      title: "Digital Marketing Fundamentals",
      description: "Master SEO, social media marketing, content strategy, and paid advertising to grow your business online.",
      instructor: "David Thompson",
      rating: 4.6,
      reviews: 650,
      duration: "35h",
      students: 650,
      price: 99,
      category: "marketing",
      level: "beginner",
      image: "https://images.pexels.com/photos/590020/pexels-photo-590020.jpeg?_gl=1*1lkx99p*_ga*MTExMDUwODA0MS4xNzU1Mjc4NDA4*_ga_8JE65Q40S6*czE3NTUyNzg0MDckbzEkZzEkdDE3NTUyNzg3MDckajU5JGwwJGgw"
    },
    {
      id: 5,
      title: "UI/UX Design Complete Course",
      description: "Learn user interface and user experience design principles, Figma, wireframing, and prototyping.",
      instructor: "Jessica Liu",
      rating: 4.8,
      reviews: 750,
      duration: "40h",
      students: 750,
      price: 129,
      category: "design",
      level: "beginner",
      image: "https://images.pexels.com/photos/17561470/pexels-photo-17561470.jpeg?_gl=1*4g6ef6*_ga*MTExMDUwODA0MS4xNzU1Mjc4NDA4*_ga_8JE65Q40S6*czE3NTUyNzg0MDckbzEkZzEkdDE3NTUyNzg3NjYkajYwJGwwJGgw"
    },
    {
      id: 6,
      title: "Advanced JavaScript Concepts",
      description: "Deep dive into closures, prototypes, async programming, design patterns, and modern ES6+ features.",
      instructor: "Alex Martinez",
      rating: 4.9,
      reviews: 540,
      duration: "30h",
      students: 540,
      price: 89,
      category: "technology",
      level: "advanced",
      image: "https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?_gl=1*pbwraw*_ga*MTExMDUwODA0MS4xNzU1Mjc4NDA4*_ga_8JE65Q40S6*czE3NTUyNzg0MDckbzEkZzEkdDE3NTUyNzg4MDYkajIwJGwwJGgw"
    },
    {
      id: 7,
      title: "Business Strategy & Analytics",
      description: "Learn strategic thinking, market analysis, financial modeling, and data-driven decision making for business growth.",
      instructor: "Rachel Green",
      rating: 4.5,
      reviews: 430,
      duration: "50h",
      students: 430,
      price: 159,
      category: "business",
      level: "intermediate",
      image: "https://images.pexels.com/photos/95916/pexels-photo-95916.jpeg?_gl=1*405wq0*_ga*MTExMDUwODA0MS4xNzU1Mjc4NDA4*_ga_8JE65Q40S6*czE3NTUyNzg0MDckbzEkZzEkdDE3NTUyNzg4NjckajMxJGwwJGgw"
    },
    {
      id: 8,
      title: "Photography Masterclass",
      description: "Master camera settings, composition, lighting, and photo editing. From beginner to professional photographer.",
      instructor: "James Wilson",
      rating: 4.7,
      reviews: 380,
      duration: "25h",
      students: 380,
      price: 79,
      category: "photography",
      level: "beginner",
      image: "https://images.pexels.com/photos/1264210/pexels-photo-1264210.jpeg?_gl=1*1mwpckh*_ga*MTExMDUwODA0MS4xNzU1Mjc4NDA4*_ga_8JE65Q40S6*czE3NTUyNzg0MDckbzEkZzEkdDE3NTUyNzg5MTEkajQ3JGwwJGgw"
    },
    {
      id: 9,
      title: "Machine Learning with Python",
      description: "Comprehensive guide to ML algorithms, scikit-learn, TensorFlow, and real-world AI applications.",
      instructor: "Dr. Lisa Wang",
      rating: 4.8,
      reviews: 690,
      duration: "70h",
      students: 690,
      price: 249,
      category: "technology",
      level: "advanced",
      image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg?_gl=1*1jlly7j*_ga*MTExMDUwODA0MS4xNzU1Mjc4NDA4*_ga_8JE65Q40S6*czE3NTUyNzg0MDckbzEkZzEkdDE3NTUyNzkzNDMkajU5JGwwJGgw"
    },
    {
      id: 10,
      title: "Graphic Design Essentials",
      description: "Learn Adobe Creative Suite, typography, color theory, and brand design principles from industry experts.",
      instructor: "Nina Parker",
      rating: 4.6,
      reviews: 520,
      duration: "35h",
      students: 520,
      price: 109,
      category: "design",
      level: "beginner",
      image: "https://images.pexels.com/photos/3045245/pexels-photo-3045245.jpeg?_gl=1*ex7dyd*_ga*MTExMDUwODA0MS4xNzU1Mjc4NDA4*_ga_8JE65Q40S6*czE3NTUyNzg0MDckbzEkZzEkdDE3NTUyNzkzOTYkajYkbDAkaDA."
    },
    {
      id: 11,
      title: "Mobile App Development with Flutter",
      description: "Build cross-platform mobile apps for iOS and Android using Flutter and Dart programming language.",
      instructor: "Carlos Rodriguez",
      rating: 4.7,
      reviews: 410,
      duration: "60h",
      students: 410,
      price: 189,
      category: "technology",
      level: "intermediate",
      image: "https://images.pexels.com/photos/887751/pexels-photo-887751.jpeg?_gl=1*1txnsqa*_ga*MTExMDUwODA0MS4xNzU1Mjc4NDA4*_ga_8JE65Q40S6*czE3NTUyNzg0MDckbzEkZzEkdDE3NTUyNzk1MzgkajQ2JGwwJGgw"
    },
    {
      id: 12,
      title: "Content Marketing Strategy",
      description: "Create compelling content that converts. Learn blogging, video marketing, and content distribution strategies.",
      instructor: "Maria González",
      rating: 4.5,
      reviews: 290,
      duration: "28h",
      students: 290,
      price: 69,
      category: "marketing",
      level: "intermediate",
      image: "https://images.pexels.com/photos/6224/hands-people-woman-working.jpg?_gl=1*1foge92*_ga*MTExMDUwODA0MS4xNzU1Mjc4NDA4*_ga_8JE65Q40S6*czE3NTUyNzg0MDckbzEkZzEkdDE3NTUyNzk1ODkkajU5JGwwJGgw"
    }
  ];

  // Filter courses based on search term, category, and level
  const filteredCourses = coursesData.filter(course => {
    const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesCategory = selectedCategory === 'all' || course.category === selectedCategory;
    const matchesLevel = selectedLevel === 'all' || course.level === selectedLevel;
    
    return matchesSearch && matchesCategory && matchesLevel;
  });

  const renderStars = (rating) => {
    return "★".repeat(Math.floor(rating)) + (rating % 1 !== 0 ? "☆" : "");
  };

  return (
    <div className="courses-container1">
      {/* Navigation Bar */}
      <nav className="navbar1">
        <div className="logo-section1">
          <div className="logo-icon1">📖</div>
          <span className="logo-text1">Learnify</span>
        </div>
        <div className="nav-center1">
        <Link to="/" className="nav-button1" style={{ textDecoration: "none" }} >Home</Link>
        <Link to="/AllCourses" className="nav-button active1" style={{ textDecoration: "none" }} >Courses</Link>
        </div>
        <div className="auth-buttons">
        <Link to="/Login" className="login-btn1" style={{ textDecoration: "none" }} >Login</Link>
        <Link to="/SignUp" className="signup-btn1" style={{ textDecoration: "none" }} >Sign Up</Link>
        </div>
      </nav>

      {/* Courses Header */}
      <div className="courses-header1">
        <div className="container1">
          <h1 className="courses-title1">Explore Our Courses</h1>
          <p className="courses-subtitle1">Discover thousands of courses taught by expert instructors</p>
        </div>
      </div>

      {/* Search and Filters */}
      <div className="search-filters-section1">
        <div className="container1">
          <div className="search-filters-container1">
            {/* Search Bar */}
            <div className="search-bar1">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="search-input1"
              />
              <span className="search-icon1">🔍</span>
            </div>

            {/* Filters */}
            <div className="filters-container1">
              <div className="filter-group1">
                <label className="filter-label1">Category:</label>
                <select
                  value={selectedCategory}
                  onChange={(e) => setSelectedCategory(e.target.value)}
                  className="filter-select1"
                >
                  <option value="all">All Categories</option>
                  <option value="technology">Technology</option>
                  <option value="design">Design</option>
                  <option value="business">Business</option>
                  <option value="marketing">Marketing</option>
                  <option value="photography">Photography</option>
                </select>
              </div>

              <div className="filter-group1">
                <label className="filter-label1">Level:</label>
                <select
                  value={selectedLevel}
                  onChange={(e) => setSelectedLevel(e.target.value)}
                  className="filter-select1"
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>
            </div>
          </div>

          <div className="results-count1">
            Showing {filteredCourses.length} courses
          </div>
        </div>
      </div>

      {/* Courses Grid */}
      <div className="courses-main1">
        <div className="container1">
          <div className="courses-grid1">
            {filteredCourses.map(course => (
              <div key={course.id} className="course-card1">
                <div className="course-image1">
                  <img src={course.image} alt={course.title} />
                  <div className="course-badges1">
                    <span className={`level-badge1 ${course.level}`}>{course.level}</span>
                    <span className={`category-badge1 ${course.category}`}>{course.category}</span>
                  </div>
                </div>
                
                <div className="course-content1">
                  <div className="course-rating1">
                    <span className="stars1">{renderStars(course.rating)}</span>
                    <span className="rating-text1">{course.rating} ({course.reviews})</span>
                  </div>
                  
                  <h3 className="course-titl1e1">{course.title}</h3>
                  <p className="course-description1">{course.description}</p>
                  
                  <div className="course-instructor1">
                    <span className="instructor-icon1">👤</span>
                    <span className="instructor-name1">{course.instructor}</span>
                  </div>
                  
                  <div className="course-meta1">
                    <div className="meta-item1">
                      <span className="meta-icon1">🕒</span>
                      <span>{course.duration}</span>
                    </div>
                    <div className="meta-item1">
                      <span className="meta-icon1">👥</span>
                      <span>{course.students}</span>
                    </div>
                    <div className="meta-item1">
                      <span className="meta-icon1">📚</span>
                      <span>Course</span>
                    </div>
                  </div>
                  
                  <div className="course-footer1">
                    <div className="course-price1">
                      <span className="price1">${course.price}</span>
                    </div>
                    <button className="view-course-btn1">View Course</button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredCourses.length === 0 && (
            <div className="no-results1">
              <h3>No courses found</h3>
              <p>Try adjusting your search terms or filters</p>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <footer className="footer1">
        <div className="container1">
          <div className="footer-content1">
            <div className="footer-section1">
              <div className="footer-logo1">
                <div className="logo-icon1">📖</div>
                <span>Learnify</span>
              </div>
              <p>Empowering learners worldwide with quality education and expert instruction.</p>
            </div>
            <div className="footer-section1">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#instructors">Instructors</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section1">
              <h4>Categories</h4>
              <ul>
                <li><a href="#programming">Programming</a></li>
                <li><a href="#design">Design</a></li>
                <li><a href="#business">Business</a></li>
                <li><a href="#marketing">Marketing</a></li>
              </ul>
            </div>
            <div className="footer-section1">
              <h4>Support</h4>
              <ul>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom1">
            <p>&copy; 2025 Learnify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default AllCourses;