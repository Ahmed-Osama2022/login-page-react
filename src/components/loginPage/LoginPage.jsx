import React from 'react';
import './LoginPage.css';
import backgroundImg from '../../assets/bgDesktop.jpg';
import googleVector from '../../assets/Google-vector.svg';
import LOGO from '../../assets/LOGO.svg';

const LoginPage = () => {
  return (
    <>
      <div className="box ">
        {/* Two columns */}
        {/* 1-rt column */}
        <div className="row flex-row ">
          <div className="col-md-6 d-none d-md-flex right_col">
            <picture className="img_box">
              <img src={backgroundImg} alt="photo" className="mw-100" />
            </picture>
            <div className="banner">
              <h1>Get Everything you want</h1>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis unde, dolor porro natus voluptatum
                nam? Voluptates iste suscipit dolor. Ullam!
              </p>
            </div>
          </div>
          {/* 2-nd column */}
          {/* LOGO */}
          <div className="col-md-6 col-12 d-flex flex-column align-items-center py-3 px-4 px-md-5 ">
            <div className="pt-3">
              <div className="logo d-inline-block">
                <img src={LOGO} className="img-fluid" alt="logo" />
              </div>
              <span className="text-center fw-bold ms-1">Ahmed Khashaba design</span>
            </div>
            {/* Form */}
            <div className="form pt-3 mt-5">
              <div className="text-center">
                <h1 className="fs-bold ">Welcome Back</h1>
                <p className="fw-light text-muted ">Enter your email and password to access your account</p>
              </div>
              <form className="py-3">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
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
                    className="form-control"
                    placeholder="Enter your passwrod"
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
                {/* <button type="button" className="btn btn-outline-dark w-100 mt-2"><i */}
                {/* className="fa-brands fa-google"></i> Sign in with Google</button> */}
                <button type="button" className="btn btn-outline-dark w-100 mt-2">
                  <img src={googleVector} className="google-vector" alt="google-image" />
                  <span className="ms-2">Sign in with Google</span>
                </button>
              </form>
            </div>
            {/* Register */}
            <p className="pt-5">
              Don't have an acccout?{' '}
              <span className="text-capitalize fw-bold ">
                <a href="#">Sign up</a>
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginPage;
