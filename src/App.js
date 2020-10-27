import React from 'react';
import './App.css';
import KanbanDB from 'kanbandb/dist/KanbanDB';
import Kanban from "./components/Kanban/Kanban";

function initialize() {
  /**
   *
   * Use KanbanDB like so (but you might want to move it) - types are provided:
   *
   */
  
  KanbanDB.connect();
  
}

function App() {
  // Initialize DB communications.
  initialize();
  
  return (
    <div className="App">
      <div>
        <Kanban/>
      </div>
    </div>
  );
}

export default App;
