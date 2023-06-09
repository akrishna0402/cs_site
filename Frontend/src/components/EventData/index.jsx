import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import EventInfo from "../EventInfo";

const EventData = () => {
  const [loader, setLoader] = useState(false);
  const [data, setData] = useState();

  const { pathname } = useLocation();
  const location = pathname.split("/")[2];


  useEffect(() => {
    const loadData = async () => {
      let d = await fetch("https://omprakash1.pythonanywhere.com/api/events/").then((res) =>
        res.json()
      );
      if (location === "upcoming") {
        d = d.filter(k => k.EventType === "upcoming");
      } else {
        d = d.filter(k => k.EventType === "past");
      }
      setData(d);
      setLoader(true);
    };
    loadData();
  } , [location]);

  return (
    loader ? <div>
    {data.map((e, i) => {
      return <EventInfo
        key={i}
        date={e.Date}
        eventName={e.EventName}
        eventLink={e.EventLink}
      />;
    })}
  </div>
  :
  null
  );
};

export default EventData;
