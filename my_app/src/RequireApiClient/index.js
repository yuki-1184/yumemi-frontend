import React from "react";
import { Navigate } from "react-router-dom";

const LOCAL_STORAGE_KEY0 = "apiKey";

export default function RequireApiClient(props) {
  let apiKey = props.apiKey;

  const storedApiKey = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY0));
  if (storedApiKey) {
    apiKey = storedApiKey;
  }

  if (!apiKey) {
    return <Navigate to="/login" />;
  }
  return props.children;
}
