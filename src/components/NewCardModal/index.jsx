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
    console.log(tableId);
    dispatch(addCard(tableId, header, body, `Le ${Date.now()} de ${author}`));
    closeCreateModal(true);
  };

  return (
    <div className="card-modal">
      <form className="card-modal__form" onSubmit={handleSubmit}>
        <button
          onClick={() => closeCreateModal(true)}
          className="card-modal__close"
        >
          X
        </button>
        <p>Créer une nouvelle carte</p>
        <label htmlFor="card-title">Titre</label>
        <input
          required
          onChange={(event) => setHeader(event.target.value)}
          type="text"
          name="card-title"
          id="card-title"
        />
        <label htmlFor="card-content">Contenu</label>
        <textarea
          required
          onChange={(event) => setBody(event.target.value)}
          name="card-content"
          id="card-content"
          cols="30"
          rows="10"
        ></textarea>
        <button type="submit">Créer</button>
      </form>
    </div>
  );
};
