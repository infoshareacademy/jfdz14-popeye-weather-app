import React from 'react';
import style from './Chart.module.css';
// import { PieChart } from 'react-easy-chart';
// import { PieChart, Pie, Cell, LabelList, Tooltip, Label } from 'recharts';
// import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';
import { connect} from 'react-redux';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const COLORS = ['#ffe4c4', '#f0ffff', '#00FFFF', 'cadetblue'];

const data = [
  {
    date: '6.09.2020',
    C: 20,
  },
  {
    date: '7.09.2020',
    C: 18,
  },
  {
    date: '8.09.2020',
    C: 18,
  },
  {
    date: '9.09.2020',
    C: 21,
  },
  {
    date: '10.09.2020',
    C: 17,
  },
  {
    date: '11.09.2020',
    C: 18,
  },
  {
    date: '12.09.2020',
    C: 22,
  },
];

let renderLabel = data => {
  return data.name;
};

class ChartOne extends React.Component {
  state = {
    cities: this.props.weather,
  }

  
  render(){
    return (
      <>
        <div className={style.wrapper}>
          <h5 className={style.chartDescription}>Forecast temperature in Gdansk next 6 days</h5>
          <AreaChart
        width={1600}
        height={600}
        data={data}
        
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="C" stroke="#8884d8" fill="#8884d8" />
      </AreaChart>
        </div>
      </>
    );
  }
};



const mapStateToProps = state => ({
  weather: state,
});
export default connect(mapStateToProps)(ChartOne);

