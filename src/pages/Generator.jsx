import { useEffect, useState } from "react";
import style from "./Example/Example.css";

const Generator = (props) => {
  const value = Math.random() > Math.random();

  const [num, setNum] = useState(75);
  const [errorColor, setErrorColor] = useState("ok");
  function randomNumberInRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  useEffect(() => {
    console.log(props);
    const interval = setInterval(() => {
      if (props.isError) {
        setNum(randomNumberInRange(90, 100));
        setErrorColor("error");
      } else {
        setNum(randomNumberInRange(75, 85));
        setErrorColor("ok");
      }
    }, 2500);

    return () => {
      clearInterval(interval);
    };
  }, [props.isError]);

  return (
    <div>
      <div className="wrapper">
        <div className="card"></div>
      </div>

      <h2 className={`errorTitle ${errorColor}`}>{num}</h2>
    </div>
  );
};

export default Generator;
