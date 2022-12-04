import { useState } from "react";
import CardComponent from "../CardComponent/CardComponent";
import SearchBarComponent from "../SearchBarComponent/SearchBarComponent";
import CARDS_LIST from "../../Data/TeamData";
import "./BodyComponent.css";

const BodyComponent = () => {

  const [cardsList, setCardsList] = useState(CARDS_LIST);
  // setCardsList(CARDS_LIST[0])

  return (
    <>
    <SearchBarComponent  setCardsList={setCardsList}/>
    <div className="cards-container">
      {cardsList.map((card, i) => (
        <CardComponent data={card} key={i} />
      ))}
    </div>
    </>
  );
};

export default BodyComponent;
