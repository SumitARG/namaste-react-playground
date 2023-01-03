import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import TextField from "@mui/material/TextField";
import { getUsersData } from "../../Helpers/apiservice";
import "./LoginComponent.css";
import { onLogin } from "../../Helpers/loginSlice";

const LoginComponent = () => {
  const [userData, setUserData] = useState();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchUserData = async (username) => {
    const tempData = await getUsersData([username]);
    setUserData(tempData[0]);
    dispatch(
      onLogin({
        username: username,
        userImage: tempData[0].avatar_url,
      })
    );
    navigate("/team-member-details/" + username);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    fetchUserData(event.target.form.username.value);
  };

  return (
    <form className="login-form" onSubmit={onSubmitHandler}>
      <TextField id="username" label="Username" variant="standard" />
      <TextField id="password" label="Password" variant="standard" />
      <button onClick={onSubmitHandler}>Login</button>
    </form>
  );
};

export default LoginComponent;
