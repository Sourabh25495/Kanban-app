import React, {useState} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export const CardAdder = ({handleAddNewTask}) => {
  const [newTask, setNewTask] = useState('')
  
  const handleClick = () => {
    handleAddNewTask(newTask)
    setNewTask('')
  }
  
  return (
    <main style={{padding: -3, display: 'inline-flex'}}>
      <div style={{width: 600, marginLeft: 40, paddingRight: 10}}>
        <TextField
          id="outlined-basic"
          variant="outlined"
          onBlur={e => setNewTask(e.target.value)}
          fullWidth
        />
      </div>
      <Button variant="contained" color="primary" onClick={handleClick}>
        Primary
      </Button>
    </main>
  )
}

