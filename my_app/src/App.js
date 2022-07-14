import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Profile from "./pages/PrefecturePopulationPage/Profile";
import Login from "./pages/LoginPage/Login";
import RequireApiClient from "./RequireApiClient";

const LOCAL_STORAGE_KEY0 = "apiKey";

function App() {
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    const storedApiKey = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY0));
    if (storedApiKey) {
      setApiKey(storedApiKey);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem(LOCAL_STORAGE_KEY0, JSON.stringify(apiKey));
  }, [apiKey]);

  function onChangeApiKey(newApiKey) {
    setApiKey(newApiKey);
  }
  return (
    <Router basename="/yumemi-frontend">
      <Routes>
        <Route
          exact
          path="/"
          element={
            <RequireApiClient apiKey={apiKey}>
              <Profile apiKey={apiKey} />
            </RequireApiClient>
          }
        ></Route>
        <Route
          exact
          path="/login"
          element={<Login changeApiKey={onChangeApiKey} />}
        ></Route>
      </Routes>
    </Router>
  );
}

export default App;
