import React from "react";
import SettingCard from "./SettingCard";
import SettingJson from "../../json/Settings.json";

const AccountSettings = () => {
  return (
    <div>
      {SettingJson.settingItemConent.Security.map(
        (props) => (
          <SettingCard
            key={props.id}
            AccName={props.AccName}
            Name={props.Name}
            Username={props.Username}
            Website={props.Website}
            Email={props.Email}
            Bio={props.Bio}
            Location={props.Location}
          />
        )
      )}
    </div>
  );
};

export default AccountSettings;
