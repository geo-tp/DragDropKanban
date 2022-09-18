import { useState } from "react";
import { DragableCard } from "../DragableCard";
import { NewCardModal } from "../NewCardModal";
import { moveCard } from "../../store/actions/cards";
import { useDispatch, useSelector } from "react-redux";
import { getCards } from "../../store/selectors/cards";
import { validateCardId } from "../../utils/stringUtils";

export const DropableArea = ({
  id,
  title,
  openCreateModal,
  openDetailModal,
}) => {
  const dispatch = useDispatch();
  const cards = useSelector(getCards);

  const [isDraggedOver, setIsDraggedOver] = useState(false);

  const drop = (event) => {
    event.preventDefault();
    let elem = event.target;

    var cardId = event.dataTransfer.getData("text");
    console.log("VALIDATE", validateCardId(cardId));
    console.log(cardId);
    if (!validateCardId(cardId)) {
      return;
    }

    let tableId = elem.id;
    let draggedOverCard = null;
    let beforeCardId = null;
    let afterCardId = null;
    console.log("TABLE", elem.id);
    // If element is not dropable, it's a card or child of it
    if (!elem.getAttribute("dropable")) {
      // if element is not draggable, it's child of card
      while (elem && !elem.getAttribute("draggable")) {
        elem = elem.parentNode;
        console.log("HERE", elem);
      }
      draggedOverCard = elem;
      [beforeCardId, afterCardId] = _calculateBeforeAfterCard(
        draggedOverCard,
        event
      );

      // Element is now a card, we search for its dropable area
      do {
        elem = elem.parentNode;
        console.log(elem);
      } while (!elem.getAttribute("dropable"));

      tableId = elem.id;
    }

    dispatch(moveCard(cardId, tableId, beforeCardId, afterCardId));
    setIsDraggedOver(false);
  };

  const dragEnter = (event) => {
    setIsDraggedOver(true);
  };

  const dragLeave = (event) => {
    setIsDraggedOver(false);
  };

  const allowDrop = (event) => {
    event.preventDefault();
  };

  const _calculateBeforeAfterCard = (card, event) => {
    const { top, height } = card.getBoundingClientRect();
    let beforeCardId = null;
    let afterCardId = null;

    console.log("C CARD", card);
    // calculate cursor position
    let cursorY = event.pageY - top - window.pageYOffset;

    if (cursorY < height / 2) {
      beforeCardId = card.id;
    } else {
      afterCardId = card.id;
    }
    console.log("BF : ", beforeCardId, afterCardId);
    return [beforeCardId, afterCardId];
  };

  return (
    <div
      className={
        isDraggedOver
          ? "dropable-area dropable-area__drag-over"
          : "dropable-area"
      }
    >
      <h2 className="dropable-area__header">{title}</h2>
      <button
        onClick={() => openCreateModal(id)}
        className="dropable-area__button-new"
      >
        New
      </button>
      <div
        id={id}
        className="dropable-area__cards"
        onDragEnter={dragEnter}
        onDragLeave={dragLeave}
        onDrop={drop}
        onDragOver={allowDrop}
        dropable="true"
      >
        {cards.map(
          (card) =>
            card.tableId === id && (
              <DragableCard
                key={`${card.header}-${Math.random(1000)}`}
                id={card.id}
                header={card.header}
                body={card.body}
                footer={card.footer}
                tableTitle={title}
                openDetailModal={openDetailModal}
              />
            )
        )}
      </div>
    </div>
  );
};