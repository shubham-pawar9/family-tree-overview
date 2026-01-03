import { useEffect, useState } from "react";
import MemberStory from "./MemberStory";

const Members = ({ familyData }) => {
  const [selectMember, setSelectMember] = useState("");
  const [storyShow, setStoryShow] = useState(false);
  //   const [infoShow, setInfoShow] = useState(false);]
  const handleInfoShow = (id) => {
    // console.log(infoShow);
    if (document.querySelector(`#memberId_${id} .information.active`)) {
      document
        .querySelector(`#memberId_${id} .information`)
        .classList.remove("active");
      document.querySelector(
        `#memberId_${id} .see-more-arrow`
      ).style.transform = "rotateX(0deg)";
      //   setInfoShow(false);
    } else {
      document
        .querySelector(`#memberId_${id} .information`)
        .classList.add("active");
      document.querySelector(
        `#memberId_${id} .see-more-arrow`
      ).style.transform = "rotateX(180deg)";
      //   setInfoShow(true);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      var arrows = document.querySelectorAll(".see-more-arrow");
      arrows.forEach((item) => {
        item.style.opacity = 1;
      });
    }, 2000);
  }, []);
  const handleMemberSelect = (member) => {
    setSelectMember(member);
    setStoryShow(true);
  };
  return (
    <>
      {!storyShow && (
        <div className="membersDiv">
          {familyData.map((item) =>
            item.family.map((val, index) =>
              val.famDetails
                .sort((a, b) => a.memberPosition - b.memberPosition) // Sort based on memberPosition
                .map((value) => {
                  return (
                    <div
                      className="memberDiv"
                      key={value.familyId}
                      id={`memberId_${value.familyId}`}
                      onClick={() => handleMemberSelect(value)}
                    >
                      <div className="memberFirstDiv">
                        <div className="memberPhoto-div">
                          <img
                            className="memberPhoto"
                            src={
                              process.env.PUBLIC_URL + `/images/${value.photo}`
                            }
                            alt={value.name}
                          />
                        </div>
                        <div className="detailsDiv">
                          <div>
                            <span className="member-name">{value.name}</span>
                            {value.information.occupation.length > 0 && (
                              <span className="member-work">
                                {`  (${value.information.occupation})`}
                              </span>
                            )}
                          </div>
                          <span className="member-position">
                            {value.information.position}
                          </span>
                        </div>
                      </div>
                      {/* <div className="information">
                      <span>Name:{value.information.name}</span>
                      <span>Date of Birth:{value.information.DOB}</span>
                      <span>
                        Place of Birth:{value.information.PlaceOfBirth}
                      </span>
                      <span>Occupation:{value.information.occupation}</span>
                      <span>
                        Work Background:{value.information.workBackground}
                      </span>
                      <span>
                        Marrital status:{value.information.maritalStatus}
                      </span>
                      <span>
                        Wedding Details:{value.information.weddingDetails}
                      </span>
                      <span>
                        Spouse/Husband Name:{value.information.Spouse_Husband}
                      </span>
                      <span>
                        Childrens Name:
                        {value.information.Children.map(
                          (val) => ` ${val.name},`
                        )}
                      </span>
                    </div> */}
                    </div>
                  );
                })
            )
          )}
        </div>
      )}
      {storyShow && (
        <MemberStory selectMember={selectMember} setStoryShow={setStoryShow} />
      )}
    </>
  );
};
export default Members;
