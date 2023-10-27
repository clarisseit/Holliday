import React, { useContext } from "react";
import { AppContext } from "../App";

const SignUp = () => {
  const { signUser, blogs } = useContext(AppContext);
  return (
    <div>
      <h1>{signUser.name}</h1>
    </div>
  );
};

export default SignUp;
