import React from "react";
import styled from "styled-components";
import logo from "../assets/Travvelbaby_Main_White_1.svg";
import UserImg from "../assets/User.png";
import SearchImg from "../assets/VectorSearch.png";
import Mail from "../assets/VectorMail.png";
import Notification from "../assets/VectorNotification.png";
import Location from "../assets/VectorLocation.png";
import Plase from "../assets/VectorPlase.png";
export default function PublicProfile() {
  return (
    <Wrapper>
      <div className="NavBar">
        <div className="topBarImgWrapper">
          <img src={logo} alt="logo" />
        </div>
        <div className="SearchBar">
          <input type="text" placeholder="Search....." />
          <img src={SearchImg} alt="SearchImg" className="SearchBarIcon" />
        </div>
        <div className="TopBarButtonGroup">
          <button className="NewPostBtn">
            <img src={Plase} alt="PlaseImg" className="NewPostBtnIcons" />
            New Post
          </button>
          <button className="GoLiveBtn">Go Live</button>
        </div>
        <div className="topBarIconsGrop">
          <img src={Mail} alt="MailImg" className="topBarSingleIcons" />
          <img src={Location} alt="LocationImg" className="topBarSingleIcons" />
          <img
            src={Notification}
            alt="NotificationImg"
            className="topBarSingleIcons"
          />
        </div>
        <div className="topBarUserImg">
          <img src={UserImg} alt="UserImg" />
        </div>
      </div>
    </Wrapper>
  );
}
const Wrapper = styled.div`
  .NavBar {
    width: 100%;
    height: 56px;
    background: #ffffff;
    display: flex;
    align-items: center;
    justify-content: space-around;
    border-bottom: 1px solid var(--gray-color);
    .topBarImgWrapper {
      text-align: left;
      margin-left: 50px;
      img {
        width: 180px;
        height: 56px;
      }
    }
    .SearchBar {
      background: #ffffff;
      border: 0.5px solid rgba(44, 44, 44, 0.177848);
      box-sizing: border-box;
      border-radius: 3px;
      width: 420px;
      height: 35px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 0 10px;
      margin-left: 175px;
      input {
        border: none;
        outline: none;
        /* color: #e8e8e8; */
        background-color: #ffffff;
        /* width: 46px;
        height: 14px; */
        ::placeholder {
          color: #e8e8e8;
        }
      }
      .SearchBarIcon {
        background: #ffffff;
        /* border: 0.5px solid rgba(44, 44, 44, 0.177848); */
        box-sizing: border-box;
        border-radius: 3px;
      }
    }
    .TopBarButtonGroup {
      display: flex;
      margin: 0 200px 0 26px;
      .NewPostBtn {
        background: var(--color);
        border-radius: 2px;
        width: 98px;
        height: 35px;
        border: none;
        outline: none;
        color: #ffffff;
        .NewPostBtnIcons {
          background-color: var(--color);
          padding: 0 2px;
          height: 10px;
          width: 10px;
          color: #ffffff;
        }
      }
      .GoLiveBtn {
        border: 1px solid var(--color);
        box-sizing: border-box;
        border-radius: 2px;
        color: #b76e79;
        width: 98px;
        height: 35px;
        background-color: transparent;
        margin: 0 13px;
      }
    }
    .topBarIconsGrop {
      display: flex;
      .topBarSingleIcons {
        font-size: 21px;
        padding: 0 10px;
        color: var(--color);
      }
    }
    .topBarUserImg {
      margin: 0 53px 0 40px;
      img {
        width: 26px;
        height: 26px;
        object-fit: cover;
        border-radius: 100%;
        border: 2px solid #e8e8e8;
      }
    }
  }
`;
