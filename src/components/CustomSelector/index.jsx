export const CustomSelector = (options) => {
  return (
    <select className="custom-selector" name="" id="">
      <option selected value="Kanban">
        Kanban
      </option>
      {options.map((option) => {
        return <options value={option}>{option}</options>;
      })}
    </select>
  );
};
