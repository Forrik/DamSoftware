import React from "react";
import style from "./Example.module.css";

import Graphic from "../Graphic.jsx";

function Example() {
  const [numbers, setNumbers] = React.useState([1]);
  const [timerId, setTimerId] = React.useState(null);

  const add = () =>
    setNumbers((numbers) => [...numbers, (Math.random() * 10) | 0]);
  const start = () => setTimerId(setInterval(add, 1000));
  const stop = () => (clearInterval(timerId), setTimerId(null));

  return (
    <div>
      <div>
        <ul>{numbers}</ul>
        <div>
          <button onClick={add} disabled={timerId}>
            Добавить число
          </button>
          <button onClick={start} disabled={timerId}>
            Старт
          </button>
          <button onClick={stop} disabled={!timerId}>
            Стоп
          </button>
        </div>
      </div>
      <div className={style.wrapper}>
        <div className={style.card}>
          <div className={style.percent}>
            <svg>
              <circle cx="70" cy="70" r="70"></circle>
              <circle cx="70" cy="70" r="70"></circle>
            </svg>
            <div className={style.number}>
              <h2>
                90<span>%</span>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Example;

{
  /* <script>

let ctx = document.querySelector('#myChart').getContext('2d');
 let MyChart = new Chart(ctx, {
type:'line',
data: {
 labels: [1,2,3,4,5],
 datasets: [{
   label: 'Sutedents',
   data: [50, 40, 25, 30, 15],
   backgroundColor:['white'],
   borderColor: [
     '#80d8ff',
     "#82b1ff",
     "#b388ff",
     "80d8ff",
     "#ea80fc"
   ],
   borderWidth: 4
 }]
},
options:{}
})

</script> */
}
