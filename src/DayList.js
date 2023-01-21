import React from "react";
import { hot } from 'react-hot-loader/root';
import Service from './service'

import './style.css'


class DayList extends React.Component {
  state = {
    dayList: [],
  }

  service = new Service();

  didComponentMount() {
    //this.getDaysList()
    console.log('mount')
  }

  getDaysList = () => {
    this.service.getResource()
      .then(console.log)


    /* this.setState({
       dayList: this.service.getResource()
       }) */
  }

  render() {
    const { dayList } = this.state;

    return (
      <>
    <ul className='dayList'>
      {/* dayList*/}
      <li>first item</li>
    </ul>
    <button className='btn'
          onClick={this.getDaysList}>
          get list
     </button>
     </>
    )
  }
}

export default hot(DayList);