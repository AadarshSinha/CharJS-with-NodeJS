import React from 'react'
import { Radar } from "react-chartjs-2";

const RadarChart = ({data}) => {
  return (
    <div>
      <Radar data={data} />
    </div>
  )
}

export default RadarChart