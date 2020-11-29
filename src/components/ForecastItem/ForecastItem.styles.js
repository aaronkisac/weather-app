import styled from "styled-components";

export const StyledForecastItemWrapper = styled.div`
  width: 100%;
  background-color: #5e5f63;
  margin: 10px 0;
  border-radius: 5px;
  height: 100px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px 10px 36px;
  min-width: 290px;

  @media (max-width: 450px) {
    padding: 5px 10px 5px 18px;
  }

  animation-name: bounceWeatherBar;
  animation-duration: 1s;
  animation-timing-function: ease-out;
  animation-delay: ${(p) => p.index / 5}s;

  @keyframes bounceWeatherBar {
    0% {
      transform: translateX(-20px);
    }
    100% {
      transform: translateX(0px);
    }
  }
`;
export const StyledForecastItemLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledDay = styled.div`
  margin-right: 60px;
  width: 80px;
  font-size: 2rem;
  @media (max-width: 450px) {
    margin-right: 30px;
  }
`;
export const StyledTemp = styled.div`
  font-size: 2.2rem;
`;
