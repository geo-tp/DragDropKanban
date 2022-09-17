import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

export const DetailCardModal = ({ tableTitle, card, closeDetailModal }) => {
  const dispatch = useDispatch();
  const [header, setHeader] = useState(card.header);
  const [body, setBody] = useState(card.body);

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     console.log(tableId);
  //     dispatch(addCard(tableId, header, body, `Le ${Date.now()} de ${author}`));
  //     closeModal(true);
  //   };

  return (
    <div className="card-modal">
      <div className="card-modal__details">
        <button
          onClick={() => closeDetailModal(true)}
          className="card-modal__close"
        >
          X
        </button>
        <h2>{tableTitle}</h2>
        <p>{card.title}</p>
        <p>{card.body}</p>
        <p>{card.footer}</p>
      </div>
    </div>
  );
};
