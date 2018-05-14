import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Chart from './Components/Charts';

class App extends Component {
  constructor(){
    super();
    this.state = {
      chartData:{}
    }
  }

  componentWillMount(){
    this.getChartData();
  }

  getChartData(){
    this.setState({
      chartData:{

          labels:['April', 'May', 'June', 'July', 'August', 'September', 'October'],
      datasets:[{
        label:'Attendance',
        data:[
          260711,
          411719,
          279743,
          359348,
          394875,
          316735,
          28148],
          backgroundColor:[
            'red',
            'navy',
            'purple',
            'teal',
            'tan',
            'brown',
            'black'
            ]
           }
          ]
        }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">2017 Twins Attendance</h1>
        </header>
      <Chart chartData={this.state.chartData} location="Target Field" legendPosistion="bottom" /> //pass in overwrites defaults
      </div>
    );
  }
}

export default App;
