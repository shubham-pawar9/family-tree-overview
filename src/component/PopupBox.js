import "./PopupBox.css";
const PopupBox = ({ selectMember }) => {
  console.log(selectMember);
  return (
    <>
      <div className="popupBox">
        <img
          className="close-icon"
          src={process.env.PUBLIC_URL + `/images/close.png`}
          alt=""
        />
        <div className="popup-details">
          <img
            className="member-photo"
            src={process.env.PUBLIC_URL + `/images/${selectMember.photo}`}
          />
          <span className="popup-name">
            {selectMember.name}
            <span className="popup-occupation">
              {` (${selectMember.information.occupation})`}
            </span>
          </span>
          <hr />
          <span className="popup-name">
            *{selectMember.information.position}*
          </span>
        </div>
      </div>
    </>
  );
};
export default PopupBox;
