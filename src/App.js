import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Body from './components/Body/Body';
import './App.css';
import Biz from './components/Biz/Biz';
import Tech from './components/Tech/Tech';
import Entertainment from './components/Entertainment/Entertainment';
import Health from './components/Health/Health';
import Science from './components/Science/Science';
import Sports from './components/Sports/Sports';


export default function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Body} />
        <Route path="/Business" component={Biz} />
        <Route path="/Technology" component={Tech} />
        <Route path="/Entertainment" component={Entertainment} />
        <Route path="/Health" component={Health} />
        <Route path="/Science" component={Science} />
        <Route path="/Sports" component={Sports} />
      </Switch>
    </div> 
  );
}


