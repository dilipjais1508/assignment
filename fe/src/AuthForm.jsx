import React, { useState, useEffect } from 'react';
import './AuthForm.css';
import { useNavigate } from 'react-router-dom';

function AuthForm({ initialMode = "login" }) {
  const [isLogin, setIsLogin] = useState(initialMode === "login");
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogin(initialMode === "login");
  }, [initialMode]);

  const handleTabClick = (mode) => {
    setIsLogin(mode === "login");
    navigate(mode === "login" ? "/login" : "/signup");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');

    if (!isLogin && formData.password !== formData.confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      const endpoint = isLogin ? 'login' : 'signup';
      const response = await fetch(`http://localhost:5000/api/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(
          isLogin 
            ? {
                email: formData.email,
                password: formData.password
              }
            : {
                email: formData.email,
                password: formData.password,
                confirmPassword: formData.confirmPassword
              }
        ),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || `${isLogin ? 'Login' : 'Signup'} failed`);
      }

      // Handle successful authentication
      if (isLogin) {
        // Store the token if your API returns one
        if (data.token) {
          localStorage.setItem('token', data.token);
        }
        // Navigate to home page after login
        navigate('/');
      } else {
        // Navigate to login page after successful signup
        navigate('/login');
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="auth-bg">
      <div className="auth-card">
        <h2 className="auth-title">{isLogin ? 'Login Form' : 'Signup Form'}</h2>
        <div className="auth-tabs">
          <button
            className={isLogin ? 'active' : ''}
            onClick={() => handleTabClick("login")}
          >
            Login
          </button>
          <button
            className={!isLogin ? 'active' : ''}
            onClick={() => handleTabClick("signup")}
          >
            Signup
          </button>
        </div>
        {error && <div className="error-message">{error}</div>}
        <form className="auth-form" onSubmit={handleSubmit}>
          <input 
            type="email" 
            name="email"
            placeholder="Email Address" 
            value={formData.email}
            onChange={handleInputChange}
            required 
          />
          <input 
            type="password" 
            name="password"
            placeholder="Password" 
            value={formData.password}
            onChange={handleInputChange}
            required 
          />
          {!isLogin && (
            <input 
              type="password" 
              name="confirmPassword"
              placeholder="Confirm password" 
              value={formData.confirmPassword}
              onChange={handleInputChange}
              required 
            />
          )}
          {isLogin && (
            <a href="#" className="forgot-link">Forgot password?</a>
          )}
          <button className="auth-btn" type="submit">
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>
        {isLogin ? (
          <div className="auth-footer">
            Not a member? <a href="#" onClick={() => handleTabClick("signup")}>Signup now</a>
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default AuthForm; 