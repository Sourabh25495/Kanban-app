export const channels = ["Todo", "In-Progress", "done"];

export const labelsMap = {
  Todo: "To-do",
  "In-Progress": "In-Progress",
  done: "Done"
};

export const tasks = [
  {_id: 1, title: "First Task: Fix issue 1.", status: "Todo"},
  {_id: 2, title: "Second Task: Test issue 1.", status: "Todo"},
  {_id: 3, title: "Third Task: Deploy issue 1.", status: "In-Progress"},
  {_id: 4, title: "Fourth Task: Demo the feature.", status: "In-Progress"},
  {_id: 5, title: "Fifth Task: Get the approval from UX Team.", status: "In-Progress"},
  {_id: 6, title: "Sixth Task: Deploy to stage env.", status: "In-Progress"},
  {_id: 7, title: "Seventh Task: Push to prod.", status: "review"},
  {_id: 8, title: "Eighth Task: IVP in Prod.", status: "review"},
  {_id: 9, title: "Ninth Task: Merge to Master", status: "done"},
  {_id: 10, title: "Tenth Task: Business sign-off", status: "done"}
];