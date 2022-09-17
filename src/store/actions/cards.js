import { ADD_CARD, MOVE_CARD, REMOVE_CARD } from "../constants/cards";

export const addCard = (tableId, header, body, footer) => ({
  type: ADD_CARD,
  payload: { tableId, header, body, footer },
});

export const moveCard = (cardId, tableId, beforeCardId, afterCardId) => ({
  type: MOVE_CARD,
  payload: { cardId, tableId, beforeCardId, afterCardId },
});

export const removeCard = (cardId) => ({
  type: REMOVE_CARD,
  payload: { cardId },
});
