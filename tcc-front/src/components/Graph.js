import {useState, useEffect} from "react"
import moment from "moment"
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from "chart.js"
import {Line} from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
    )
    
export default function Graph ({hourly}){
    
     const temp = []
     const time = []
     const precipitation = []
    
    useEffect(()=>{
        const hours = 12;
        const slicedArray = hourly ? hourly.slice(0, hours):console.log("processing...")
      slicedArray ? slicedArray.map(x=>{
          temp.push(x.temp.toFixed(0))
          const minTemp = Math.min(...temp)
          const maxTemp = Math.max(...temp)
          time.push(moment(x.dt*1000).format("HH"))
          precipitation.push(x.pop)
          
    
      }):console.log("not true") 
    },[hourly])
    
    const options = {
        responsive:true,
        tension: 0.8,
    }
    const data = {
        labels:time,
        datasets:[
            {
                label:'Temperature',
                data:temp,
                backgroundColor:"#FF7F50",
                borderColor:"#FF7F50",
            },
        ],
    }

    
    
    return (
        <>
            {/*heading*/}
            <h3 className="text-lg font-bold pb-2 w-full text-start">Previsões para hoje</h3>
            {/* heading cnt-1 current weather */}
			<div className="flex flex-col md:flex-row justify-center items-center md:h-[88%] h-auto w-full  md:w-[400px] lg:w-[500px] cursor-pointer">
                <Line data={data} options={options}/>
                {precipitation[0]}
            </div>
        </>
        )
}