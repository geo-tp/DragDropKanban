import { ADD_TABLE } from "../constants/tables";

export const AddTable = (title, description, color) => ({
  type: ADD_TABLE,
  payload: { title, description, color },
});
