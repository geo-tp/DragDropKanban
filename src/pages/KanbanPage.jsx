import { useState } from "react";
import { NewCardModal } from "../components/NewCardModal";
import { DropableAreaContainer } from "../containers/DropableAreaContainer";
import { useDispatch, useSelector } from "react-redux";
import { getKanban } from "../store/selectors/kanban";
import { DetailCardModal } from "../components/DetailCardModal";
import { MenuContainer } from "../containers/MenuContainer";

export const KanbanPage = () => {
  const [createCardModalIsOpen, setCreateCardModalIsOpen] = useState(false);
  const [detailCardModalIsOpen, setDetailCardModalIsOpen] = useState(false);

  const [tableId, setTableId] = useState(null);
  const [tableTitle, setTableTitle] = useState(null);
  const [detailCard, setDetailCard] = useState(null);

  const dispatch = useDispatch();
  const kanban = useSelector(getKanban);

  const openCreateModal = (tableId) => {
    setCreateCardModalIsOpen(true);
    setTableId(tableId);
  };

  const closeCreateModal = () => {
    setCreateCardModalIsOpen(false);
    setTableId(null);
  };

  const openDetailModal = (tableHeader, card) => {
    setTableTitle(tableHeader);
    setDetailCard(card);
    setDetailCardModalIsOpen(true);
  };

  const closeDetailModal = (tableHeader, card) => {
    setTableTitle(null);
    setDetailCard(null);
    setDetailCardModalIsOpen(false);
  };

  return (
    <div className="kanban-page">
      <MenuContainer />
      <DropableAreaContainer
        openCreateModal={openCreateModal}
        openDetailModal={openDetailModal}
      />
      {createCardModalIsOpen && (
        <NewCardModal closeCreateModal={closeCreateModal} tableId={tableId} />
      )}
      {detailCardModalIsOpen && (
        <DetailCardModal
          closeDetailModal={closeDetailModal}
          tableTitle={tableTitle}
          card={detailCard}
        />
      )}
    </div>
  );
};
