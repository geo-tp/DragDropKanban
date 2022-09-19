import { DropableArea } from "../../components/DropableArea";
import { useDispatch, useSelector } from "react-redux";
import { getTables } from "../../store/selectors/tables";
import { NewTableButton } from "../../components/NewTableButton";
import { NewTableContainer } from "../NewTableContainer";

export const DropableAreaContainer = ({ openCreateModal, openDetailModal }) => {
  const dispatch = useDispatch();
  const tables = useSelector(getTables);
  console.log(tables[0].id);
  return (
    <div className="dropable-area-container">
      {tables.map((table) => (
        <DropableArea
          key={`dropablearea-${table.id}`}
          openCreateModal={openCreateModal}
          openDetailModal={openDetailModal}
          id={table.id}
          title={table.title}
          cards={table.cards}
          color={table.color}
          description={table.description}
        />
      ))}
      <NewTableContainer />
    </div>
  );
};
