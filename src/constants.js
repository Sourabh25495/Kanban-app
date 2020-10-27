import { v4 as uuidv4 } from 'uuid';
export const channels = ["Todo", "In-Progress", "done"];

export const labelsMap = {
  Todo: "To-do",
  "In-Progress": "In-Progress",
  done: "Done"
};

export const tasks = [
  {_id: uuidv4(), title: "First Task: Fix issue 1.", status: "Todo"},
  {_id: uuidv4(), title: "Second Task: Test issue 1.", status: "Todo"},
  {_id: uuidv4(), title: "Third Task: Deploy issue 1.", status: "In-Progress"},
  {_id: uuidv4(), title: "Fourth Task: Demo the feature.", status: "In-Progress"},
  {_id: uuidv4(), title: "Fifth Task: Get the approval from UX Team.", status: "In-Progress"},
  {_id: uuidv4(), title: "Sixth Task: Deploy to stage env.", status: "In-Progress"},
  {_id: uuidv4(), title: "Seventh Task: Push to prod.", status: "review"},
  {_id: uuidv4(), title: "Eighth Task: IVP in Prod.", status: "review"},
  {_id: uuidv4(), title: "Ninth Task: Merge to Master", status: "done"},
  {_id: uuidv4(), title: "Tenth Task: Business sign-off", status: "done"}
];