import { useEffect, useState } from "react";
import { getUsersData } from "../../Helpers/apiservice";
import CardComponent from "../CardComponent/CardComponent";
import NoDataComponent from "../NoDataComponent/NoDataComponent";
import SearchBarComponent from "../SearchBarComponent/SearchBarComponent";
import "./BodyComponent.css";

const BodyComponent = () => {

  const [cardsList, setCardsList] = useState([]);
  const [userDetails, setUserDetails] = useState([]);
  // setCardsList(CARDS_LIST[0])

  const getUsersDetails = async () => {
      const userNames = ["SumitARG", "ketanmalik", "aravindFrontEnd"];
      let users = await (await getUsersData(userNames));
      setUserDetails(users);
      setCardsList(users);
  }

  useEffect(() => {getUsersDetails()},[])

  return (
    <>
    <SearchBarComponent  setCardsList={setCardsList} cardsList = {userDetails}/>
    <div className="cards-container">
      {cardsList.length > 0 ? cardsList.map((card, i) => (
        <CardComponent data={card} key={i} />
      )) : <NoDataComponent/>}
    </div>
    </>
  );
};

export default BodyComponent;
