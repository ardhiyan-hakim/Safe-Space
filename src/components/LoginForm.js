import React from 'react';

function LoginForm() {
  return (
    <form
      className="login"
      onSubmit={(e) => {
        e.preventDefault();
        console.log('Succeed Login');
      }}
    >
      <h2>Login</h2>
      <div className="login-input">
        <label htmlFor="login-email">
          Email
          <input
            required
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
            required
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
  );
}

export default LoginForm;
