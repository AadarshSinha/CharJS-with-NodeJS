import React from 'react'
import { PolarArea } from "react-chartjs-2";

const PolarChart = ({data}) => {
  return (
    <div>
      <PolarArea data={data} />
    </div>
  )
}

export default PolarChart