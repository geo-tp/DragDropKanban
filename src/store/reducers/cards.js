import { ADD_CARD, MOVE_CARD, REMOVE_CARD } from "../constants/cards";
import { cardsInitialState } from "../state/cards";
import { randomizeCardId } from "../../utils/stringUtils";
export const cardsReducer = (state = cardsInitialState, action) => {
  switch (action.type) {
    case ADD_CARD:
      return [
        ...state,
        ...[
          {
            id: randomizeCardId(),
            tableId: action.payload.tableId,
            header: action.payload.header,
            body: action.payload.body,
            footer: action.payload.footer,
          },
        ],
      ];

    case MOVE_CARD:
      const beforeCard = state.find(
        (card) => card.id === action.payload.beforeCardId
      );
      const afterCard = state.find(
        (card) => card.id === action.payload.beforeCardId
      );

      let currentCard = state.find((card) => card.id === action.payload.cardId);
      const indexOfCurrentCard = state.indexOf(currentCard);

      currentCard = { ...currentCard, tableId: action.payload.tableId };

      let updatedState = [...state];
      updatedState.splice(indexOfCurrentCard, 1);

      if (beforeCard) {
        let indexOfBeforeCard = updatedState.indexOf(beforeCard);
        updatedState.splice(indexOfBeforeCard, 0, currentCard);
      } else if (afterCard) {
        let indexOfAfterCard = updatedState.indexOf(afterCard);
        updatedState.splice(indexOfAfterCard + 1, 0, currentCard);
      } else {
        updatedState.push(currentCard);
      }

      return [
        ...updatedState.map((card) => {
          return card;
        }),
      ];

    case REMOVE_CARD:
      return state;
    default:
      return state;
  }
};
