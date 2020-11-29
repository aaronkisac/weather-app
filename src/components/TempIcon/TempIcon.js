import React from "react";
import {
  StyledIcon,
  StyledIconWrapper,
  StyledIconDesc,
} from "./TempIcon.styles";
const path = process.env.REACT_APP_PATH_ICON;

const TempIcon = ({ icon, description }) => {
  return (
    <StyledIconWrapper>
      <StyledIcon>
        <img src={`${path}${icon}.png`} className="rounded" alt={description} />
      </StyledIcon>
      <StyledIconDesc>{description.toUpperCase()}</StyledIconDesc>
    </StyledIconWrapper>
  );
};
export default TempIcon;
