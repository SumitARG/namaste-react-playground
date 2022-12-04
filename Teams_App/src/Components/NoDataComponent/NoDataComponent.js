import "./NoDataComponent.css";
import noDataImg from "../../../assets/icons/no-data.svg"

const NoDataComponent = () => {
    return (<div className="no-data-container">
        <img src={noDataImg} alt="No Teammates available"/>
    </div>)
}

export default NoDataComponent;