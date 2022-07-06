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


export default function AdminGraph (){
    const options = {
        responsive:true,
        tension: 0.8,
    }
    const data = {
        labels:["day1", "day2", "day3", "day4", "day5"],
        datasets:[
            {
                label:'Users',
                data:["20", "12", "23", "15", "25"],
                backgroundColor:"#FF7F50",
                borderColor:"#FF7F50",
            },
        ],
    }


    return (
        <>
            <h3 className="text-lg font-bold pb-2 text-start w-full sm:w-[250px] lg:w-[300px] ">Visitors</h3>
            {/* heading cnt-1 current weather */}
			<div className="">
                <Line data={data} options={options}/>
            </div>
        </>
        )
}