export const NewTableForm = () => {
  return (
    <div className="new-table-form">
      <label htmlFor="tableTitle">Titre</label>
      <input type="text" name="tableTitle" />
      <label htmlFor="smallDescription">Description</label>
      <input type="text" name="smallDescription" id="" />
      <label htmlFor="colorSelector">Couleur</label>
      <select name="colorSelector" id="colorSelector">
        <option value="blue">Blue</option>
        <option value="orange">Orange</option>
        <option value="red">Red</option>
      </select>
      <button type="submit">Create</button>
    </div>
  );
};
