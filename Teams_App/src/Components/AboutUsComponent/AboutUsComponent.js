import { Outlet } from "react-router-dom";
import "./AboutUsComponent.css";
import React from "react";

class AboutUsComponent extends React.Component {

    render(){
        return (
            <div>
                This is About Us Component
                <Outlet/>
            </div>
        )
    }

}

export default AboutUsComponent;
