import { useEffect, useState, useContext } from "react";
import { getUsersData } from "../../Helpers/apiservice";
import ThemeContext from "../../Context/ThemeContext";
import CardComponent from "./CardComponent/CardComponent";
import NoDataComponent from "../NoDataComponent/NoDataComponent";
import SearchBarComponent from "../SearchBarComponent/SearchBarComponent";
import "./CardsContainer.css";
import { Link } from "react-router-dom";

const CardsContainer = () => {
  const [cardsList, setCardsList] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  const {theme} = useContext(ThemeContext);

  const getUsersDetails = async () => {
    const userNames = ["SumitARG", "ketanmalik", "aravindFrontEnd"];
    let users = await getUsersData(userNames);
    setUserDetails(users);
    setCardsList(users);
  };

  useEffect(() => {
    getUsersDetails();
  }, []);

  return (
    <div className={theme==="dark"?"dark-container":""}>
      <SearchBarComponent setCardsList={setCardsList} cardsList={userDetails} />
      <div className="cards-container">
        {cardsList.length > 0 ? (
          cardsList.map((card, i) => (
            <Link to={`/team-member-details/` + card.login} key={card.login}  className="link-plain">
              <CardComponent data={card}/>
            </Link>
          ))
        ) : (
          <NoDataComponent />
        )}
      </div>
    </div>
  );
};

export default CardsContainer;
