import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import Router from "./Router";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return <Router />;
}

export default App;
