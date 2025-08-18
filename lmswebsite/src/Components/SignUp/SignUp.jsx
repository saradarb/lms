import React, { useState } from 'react';
import { Link } from 'react-router';
import './SignUp.css';






const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });
  
  const [errors, setErrors] = useState({});
  const [passwordStrength, setPasswordStrength] = useState('');
  const [isLoading, setIsLoading] = useState(false);

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

    // Check password strength
    if (name === 'password') {
      checkPasswordStrength(value);
    }
  };

  // Password strength checker
  const checkPasswordStrength = (password) => {
    if (password.length === 0) {
      setPasswordStrength('');
      return;
    }
    
    if (password.length < 6) {
      setPasswordStrength('weak');
    } else if (password.length < 10 || !/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(password)) {
      setPasswordStrength('medium');
    } else {
      setPasswordStrength('strong');
    }
  };

  // Form validation
  const validateForm = () => {
    const newErrors = {};

    // First name validation
    if (!formData.firstName.trim()) {
      newErrors.firstName = 'First name is required';
    }

    // Last name validation
    if (!formData.lastName.trim()) {
      newErrors.lastName = 'Last name is required';
    }

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

    // Confirm password validation
    if (!formData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }

    // Terms agreement validation
    if (!formData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
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
      
      // Here you would typically make an API call to register the user
      console.log('User registration data:', formData);
      
      // Reset form or redirect user
      alert('Account created successfully!');
      
    } catch (error) {
      console.error('Registration error:', error);
      setErrors({ submit: 'Registration failed. Please try again.' });
    } finally {
      setIsLoading(false);
    }
  };

  // Handle social login
  const handleSocialLogin = (provider) => {
    console.log(`Login with ${provider}`);
    // Implement social login logic
  };

  return (
    <div className="signup-main-container99">
      {/* Navigation Bar */}
      <nav className="signup-navbar99">
        {/* Logo */}
        <div className="signup-logo-section99">
          <div className="signup-logo-icon99">
            📖
          </div>
          <span className="signup-logo-text99">Learnify</span>
        </div>

        {/* Center Navigation */}
        <div className="signup-nav-center99">
          <Link to="/" className="signup-nav-button99">Home</Link>
          <Link to="/AllCourses" className="signup-nav-button99">Courses</Link>
        </div>

        {/* Right Side Buttons */}
        <div className="signup-auth-buttons99">
          <Link to="/Login" className="signup-login-btn99">Login</Link>
        </div>
      </nav>

      {/* SignUp Form */}
      <div className="signup-form-container99">
        <div className="signup-form-header99">
          <h1 className="signup-form-title99">Create Account</h1>
          <p className="signup-form-subtitle99">Start your learning journey today</p>
        </div>

        {/* Social Login */}
        <div className="signup-social-login99">
          <button 
            className="signup-social-btn99"
            onClick={() => handleSocialLogin('google')}
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
          <button 
            className="signup-social-btn99"
            onClick={() => handleSocialLogin('facebook')}
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
        </div>

        <div className="signup-divider99">
          <span className="signup-divider-text99">or</span>
        </div>

        <form className="signup-form99" onSubmit={handleSubmit}>
          {/* First Name Field */}
          <div className="signup-form-group99">
            <label className="signup-form-label99" htmlFor="firstName">
              First Name
            </label>
            <input
              id="firstName"
              name="firstName"
              type="text"
              className="signup-form-input99"
              placeholder="Enter your first name"
              value={formData.firstName}
              onChange={handleInputChange}
            />
            {errors.firstName && (
              <span className="signup-error-message99">{errors.firstName}</span>
            )}
          </div>

          {/* Last Name Field */}
          <div className="signup-form-group99">
            <label className="signup-form-label99" htmlFor="lastName">
              Last Name
            </label>
            <input
              id="lastName"
              name="lastName"
              type="text"
              className="signup-form-input99"
              placeholder="Enter your last name"
              value={formData.lastName}
              onChange={handleInputChange}
            />
            {errors.lastName && (
              <span className="signup-error-message99">{errors.lastName}</span>
            )}
          </div>

          {/* Email Field */}
          <div className="signup-form-group99">
            <label className="signup-form-label99" htmlFor="email">
              Email Address
            </label>
            <input
              id="email"
              name="email"
              type="email"
              className="signup-form-input99"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleInputChange}
            />
            {errors.email && (
              <span className="signup-error-message99">{errors.email}</span>
            )}
          </div>

          {/* Password Field */}
          <div className="signup-form-group99">
            <label className="signup-form-label99" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              name="password"
              type="password"
              className="signup-form-input99"
              placeholder="Create a password"
              value={formData.password}
              onChange={handleInputChange}
            />
            {passwordStrength && (
              <div className={`signup-password-strength99 signup-password-${passwordStrength}99`}>
                Password strength: {passwordStrength.charAt(0).toUpperCase() + passwordStrength.slice(1)}
              </div>
            )}
            {errors.password && (
              <span className="signup-error-message99">{errors.password}</span>
            )}
          </div>

          {/* Confirm Password Field */}
          <div className="signup-form-group99">
            <label className="signup-form-label99" htmlFor="confirmPassword">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              name="confirmPassword"
              type="password"
              className="signup-form-input99"
              placeholder="Confirm your password"
              value={formData.confirmPassword}
              onChange={handleInputChange}
            />
            {errors.confirmPassword && (
              <span className="signup-error-message99">{errors.confirmPassword}</span>
            )}
          </div>

          {/* Terms and Conditions */}
          <div className="signup-checkbox-group99">
            <input
              id="agreeToTerms"
              name="agreeToTerms"
              type="checkbox"
              className="signup-checkbox99"
              checked={formData.agreeToTerms}
              onChange={handleInputChange}
            />
            <label className="signup-checkbox-label99" htmlFor="agreeToTerms">
              I agree to the{' '}
              <a href="#terms" target="_blank" rel="noopener noreferrer">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="#privacy" target="_blank" rel="noopener noreferrer">
                Privacy Policy
              </a>
            </label>
          </div>
          {errors.agreeToTerms && (
            <span className="signup-error-message99">{errors.agreeToTerms}</span>
          )}

          {/* Submit Error */}
          {errors.submit && (
            <span className="signup-error-message99">{errors.submit}</span>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="signup-submit-btn99"
            disabled={isLoading}
          >
            {isLoading && <span className="signup-loading-spinner99"></span>}
            {isLoading ? 'Creating Account...' : 'Create Account'}
          </button>
        </form>

        {/* Footer Link */}
        <p className="signup-footer-link99">
          Already have an account?{' '}
          <Link to="/Login">Sign in here</Link>
        </p>
      </div>

     
    </div>
  );
};

export default SignUp;