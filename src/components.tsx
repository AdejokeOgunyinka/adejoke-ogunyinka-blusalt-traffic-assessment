import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 50px;
  margin-top: 50px;
`;

const TrafficLightContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  border: 2px solid #333;
  padding: 20px;
  border-radius: 10px;
`;

const Light = styled.div<{ active: boolean; color: string }>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  opacity: ${(props) => (props.active ? 1 : 0.3)};
`;

const LightBorder = styled.div<{ active: boolean; color: string }>`
  border: ${(props) => (props.active ? `2px solid ${props.color}` : "")};
  padding: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100%;
`;

const Button = styled.button`
  margin-top: 50px;
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  &:hover {
    background-color: #0056b3;
  }
`;

export { Container, TrafficLightContainer, Light, LightBorder, Button };
