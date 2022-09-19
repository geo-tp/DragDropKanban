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
          className="custom-button custom-button--icon-only card-modal__details__close"
          onClick={() => closeDetailModal(true)}
        >
          <i className="fas fa-close"></i>
        </button>
        <p className="card-modal__details__table-title">{tableTitle}</p>
        <h2>{card.header}</h2>
        <p>{card.body}</p>
        <p className="card-modal__details__footer">{card.footer}</p>
      </div>
    </div>
  );
};
