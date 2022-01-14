import React from "react";
import styled from "styled-components";
import { SRLWrapper } from "simple-react-lightbox";

const Img = styled.img`
  margin: 1em;
  border: 0.2em solid #332d2a;
  box-shadow: 3px 3px 8px 0px rgba(0, 0, 255, 0.3);
  max-width: 15vw;
`;

export const Wallimage = ({ url, key }) => {
  return (
    <SRLWrapper>
      <Img src={url} key={key} alt=""/>
    </SRLWrapper>
  );
};
