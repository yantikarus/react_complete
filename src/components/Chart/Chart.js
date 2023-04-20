import React from 'react'
import './Chart.css'
import ChartBar from './ChartBar'

const Chart = (props) => {
    console.log(props)
    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value)
    // spread operator ... is to pull out all the data from the array
    const totalMaximum = Math.max(...dataPointValues)
    
  return (
    <div className='chart'>
       { props.dataPoints.map(datapoint => <ChartBar key={datapoint.label} value={datapoint.value} maxValue ={totalMaximum} label={datapoint.label}/>)}
    </div>
  )
}

export default Chart