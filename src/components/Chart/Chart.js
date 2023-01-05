import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

function Chart(props) {
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);
    const totalMaximum  = Math.max(...dataPointValues);
    props.expenseHandler(totalMaximum)
  return (
    <div>
        <h1 className='chart-title'>Monthly chart</h1>
        <div className='chart'>
            {props.dataPoints.map((dataPoint) => 
                (<ChartBar 
                    key={dataPoint.label}
                    value={dataPoint.value}
                    maxValue={totalMaximum}
                    label={dataPoint.label}
                />))}
        </div>
    </div>
  )
}

export default Chart