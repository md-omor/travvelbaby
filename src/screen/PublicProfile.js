import React from "react"; 
import "swiper/swiper.min.css";
import "swiper/components/effect-coverflow/effect-coverflow.min.css";
import "swiper/components/pagination/pagination.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/navigation/navigation.min.css";
import styled from "styled-components";
import NavBar from "./NavBar"; 
import { Swiper, SwiperSlide } from "swiper/react";

export default function PublicProfile({ data }) {
  if (data) {
    var BannerImg = "images/" + data.bannerImg;
    var User = "images/" + data.UserImg;
    var verify = "images/" + data.UserVerifyLogo;
    var UserNames = data.UserName;
    var UserDataBio = data.UserBio;
    var flowUpUser = data.flowUpUser;
    var userfollower = data.userfollower.map(function (data) {
      return (
        <div className="postContent">
          <h5 className="postCount">{data.Count}</h5>
          <label className="PostName">{data.CountName}</label>
        </div>
      );
    });
    var UserFreind = data.UserSocalIcon.map(function (data) {
      var SocalIcons = "images/" + data.SocalIcon;
      return (
        <div key={data.id}>
          <img className="UserContentSocialIcon" src={SocalIcons} alt="img" />
        </div>
      );
    });
    var MiniImgContent = data.publicProfilePostImg.map(function (data) {
      var img = "images/ContenImages/" + data.images;
      return (
        <SwiperSlide>
          <div key={data.id} className="ImgCard">
            <img className="img" src={img} alt="img" />
          </div>
        </SwiperSlide>
      );
    });
    var ViewImgContent = data.publicProfilePostImg.map(function (data) {
      var img = "images/ContenImages/" + data.images;
      var HovHeartimages = "images/ContenImages/" + data.HovHeartimages;
      var HovComImages = "images/ContenImages/" + data.HovComImages;
      return (
        <ViewImgCard>
          <img className="img" src={img} alt="img" />
          <OnHover>
            <div className="Content">
              <img className="HeartImg" src={HovHeartimages} alt="img" />
              <spna className="text"> {data.HovHeartText} k</spna>
            </div>
            <div className="Content">
              <img className="HeartImg" src={HovComImages} alt="img" />
              <spna className="text"> {data.HovComText} k</spna>
            </div>
          </OnHover>
        </ViewImgCard>
      );
    });
  }
  return (
    <>
      <NavBar />
      <Wrapper>
        <div className="PublicProfileWrapper">
          <div className="PublicProfileBannerImg">
            <img src={BannerImg} alt="img" />
          </div>
          <div className="PublicProfileWrapperContentWrapper">
            <div className="ContentWrapper">
              <div className="RightIconContentWrapper">
                <div className="RightIconContent">
                  <button className="MessagesBtn">Message</button>
                  <img className="Users" src="images/users.png" alt="img" />
                  <img
                    className="dwonArro"
                    src="images/down-filled-triangular-arrow.png"
                    alt="img"
                  />
                  <img className="dotted" src="images/more.png" alt="img" />
                </div>
              </div>
              <div className="UserContentWrapper">
                <div className="UserContent">
                  <img className="UserContentImg" src={User} alt="img" />
                  <div className="UserNameContent">
                    <h4 className="UserName">{UserNames}</h4>
                    <img
                      className="UserVerify"
                      src={verify}
                      alt="UserVerifyIcon"
                    />
                    <div className="UserContentIcon">{UserFreind}</div>
                  </div>
                  <h6 className="UserBio">{UserDataBio}</h6>
                  <div className="flowWrapper">{userfollower}</div>
                  <p className="flowUpUser">
                   {flowUpUser}
                  </p>
                </div>
              </div>
              <div className="MiniImgContentWrapper">
                <div className="ImgCardWrapper">
                  <Swiper
                    slidesPerView={5}
                    spaceBetween={60}
                    centeredSlides={true}
                    pagination={{
                      clickable: true,
                    }}
                    mousewheel={true}
                  >
                    {MiniImgContent}
                  </Swiper>
                </div>
              </div>
              <div className="ViewAllImages">
                <div className="ImgCardWrapper">{ViewImgContent}</div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </>
  );
}
const ViewImgCard = styled.div`
    width: 308px;
    height: 320px;
    position: relative;
    margin: 8px 0;
`;
const OnHover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #00000061;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  ${ViewImgCard}:hover & {
    opacity: 1;
    cursor: pointer;
  }
`;
const Wrapper = styled.div`
  .PublicProfileBannerImg {
    width: 100%;
    height: 400px;
  }
  .PublicProfileBannerImg img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .PublicProfileWrapperContentWrapper {
    transform: translate(0px, -140px);
    .ContentWrapper {
      width: 1170px;
      margin: 20px auto;
      height: 231px;

      .RightIconContentWrapper {
        display: flex;
        justify-content: flex-end;
        transform: translate(0px, 140px);
        .RightIconContent {
          display: flex;
          width: 281px;
          justify-content: space-around;
          .MessagesBtn {
            background: #b76e79;
            color: #ffffff;
            border-radius: 3px;
            width: 92px;
            height: 38px;
            font-family: Sofia Pro;
            font-style: normal;
            font-weight: normal;
            font-size: 14px;
            line-height: 14px;
            display: flex;
            justify-content: center;
            align-items: center;
            outline: none;
            border: none;
          }
          .Users {
            background: #b76e79;
            border-radius: 3px;
            width: 14px;
            height: 14px;
            object-fit: cover;
            padding: 13px 20px 12px 20px;
          }
          .dwonArro {
            background: #b76e79;
            border-radius: 3px;
            width: 15px;
            height: 9px;
            object-fit: cover;
            padding: 14px;
          }
          .dotted {
            width: 23px;
            height: 20px;
            object-fit: cover;
            padding: 9px;
          }
        }
      }
      .UserContentWrapper {
        text-align: center;
        border-bottom: 1.5px solid #3334;
        padding: 0px 0 22px 0;
        margin: 0 0 60px 0;
        .UserContentImg {
          width: 150px;
          height: 150px;
          border-radius: 100px;
          border: 3px solid #fff;
          object-fit: cover;
        }
        .UserNameContent {
          width: 350px;
          display: flex;
          align-items: flex-end;
          justify-content: space-between;
          margin: auto;
          .UserName {
            font-family: Sofia Pro;
            font-style: normal;
            font-weight: normal;
            font-size: 30px;
            line-height: 30px;
            margin: 0;
            text-align: center;
            color: #231f20;
            font-family: SofiaPro;
          }
          .UserVerify {
            width: 28px;
            height: 28px;
            object-fit: cover;
            margin: 0 17px 0 0;
          }
          .UserContentIcon {
            width: 73px;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin: 0 0 0 11px;
            .UserContentSocialIcon {
              width: 20px;
              height: 20px;
              object-fit: cover;
            }
          }
        }
        .UserBio {
          font-family: Sofia Pro;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 18px;
          margin: 10px 0 28px 0;
          text-align: center;
          color: #4a4a4a;
          font-family: SofiaPro;
        }
        .flowWrapper {
          display: flex;
          width: 350px;
          margin: auto;
          justify-content: space-between;
          align-items: center;
          .postContent {
            padding: 0;
            margin: 0;
            height: 45px;
            .postCount {
              font-family: Sofia Pro;
              font-style: normal;
              font-weight: normal;
              font-size: 25px;
              line-height: 25px;
              margin: 0;
              color: #231f20;
              font-family: SofiaPro;
            }
            .PostName {
              font-family: Sofia Pro;
              font-style: normal;
              font-weight: normal;
              font-size: 14px;
              line-height: 14px;
              color: #818488;
              mix-blend-mode: normal;
              opacity: 0.7;
              font-family: SofiaPro;
            }
          }
        }
        .flowUpUser {
          font-family: Sofia Pro;
          font-style: normal;
          font-weight: normal;
          font-size: 18px;
          line-height: 18px;
          margin: 20px 0 0 0;
          text-align: center;
          color: #4a4a4a;
          font-family: SofiaPro;
        }
      }
      .MiniImgContentWrapper {
        margin: 0 0 106px 0;
        padding: 0 0 40px 0;
        border-bottom: 1.5px solid #3334;
        .ImgCardWrapper {
          width: 1000px;
          margin: auto;
          overflow: hidden;
          display: flex;
          .ImgCard {
            width: 200px;
            height: 187px;
            .img {
              width: 100%;
              height: 100%;
              object-fit: cover;
              border-radius: 5px;
            }
          }
        }
      }
      .ViewAllImages {
        padding: 0 0 40px 0;
        .ImgCardWrapper {
          width: 1000px;
          margin: auto;
          overflow: hidden;
          display: flex;
          flex-wrap: wrap;
          justify-content: space-evenly;
        }
      }
    }
  }
  .img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 5px;
  }
  .Content {
    margin: 10px;
    .HeartImg {
      width: 20px;
      height: 17.77px;
    }
    .text {
      color: #fff;
      padding: 0 0 0 6px;
      font-family: SofiaPro;
    }
  }
`;
