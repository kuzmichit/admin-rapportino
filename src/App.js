import React from "react";
import { hot } from 'react-hot-loader/root';
import DayList from './DayList'

import './style.css'


class App extends React.Component {
 
  render() {
    const { name } = this.props;
    return (
      <>
        <h1>
          Hello {name}
        </h1>
        <button className='btn'
          onClick={()=>console.log('hello')}>
          get list
        </button>
        <DayList/>
      </>
    );
  }
}

export default hot(App);
