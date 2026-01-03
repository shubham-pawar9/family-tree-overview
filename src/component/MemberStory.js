import { useState } from "react";
import Lifestory from "./LifeStory";
import "./MemberStory.css";
import Info from "./Info";
import DirectFamily from "./DirectFamily";
const MemberStory = ({ selectMember, setStoryShow }) => {
  console.log(selectMember);
  const [selectedList, seSelectedList] = useState("lifestory");
  const handleStoryShow = (story) => {
    seSelectedList(story);
  };
  return (
    <>
      <div className="memberStory">
        <div className="story-header">
          <img
            className="memberIcon"
            src={process.env.PUBLIC_URL + `/images/${selectMember.photo}`}
            alt="profile"
          />
          <span className="memberName">{selectMember.name}</span>
          <img
            className="close-member"
            src={process.env.PUBLIC_URL + `/images/letter-x.gif`}
            onClick={() => setStoryShow(false)}
            alt="close-icon"
          />
        </div>
        <div className="story-navbar">
          <ol>
            <li
              className={selectedList === "lifestory" ? "active" : ""}
              onClick={() => handleStoryShow("lifestory")}
            >
              Lifestory
            </li>
            <li
              className={selectedList === "info" ? "active" : ""}
              onClick={() => handleStoryShow("info")}
            >
              Info
            </li>
            <li
              className={selectedList === "direct_family" ? "active" : ""}
              onClick={() => handleStoryShow("direct_family")}
            >
              Direct Family
            </li>
          </ol>
        </div>
      </div>
      {selectedList === "lifestory" && (
        <Lifestory selectMember={selectMember} selectedList={selectedList} />
      )}
      {selectedList === "info" && <Info />}
      {selectedList === "direct_family" && <DirectFamily />}
    </>
  );
};
export default MemberStory;
