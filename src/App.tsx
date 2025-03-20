import { useEffect, useState } from "react";
import { handleReset } from "./utils";
import { Container, TrafficLightContainer, Light, Button } from "./components";
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
    if (time === 0 || time === 20) {
      setStreetA("green");
      setStreetB("red");
    } else if (time === 10 || time === 30) {
      setStreetA("yellow");
      setStreetB("yellow");
    } else if (time === 15 || time === 35) {
      setStreetA("red");
      setStreetB("green");
    }
  }, [time]);

  return (
    <Container>
      <h1>Traffic Light System</h1>
      <TrafficLightContainer>
        <h2>Street A</h2>
        <Light color="red" active={streetA === "red"} />
        <Light color="yellow" active={streetA === "yellow"} />
        <Light color="green" active={streetA === "green"} />
      </TrafficLightContainer>
      <TrafficLightContainer>
        <h2>Street B</h2>
        <Light color="red" active={streetB === "red"} />
        <Light color="yellow" active={streetB === "yellow"} />
        <Light color="green" active={streetB === "green"} />
      </TrafficLightContainer>
      <Button onClick={() => handleReset({ setStreetA, setStreetB, setTime })}>
        Reset
      </Button>
    </Container>
  );
}

export default App;
