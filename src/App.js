import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './Components/Header';
import SideBar from './Components/SideBar';
import styled from 'styled-components';

function App() {
  return (
    <div className="app">
       <Router>
      <>
       <Header/>
       <AppBody>
       <SideBar />
       <Switch>
        <Route path="/" exact>  
                 
          </Route>       
        </Switch>

       </AppBody>
       
      </>
    </Router>
    </div>
  );
}

export default App;

const AppBody = styled.div`
display:flex;
height:100vh;

  
`;
