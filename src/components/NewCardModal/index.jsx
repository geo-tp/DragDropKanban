import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCard } from "../../store/actions/cards";

export const NewCardModal = ({ tableId, closeCreateModal }) => {
  const dispatch = useDispatch();
  const [header, setHeader] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Alexandre Durand");

  const handleSubmit = (event) => {
    event.preventDefault();
    dispatch(
      addCard(
        tableId,
        header,
        body,
        `Le ${new Date(Date.now()).toLocaleDateString()} de ${author}`
      )
    );
    closeCreateModal(true);
  };

  return (
    <div className="card-modal">
      <form className="card-modal__form" onSubmit={handleSubmit}>
        <button
          onClick={() => closeCreateModal(true)}
          className="custom-button custom-button--icon-only card-modal__form__close"
        >
          X
        </button>
        <label htmlFor="card-title">Titre</label>
        <input
          className="custom-input"
          required
          onChange={(event) => setHeader(event.target.value)}
          type="text"
          name="card-title"
          id="card-title"
        />
        <label htmlFor="card-content">Contenu</label>
        <textarea
          className="custom-textarea"
          required
          onChange={(event) => setBody(event.target.value)}
          name="card-content"
          id="card-content"
          cols="30"
          rows="10"
        ></textarea>
        <button
          className="custom-button card-modal__form__button"
          type="submit"
        >
          <i className="fas fa-ticket"></i>
          Créer
        </button>
      </form>
    </div>
  );
};
