import { useState } from "react";

export const DragableCard = ({
  id,
  header,
  body,
  footer,
  tableTitle,
  openDetailModal,
}) => {
  const [isCurrentlyDragged, setIsCurrentlyDragged] = useState(false);
  const [isDraggedOver, setIsDraggedOver] = useState(false);

  const dragStart = (event) => {
    setIsCurrentlyDragged(true);
    event.dataTransfer.setData("text", event.target.id);
  };

  const dragEnd = (event) => {
    setIsCurrentlyDragged(false);
  };

  const dragEnter = (event) => {
    setIsDraggedOver(true);
  };

  const dragLeave = (event) => {
    setIsDraggedOver(false);
  };

  let cardClass = "dragable-card";

  if (isCurrentlyDragged) {
    cardClass += " dragable-card__drag-start";
  } else if (isDraggedOver) {
    cardClass += " dragable-card__drag-over";
  }

  return (
    <article
      onClick={() => openDetailModal(tableTitle, { id, header, body, footer })}
      id={id}
      className={cardClass}
      draggable="true"
      onDragStart={dragStart}
      onDragEnd={dragEnd}
      onDragEnter={dragEnter}
      onDragLeave={dragLeave}
      onDrop={() => {
        return false;
      }}
    >
      <h3 className="dragable-card__header">{header}</h3>
      <p className="dragable-card__body">{body}</p>
      <p className="dragable-card__footer">{footer}</p>
    </article>
  );
};
