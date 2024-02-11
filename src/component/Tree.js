import { useEffect, useRef, useState } from "react";

const Tree = ({ familyData }) => {
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
      </div>
    </>
  );
};
export default Tree;
