import React, { useState } from 'react';
import { Link } from 'react-router';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });
  
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [showDemoCredentials, setShowDemoCredentials] = useState(true);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    // Password validation
    if (!formData.password) {
      newErrors.password = 'Password is required';
    } else if (formData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      // Here you would typically make an API call to authenticate the user
      console.log('User login data:', formData);
      
      // Simulate successful login
      if (formData.email === 'demo@learnify.com' && formData.password === 'demo123') {
        alert('Login successful! Welcome to Learnify!');
        // Redirect to dashboard or home page
      } else {
        setErrors({ submit: 'Invalid email or password' });
      }
      
    } catch (error) {
      console.error('Login error:', error);
      setErrors({ submit: 'Login failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle social login
  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Implement social login logic
  };

  // Handle forgot password
  const handleForgotPassword = () => {
    console.log('Forgot password clicked');
    // Implement forgot password logic
    alert('Password reset link will be sent to your email');
  };

  // Fill demo credentials
  const fillDemoCredentials = () => {
    setFormData(prev => ({
      ...prev,
      email: 'demo@learnify.com',
      password: 'demo123'
    }));
    setShowDemoCredentials(false);
  };

  return (
    <div className="login-main-container88">
      {/* Navigation Bar */}
      <nav className="login-navbar88">
        {/* Logo */}
        <div className="login-logo-section88">
          <div className="login-logo-icon88">
            📖
          </div>
          <span className="login-logo-text88">Learnify</span>
        </div>

        {/* Center Navigation */}
        <div className="login-nav-center88">
          <Link to="/" className="login-nav-button88">Home</Link>
          <Link to="/AllCourses" className="login-nav-button88">Courses</Link>
        </div>

        {/* Right Side Buttons */}
        <div className="login-auth-buttons88">
          <Link to="/SignUp" className="login-signup-btn88">Sign Up</Link>
        </div>
      </nav>

      {/* Login Form */}
      <div className="login-form-container88">
        <div className="login-form-header88">
          <h1 className="login-form-title88">Welcome Back</h1>
          <p className="login-form-subtitle88">Sign in to continue your learning journey</p>
        </div>

        {/* Demo Credentials */}
        {showDemoCredentials && (
          <div className="login-demo-credentials88">
            <div className="login-demo-title88">Demo Credentials:</div>
            <div className="login-demo-item88">
              Email: <span className="login-demo-value88">demo@learnify.com</span>
            </div>
            <div className="login-demo-item88">
              Password: <span className="login-demo-value88">demo123</span>
            </div>
            <button 
              type="button" 
              onClick={fillDemoCredentials}
              style={{
                background: 'transparent',
                border: '1px solid #ff3f81',
                color: '#ff3f81',
                padding: '0.5rem 1rem',
                borderRadius: '0.25rem',
                cursor: 'pointer',
                fontSize: '0.8rem',
                fontFamily: 'Courier New, monospace',
                marginTop: '0.5rem',
                transition: 'all 0.3s ease'
              }}
              onMouseOver={(e) => {
                e.target.style.backgroundColor = 'rgba(255, 63, 129, 0.1)';
              }}
              onMouseOut={(e) => {
                e.target.style.backgroundColor = 'transparent';
              }}
            >
              Fill Demo Credentials
            </button>
          </div>
        )}

        {/* Social Login */}
        <div className="login-social-login88">
          <button 
            className="login-social-btn88"
            onClick={() => handleSocialLogin('google')}
          >
            <span>
            <img 
             src="https://img.icons8.com/?size=100&id=60984&format=png&color=ffffff" 
             alt="Google icon" 
             style={{ width: "4vh", height: "4vh", }} 
             />
            </span>
            Continue with Google
          </button>
          <button 
            className="login-social-btn88"
            onClick={() => handleSocialLogin('facebook')}
          >
            <span>
            <img 
             src="https://img.icons8.com/?size=100&id=118467&format=png&color=ffffff" 
             alt="Google icon" 
             style={{ width: "4vh", height: "4vh", }} 
             />
            </span>
            Continue with Facebook
          </button>
        </div>

        <div className="login-divider88">
          <span className="login-divider-text88">or</span>
        </div>

        <form className="login-form88" onSubmit={handleSubmit}>
          {/* Email Field */}
          <div className="login-form-group88">
            <label className="login-form-label88" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="login-form-input88"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <span className="login-error-message88">{errors.email}</span>
            )}
          </div>

          {/* Password Field */}
          <div className="login-form-group88">
            <label className="login-form-label88" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="login-form-input88"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {errors.password && (
              <span className="login-error-message88">{errors.password}</span>
            )}
          </div>

          {/* Remember Me and Forgot Password */}
          <div className="login-form-extras88">
            <div className="login-checkbox-group88">
              <input
                id="rememberMe"
                name="rememberMe"
                type="checkbox"
                className="login-checkbox88"
                checked={formData.rememberMe}
                onChange={handleInputChange}
              />
              <label className="login-checkbox-label88" htmlFor="rememberMe">
                Remember me
              </label>
            </div>
            
            <button
              type="button"
              className="login-forgot-password88"
              onClick={handleForgotPassword}
            >
              Forgot password?
            </button>
          </div>

          {/* Submit Error */}
          {errors.submit && (
            <span className="login-error-message88">{errors.submit}</span>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="login-submit-btn88"
            disabled={isLoading}
          >
            {isLoading && <span className="login-loading-spinner88"></span>}
            {isLoading ? 'Signing In...' : 'Sign In'}
          </button>
        </form>

        {/* Footer Link */}
        <p className="login-footer-link88">
          Don't have an account?{' '}
          <Link to="/SignUp">Create one here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;