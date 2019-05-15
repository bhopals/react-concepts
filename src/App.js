import React from 'react';
import logo from './logo.svg';
import './App.css';
import faker from 'faker';

function App() {
  return (
    <div className="ui container comments">
      <div className="comment">
        <a className="avatar">
          <img src={faker.image.avatar()} />
        </a>
        <div className="content">
          <a className="author">Jenny Hess</a>
          <div className="metadata">
            <span className="date">Just now</span>
          </div>
          <div className="text">
            Elliot you are always so right :)
          </div>
          <div className="actions">
            <a className="reply">Reply</a>
          </div>
        </div>
      </div>
    </div>
    );
      }
      
// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

export default App;
