import React from 'react'
import { Scatter } from "react-chartjs-2";

const ScatterChart = ({data}) => {
  return (
    <div>
      <Scatter data={data} />
    </div>
  )
}

export default ScatterChart