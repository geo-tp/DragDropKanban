import { DropableArea } from "../../components/DropableArea";
import { useDispatch, useSelector } from "react-redux";
import { getTables } from "../../store/selectors/tables";

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
        />
      ))}
    </div>
  );
};
