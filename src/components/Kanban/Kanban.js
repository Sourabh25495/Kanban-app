import React from "react";
import {DragDropContext} from "react-dnd";
import {v4 as uuidv4} from 'uuid';
import HTML5Backend from "react-dnd-html5-backend";
import {withStyles} from "@material-ui/core/styles";
import update from "immutability-helper";
import KanbanColumn from './KanbanColumns'
import KanbanItem from './KanbanItem'
import {useStyle} from '../../styles'
import {labelsMap, channels, tasks} from '../../constants'
import {CardAdder} from '../CardAdder';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import KanbanDB from 'kanbandb/dist/KanbanDB';


class Kanban extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      updatedTasks: []
    };
    this.addNewTask = this.addNewTask.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }
  
  componentDidMount() {
    const currentTasks = tasks
    const that = this;
    KanbanDB.connect().then(function ready(db, dbInstanceId) {
      currentTasks.map(currentTask => {
        db.addCard({name: currentTask.name, status: currentTask.status})
          .then(() => {
            console.log("Cards added")
          })
          .catch(err => console.error(err.message));
      })
      
      db.getCards()
        .then((currentTasks) => {
            that.setState({updatedTasks: currentTasks})
          }
        ).catch(err => console.error(err.message));
      
    })
    this.setState({tasks: currentTasks})
  }
  
  addNewTask(newTask) {
    const {tasks} = this.state;
    const that = this;
    const currentlyAddedTask = [...tasks, ...[{_id: uuidv4(), name: newTask, status: 'Todo'}]]
    KanbanDB.connect().then(function ready(db, dbInstanceId) {
      db.addCard({name: newTask, status: 'Todo'})
        .then(() => {
        })
        .catch(err => console.error(err.message));
      
      db.getCards()
        .then((cardList) => {
            that.setState({updatedTasks: currentlyAddedTask})
          }
        ).catch(err => console.error(err.message));
      
      
    })
    this.setState({tasks: currentlyAddedTask})
  }
  
  handleDelete(e, item) {
    console.log("Item to delete", this.state.tasks.filter(itemToDelete => itemToDelete.id !== item.id), item, this.state.tasks)
    this.setState({tasks: this.state.tasks.filter(itemToDelete => itemToDelete._id !== item._id)})
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
        <div className={classes.boardContainer}>
          <div className={classes.board}>
            {channels.map((channel, index) => (
              <>
                <KanbanColumn status={channel}>
                  <div className={classes.column}>
                    <div className={classes.columnHead}><b>{labelsMap[channel]}</b></div>
                    <div>
                      {Array.isArray(tasks) && tasks
                        .filter(item => item.status === channel)
                        .map(item => (
                          <KanbanItem id={item._id} onDrop={this.update} key={item}>
                            <div className={classes.item}>
                              <div className={classes.titleLayout}>{item.name}</div>
                              <div className={classes.deleteButtonContainer}>
                                <IconButton
                                  className={classes.margin}
                                  onClick={(e) => this.handleDelete(e, item)}>
                                  <DeleteIcon fontSize="small"/>
                                </IconButton>
                              </div>
                            </div>
                          </KanbanItem>
                        ))}
                    </div>
                  </div>
                </KanbanColumn>
                {index !== channels.length - 1 && <Divider orientation="vertical" flexItem/>}
              </>
            ))}
          </div>
        </div>
        <div className={classes.formPanel}>
          <CardAdder handleAddNewTask={this.addNewTask}/>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(withStyles(useStyle)(Kanban));