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
      console.log("ST", state);
      const beforeCard = state.find(
        (card) => card.id === action.payload.beforeCardId
      );
      const afterCard = state.find(
        (card) => card.id === action.payload.beforeCardId
      );

      let currentCard = state.find((card) => card.id === action.payload.cardId);
      const indexOfCurrentCard = state.indexOf(currentCard);

      currentCard = { ...currentCard, tableId: action.payload.tableId };

      let nextFlag = false;

      let updatedState = [...state];
      updatedState.splice(indexOfCurrentCard, 1);

      if (beforeCard) {
        let indexOfBeforeCard = updatedState.indexOf(beforeCard);
        console.log("I B", indexOfBeforeCard);
        updatedState.splice(indexOfBeforeCard, 0, currentCard);

        console.log("HJERRRRE", beforeCard, currentCard);
      } else if (afterCard) {
        let indexOfAfterCard = updatedState.indexOf(afterCard);
        updatedState.splice(indexOfAfterCard + 1, 0, currentCard);
      } else {
        updatedState.push(currentCard);
      }

      // updatedState.splice(2, 0, currentCard);
      console.log("UPDT", updatedState);
      return [
        ...updatedState.map((card) => {
          return card;
        }),
      ];
    //     return [
    //       ...state.map((card) => {
    //         if (nextFlag) {
    //           let cards = null;
    //           if (beforeCard) {
    //             nextFlag = false;
    //             cards = [beforeCard, card];
    //           } else {
    //             cards = [currentCard, card];
    //           }

    //           const result = cards.reduce((a, v) => {
    //             Object.keys(v).forEach((k) => (a[k] = a[k] || []).push(v[k]));
    //             return a;
    //           }, {});

    //           console.log("res", result);

    //           nextFlag = false;
    //           return result;
    //         }

    //         if (beforeCard && card.id === beforeCard.id) {
    //           nextFlag = true;
    //           return currentCard;
    //         } else if (afterCard && card.id === afterCard.id) {
    //           nextFlag = true;
    //           return afterCard;
    //         } else if (card.id === action.payload.cardId) {
    //           return { ...card, tableId: action.payload.tableId };
    //         }
    //         return card;
    //       }),
    //     ];
    case REMOVE_CARD:
      return state;
    default:
      return state;
  }
};
