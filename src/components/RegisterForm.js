import React from 'react';

function RegisterForm() {
  return (
    <form
      className="register"
      onSubmit={(e) => {
        e.preventDefault();
        console.log('Succeed Register');
      }}
    >
      <h2>Register</h2>

      <div className="register-input">
        <label htmlFor="register-name">
          Username
          <input
            required
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
            required
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
            required
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
  );
}

export default RegisterForm;
