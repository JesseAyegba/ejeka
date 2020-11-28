import React from 'react';
import "./Progress.css";
import { makeStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > * + *': {
      marginLeft: theme.spacing(2),
    },
  },
}));

function Progress() {
  const classes = useStyles();

  return (
    <div className="progress">
      <CircularProgress />
    </div>
  );
}

export default Progress;
