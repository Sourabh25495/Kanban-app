import React from "react";
import {DragDropContext, DragSource} from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import update from "immutability-helper";
import KanbanColumn from './KanbanColumns'
import KanbanItem from './KanbanItem'
import {classes} from '../../styles'
import {labelsMap, channels} from '../../constants'
import {CardAdder} from '../CardAdder'

const tasks = [
  {_id: 1, title: "First Task", status: "Todo"},
  {_id: 2, title: "Second Task", status: "Todo"},
  {_id: 3, title: "Third Task", status: "In-Progress"},
  {_id: 4, title: "Fourth Task", status: "In-Progress"},
  {_id: 5, title: "Fifth Task", status: "In-Progress"},
  {_id: 6, title: "Sixth Task", status: "In-Progress"},
  {_id: 7, title: "Seventh Task", status: "review"},
  {_id: 8, title: "Eighth Task", status: "review"},
  {_id: 9, title: "Ninth Task", status: "done"},
  {_id: 10, title: "Tenth Task", status: "done"}
];


class Kanban extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks
    };
  }
  
  update = (id, status) => {
    const {tasks} = this.state;
    const task = tasks.find(task => task._id === id);
    task.status = status;
    const taskIndex = tasks.indexOf(task);
    const newTasks = update(tasks, {
      [taskIndex]: {$set: task}
    });
    this.setState({tasks: newTasks});
  };
  
  render() {
    const {tasks} = this.state;
    return (
      <div>
        <section style={classes.board}>
          {channels.map(channel => (
            <KanbanColumn status={channel}>
              <div style={classes.column}>
                <div style={classes.columnHead}>{labelsMap[channel]}</div>
                <div>
                  {tasks
                    .filter(item => item.status === channel)
                    .map(item => (
                      <KanbanItem id={item._id} onDrop={this.update}>
                        <div style={classes.item}>{item.title}</div>
                      </KanbanItem>
                    ))}
                </div>
              </div>
            </KanbanColumn>
          ))}
        </section>
        <CardAdder/>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(Kanban);

