export const NewTableForm = () => {
  return (
    <div className="new-table-form">
      <label htmlFor="tableTitle">Titre</label>
      <input class="custom-input" type="text" name="tableTitle" />
      <label htmlFor="smallDescription">Description</label>
      <input class="custom-input" type="text" name="smallDescription" id="" />
      <label htmlFor="colorSelector">Couleur</label>
      <select name="colorSelector" class="custom-selector" id="colorSelector">
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
        <option value="red">Red</option>
      </select>
      <button className="new-table-button" type="submit">
        <i className="fas fa-table"></i>
        Create
      </button>
    </div>
  );
};
