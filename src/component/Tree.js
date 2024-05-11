import { useEffect, useRef, useState } from "react";
import PopupBox from "./PopupBox";

const Tree = ({ familyData }) => {
  const [memberClick, setMemberClick] = useState(false);
  const [selectMember, setSelectMember] = useState([]);
  const [deviceStatus, setDeviceStatus] = useState(() => {
    if (window.innerWidth < window.innerHeight) {
      return "portrait";
    } else {
      return "landscape";
    }
  });
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < window.innerHeight) {
        setDeviceStatus("portrait");
      } else {
        setDeviceStatus("landscape");
      }
    });
  });
  const handleMemberClick = (data) => {
    setSelectMember(data);
    setMemberClick(true);
  };
  // console.log(deviceStatus);
  return (
    <>
      <div className="tree-div">
        {deviceStatus == "landscape" &&
          familyData &&
          familyData.map((item, index) => {
            return (
              <div className="family-show" key={index}>
                <div className={`position${item.position}`}>
                  {item.family.map((val, index) => {
                    return (
                      <div
                        key={index}
                        className={`subPosition${val.subPosition}`}
                      >
                        {val.famDetails.map((value, index) => {
                          return (
                            <div
                              key={index}
                              id={`familyId${value.familyId}`}
                              className={`family-Card ${value.status}`}
                              onClick={() => handleMemberClick(value)}
                            >
                              <img
                                className="family-photo"
                                src={
                                  process.env.PUBLIC_URL +
                                  `/images/${value.photo}`
                                }
                              />
                              <span className="name">{value.name}</span>
                              <span className="years">
                                {value.deathYear != ""
                                  ? `${value.birthYear} - ${value.deathYear}`
                                  : `${value.birthDay}-${value.birthMonth}-${value.birthYear}`}
                              </span>
                            </div>
                          );
                        })}
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        {deviceStatus == "portrait" && (
          <div className="alert-div">
            <span>
              Please Rotate Your Device Or Use Landscape Resolution For Better
              Look of Tree
            </span>

            <img
              className="alert-gif"
              src={process.env.PUBLIC_URL + `/images/alert.gif`}
            />
          </div>
        )}
        {/* {memberClick && <PopupBox selectMember={selectMember} />} */}
      </div>
    </>
  );
};
export default Tree;
