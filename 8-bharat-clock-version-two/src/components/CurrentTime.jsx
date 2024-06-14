import { useEffect, useState } from "react";

let CurrentTime = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    console.log("Interal has been setup");
    const intervalId = setInterval(() => {
      setTime(new Date());
    }, 1000);
    return () => {
      clearInterval(intervalId);
    };
  });

  return (
    <p className="lead">
      This is the current Time.{time.toLocaleDateString()}-
      {time.toLocaleTimeString()}
    </p>
  );
};
export default CurrentTime;
