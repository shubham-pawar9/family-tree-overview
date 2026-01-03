const Lifestory = ({ selectMember }) => {
  return (
    <>
      <div className="lifeStory">
        <div
          className="storyLine"
          style={{
            height: `${
              selectMember.storyLine[0].name === "Death"
                ? (selectMember.storyLine.length - 1) * 205
                : (selectMember.storyLine.length - 1) * 245
            }px`,
          }}
        >
          {selectMember &&
            selectMember.storyLine.map((item) => {
              return (
                <div
                  className={`event-details ${item.id} ${
                    item.name == "null" ? "hidden" : "show"
                  }`}
                >
                  {item.name}
                </div>
              );
            })}
        </div>
        <div className="storyLine-details">
          {selectMember &&
            selectMember.storyLine.map((items) => {
              return (
                <div
                  className={`storyLine-main-details ${items.id} ${
                    items.name == "null" ? "hidden" : "show"
                  }`}
                >
                  {items.description.map((item) => {
                    return (
                      <div className="description-div">
                        {items.name != "Death" && (
                          <img
                            src={process.env.PUBLIC_URL + `/images/${item.img}`}
                          />
                        )}
                        <span className="desc-text">{item.text}</span>
                      </div>
                    );
                  })}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
export default Lifestory;
