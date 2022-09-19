import { useState } from "react";
import { NewTableButton } from "../../components/NewTableButton";
import { NewTableForm } from "../../components/NewTableForm";

export const NewTableContainer = () => {
  const [newTableFormIsOpen, setNewTableFormIsOpen] = useState(false);
  return (
    <div className="new-table-container">
      <NewTableButton
        openModal={newTableFormIsOpen}
        setOpenModal={setNewTableFormIsOpen}
      />
      {newTableFormIsOpen && <NewTableForm />}
    </div>
  );
};
