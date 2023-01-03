import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import AddShoppingCartTwoToneIcon from "@mui/icons-material/AddShoppingCartTwoTone";
import { getUsersData } from "../../Helpers/apiservice";
import "./DetailsPage.css";
import { addItem } from "../../Helpers/cartSlice";

const DetailsPage = () => {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState();
  const dispatch = useDispatch();

  const getUsersDetails = async () => {
    const userNames = [id];
    let users = await getUsersData(userNames);
    setUserDetails(users[0]);
  };

  const addToCart = () => {
    dispatch(
      addItem({
        name: userDetails.name,
      })
    );
  };

  useEffect(() => {
    getUsersDetails();
  }, []);

  return (
    <div className="details-page">
      <div className="personal-details">
        <img src={userDetails?.avatar_url} />
        <div className="contact-details">
          <span className="name">
            {userDetails?.name ? userDetails.name : ""}
          </span>
          <span className="git-link">
            <a href={userDetails?.url} target="_blank">
              {userDetails?.login != "" ? userDetails?.login : "-"}
            </a>
          </span>
          <span>{userDetails?.location ? userDetails.location : ""}</span>
          <span>{userDetails?.bio ? userDetails.bio : ""}</span>
          <span>{userDetails?.company ? userDetails.company : ""}</span>
          <span>{userDetails?.email ? userDetails.email : ""}</span>
          <button onClick={addToCart}>
            <AddShoppingCartTwoToneIcon color="primary" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailsPage;
