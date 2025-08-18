import React, { useEffect, useRef, useState } from 'react';
import './Home.css';
import best from '../../assets/Icons/best.png';
import Certification from '../../assets/Icons/Certification.png';
import handscreen from '../../assets/Icons/handscreen.png';
import interactive from '../../assets/Icons/Interactive.png';
import money from '../../assets/Icons/money.png';
import support from '../../assets/Icons/support.png';
import Camera from '../../assets/Icons/Camera.png';
import Design from '../../assets/Icons/Design.png';
import Fitness from '../../assets/Icons/Fitness.png';
import Marketing from '../../assets/Icons/Marketing.png';
import Music from '../../assets/Icons/Music.png';
import Programming from '../../assets/Icons/Programming.png';
import Science from '../../assets/Icons/Science.png';
import Business from '../../assets/Icons/Business.png';
import { Link } from 'react-router';

const Home = () => {
  const vantaRef = useRef(null);
  const vantaEffect = useRef(null);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  // Testimonials data with more reviews
  const testimonials = [
    {
      rating: 5,
      text: "Learnify transformed my career completely. The courses are well-structured and the instructors are amazing!",
      name: "Sarah Johnson",
      role: "Software Developer"
    },
    {
      rating: 5,
      text: "I love the flexibility and quality of content. Being able to learn at my own pace made all the difference.",
      name: "Michael Chen",
      role: "UX Designer"
    },
    {
      rating: 5,
      text: "The community support is incredible. I never felt alone in my learning journey. Highly recommended!",
      name: "Emily Rodriguez",
      role: "Digital Marketer"
    },
    {
      rating: 5,
      text: "Outstanding platform! The instructors are knowledgeable and the course content is always up-to-date.",
      name: "David Thompson",
      role: "Data Scientist"
    },
    {
      rating: 5,
      text: "Best investment I've made in my career. The certifications really helped me land my dream job!",
      name: "Jessica Liu",
      role: "Product Manager"
    },
    {
      rating: 5,
      text: "The hands-on projects are fantastic. I learned by doing, which is exactly what I needed.",
      name: "Alex Martinez",
      role: "Web Developer"
    },
    {
      rating: 5,
      text: "Amazing variety of courses and the mobile app makes learning on-the-go so convenient.",
      name: "Rachel Green",
      role: "Graphic Designer"
    },
    {
      rating: 5,
      text: "The pricing is unbeatable for the quality you get. Exceeded all my expectations!",
      name: "James Wilson",
      role: "Business Analyst"
    }
  ];

  useEffect(() => {
    // Load Three.js
    const threeScript = document.createElement('script');
    threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
    threeScript.onload = () => {
      // Load Vanta Globe after Three.js loads
      const vantaScript = document.createElement('script');
      vantaScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.globe.min.js';
      vantaScript.onload = () => {
        if (window.VANTA && vantaRef.current) {
          vantaEffect.current = window.VANTA.GLOBE({
            el: vantaRef.current,
            mouseControls: true,
            touchControls: true,
            gyroControls: false,
            minHeight: 200.00,
            minWidth: 200.00,
            scale: 1.00,
            scaleMobile: 1.00,
            backgroundColor: 0x23153c,
            color: 0xff3f81,
            color2: 0xffffff,
            size: 1.2
          });
        }
      };
      document.head.appendChild(vantaScript);
    };
    document.head.appendChild(threeScript);

    return () => {
      // Cleanup
      if (vantaEffect.current) {
        vantaEffect.current.destroy();
      }
    };
  }, []);

  // Auto-slide testimonials every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [testimonials.length]);

  return (
    <div className="home-container22">
      {/* Navigation Bar */}
      <nav className="navbar22">
        {/* Logo */}
        <div className="logo-section22">
          <div className="logo-icon22">
            📖
          </div>
          <span className="logo-text22">Learnify</span>
        </div>

        {/* Center Navigation */}
        <div className="nav-center22">
        <Link to="/" className="nav-button22" style={{ textDecoration: "none" }} >Home</Link>
        <Link to="/AllCourses" className="nav-button22 active" style={{ textDecoration: "none" }} >Courses</Link>
        </div>

        {/* Right Side Buttons */}
        <div className="auth-buttons22">
        <Link to="/Login" className="login-btn22" style={{ textDecoration: "none" }} >Login</Link>
        <Link to="/SignUp" className="signup-btn22" style={{ textDecoration: "none" }} >Sign Up</Link>
        </div>
      </nav>

      {/* Vanta Globe Section */}
      <div className="vanta-section22">
        <div ref={vantaRef} className="vanta-background22"></div>
      </div>

      <div className="hero-title22">
        <h1>Learnify</h1>
        <p>Learn whatever you want, whenever you want, however you want.</p>
        <button className="cta-primary22">Start Learning Today</button>
        <button className="cta-secondary22">Explore Courses</button>
      </div>

      {/* Hero Content Section */}
      <div className="hero-content22">
        {/* Stats Section */}
        <div className="stats-grid22">
          <div className="stat-card22">
            <div className="stat-number22">10,000+</div>
            <div className="stat-label22">Active Students</div>
          </div>
          <div className="stat-card22">
            <div className="stat-number22">500+</div>
            <div className="stat-label22">Expert Courses</div>
          </div>
          <div className="stat-card22">
            <div className="stat-number22">95%</div>
            <div className="stat-label22">Success Rate</div>
          </div>
          <div className="stat-card22">
            <div className="stat-number22">25K+</div>
            <div className="stat-label22">Certificates Issued</div>
          </div>
          <div className="stat-card22">
            <div className="stat-number22">160+</div>
            <div className="stat-label22">Fields of Study</div>
          </div>
          <div className="stat-card22">
            <div className="stat-number22">15+</div>
            <div className="stat-label22">Featuring Languages</div>
          </div>
        </div>
      </div>

      {/* Why Choose Learnify Section */}
      <section className="why-choose-section22">
        <div className="container22">
          <h2 className="section-title22">Why Choose <span className="highlight22">Learnify</span>?</h2>
          <div className="features-grid22">
            <div className="feature-card22">
              <div className="feature-icon22"><img src={best} /></div>
              <h3>Expert Instructors</h3>
              <p>Learn from industry professionals and certified experts who bring real-world experience to every lesson.</p>
            </div>
            <div className="feature-card22">
              <div className="feature-icon22"><img src={interactive} /></div>
              <h3>Interactive Learning</h3>
              <p>Engage with hands-on projects, quizzes, and interactive content that makes learning enjoyable and effective.</p>
            </div>
            <div className="feature-card22">
              <div className="feature-icon22"><img src={handscreen} /></div>
              <h3>Learn Anywhere</h3>
              <p>Access your courses on any device, anytime, anywhere. Continue learning on your schedule.</p>
            </div>
            <div className="feature-card22">
              <div className="feature-icon22"><img src={Certification} /></div>
              <h3>Certification</h3>
              <p>Earn verified certificates upon completion that you can add to your resume and LinkedIn profile.</p>
            </div>
            <div className="feature-card22">
              <div className="feature-icon22"><img src={support} /></div>
              <h3>Community Support</h3>
              <p>Join a vibrant community of learners and get support from peers and instructors whenever you need it.</p>
            </div>
            <div className="feature-card22">
              <div className="feature-icon22"><img src={money} /></div>
              <h3>Affordable Pricing</h3>
              <p>Quality education shouldn't break the bank. Get premium content at prices that work for everyone.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Categories Section */}
      <section className="categories-section22">
        <div className="container22">
          <h2 className="section-title22">Popular Categories</h2>
          <div className="categories-grid22">
            <div className="category-card22">
              <div className="category-icon22"><img src={Programming} style={{width:"4vh"}}/></div>
              <h3>Programming</h3>
              <span className="course-count22">120+ courses</span>
            </div>
            <div className="category-card22">
              <div className="category-icon22"><img src={Design}  style={{width:"4vh"}}/></div>
              <h3>Design</h3>
              <span className="course-count22">85+ courses</span>
            </div>
            <div className="category-card22">
              <div className="category-icon22"><img src={Business} style={{width:"4vh"}} /></div>
              <h3>Business</h3>
              <span className="course-count22">95+ courses</span>
            </div>
            <div className="category-card22">
              <div className="category-icon22"><img src={Marketing} style={{width:"4vh"}} /></div>
              <h3>Marketing</h3>
              <span className="course-count22">65+ courses</span>
            </div>
            <div className="category-card22">
              <div className="category-icon22"><img src={Science} style={{width:"4vh"}} /></div>
              <h3>Science</h3>
              <span className="course-count22">75+ courses</span>
            </div>
            <div className="category-card22">
              <div className="category-icon22"><img src={Music} style={{width:"4vh"}} /></div>
              <h3>Music</h3>
              <span className="course-count22">40+ courses</span>
            </div>
            <div className="category-card22">
              <div className="category-icon22"><img src={Fitness} style={{width:"4vh"}} /></div>
              <h3>Health & Fitness</h3>
              <span className="course-count22">55+ courses</span>
            </div>
            <div className="category-card22">
              <div className="category-icon22"><img src={Camera} style={{width:"4vh"}} /></div>
              <h3>Photography</h3>
              <span className="course-count22">35+ courses</span>
            </div>
          </div>
        </div>
      </section>

    
      <section className="testimonials-section22">
        <div className="container22">
          <h2 className="section-title22">What Our Students Say?</h2>
          <div className="testimonials-container22">
            <div 
              className="testimonials-slider22"
              style={{
                transform: `translateX(-${currentTestimonial * 320}px)`,
                transition: 'transform 0.5s ease-in-out'
              }}
            >
              {testimonials.map((testimonial, index) => (
                <div key={index} className="testimonial-card22">
                  <div className="rating22">
                    <span style={{ fontSize: "6vh", color:"white" }}>★★★★★</span>
                  </div>
                  <p>"{testimonial.text}"</p>
                  <div className="student-info22">
                    <strong>{testimonial.name}</strong>
                    <span>{testimonial.role}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section22">
        <div className="container22">
          <h2>Ready to Start Your Learning Journey?</h2>
          <p>Join thousands of students who have already transformed their careers with our courses.</p>
          <div className="cta-buttons22">
            <button className="cta-primary22">Browse All Courses</button>
            <button className="cta-secondary22">Become an Instructor</button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer22">
        <div className="container22">
          <div className="footer-content22">
            <div className="footer-section22">
              <div className="footer-logo22">
                <div className="logo-icon22">📖</div>
                <span>Learnify</span>
              </div>
              <p>Empowering learners worldwide with quality education and expert instruction.</p>
            </div>
            <div className="footer-section22">
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#courses">Courses</a></li>
                <li><a href="#instructors">Instructors</a></li>
                <li><a href="#about">About Us</a></li>
                <li><a href="#contact">Contact</a></li>
              </ul>
            </div>
            <div className="footer-section22">
              <h4>Categories</h4>
              <ul>
                <li><a href="#programming">Programming</a></li>
                <li><a href="#design">Design</a></li>
                <li><a href="#business">Business</a></li>
                <li><a href="#marketing">Marketing</a></li>
              </ul>
            </div>
            <div className="footer-section22">
              <h4>Support</h4>
              <ul>
                <li><a href="#help">Help Center</a></li>
                <li><a href="#privacy">Privacy Policy</a></li>
                <li><a href="#terms">Terms of Service</a></li>
                <li><a href="#faq">FAQ</a></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom22">
            <p>&copy; 2025 Learnify. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Home;