import React from "react";
import {
  Block1,
  Block2,
  Block3,
  BlocksContainer,
  LoadingContainer,
} from "./Loading.style";
import { H1 } from "../../App.style";

const Loading = () => {
  return (
    <LoadingContainer>
      <H1>Loading Pixelify</H1>
      <BlocksContainer>
        <Block1 />
        <Block2 />
        <Block3 />
      </BlocksContainer>
    </LoadingContainer>
  );
};

export default Loading;
