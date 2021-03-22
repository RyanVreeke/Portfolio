import './App.css';
import SideBar from './components/sideBar';

function App() {
  return (
    <div className="App-container">
      <div className="SideBar-container">
        <SideBar />
      </div>
      <div className="Information-container">
        {/* <header className="App-header"> */}
          <img className="Profile-Pic" src="/images/ProfilePic.jpg" alt="profile" />
          <p>
            This is a picture of me!!!
          </p>
        {/* </header> */}
      </div>
    </div>

  );
}

export default App;
