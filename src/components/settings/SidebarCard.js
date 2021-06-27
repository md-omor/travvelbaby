import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
const SidebarCard = (props) => {
  return (
    <Wrapper>
      <Link to="/" className="Link">
        <div className="settingSideItem">
          <img className="images" src={props.imagesOne} alt="img" />
          <span>{props.nameOne}</span>
        </div>
      </Link>
      <Link to="/GeneralSettings" className="Link">
        <div className="settingSideItem">
          <img className="images" src={props.imagesTwo} alt="img" />
          <span>{props.nameTwo}</span>
        </div>
      </Link>
      <Link to="/ProfileInformation" className="Link">
        <div className="settingSideItem">
          <img className="images" src={props.imagesThree} alt="img" />
          <span>{props.nameThree}</span>
        </div>
      </Link>
      <Link to="/NotificationSettings" className="Link">
        <div className="settingSideItem">
          <img className="images" src={props.imagesFore} alt="img" />
          <span>{props.nameFore}</span>
        </div>
      </Link>
      <Link to="/PaymentSettings" className="Link">
        <div className="settingSideItem">
          <img className="images" src={props.imagesFive} alt="img" />
          <span>{props.nameFive}</span>
        </div>
      </Link>
      <Link to="/PrivacySettings" className="Link">
        <div className="settingSideItem">
          <img className="images" src={props.imagesSixe} alt="img" />
          <span>{props.nameSixe}</span>
        </div>
      </Link>
      <Link to="/SecuritySettings" className="Link">
        <div className="settingSideItem">
          <img className="images" src={props.imagesSeven} alt="img" />
          <span>{props.nameSeven}</span>
        </div>
      </Link>
    </Wrapper>
  );
};

export default SidebarCard;
const Wrapper = styled.div`
  .Link {
    color: #000;
    .settingSideItem {
      padding: 18px 0;
      display: flex;
      align-items: center;
      .images {
        padding: 0 18px 0 0;
      }
    }
  }
`;
