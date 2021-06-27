import React, { useState } from "react";
import styled from "styled-components";
import EdiText from "react-editext";
// { Name, Username, Website, Email, Bio, Location }
const SettingCard = (props) => {
  const [value, setValue] = useState(props.Name);
  const [valueOne, setValueOne] = useState(props.Username);
  const [valueTwo, setValueTwo] = useState(props.Email);
  const [valueThree, setValueThree] = useState(props.Website);
  const [valueFore, setValueFore] = useState(props.Bio);
  const [valueFive, setValueFive] = useState(props.Location);
  const handleSave = (value) => {
    setValue(value);
    setValueOne(value);
    setValueTwo(value);
    setValueThree(value);
    setValueFore(value);
    setValueFive(value);
  };
  return (
    <Wrapper>
      <h4>{props.AccName}</h4>
      <div className="SettingComName">
        <div className="SettingComSingleItem">
          <span>Name</span>
          <span>
            <EdiText
              type="text"
              value={value}
              editButtonContent="edit"
              saveButtonContent="save"
              cancelButtonContent="close"
              hideIcons="false"
              onSave={handleSave}
            />
          </span>
        </div>
        <div className="SettingComSingleItem">
          <span>Username</span>
          <span>
            <EdiText
              type="text"
              value={valueOne}
              editButtonContent="edit"
              saveButtonContent="save"
              cancelButtonContent="close"
              hideIcons="false"
              onSave={handleSave}
            />
          </span>
        </div>
        <div className="SettingComSingleItem">
          <span>Email</span>
          <span>
            {" "}
            <EdiText
              type="text"
              value={valueTwo}
              editButtonContent="edit"
              saveButtonContent="save"
              cancelButtonContent="close"
              hideIcons="false"
              onSave={handleSave}
            />
          </span>
        </div>
        <div className="SettingComSingleItem">
          <span>Website</span>
          <span>
            {" "}
            <EdiText
              type="text"
              value={valueThree}
              editButtonContent="edit"
              saveButtonContent="save"
              cancelButtonContent="close"
              hideIcons="false"
              onSave={handleSave}
            />
          </span>
        </div>
        <div className="SettingComSingleItem">
          <span>Bio</span>
          <span>
            {" "}
            <EdiText
              type="text"
              value={valueFore}
              editButtonContent="edit"
              saveButtonContent="save"
              cancelButtonContent="close"
              hideIcons="false"
              onSave={handleSave}
            />
          </span>
        </div>
        <div className="SettingComSingleItem">
          <span>Location</span>
          <span>
            {" "}
            <EdiText
              type="text"
              value={valueFive}
              editButtonContent="edit"
              saveButtonContent="save"
              cancelButtonContent="close"
              hideIcons="false"
              onSave={handleSave}
            />
          </span>
        </div>
      </div>
    </Wrapper>
  );
};
export default SettingCard;
const Wrapper = styled.div`
  margin: 40px 90px;
  .SettingComName {
    width: 900px;
    padding: 10px 0;
    .SettingComSingleItem {
      display: flex;
      justify-content: space-between;
      padding: 15px 0;
    }
  }
`;
