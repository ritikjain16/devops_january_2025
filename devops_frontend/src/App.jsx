import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";

const App = () => {
  const [data, setData] = React.useState({});

  const checkBackend = async () => {
    try {
      const res = await axios.get("http://13.233.126.92:5000");
      console.log(res.data);
      setData(res.data)
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    checkBackend();
  }, []);

  return <div>App - {data?.msg}</div>;
};

export default App;
