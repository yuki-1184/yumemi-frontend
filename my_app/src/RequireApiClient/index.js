import React from "react";
import { Navigate } from "react-router-dom";

// LOCAL_STORAGE_KEY0 = "UserApiKey";

export default function RequireApiClient(props) {
  //   useEffect(() => {
  //     localStorage.setItem(LOCAL_STORAGE_KEY0, JSON.stringify(apiKey));
  //   }, []);
  console.log(props.apiKey);
  if (!props.apiKey) {
    return <Navigate to="/" />;
  }
  return props.children;
}
