export const handleReset = ({
  setStreetA,
  setStreetB,
  setTime,
}: {
  setStreetA: (val: string) => void;
  setStreetB: (val: string) => void;
  setTime: (val: number) => void;
}) => {
  setStreetA("green");
  setStreetB("red");
  setTime(0);
};
