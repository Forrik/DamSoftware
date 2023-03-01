import React, { useEffect } from "react";

const ErrorModal = (props) => {
  return (
    <div>
      <div className="modal__content__error" onClick={(e) => e.stopPropagation()}>
        <div className="text__error">Шлюз для сброса воды засорен. Вызвать бригаду для прочитски шлюза?</div>
        <div className="wrapper--btn">
          <button className="btn--error" onClick={() => props.repairErrorCallBack()}>
            Вызвать бригаду
          </button>
          <button className="btn--error" onClick={() => props.ignoreErrorCallBack()}>
            Игнорировать
          </button>
        </div>
      </div>
    </div>
  );
};
export default ErrorModal;
