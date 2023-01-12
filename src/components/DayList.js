import React from "react";
import DayListItem from "./DayListItem";



export default function DayList(props) {

  const daysArray = props.days;
  const dayListItemArray = daysArray.map((day) => {
    return <DayListItem
      key={day.id}
      name={day.name}
      spots={day.spots}
      selected={day.name === props.day}
      setDay={() => props.setDay(day.name)}
    />
  });


  return (
    <ul>
      {dayListItemArray}
    </ul>
  );
}