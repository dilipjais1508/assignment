import React, { useState, useEffect } from 'react';
import './AuthForm.css';
import { useNavigate } from 'react-router-dom';

function AuthForm({ initialMode = "login" }) {
  const [isLogin, setIsLogin] = useState(initialMode === "login");
  const navigate = useNavigate();

  useEffect(() => {
    setIsLogin(initialMode === "login");
  }, [initialMode]);

  const handleTabClick = (mode) => {
    setIsLogin(mode === "login");
    navigate(mode === "login" ? "/login" : "/signup");
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
        <form className="auth-form">
          <input type="email" placeholder="Email Address" required />
          <input type="password" placeholder="Password" required />
          {!isLogin && (
            <input type="password" placeholder="Confirm password" required />
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