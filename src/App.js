import CityTemperature from "./pages/CityTemperature";
import { StyledAppWrapper } from "./App.styles";

function App() {
  return (
    <StyledAppWrapper data-testid="appWrapper">
      <CityTemperature />
    </StyledAppWrapper>
  );
}

export default App;
