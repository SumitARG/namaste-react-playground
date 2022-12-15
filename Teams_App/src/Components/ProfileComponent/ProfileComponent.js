import React from "react";

class ProfileComponent extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            userInfo:{}
        }
        console.log("Profile- constructor");
    }

    async componentDidMount(){
        console.log("Profile- componentDidMount");

        const data = await fetch("https://api.github.com/users/SumitARG");
        const json = await data.json();
        this.setState({
            userInfo:json
        });
        console.log(json);
    }

    componentDidUpdate(){
        console.log("Profile- componentDidUpdate");
    }

    render() {
        console.log("Profile- render");
        return (
            <div>
                <h3>Name: {this.props.name}</h3>
                <h3>Username: {this.state.userInfo.login}</h3>
                <h3>Company: {this.state.userInfo.company}</h3>
            </div>
        )
    }
}

export default ProfileComponent;