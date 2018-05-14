import React, {Component} from 'react';
import {Bar} from 'react-chartjs-2';

class Chart extends Component{

  constructor(props){
    super(props);
    this.state = {
      chartData:props.chartData

    }
  }

static defaultProps = {
  displayTitle: true,
  displayLegend: true,
  legendPosistion: 'right',
  location:'Target Field'
}


  render(){
    return(
      <div className ="chart">
      <Bar
        	data={this.state.chartData}
        	width={100}
        	height={50}
        	options={{
                title:{
                display: this.props.displayTitle,
                text:'Twins Total Attendance by Month at '+this.props.location ,
                fontSize:25

              },
              legend:{
                display:this.props.displayLegend,
                position:this.props.legendPosistion
              }
              }}
                />
      </div>
    )
  }
}

export default Chart;
