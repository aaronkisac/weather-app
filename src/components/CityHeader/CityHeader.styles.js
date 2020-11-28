import styled from "styled-components";

export const StyledCityHeaderWrapper = styled.div`
  border-radius: 5px;
  padding: 0.3125rem;
  background-color: #33353d;
  min-width: 310px;
`;
export const StyledProgressBarWrapper = styled.div`
  margin: 0.3125rem 0;
  background-color: #33353d;
  border-style: inset;
  border-width: 1px;
  height: 1.3rem;
  padding: 2px;
  border-color: #282a32;
  border-radius: 10px;

  .progress-bar {
    border-radius: 10px;
    background-color: #ea9e3a;
  }
`;

export const StyledLabelProgressBar = styled.div`
  margin: 0.25rem 0.625rem 0;
  font-size: 0.75rem;
`;

export const StyledHeaderTextWrapper = styled.div`
  padding: 0 10px;
  margin-top: 0.625rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 310px;
`;

export const StyledCityName = styled.div`
  font-size: 2rem;
  letter-spacing: -0.26px;
  font-stretch: ultra-expanded;
`;

export const StyledTime = styled.div`
  border-width: 1px;
  padding: 6px 3px;
  border-style: inset;
  border-color: #282a32;
  border-radius: 5px;
  letter-spacing: -0.26px;
  font-stretch: ultra-expanded;
`;

export const StyledTemp = styled.div`
  font-size: 2rem;
  letter-spacing: -0.26px;
  font-stretch: ultra-expanded;
`;
