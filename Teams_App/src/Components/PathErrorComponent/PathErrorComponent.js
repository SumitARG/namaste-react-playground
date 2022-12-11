import { useRouteError } from "react-router-dom";
import PageNotFoundIcon from "../../../assets/icons/page-not-found.svg";
import "./PathErrorComponent.css";

const PathErrorComponent = () => {

    // useRouteError can be used to get the exact reason for the error
    // const errorData = useRouteError();

    return (
        <div className="path-error-component">
            <img src={PageNotFoundIcon}/>
        </div>
    )
}

export default PathErrorComponent;