import React, { useState } from 'react';
import './LoginPage.css';
import backgroundImg from '../../assets/bgDesktop.jpg';
import googleVector from '../../assets/Google-vector.svg';
import LOGO from '../../assets/LOGO.svg';
import { saveLogin } from '../../util/Auth';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [response, setResponse] = useState('');
  // const [error, setError] = useState('');

  const [responseMessage, setResponseMessage] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const API_URL = import.meta.env.VITE_API_URL;

  /**
   * NOTE: No need to use ( useEffect() ) here
   * because there is no need to call the API when the component loads.
   */

  function inputHandler(value, type) {
    if (type === 'username') {
      setUsername(value);
    } else {
      setPassword(value);
    }
  }

  async function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload

    setResponseMessage('');
    setErrorMessage('');

    const postData = { username, password };

    try {
      const res = await fetch(API_URL + '/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(postData),
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message || 'Failed to login!');
      }

      // If response is Ok
      setResponseMessage(data.message || 'Login successful!');
      // Save the Token
      // console.log(data.token);
      saveLogin(data.token);
      // Perform a fake redirect
      setTimeout(() => {
        window.location = 'http://localhost';
      }, 2000);

      //
    } catch (err) {
      setErrorMessage(err.message);
    }
  }

  return (
    <div className="box">
      <div className="row flex-row">
        <div className="col-md-6 d-none d-md-flex right_col">
          <picture className="img_box">
            <img src={backgroundImg} alt="photo" className="mw-100" />
          </picture>
          <div className="banner">
            <h1>Get Everything you want</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis unde, dolor porro natus voluptatum nam? Voluptates iste
              suscipit dolor. Ullam!
            </p>
          </div>
        </div>

        <div className="col-md-6 col-12 d-flex flex-column align-items-center py-3 px-4 px-md-5">
          <div className="pt-3">
            <div className="logo d-inline-block">
              <img src={LOGO} className="img-fluid" alt="logo" />
            </div>
            <span className="text-center fw-bold ms-1">Ahmed Khashaba design</span>
          </div>

          <div className="form pt-3 mt-5">
            <div className="text-center">
              <h1 className="fs-bold">Welcome Back</h1>
              <p className="fw-light text-muted">Enter your email and password to access your account</p>
            </div>

            <form className="py-3" onSubmit={handleSubmit}>
              {/* The Response messages "Flash messages" */}
              {errorMessage && <p className="text-danger mt-2">{errorMessage}</p>}
              {responseMessage && <p className="text-success mt-2">{responseMessage}</p>}
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email
                </label>
                <input
                  type="text"
                  name="username"
                  onChange={(e) => inputHandler(e.target.value, 'username')}
                  className="form-control"
                  placeholder="Enter your email"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                />
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={(e) => inputHandler(e.target.value, 'password')}
                  className="form-control"
                  placeholder="Enter your password"
                  id="exampleInputPassword1"
                />
              </div>

              <div className="mb-3 form-check d-flex flex-row justify-content-between align-items-center">
                <div>
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">
                    Remember me
                  </label>
                </div>
                <a href="#" className="forget">
                  Forget Password
                </a>
              </div>

              <button type="submit" className="btn btn-dark w-100">
                Submit
              </button>

              <a id="google_btn" href="#" type="button" className="btn btn-outline-dark w-100 mt-2">
                <img src={googleVector} className="google-vector" alt="google-image" />
                <span className="ms-2">Sign in with Google</span>
              </a>
            </form>
          </div>

          <p className="pt-5">
            Don't have an account?{' '}
            <span className="text-capitalize fw-bold">
              <a href="#">Sign up</a>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
