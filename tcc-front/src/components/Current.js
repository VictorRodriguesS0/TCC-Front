export default function Current ({cityName, weather}){
    return (
            <>
            {/* heading */}
			<h3 className="text-lg font-bold pb-2 w-full text-start">Tempo Atual</h3>
			{/* heading cnt-1 current weather */}
			<div className="flex flex-col md:flex-row justify-center items-center md:h-[88%] h-auto w-full md:w-[400px] lg:w-[500px] primaryBColor rounded-md p-4">
				{/* current details cnt */}
				<div className="flex flex-col w-2/3 pl-2 justify-center items-center md:justify-start md:items-start order-2 md:order-1">
					<h3 className="font-bold text-lg mb-1 hidden md:block PrimaryFont">{cityName ? <>{cityName[1]}, {cityName[0]}</>:<div className="lds-dual-ring"></div>}</h3>
					<h3 className="font-bold text-5xl mb-1">{weather.temp ? <>{weather.temp.toFixed(0)}<sup>o</sup>C</>:<div className="lds-dual-ring"></div>}</h3>
					<p className="font-light mb-3" style={{'fontSize':'1rem'}}>{weather.weather ? <>{weather.weather.map(x=>{return x.main})}</>:<div className="lds-dual-ring"></div>}</p>
					<div className="w-full h-auto flex items-center justify-center md:justify-start text-center">
						<div className="bg-white px-1 py-2 rounded-lg mr-2">
							<p style={{'fontSize':'0.8rem'}}>Pressão</p>
							<p style={{'fontSize':'1rem'}}>{weather ? <>{weather.pressure}</>:<div className="lds-dual-ring"></div>}hpa</p>
						</div>
						<div className="bg-white px-1 py-2 rounded-lg mr-2">
							<p style={{'fontSize':'0.8rem'}}>Umidade</p>
							<p style={{'fontSize':'1rem'}}>{weather ? <>{weather.humidity}</>:<div className="lds-dual-ring"></div>}%</p>
						</div>
						<div className="bg-white px-1 py-2 rounded-lg mr-2">
							<p style={{'fontSize':'0.8rem'}}>Vento</p>
							<p style={{'fontSize':'1rem'}}>{weather.wind_speed ? <>{weather.wind_speed.toFixed(1)}</>:<div className="lds-dual-ring"></div>}m/hr</p>
						</div>
					</div>
				</div>
				{/* icon cnt */}
				<div className="w-fit h-auto flex flex-col sm:justify-center md:justify-end sm:items-center md:items-end sm:order-1 md:order-2" style={{'width':'200px'}}>
					<p className="font-bold text-lg md:hidden block">{cityName ? <>{cityName[1]},{cityName[0]}</>:<div className="lds-dual-ring"></div>}</p>
					{weather.weather ? <>{weather.weather.map(x=>{
					    return <img src={`https://openweathermap.org/img/wn/${x.icon}@2x.png`} alt="icon" className="w-full h-full"></img>
					})}</>:<div className="lds-dual-ring"></div>}
				</div>
			</div>
            </>
        )
}