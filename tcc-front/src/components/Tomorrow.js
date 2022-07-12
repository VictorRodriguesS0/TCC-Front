export default function Tomorrow ({daily, cityName}){
    return (
        <>
        {/* heading */}
		<h3 className="text-lg text-start font-bold pb-2 w-full md:w-[300px]">Amanhã</h3>
		{/* heading cnt-4 tomorrow */}
		<div className="md:h-[90%] h-full w-full md:w-[300px] rounded-md primaryBColor flex flex-col justify-start items-start p-4">
			<h3 className="font-bold text-lg mb-3">{cityName ? <>{cityName[1]}, {cityName[0]}</>:<>load</>}</h3>
			<h3 className="font-bold text-5xl mb-3" style={{'fontSize':'4rem'}}>{daily[0].choveAmanha ?  <>{daily[0].choveAmanha.toFixed(2)}</>:<>...</>}%</h3>
			<p>chance de chuva</p>
			<p className="font-light mb-3" style={{'fontSize':'1rem'}}>{daily[1].weather ? <>{daily[1].weather.map(x=>{return x.main})}</>:<>..</>}</p>
			{daily[2].weather ? <>{daily[2].weather.map(x=>{return <img src={`https://openweathermap.org/img/wn/${x.icon}@4x.png`} alt="icon" style={{'align-self':'flex-end'}}></img>})}</>:<>...</>}
		</div>
        </>
        )
}