import { EachHours } from "./style";

export const EachHour = ({ i, index }: any): any => {
  const day = new Date().getDay();
  let isDay = false;
  if (index === day) {
    isDay = true;
  }

  return (
    <EachHours isDay={isDay}>
      <h6>{i.day}</h6>
      <h6>{i.hour}</h6>
    </EachHours>
  );
};
