import logo from "./logo.svg";
import "./App.css";
import { useEffect, useRef, useState } from "react";
import Tree from "./component/Tree";
import Members from "./component/Members";
import Overview from "./component/Overview";
function App() {
  const [familyData, setFamilyData] = useState([]);
  const [currentNav, setCurrentNav] = useState("overview"); // current active navigation item
  const fetchJson = () => {
    return new Promise(async (resolve, reject) => {
      try {
        const api = await fetch("data.json", {
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
          },
        });
        const apiData = api.json();
        resolve(apiData);
      } catch (error) {
        reject(error);
      }
    });
  };
  useEffect(() => {
    fetchJson().then((res) => {
      setFamilyData(res);
    });
  }, []);
  const handleNavClick = (e) => {
    setCurrentNav(e.target.id);
  };
  useEffect(() => {
    document.getElementById(currentNav).classList.add("active");
    return () => {
      if (document.querySelector(`#${currentNav}.active`))
        document
          .querySelector(`#${currentNav}.active`)
          .classList.remove("active");
    };
  }, [currentNav]);
  return (
    <div className="App">
      <h1 className="heading-tree">Pawar Family Tree</h1>
      <ul className="navList">
        <li id="overview" onClick={handleNavClick}>
          Overview
        </li>
        <li id="tree" onClick={handleNavClick}>
          Tree
        </li>
        <li id="members" onClick={handleNavClick}>
          Members
        </li>
      </ul>
      {currentNav == "tree" && <Tree familyData={familyData} />}
      {currentNav == "members" && <Members familyData={familyData} />}
      {currentNav == "overview" && <Overview />}
    </div>
  );
}

export default App;
