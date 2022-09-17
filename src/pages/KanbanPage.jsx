import { useState } from "react";
import { NewCardModal } from "../components/NewCardModal";
import { DropableAreaContainer } from "../containers/DropableAreaContainer";
import { useDispatch, useSelector } from "react-redux";
import { getKanban } from "../store/selectors/kanban";
import { DetailCardModal } from "../components/DetailCardModal";

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

  // const moveCard = (cardId, tableId) => {
  //   let founded = false;
  //   let card = {};
  //   for (let i = 0; i < tables.length; i++) {
  //     if (founded) {
  //       break;
  //     }

  //     for (let j = 0; j < tables[i].cards.length; i++) {
  //       if (tables[i].cards[j].id === cardId) {
  //         card = tables[i].cards[j];
  //         tables[i].cards.splice(j, 1);
  //         founded = true;
  //         break;
  //       }
  //     }
  //   }
  // };

  // const addCard = (id, title, content, author) => {
  //   let card = {
  //     header: title,
  //     body: content,
  //     footer: `Le ${Date.now()} de ${author}`,
  //   };

  //   console.log(card);
  //   tables[id].cards.push(card);
  //   setTableId({ ...tables });
  // };

  return (
    <div className="kanban-page">
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
