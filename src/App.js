import React, { useState, useEffect } from "react";
import "./App.scss";
import Layout from "./components/layout";
import Intro from "./components/intro";
import Showcase from "./components/showcase.js";
import Loader from "./components/Loader";

function App() {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(function() {
      setLoading(false);
    }, 2000);
  });
  return (
    <Layout>
      <Loader loading={loading}></Loader>
      <Intro loading={loading} />
      <Showcase loading={loading} />
    </Layout>
  );
}

export default App;
