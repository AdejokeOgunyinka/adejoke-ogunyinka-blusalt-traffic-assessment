import { useEffect, useState } from "react";
import {
  Container,
  TrafficLightContainer,
  Light,
  Button,
  LightBorder,
} from "./components";
import { COLORS, TRAFFIC_LIGHT_STATE_MAP } from "./constant";
import { handleReset } from "./utils";
import "./App.css";

function App() {
  const [streetA, setStreetA] = useState("green");
  const [streetB, setStreetB] = useState("red");
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((prevTime) => (prevTime + 5) % 30); // Loop every 30s
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (time >= 30) {
      setTime(0); // Reset to first half cycle
    } else if (TRAFFIC_LIGHT_STATE_MAP[time]) {
      setStreetA(TRAFFIC_LIGHT_STATE_MAP[time][0]);
      setStreetB(TRAFFIC_LIGHT_STATE_MAP[time][1]);
    }
  }, [time]);

  return (
    <div>
      <h1>Traffic Light System</h1>

      <Container>
        <TrafficLightContainer>
          <h2 className="traffic-text">Street A</h2>
          <LightBorder color={COLORS.red} active={streetA === "red"}>
            <Light color={COLORS.red} active={streetA === "red"} />
          </LightBorder>

          <LightBorder color={COLORS.yellow} active={streetA === "yellow"}>
            <Light color={COLORS.yellow} active={streetA === "yellow"} />
          </LightBorder>

          <LightBorder color={COLORS.green} active={streetA === "green"}>
            <Light color={COLORS.green} active={streetA === "green"} />
          </LightBorder>
        </TrafficLightContainer>

        <TrafficLightContainer>
          <h2 className="traffic-text">Street B</h2>
          <LightBorder color={COLORS.red} active={streetB === "red"}>
            <Light color={COLORS.red} active={streetB === "red"} />
          </LightBorder>

          <LightBorder color={COLORS.yellow} active={streetB === "yellow"}>
            <Light color={COLORS.yellow} active={streetB === "yellow"} />
          </LightBorder>

          <LightBorder color={COLORS.green} active={streetB === "green"}>
            <Light color={COLORS.green} active={streetB === "green"} />
          </LightBorder>
        </TrafficLightContainer>
      </Container>

      <Button onClick={() => handleReset({ setStreetA, setStreetB, setTime })}>
        Reset
      </Button>
    </div>
  );
}

export default App;
