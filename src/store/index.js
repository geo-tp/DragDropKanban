import { configureStore } from "@reduxjs/toolkit";
import { cardsReducer } from "./reducers/cards";
import { kanbanReducer } from "./reducers/kanban";
import { tablesReducer } from "./reducers/tables";

export default configureStore({
  reducer: {
    kanban: kanbanReducer,
    tables: tablesReducer,
    cards: cardsReducer,
  },
});
