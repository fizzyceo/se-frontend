import React, { useState }  from 'react';
import '../../style/Login.css'; 
import CreateAccount from '../CreateAcc/CreateAcc.js';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [isCreateAccountClicked, setCreateAccountClicked] = useState(false);

    const handleTogglePassword = () => {
      setShowPassword(!showPassword);
    };
    const handleLogin = () => {
        // Add login blink l backend here
      };
    
      const handleForgotPassword = () => {
        // Add link l forgot pswd page
      };
      const handleCreateAccount = () => {
        // Set state to indicate that "Create Account" is clicked
        setCreateAccountClicked(true);
      };
    
      if (isCreateAccountClicked) {
        // Render the CreateAccount component or navigate to the Create Account page as needed
        return <CreateAccount />;
      }
    return (
        <div className="login-container">
            <div className="background-image"></div>
            <h1 className='website-name'>BLABLA</h1>
            <div className="login-box">
                <div className="input-container">
                    <input type="text" placeholder="Username" />
                    <input type={showPassword ? 'text' : 'password'} placeholder="Password"/>
                    <span className="password-toggle" onClick={handleTogglePassword}/>
                </div>
                <div className="forgot-password" onClick={handleForgotPassword} >Forgot your password?</div>
                <button className="login-button" onClick={handleLogin}>Log in</button>
            </div>
            <button className="create-account-button" onClick={handleCreateAccount}>Create an Account</button>
        </div>
    );
};

export default Login;