import React, { useState } from 'react';
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from 'react-icons/bs';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';

function LandingPage() {
  const [isLoginShow, setIsLoginShow] = useState(false);

  function onChangeIsLoginShow() {
    setIsLoginShow((prevState) => !prevState);
  }

  return (
    <div className="landing_page">
      <div className="input">
        <div className={isLoginShow ? 'input-login active' : 'input-login'}>
          <div className="login-column">
            <LoginForm />
            <button
              type="button"
              className="switch-btn"
              onClick={onChangeIsLoginShow}
            >
              Register
              <BsFillArrowDownCircleFill />
            </button>
          </div>
        </div>

        <div
          className={!isLoginShow ? 'input-register active' : 'input-register'}
        >
          <div className="register-column">
            <RegisterForm />
            <button
              type="button"
              className="switch-btn"
              onClick={onChangeIsLoginShow}
            >
              Login
              <BsFillArrowUpCircleFill />
            </button>
          </div>
        </div>
      </div>

      <div className={isLoginShow ? 'background login' : 'background register'}>
        {isLoginShow ? (
          <div>
            <p>
              <span>Login.</span>
              <br />
              To Enjoy Your Safe Space
            </p>
          </div>
        ) : (
          <div>
            <p>
              <span>Register.</span>
              <br />
              And Make Your Own Safe Space
            </p>
          </div>
        )}
      </div>
    </div>
  );
}

export default LandingPage;
