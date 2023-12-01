// src/components/CreateAccount.js
import React, { useState } from 'react';
import '../../style/Login.css'; 
import '../../style/CreateAcc.css'; 
import Login from '../Login/Login.js';

const CreateAccount = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [birthdate, setBirthdate] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPassword1, setShowPassword1] = useState(false);
  const [hasAccount, setHasAccount] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };
  const handleTogglePassword1 = () => {
    setShowPassword1(!showPassword1);
  };
  const handleHaveAcc = () => {
    setHasAccount(true);
    if(hasAccount) return <Login />;

  };
  const handleRegister = () => {
    if (password === confirmPassword) {
      // Passwords match, proceed with registration logic
      // Add your registration logic here
    } else {
      // Passwords don't match, show an error message
      alert("Passwords don't match. Please enter matching passwords.");
      // You can also set an error state to conditionally render an error message in the UI
      // setError("Passwords don't match");
    }
  };
  

  const handleLoginRedirect = () => {
    // Add redirection to login page logic here
  };

  return (
    <div className="create-account-container">
      <h1 className="website-name">BLABLA</h1>
      <div className="create-account-box">
        <div className="input-container">
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            type="date"
            placeholder="Birthdate"
            value={birthdate}
            onChange={(e) => setBirthdate(e.target.value)}
          />
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type={showPassword1 ? 'text' : 'password'}
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          <span className="password-toggle1" onClick={handleTogglePassword}>
          </span>
          <span className="password-toggle2" onClick={handleTogglePassword1}>
          </span>
        </div>
        <button className="create-account-button" onClick={handleRegister}>
          Register
        </button>
        <p className="login-redirect" onClick={handleLoginRedirect}>
        <div className="have-acc" onClick={handleHaveAcc} >Already Have an Account?Login</div>
        </p>
      </div>
    </div>
  );
};

export default CreateAccount;
