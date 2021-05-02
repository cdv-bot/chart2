
import React, { useEffect, useState } from "react";

export default function Day() {
  var today = new Date();
  var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
  const [day, setDay] = useState(date);

  function _update() {
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    setDay(date);
  }

  useEffect(() => {
    let _interval = setInterval(_update, 1000);
    return () => clearInterval(_interval);
  }, []);

  return (
    <>
      {day}
    </>
  );

}

