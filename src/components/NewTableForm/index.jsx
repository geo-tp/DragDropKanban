import { useState } from "react";
import { useDispatch } from "react-redux";
import { AddTable } from "../../store/actions/tables";

export const NewTableForm = () => {
  const dispatch = useDispatch();
  const colors = [
    { name: "Turquoise", code: "#3fa3b3" },
    { name: "Violet", code: "#7F84B4" },
    { name: "Rose", code: "#B556A6" },
    { name: "Bleu", code: "#3C5A95" },
    { name: "Rose", code: "#B556A6" },
    { name: "Orange", code: "#C85748" },
    { name: "Vert", code: "#4FA24D" },
  ];
  const [color, setColor] = useState(colors[0].code);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const createNewTable = (e) => {
    e.preventDefault();
    if (title && color) {
      dispatch(AddTable(title, description, color));
    }
  };
  return (
    <form onSubmit={createNewTable} className="new-table-form">
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
        {colors.map((color) => (
          <option value={color.code}>{color.name}</option>
        ))}
      </select>
      <button className="new-table-button" type="submit">
        <i className="fas fa-table"></i>
        Créer
      </button>
    </form>
  );
};
