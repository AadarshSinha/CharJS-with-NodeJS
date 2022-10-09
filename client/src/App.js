import React,{useEffect, useState} from "react" 
import Select from 'react-select'
import './App.css'
import LineChart from "./components/LineChart"
import BarChart from "./components/BarChart"
import PieChart from "./components/PieChart"
import BubbleChart from "./components/BubbleChart"
import ScatterChart from "./components/ScatterChart"
import RadarChart from "./components/RadarChart"
import { PolarArea } from "react-chartjs-2"
import DoughnutChart from "./components/DoughnutChart"

const  App = () => {
  const [data,setData] = useState([])
  const [comx,setComx] = useState('intensity')
  const [comy,setComy] = useState('start_year')
  const [displayData,setDisplayData] = useState(null)

  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'intensty', label: 'intensity' },
    { value: 'vanilla', label: 'Vanilla' }
  ]

  const GetData = async () =>{
    const response = await fetch('http://localhost:4000/getData', {
			method: 'GET',
		})
    const res = await response.json()
    if (res.status === 'ok') {
      console.log("success ",res.Data)
      setData(res.Data)
		} else {
			console.log("failed")
		}
  }

  const GetDisplayData = () => {
    setDisplayData({
      labels: data.map((data) => {
        if(comy=='start_year'){
          return data.start_year
        }
      }),
      datasets: [
        {
          label: comx,
          data: data.map((data) => {
            if(comx==="intensity"){
              return data.intensity
            }
          }),
          backgroundColor: [
            "rgba(75,192,192,1)",
            "#ecf0f1",
            "#50AF95",
            "#f3ba2f",
            "#2a71d0",
          ],
          borderColor: "black",
          borderWidth: 2,
        },
      ],
    });
  }

  useEffect(()=>{
    GetData()
  },[])

  if(data.length!==0 && !displayData){
    console.log("getting dispaly data")
    GetDisplayData();
  }
  return (
    <div className="App">
      <div className="element">
      {displayData && <LineChart data={displayData}/>}
      </div>
      <div className="element">
      {displayData && <BarChart data={displayData}/>}
      </div>
      <div className="element">
      {displayData && <PieChart data={displayData}/>}
      </div>
      <div className="element">
      {displayData && <RadarChart data={displayData}/>}
      </div>
      <div className="element">
      {displayData && <DoughnutChart data={displayData}/>}
      </div>
      <div className="element">
      {displayData && <BubbleChart data={displayData}/>}
      </div>
      <div className="element">
      {displayData && <ScatterChart data={displayData}/>}
      </div>
      <div className="element">
      {displayData && <PolarArea data={displayData}/>}
      </div>
    </div>
  );
}

export default App;
