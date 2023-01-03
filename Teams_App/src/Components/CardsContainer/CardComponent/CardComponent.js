import { useContext } from "react";
import ThemeContext from "../../../Context/ThemeContext";
import "./CardComponent.css";
import locationImg from "../../../../assets/icons/location.svg";
import defaultPersonImg from "../../../../assets/icons/person.svg";
import companyImg from "../../../../assets/icons/job.svg";
import companyImg from "../../../../assets/icons/job.svg";
import githubImg from "../../../../assets/icons/github.svg";

const CardComponent = (props) => {
  const {
    avatar_url,
    name,
    location,
    company,
    login,
  } = props.data;

  const {theme} = useContext(ThemeContext);

  return (
    <div className={theme === "dark"?"card card-dark":"card"}>
      <img
        src={avatar_url}
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src = defaultPersonImg;
        }}
        alt="No picture available"
      />
      <div className="name">{name != "" ? name : "-"}</div>
      <hr />
      <div className="address card-item-details">
        <img src={locationImg} />
        <span>{location != "" ? location : "-"}</span>
      </div>
      <div className="company card-item-details">
        <img src={companyImg} />
        <span>{company != "" ? company : ""}</span>
        {/* <span className="sub-text">{designation != "" ? designation : ""}</span> */}
      </div>
      <hr />
      <div className="git card-item-details">
        <img src={githubImg} />
        {/* <a href={`https://github.com/${login}`} target="_blank">
          {login != "" ? login : "-"}
        </a> */}
      </div>
    </div>
  );
};

export default CardComponent;
