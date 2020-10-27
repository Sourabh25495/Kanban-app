import { v4 as uuidv4 } from 'uuid';
export const channels = ["Todo", "In-Progress", "done"];

export const labelsMap = {
  Todo: "To-do",
  "In-Progress": "In-Progress",
  done: "Done"
};

export const tasks = [
  {_id: uuidv4(), name: "First Task: Fix issue 1.", status: "Todo"},
  {_id: uuidv4(), name: "Second Task: Test issue 1.", status: "Todo"},
  {_id: uuidv4(), name: "Third Task: Deploy issue 1.", status: "In-Progress"},
  {_id: uuidv4(), name: "Fourth Task: Demo the feature.", status: "In-Progress"},
  {_id: uuidv4(), name: "Fifth Task: Get the approval from UX Team.", status: "In-Progress"},
  {_id: uuidv4(), name: "Seventh Task: Push to prod.", status: "done"},
  {_id: uuidv4(), name: "Eighth Task: IVP in Prod.", status: "done"},
];