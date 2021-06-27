import React from "react";
import styled from "styled-components";
import SettingJson from "../../json/Settings.json";
import SidebarCard from "./SidebarCard";
const SettingSidebar = () => {
  const SettingData = SettingJson.main.settingsItem;
  return (
    <Wrapper>
      <div className="container">
        <h4>Settings</h4>
        {SettingData.map((props) => {
          return (
            <SidebarCard
              imagesOne={props.imagesOne}
              imagesTwo={props.imagesTwo}
              imagesThree={props.imagesThree}
              imagesFore={props.imagesFore}
              imagesFive={props.imagesFive}
              imagesSixe={props.imagesSixe}
              imagesSeven={props.imagesSeven}
              nameOne={props.nameOne}
              nameTwo={props.nameTwo}
              nameThree={props.nameThree}
              nameFore={props.nameFore}
              nameFive={props.nameFive}
              nameSixe={props.nameSixe}
              nameSeven={props.nameSeven}
            />
          );
        })}
      </div>
    </Wrapper>
  );
};

export default SettingSidebar;
const Wrapper = styled.div`
  background-color: #e5e5e5;
  width: 280px;
  height: 100%;
  .container {
    /* text-align: center; */
    padding: 30px 0 0 30px;

  }
`;
