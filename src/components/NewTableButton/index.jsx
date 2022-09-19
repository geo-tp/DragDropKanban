export const NewTableButton = ({ openModal, setOpenModal }) => {
  return (
    <button
      onClick={() => setOpenModal(!openModal)}
      className="new-table-button"
    >
      <i className="fa fa-plus"></i>
      New Table
    </button>
  );
};
