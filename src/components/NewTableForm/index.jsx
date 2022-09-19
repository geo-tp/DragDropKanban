import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTable } from "../../store/actions/tables";

export const NewTableForm = () => {
  const dispatch = useDispatch();
  const [color, setColor] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  console.log(title);
  const createNewTable = () => {
    console.log("HERE");
    if (title && description && color) {
      dispatch(AddTable(title, description, color));
    }
  };
  return (
    <div className="new-table-form">
      <label htmlFor="tableTitle">Titre</label>
      <input
        required
        onChange={(e) => setTitle(e.target.value)}
        class="custom-input"
        type="text"
        name="tableTitle"
      />
      <label htmlFor="smallDescription">Description</label>
      <input
        onChange={(e) => setDescription(e.target.value)}
        class="custom-input"
        type="text"
        name="smallDescription"
        id=""
      />
      <label htmlFor="colorSelector">Couleur</label>
      <select
        required
        onChange={(e) => setColor(e.target.value)}
        name="colorSelector"
        class="custom-selector"
        id="colorSelector"
      >
        <option selected value="blue">
          Blue
        </option>
        <option value="orange">Orange</option>
        <option value="red">Red</option>
      </select>
      <button
        onClick={createNewTable}
        className="new-table-button"
        type="submit"
      >
        <i className="fas fa-table"></i>
        Créer
      </button>
    </div>
  );
};
