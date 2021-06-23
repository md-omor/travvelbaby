import { SignUpPage, LoginPage, PassRestPage, PublicProfile } from "./screen";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
function App() {
  const [resumeData, setResumeData] = useState({});

  useEffect(() => {
    fetch("/json/publicProfile.json")
      .then((res) => res.json())
      .then((data) => {
        setResumeData(data);
      });
  }, []);

  return (
    <Router>
      <Switch>
        <Route path="/">
          <PublicProfile data={resumeData.main} />
        </Route>
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignUpPage />
        </Route>
        <Route path="/rest_pass">
          <PassRestPage />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
