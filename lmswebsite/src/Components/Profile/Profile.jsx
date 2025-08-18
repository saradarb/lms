import React, { useState, useEffect } from 'react';
import { Link } from 'react-router';
import './Profile.css';

const Profile = () => {
  // Demo user data
  const [userData] = useState({
    firstName: 'Demo',
    lastName: 'User',
    email: 'demo@learnify.com',
    joinDate: 'January 15, 2024',
    avatar: 'DU', // First letters of first and last name
    totalCourses: 5,
    completedCourses: 2,
    certificatesEarned: 2,
    studyHours: 127
  });

  // Current courses with progress
  const [currentCourses] = useState([
    {
      id: 1,
      name: 'Advanced JavaScript Programming',
      instructor: 'Dr. Sarah Johnson',
      progress: 75,
      totalLessons: 32,
      completedLessons: 24,
      lastAccessed: '2 hours ago'
    },
    {
      id: 2,
      name: 'React Development Masterclass',
      instructor: 'Michael Chen',
      progress: 45,
      totalLessons: 28,
      completedLessons: 13,
      lastAccessed: '1 day ago'
    },
    {
      id: 3,
      name: 'UI/UX Design Fundamentals',
      instructor: 'Emily Rodriguez',
      progress: 30,
      totalLessons: 25,
      completedLessons: 8,
      lastAccessed: '3 days ago'
    }
  ]);

  // Recent activities
  const [recentActivities] = useState([
    {
      id: 1,
      type: 'lesson',
      icon: '📚',
      text: 'Completed "Async/Await in JavaScript"',
      time: '2 hours ago'
    },
    {
      id: 2,
      type: 'quiz',
      icon: '✅',
      text: 'Scored 92% on React Hooks Quiz',
      time: '1 day ago'
    },
    {
      id: 3,
      type: 'certificate',
      icon: '🏆',
      text: 'Earned "JavaScript Expert" certificate',
      time: '3 days ago'
    },
    {
      id: 4,
      type: 'course',
      icon: '🎯',
      text: 'Started "UI/UX Design Fundamentals"',
      time: '1 week ago'
    },
    {
      id: 5,
      type: 'milestone',
      icon: '🎉',
      text: 'Reached 100 study hours milestone',
      time: '2 weeks ago'
    }
  ]);

  // Exam scores
  const [examScores] = useState([
    {
      id: 1,
      name: 'JavaScript Fundamentals Final',
      score: 95,
      maxScore: 100,
      date: 'Dec 15, 2024',
      grade: 'excellent'
    },
    {
      id: 2,
      name: 'React Components Quiz',
      score: 87,
      maxScore: 100,
      date: 'Dec 10, 2024',
      grade: 'good'
    },
    {
      id: 3,
      name: 'CSS Styling Assessment',
      score: 92,
      maxScore: 100,
      date: 'Dec 5, 2024',
      grade: 'excellent'
    },
    {
      id: 4,
      name: 'HTML Structure Test',
      score: 78,
      maxScore: 100,
      date: 'Nov 28, 2024',
      grade: 'good'
    }
  ]);

  // Achievements
  const [achievements] = useState([
    {
      id: 1,
      icon: '🏆',
      name: 'First Certificate',
      description: 'Earned your first certificate'
    },
    {
      id: 2,
      icon: '📚',
      name: 'Bookworm',
      description: 'Completed 100 lessons'
    },
    {
      id: 3,
      icon: '⭐',
      name: 'High Achiever',
      description: 'Scored 90+ on 5 exams'
    },
    {
      id: 4,
      icon: '🎯',
      name: 'Consistent Learner',
      description: '7-day learning streak'
    },
    {
      id: 5,
      icon: '💻',
      name: 'Code Master',
      description: 'Completed programming track'
    },
    {
      id: 6,
      icon: '🚀',
      name: 'Fast Learner',
      description: 'Completed course in record time'
    }
  ]);

  // Handle logout
  const handleLogout = () => {
    if (window.confirm('Are you sure you want to logout?')) {
      // Clear any stored user data
      localStorage.removeItem('userToken');
      // Redirect to home page
      window.location.href = '/';
    }
  };

  // Get score class for styling
  const getScoreClass = (grade) => {
    switch (grade) {
      case 'excellent':
        return 'profile-score-excellent77';
      case 'good':
        return 'profile-score-good77';
      default:
        return 'profile-score-average77';
    }
  };

  return (
    <div className="profile-main-container77">
      {/* Navigation Bar */}
      <nav className="profile-navbar77">
        {/* Logo */}
        <div className="profile-logo-section77">
          <div className="profile-logo-icon77">
            📖
          </div>
          <span className="profile-logo-text77">Learnify</span>
        </div>

        {/* Center Navigation */}
        <div className="profile-nav-center77">
          <Link to="/" className="profile-nav-button77">Home</Link>
          <Link to="/AllCourses" className="profile-nav-button77">Courses</Link>
          <Link to="/Profile" className="profile-nav-button77 active77">Profile</Link>
        </div>

        {/* Profile Actions */}
        <div className="profile-actions77">
          <button onClick={handleLogout} className="profile-logout-btn77">
            Logout
          </button>
        </div>
      </nav>

      {/* Main Content */}
      <div className="profile-container77">
        {/* Profile Header */}
        <div className="profile-header77">
          <div className="profile-avatar77">
            {userData.avatar}
          </div>
          
          <div className="profile-info77">
            <h1 className="profile-name77">
              {userData.firstName} {userData.lastName}
            </h1>
            <p className="profile-email77">{userData.email}</p>
            <p className="profile-join-date77">
              Member since {userData.joinDate}
            </p>
          </div>

          <div className="profile-stats77">
            <div className="profile-stat77">
              <span className="profile-stat-number77">{userData.totalCourses}</span>
              <span className="profile-stat-label77">Total Courses</span>
            </div>
            <div className="profile-stat77">
              <span className="profile-stat-number77">{userData.completedCourses}</span>
              <span className="profile-stat-label77">Completed</span>
            </div>
            <div className="profile-stat77">
              <span className="profile-stat-number77">{userData.certificatesEarned}</span>
              <span className="profile-stat-label77">Certificates</span>
            </div>
            <div className="profile-stat77">
              <span className="profile-stat-number77">{userData.studyHours}</span>
              <span className="profile-stat-label77">Study Hours</span>
            </div>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className="profile-dashboard77">
          {/* Current Courses */}
          <div className="profile-card77">
            <div className="profile-card-header77">
              <h2 className="profile-card-title77">Current Courses</h2>
              <span className="profile-card-icon77">📚</span>
            </div>
            {currentCourses.map((course) => (
              <div key={course.id} className="profile-course-item77">
                <div className="profile-course-name77">{course.name}</div>
                <div className="profile-course-instructor77">
                  Instructor: {course.instructor}
                </div>
                <div className="profile-progress-bar77">
                  <div 
                    className="profile-progress-fill77" 
                    style={{ width: `${course.progress}%` }}
                  ></div>
                </div>
                <div className="profile-progress-text77">
                  {course.progress}% Complete ({course.completedLessons}/{course.totalLessons} lessons)
                </div>
              </div>
            ))}
          </div>

          {/* Recent Activities */}
          <div className="profile-card77">
            <div className="profile-card-header77">
              <h2 className="profile-card-title77">Recent Activities</h2>
              <span className="profile-card-icon77">⚡</span>
            </div>
            {recentActivities.map((activity) => (
              <div key={activity.id} className="profile-activity-item77">
                <div className="profile-activity-icon77">
                  {activity.icon}
                </div>
                <div className="profile-activity-content77">
                  <div className="profile-activity-text77">{activity.text}</div>
                  <div className="profile-activity-time77">{activity.time}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Exam Scores */}
          <div className="profile-card77">
            <div className="profile-card-header77">
              <h2 className="profile-card-title77">Recent Exam Scores</h2>
              <span className="profile-card-icon77">📊</span>
            </div>
            {examScores.map((exam) => (
              <div key={exam.id} className="profile-exam-item77">
                <div className="profile-exam-info77">
                  <div className="profile-exam-name77">{exam.name}</div>
                  <div className="profile-exam-date77">{exam.date}</div>
                </div>
                <div className={`profile-exam-score77 ${getScoreClass(exam.grade)}`}>
                  {exam.score}/{exam.maxScore}
                </div>
              </div>
            ))}
          </div>

          {/* Achievements */}
          <div className="profile-card77">
            <div className="profile-card-header77">
              <h2 className="profile-card-title77">Achievements</h2>
              <span className="profile-card-icon77">🏅</span>
            </div>
            <div className="profile-achievement-grid77">
              {achievements.map((achievement) => (
                <div key={achievement.id} className="profile-achievement77">
                  <span className="profile-achievement-icon77">{achievement.icon}</span>
                  <div className="profile-achievement-name77">{achievement.name}</div>
                  <div className="profile-achievement-desc77">{achievement.description}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="profile-action-buttons77">
          <Link to="/AllCourses" className="profile-action-btn77 profile-action-primary77">
            <span>🎯</span>
            Browse More Courses
          </Link>
          <button className="profile-action-btn77 profile-action-secondary77">
            <span>📊</span>
            View Detailed Analytics
          </button>
          <button className="profile-action-btn77 profile-action-secondary77">
            <span>📋</span>
            Download Certificates
          </button>
          <button className="profile-action-btn77 profile-action-secondary77">
            <span>⚙️</span>
            Edit Profile Settings
          </button>
        </div>
      </div>
    </div>
  );
};

export default Profile;