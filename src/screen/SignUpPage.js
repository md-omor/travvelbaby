import React from "react";
import styled from "styled-components";
import { FaFacebookF, FaTwitter } from "react-icons/fa";
import { Link } from "react-router-dom";

const SignUpPage = () => {
  return (
    <Wrapper>
      <div className="section section-center text-center">
        <div className="sign__up_wrapper">
          <div className="sign__up_header">
            <h3>Create a new account</h3>
            <h5>Sign Up and Let's travvel baby</h5>
          </div>

          <div className="sign__up_method">

          <a href='https://google.com/'>
            <div className="sign__up_google">Sign up with google</div></a>
            <a href='https://www.facebook.com/'>
            <div className="sign__up_social">
              <FaFacebookF />
            </div>
            </a>
            <a href='https://twitter.com/'>
            <div className="sign__up_social">
              <FaTwitter />
            </div>
            </a>
          </div>

          <form className="sign__up_form">
            <div className="form__name">
              <div className="sign__up_details">
                <label htmlFor="First-Name">First Name</label>
                <input type="text" />
              </div>

              <div className="sign__up_details">
                <label htmlFor="Last-Name">Last Name</label>
                <input type="text" />
              </div>
            </div>

            <div className="from_email_pass">
              <label htmlFor="Email">Email</label>
              <input type="email" />
            </div>

            <div className="from_email_pass">
              <label htmlFor="Passwod">Passwod</label>
              <input type="password" />
            </div>

            <p>
              By signing up, you agree to our Terms , Data Policy and Cookies
              Policy .
            </p>
            <Link to="/">
              <button className="btn">Sign Up</button>
            </Link>
          </form>

          <p className="wrapper__footer">
            Have an account?
            <Link to="/login">
              <span> Sign In Now</span>
            </Link>
          </p>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .sign__up_wrapper {
    width: 400px;
    margin: auto;
  }

  .sign__up_header {
    text-align: left;

    h3 {
      font-family: SofiaPro;
      font-style: normal;
      font-weight: bold;
      font-size: 30px;
      line-height: 30px;
      color: #b76e79;
    }

    h5 {
      font-family: SofiaPro;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 16px;
      color: #2d3748;
      margin-top: 20px;
    }
  }

  .sign__up_method {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 360px;
    margin-top: 40px;
  }

  .sign__up_google {
    font-family: SofiaPro;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: #b76e79;
    background: #daf6c5;
    border-radius: 5px;
    width: 212px;
    padding-top: 15px;
    height: 50px;
    cursor: pointer;
  }
  .sign__up_social {
    font-family: SofiaPro;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 16px;
    color: #b76e79;
    background: #daf6c5;
    border-radius: 5px;
    width: 50px;
    padding-top: 15px;
    height: 50px;
    cursor: pointer;
  }

  .form__name {
    display: flex;
    text-align: left;
    margin-top: 45px;
  }

  .sign__up_details {
    label {
      font-family: SofiaPro;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 16px;
      color: #4a5568;
    }
    input {
      border: 1px solid #d8d8d8fa;
      border-radius: 5px;
      outline: none;
      margin-top: 20px;
      padding: 16px 15px;
      margin-right: 40px;
    }
  }

  .from_email_pass {
    width: 100%;
    text-align: left;
    margin-top: 20px;

    label {
      font-family: SofiaPro;
      display: block;
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 16px;
      color: #4a5568;
    }

    input {
      border: 1px solid #d8d8d8fa;
      border-radius: 5px;
      outline: none;
      margin-top: 20px;
      padding: 16px 15px;
      width: 100%;
    }
  }

  .sign__up_form p {
    font-family: SofiaPro;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px;
    letter-spacing: 0em;
    text-align: left;
    margin-top: 20px;
    text-align: left;
    width: 250px;
  }

  .wrapper__footer {
    font-family: SofiaPro;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    margin-top: 30px;
    line-height: 16px;
    color: #2C5282;
    span {
      font-family: SofiaPro;
      font-family: unset;
      color: #0f32dbd9;
      font-weight: 400;
      font-size: 16px;
      font-style: normal;
      line-height: 18.75px;
      cursor: pointer;
    }
  }
`;

export default SignUpPage;
