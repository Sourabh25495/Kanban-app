import {makeStyles, withStyles} from '@material-ui/core/styles';
import {green, grey} from "@material-ui/core/colors";
import Button from "@material-ui/core/Button";

export const useStyle = (() => ({
  root: {
    width: '100%',
  },
  boardContainer: {
    width: '100%',
    minHeight: '100%',
    backgroundColor: '#F0F8FF',
  },
  board: {
    display: "inline-flex",
    marginTop: 10,
    fontFamily: 'Arial, "Helvetica Neue", sans-serif',
    overflowX: 'scroll',
  },
  column: {
    minWidth: 400,
    width: "28vw",
    height: "92vh",
    margin: "0 auto",
  },
  columnHead: {
    textAlign: "center",
    padding: 10,
    fontSize: "1.5em",
    color: '#0000FF'
  },
  item: {
    padding: 8,
    margin: 25,
    minHeight: "10vh",
    textAlign: "left",
    borderRadius: 4,
    fontSize: "1.4em",
    cursor: "pointer",
    backgroundColor: "white",
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
    overflowY: "scroll",
    overflowX: "auto"
  },
  titleLayout: {
    height: 70,
    fontFamily: 'Arial'
  },
  deleteButtonContainer: {
    float: 'right'
  },
  formPanel: {
    marginTop: -45
  }
}));


export const useStyles = makeStyles((theme) => ({
  formContainer: {
    width: 700,
    marginLeft: 20,
    paddingRight: 10
  },
  textField: {
    width: 700,
    backgroundColor: "#F0F8FF"
  },
  formLayout: {
    display: 'inline-flex',
    backgroundColor: 'white',
    padding: 17,
    borderRadius: 5,
    boxShadow: "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)",
  },
  buttonColor: {
    color: 'white',
  }
}));

export const ColorButton = withStyles((theme) => ({
  root: {
    color: 'white',
    width: 200,
    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
    '&:disabled': {
      backgroundColor: grey[400],
    },
  },
}))(Button);