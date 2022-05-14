import './App.css';
import React from 'react'
import DataTable from './components/DataTable';
import HeaderTop from './components/header/HeaderTop';

function App() {
  return (
    <div class="main">
        <HeaderTop/>
        <DataTable/>
    <br/>
    <center>
      <div id="footer">
    <footer>
      <p><a href="https://www.highradius.com">Privacy Policy</a>| &copy; 2022 HighRadius Corporation. All rights reserved.</p>
    </footer>
  </div>
  </center>
      </div>
  );
}

export default App;
