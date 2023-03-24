import React from 'react'
import { useLocation } from "react-router-dom";
import EventInfo from '../EventInfo';

const EventData = () => {
  const { pathname } = useLocation();
  const location =  pathname.split("/")[2];
  let eventData;

  if(location === "upcoming"){
    eventData = (
      <>
        <EventInfo />
      </>
    )
  }

  return (
    <div>{eventData}</div>
  )
}

export default EventData