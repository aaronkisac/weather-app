import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledForecastItemWrapper = styled(motion.div)`
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
`;
export const StyledForecastItemLeft = styled.div`
  display: flex;
  align-items: center;
`;
export const StyledDay = styled.div`
  margin-right: 60px;
  width: 80px;
  font-size: 2rem;
`;
export const StyledTemp = styled.div`
  font-size: 2.2rem;
`;
