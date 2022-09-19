import { randomizeTableId } from "../../utils/stringUtils";
import { ADD_TABLE } from "../constants/tables";
import { tablesInitialState } from "../state/tables";

export const tablesReducer = (state = tablesInitialState, action) => {
  switch (action.type) {
    case ADD_TABLE:
      const tableId = randomizeTableId();
      return [
        ...state,
        {
          id: tableId,
          title: action.payload.title,
          description: action.payload.description,
          color: action.payload.color,
        },
      ];
    default:
      return state;
  }
};
