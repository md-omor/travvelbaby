import React from "react";
import styled from "styled-components";
import NavBar from "./NavBar";
import SettingSidebar from "../components/settings/SettingSidebar";
import AccountSettings from "../components/settings/AccountSettings";
import GeneralSettings from "../components/settings/GeneralSettings";
import ProfileInformation from "../components/settings/ProfileInformation";
import NotificationSettings from "../components/settings/NotificationSettings";
import PaymentSettings from "../components/settings/PaymentSettings";
import PrivacySettings from "../components/settings/PrivacySettings";
import SecuritySettings from "../components/settings/SecuritySettings";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
export default function Settings() {
  return (
    <>
      <NavBar />
      <Wrapper>
        <Router>
          <SettingSidebar />
          <Switch>
            <Route path="/" exact>
              <ProfileInformation />
            </Route>
            <Route path="/GeneralSettings" exact>
              <GeneralSettings />
            </Route>
            <Route path="/ProfileInformation" exact>
            <AccountSettings />
            </Route>
            <Route path="/NotificationSettings" exact>
              <NotificationSettings />
            </Route>
            <Route path="/PaymentSettings" exact>
              <PaymentSettings />
            </Route>
            <Route path="/PrivacySettings" exact>
              <PrivacySettings />
            </Route>
            <Route path="/SecuritySettings" exact>
              <SecuritySettings />
            </Route>
          </Switch>
        </Router>
      </Wrapper>
    </>
  );
}
const Wrapper = styled.div`
  width: 100%;
  height: 92.5vh;
  display: flex;
`;
