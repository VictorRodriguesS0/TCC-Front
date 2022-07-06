// This component deals with data fetching from API

import {useState, useEffect, useRef} from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"

//import components
import Current from "../components/Current"
import Prediction from "../components/Prediction"
import Tomorrow from "../components/Tomorrow"
import Graph from "../components/Graph"

export default function Home (){
   // INITIALIZING THE STATES
  const [searchedLocation, setSearchedLocation] = useState();
  const [weather, setWeather] = useState('home weather');
  const [hourly, sethourly] = useState();
  const [daily, setDaily] = useState('daily weather');
  const [cityName, setCityName] = useState();
  const [key, setKey] = useState("c2a63fec710d5b3c8746be0631294546") 
  const [display, setDisplay] = useState("close")
  
  const location = useRef()
  
  const navigate = useNavigate()
  
  // GETTING THE SEARCHED RESULTS
  function handleSubmit(e) {
    const value = location.current.value;
    setSearchedLocation(value);
    e.preventDefault();
  }
 
  useEffect(()=>{
      function weatherData(latitude, longitude) {
      // OPEN WEATHER MAP API KEY
        const API_KEY = key;
        console.log(latitude)
        console.log(longitude)

      // OPEN WEATHER MAP URL ONECALL
        const url_1 = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=minutely&units=metric&appid=${API_KEY}`;
      
      //getting url_1 data
        axios
            .get(url_1)
            .then((res) => {
          // console.log(res);
          // UPDATING THE INDIVIDUAL STATES
            setWeather(res.data.current);
            setDaily(res.data.daily);
            sethourly(res.data.hourly);
            })
            .catch((err) => {
            console.log(err);
            });
      }
        // FUNCTION FOR GETTING WEATHER ACCORDING TO USER'S CURRENT LOCATION
    function CurrentLocation() {
      navigator.geolocation.getCurrentPosition((x) => {
        weatherData(x.coords.latitude, x.coords.longitude);
        CityName(x.coords.latitude, x.coords.longitude);
        console.log(x.coords.latitude)
      });
    }
    
    // FUNCTION FOR GETTING WEATHER ACCORDING TO SEARCHED LOCATION
    function SearchedLocation() {
      const API_KEY = key;

      // DIRECT GEOCODING URL
      const url = `https://api.openweathermap.org/geo/1.0/direct?q=${searchedLocation}&limit=1&appid=${API_KEY}`;
      axios
        .get(url)
        .then((res) => {
          // console.log(res)
          weatherData(res.data[0].lat, res.data[0].lon);
          console.log(res.data[0].lat)
          setCityName([
            res.data[0].country,
            res.data[0].name,
            res.data[0].state,
          ]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    
    //FUNCTION FOR GETTING CITY NAME FROM CO-ORDINATES
    function CityName(lat, lon) {
      const API_KEY = key;
      //REVERSER GEOCODING URL
      const url = `https://api.openweathermap.org/geo/1.0/reverse?lat=${lat}&lon=${lon}&limit=5&appid=${API_KEY}`;

      axios
        .get(url)
        .then((res) => {
          // console.log(res)
          setCityName([
            res.data[0].country,
            res.data[0].name,
            res.data[0].state,
          ]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
    
    // TOGGLE BETWEEN SEARCHED LOCATION AND CURRENT LOCATION
    if (searchedLocation) {
      SearchedLocation();
    } else {
      CurrentLocation();
    }

  }, [searchedLocation])
  
  
  function navigateToLogin(){
      navigate("/userloginsignup")
  }
  
    return (
        <>
            {/* header */}
				<header className="max-w-[800px] md:m-4 lg:mx-auto h-auto flex justify-between px-2 md:px-0 py-2 mx-auto font-bold">
					<h1 style={{'alignSelf':'center'}}>Weather Forecast</h1>
					{/* search bar */}
					<form onSubmit={handleSubmit} className="flex flex-col sm:flex-row justify-center items-center sm:justify-between w-1/2 cursor-pointer">
						<input 
						    type="text" 
						    placeholder="search..." 
						    ref={location}
						    className="w-3/4 p-2 rounded-lg primaryBColor outline-none mb-2 sm:mb-0"
						/>
						<div onClick={navigateToLogin} style={{'alignSelf':'center'}}>Login/SignUp</div>
					</form>
				</header>
			{/*	<div className={display==="open" ? "block absolute bg-gray-100 w-fit h-fit right-8 top-14 shadow-inner rounded-lg secondaryFont" : "hidden absolute bg-gray-100 w-fit h-fit right-8 top-14 shadow-inner rounded-lg secondaryFont"}>
				    <div className="flex flex-col justify-center items-center p-4">
				        <p className="hover:text-red-500 mb-3" onClick={()=>{navigateToLogin()}}>Login</p>
				        <p className="hover:text-red-500" onClick={()=>{navigateToSignUp()}}>SignUp</p>
				    </div>
				</div> */}
				{/* Main body */}
				<main className="max-w-[850px] h-auto grid overflow-hidden md:grid-rows-2 md:grid-cols-2 grid-rows-4 grid-cols-1 md:gap-4 m-4 md:m-4 lg:mx-auto px-2 pb-2 md:px-0 secondaryFont">
            {/* wrapper-1 */} 
				    <div className="md:h-[300px] h-auto flex flex-col justify-center md:block items-center">
				    <Current cityName={cityName} weather={weather}/>
				    </div>
				    {/* wrapper-2 */}
				    <div className="flex flex-col md:justify-end justify-center md:items-end items-center h-fit md:h-[300px]">
				    <Prediction daily={daily}/>
				    </div>
				    {/* wrapper-3 */}
				    <div className="w-full sm:w-[300px] md:w-[500px] h-fit md:h-auto flex flex-col justify-center md:block items-center">
				        <Graph hourly={hourly}/>
				    </div>
				    {/* wrapper-4 */}
				    <div className="flex flex-col md:justify-end justify-center md:items-end items-center p-2 md:p-0 mt-0">
				    <Tomorrow daily={daily} cityName={cityName}/>
				    </div>
				</main>
            
        </>
        )
}
