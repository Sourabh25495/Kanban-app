import React from "react";
import {DragDropContext} from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import {withStyles} from "@material-ui/core/styles";
import update from "immutability-helper";
import KanbanColumn from './KanbanColumns'
import KanbanItem from './KanbanItem'
import {useStyle} from '../../styles'
import {labelsMap, channels, tasks} from '../../constants'
import {CardAdder} from '../CardAdder';
import Divider from '@material-ui/core/Divider';



class Kanban extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks
    };
    this.addNewTask = this.addNewTask.bind(this)
  }
  
  addNewTask(newTask) {
    tasks.push({_id: tasks.length + 1, title: newTask, status: 'Todo'})
    this.setState({tasks: tasks})
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
    const {classes} = this.props;
    return (
      <div className={classes.root}>
        <div className={classes.board}>
          
          {channels.map((channel, index) => (
            <>
              <KanbanColumn status={channel}>
                <div className={classes.column}>
                  <div className={classes.columnHead}><b>{labelsMap[channel]}</b></div>
                  <div>
                    {tasks
                      .filter(item => item.status === channel)
                      .map(item => (
                        <KanbanItem id={item._id} onDrop={this.update}>
                          <div className={classes.item}>{item.title}</div>
                        </KanbanItem>
                      ))}
                  </div>
                </div>
              </KanbanColumn>
              {index !== channels.length - 1 && <Divider style={{paddingBottom: 200}} orientation="vertical" flexItem />}
            </>
          ))}
        </div>
        <div>
          <CardAdder handleAddNewTask={this.addNewTask}/>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(withStyles(useStyle)(Kanban));

