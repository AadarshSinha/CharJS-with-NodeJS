import React from 'react'
import { Bubble } from "react-chartjs-2";

const BubbleChart = ({data}) => {
  return (
    <div>
      <Bubble data={data} />
    </div>
  )
}

export default BubbleChart