import React, { useEffect, useState } from "react";
import {
  BsFillArrowDownCircleFill,
  BsFillArrowUpCircleFill,
} from "react-icons/bs";

function LandingPage() {
  const [isLoginShow, setIsLoginShow] = useState(true);

  function onChangeIsLoginShow() {
    setIsLoginShow((prevState) => !prevState);
  }

  return (
    <div className="landing_page">
      <div className="input">
        <div className={isLoginShow ? "input-login active" : "input-login"}>
          <div className="login-column">
            <form
              className="login"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Succeed Login");
              }}
            >
              <h2>Login</h2>
              <div className="login-input">
                <label htmlFor="login-email">
                  Email
                  <input
                    type="email"
                    name="login-email"
                    id="login-email"
                    placeholder="Your Email"
                    // value={signInEmail}
                    // onChange={(e) => setSignInEmail(e)}
                  />
                </label>
              </div>

              <div className="login-input">
                <label htmlFor="login-password">
                  Password
                  <input
                    type="password"
                    name="login-password"
                    id="login-password"
                    placeholder="Your Password"
                    // value={signInEmail}
                    // onChange={(e) => setSignInEmail(e)}
                  />
                </label>
              </div>

              <button type="submit" className="login-btn">
                Submit
              </button>
            </form>

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
          className={!isLoginShow ? "input-register active" : "input-register"}
        >
          <div className="register-column">
            <form
              className="register"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Succeed Register");
              }}
            >
              <h2>Register</h2>

              <div className="register-input">
                <label htmlFor="register-name">
                  Username
                  <input
                    type="text"
                    name="register-name"
                    id="register-name"
                    placeholder="Your Username"
                    // value={signInEmail}
                    // onChange={(e) => setSignInEmail(e)}
                  />
                </label>
              </div>

              <div className="register-input">
                <label htmlFor="register-email">
                  Email
                  <input
                    type="email"
                    name="register-email"
                    id="register-email"
                    placeholder="Your Email"
                    // value={signInEmail}
                    // onChange={(e) => setSignInEmail(e)}
                  />
                </label>
              </div>

              <div className="register-input">
                <label htmlFor="register-password">
                  Password
                  <input
                    type="password"
                    name="register-password"
                    id="register-password"
                    placeholder="Your Password"
                    // value={signInEmail}
                    // onChange={(e) => setSignInEmail(e)}
                  />
                </label>
              </div>

              <button type="submit" className="register-btn">
                Submit
              </button>
            </form>

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

      <div className={isLoginShow ? "background login" : "background register"}>
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
