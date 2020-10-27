import React, {useState} from 'react';
import TextField from '@material-ui/core/TextField';
import {useStyles, ColorButton} from '../../styles';


export const CardAdder = ({handleAddNewTask}) => {
  const [newTask, setNewTask] = useState('')
  const [disable, setDisable] = useState(true);
  
  const handleClick = () => {
    handleAddNewTask(newTask)
    setNewTask('')
    setDisable(true)
  }
  
  const handleTextChange = (e) => {
    setNewTask(e.target.value)
  }
  
  const textChangeHandler = (e) => {
    setNewTask(e.target.value)
    if (e.target.value.length > 0) {
      setDisable(false);
    }
    if (e.target.value.length === 0)
      setDisable(true);
  }
  
  const classes = useStyles();
  
  return (
    <div className={classes.formLayout}>
      <div className={classes.formContainer}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          onChange={textChangeHandler}
          value={newTask}
          onBlur={handleTextChange}
          className={classes.textField}
          placeholder="e.g.: Bug: Text Poll not dispatching half stars"
          InputProps={{
            disableUnderline: true
          }}
          inputProps={{
            maxLength: 100
          }}
          fullWidth
        />
      </div>
      <ColorButton
        variant="outlined"
        onClick={handleClick}
        color="primary"
        disabled={disable}
        fullWidth
      >
        <b className={classes.buttonColor}>Add New</b>
      </ColorButton>
    </div>
  )
}

