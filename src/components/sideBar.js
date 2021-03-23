import './sideBar.css';
import React from 'react';
import { Avatar, makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
  large: {
    width: '150px',
    height: '150px',
    border: '2px solid black',
    margin: 'auto',
  },
})

export default function SideBar() {
    const classes = useStyles();

    return(
      <div className='SideBar'>
        <div className='Avatar'>
          <Avatar alt="Ryan Vreeke" src="./images/ProfilePic.jpg" className={classes.large} />
          <h2>
            Ryan Vreeke
          </h2>
        </div>

        <div>
          <text style={{fontSize: '15px'}}>rvreeke0229@gmail.com</text>
        </div>
        <a href="https://github.com/calvin-cs262-fall2020-teamD/freetime-project" className="Link">FreeTime App</a>
        <br></br>
        <a href="https://trivia336.web.app/" className="Link">Trivia App</a>
      </div>
    )
}