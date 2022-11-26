import "./CardComponent.css";

const CardComponent = (props) => {
  const {
    photo,
    name,
    place,
    company,
    designation,
    linkedinProfile,
    discordId,
  } = props.data;
  return (
    <div className="card">
      <img
        src={photo}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = require("../../../assets/icons/person.svg");
        }}
        alt="No picture available"
      />
      <div className="name">{name != "" ? name : "-"}</div>
      <hr />
      <div className="address card-item-details">
        <img src={require("../../../assets/icons/location.svg")} />
        <span>{place != "" ? place : "-"}</span>
      </div>
      <div className="company card-item-details">
        <img src={require("../../../assets/icons/job.svg")} />
        <span>{company != "" ? company + "," : ""}</span>
        <span className="sub-text">{designation != "" ? designation : ""}</span>
      </div>
      <hr />
      <div className="linkedin card-item-details">
        <img src={require("../../../assets/icons/linkedin.svg")} />
        <a href={linkedinProfile} target="_blank">
          {linkedinProfile != "" ? name : "-"}
        </a>
      </div>
      <div className="discord-id card-item-details">
        <img src={require("../../../assets/icons/discord.svg")} />
        <span>{discordId != "" ? discordId : "-"}</span>
      </div>
    </div>
  );
};

export default CardComponent;
