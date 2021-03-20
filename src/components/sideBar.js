import './sideBar.css';
import React from 'react';

export default function SideBar() {
    return(
      <div className='SideBar'>
        <h2>
          Ryan Vreeke
        </h2>
        <div>
        <text style={{fontSize: '15px'}}>rvreeke0229@gmail.com</text>
        </div>
        <a href="https://github.com/calvin-cs262-fall2020-teamD/freetime-project" className="Link">FreeTime App</a>
        <br></br>
        <a href="https://trivia336.web.app/" className="Link">Trivia App</a>
      </div>
    )
}