import React from "react";
import { Wrapper } from "./style";

export const Logo = () => {
  return (
    <Wrapper>
      <img
        src={process.env.PUBLIC_URL + "/chain.svg"}
        alt="logo"
        height="30px"
      />
      <h1>Dependency Chain</h1>
    </Wrapper>
  );
};
