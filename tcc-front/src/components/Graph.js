import { useState, useEffect } from "react"
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
import { Line } from "react-chartjs-2"

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
)

export default function Graph({ hourly }) {

    const [temp, setTemp] = useState([])
    const [time, setTime] = useState([])
    const [precipitation, setPrecipitation] = useState([])
    const [hidden, setHidden] = useState(false);
    const [aux, setAux] = useState(true);

    useEffect(() => {
        if (typeof hourly !== 'string') {
            const hours = 5;
            const slicedArray = hourly ? hourly.slice(0, hours) : console.log("processing...")
            slicedArray ? slicedArray.map((x, i) => {
                console.log(i)
                setTemp(temp => [...temp, x.temperaturaAr])
                setTime(time => [...time, moment(x.dataPrevisao).format("DD")])
                setPrecipitation(precipitation => [...precipitation, (x.choveAmanha)])
                //   precipitation.push()
            }) : console.log("not true")
        }
    }, [hourly])


    const options = {
        responsive: true,
        tension: 0.8,
        onClick: () => {
            setHidden(!hidden)
            console.log(hidden)
        }

    }
    const data = {
        labels: time,
        datasets: [
            // {
            //     label: 'Temperature',
            //     data: temp,
            //     backgroundColor: "#FF7F50",
            //     borderColor: "#FF7F50",
            //     hidden: hidden,
            //     onClick
            // },
            // {
            //     label: 'Precipitação',
            //     data: precipitation,
            //     backgroundColor: "#FF7F50",
            //     borderColor: "#FF7F50",
            //     hidden: !hidden

            // },
            aux ? 
            {
                label: 'Temperature',
                data: temp,
                backgroundColor: "#FF7F50",
                borderColor: "#FF7F50",
            } :
            {
                label: 'Precipitação',
                data: precipitation,
                backgroundColor: "#FF7F50",
                borderColor: "#FF7F50",

            },
        ],
    }

    return (
        <>
            {/*heading*/}
            <h3 className="text-lg font-bold pb-2 w-full text-start">Previsões para hoje</h3>
            {/* heading cnt-1 current weather */}
            <button onClick={() => setAux(true)}>Temperatura</button> <br/>
            <button onClick={() => setAux(false)}>Precipitacao</button>
            <div className="flex flex-col md:flex-row justify-center items-center md:h-[88%] h-auto w-full  md:w-[400px] lg:w-[500px] cursor-pointer">
                {temp ? <Line data={data} options={options} /> : <></>}
                {/* {precipitation[0]} */}
            </div>
        </>
    )
}