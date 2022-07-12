import moment from "moment"

export default function Prediction ({daily}){
    return (
        <>
            {/* heading */}
			
			{/* heading cnt-2 weather prediction */}
		    <div className="flex flex-col justify-center items-center md:h-[100%] h-auto md:w-3/4 w-full" style={{'gap':'0.5rem'}}>
				<h3 className="text-lg text-start font-bold pb-2   w-full">Previsão do tempo</h3>
			{/* day 1 */}
			    <div className="w-full h-[15%] primaryBColor mb-1 rounded-md flex items-center justify-center" style={{'justifyContent':'space-evenly'}}>
					<div className="w-2/6 h-full flex justify-center items-center" style={{'width':'60px'}}>{daily[2].weather ? <>{daily[2].weather.map(x=>{return <img src={`https://openweathermap.org/img/wn/${x.icon}@2x.png`} alt="icon"></img>})}</>:<div className="lds-dual-ring"></div>}</div>
				    <div className="text-center h-full flex flex-col justify-center items-center">
						<span className="block font-medium" style={{'fontSize':'0.6rem'}}>{moment(daily[1].dataPrevisao).format("yyyy-MM-DD")}</span>
						<span className="block font-bold text-lg" style={{'fontSize':'1rem'}}>{daily[2].weather ? <>{daily[2].weather.map(x=>{return x.main})}</>:<>..</>}</span>
					</div>
					<div className="h-full flex justify-center items-center text-lg lg:text-2xl font-black" style={{'fontSize':'1.4rem'}}>
					{daily[1].choveAmanha ?  <>{daily[1].choveAmanha.toFixed(0)}%
					/ {daily[1].temperaturaAr.toFixed(0)}</>:<>...</>}<sup>o</sup>C
					</div>
				</div>
				{/* day 2 */}
				<div className="w-full h-[15%] primaryBColor mb-1 rounded-md flex items-center justify-center" style={{'justifyContent':'space-evenly'}}>
					<div className="w-2/6 h-full flex justify-center items-center" style={{'width':'60px'}}>{daily[3].weather ? <>{daily[3].weather.map(x=>{return <img src={`https://openweathermap.org/img/wn/${x.icon}@2x.png`} alt="icon"></img>})}</>:<>...</>}</div>
						<div className="text-center h-full flex flex-col justify-center items-center">
							<span className="block font-medium" style={{'fontSize':'0.6rem'}}>{moment(daily[2].dataPrevisao).format("yyyy-MM-DD")}</span>
							<span className="block font-bold text-lg" style={{'fontSize':'1rem'}}>{daily[3].weather ? <>{daily[3].weather.map(x=>{return x.main})}</>:<>..</>}</span>
						</div>
						<div className="h-full flex justify-center items-center text-lg lg:text-2xl font-black" style={{'fontSize':'1.4rem'}}>
						{daily[2].choveAmanha ?  <>{daily[2].choveAmanha.toFixed(0)}%
					/ {daily[2].temperaturaAr.toFixed(0)}</>:<>...</>}<sup>o</sup>C
						</div>
					</div>
				{/* day 3 */}
				<div className="w-full h-[15%] primaryBColor mb-1 rounded-md flex items-center justify-center" style={{'justifyContent':'space-evenly'}}>
					<div className="w-2/6 h-full flex justify-center items-center" style={{'width':'60px'}}>{daily[3].weather ? <>{daily[3].weather.map(x=>{return <img src={`https://openweathermap.org/img/wn/${x.icon}@2x.png`} alt="icon"></img>})}</>:<>...</>}</div>
						<div className="text-center h-full flex flex-col justify-center items-center">
							<span className="block font-medium" style={{'fontSize':'0.6rem'}}>{moment(daily[3].dataPrevisao).format("yyyy-MM-DD")}</span>
							<span className="block font-bold text-lg" style={{'fontSize':'1rem'}}>{daily[3].weather ? <>{daily[3].weather.map(x=>{return x.main})}</>:<>..</>}</span>
						</div>
						<div className="h-full flex justify-center items-center text-lg lg:text-2xl font-black" style={{'fontSize':'1.4rem'}}>
						{daily[3].choveAmanha ?  <>{daily[3].choveAmanha.toFixed(0)}%
					/ {daily[3].temperaturaAr.toFixed(0)}</>:<>...</>}<sup>o</sup>C
						</div>
					</div>
					{/* day 5 */}
					<div className="w-full h-[15%] primaryBColor rounded-md flex items-center justify-center" style={{'justifyContent':'space-evenly'}}>
					    <div className="w-2/6 h-full flex justify-center items-center" style={{'width':'60px'}}>{daily[4].weather ? <>{daily[4].weather.map(x=>{return <img src={`https://openweathermap.org/img/wn/${x.icon}@2x.png`} alt="icon"></img>})}</>:<>...</>}</div>
							<div className="text-center h-full flex flex-col justify-center items-center">
								<span className="block font-medium" style={{'fontSize':'0.6rem'}}>{moment(daily[4].dataPrevisao).format("yyyy-MM-DD")}</span>
								<span className="block font-bold text-lg" style={{'fontSize':'1rem'}}>{daily[2].weather ? <>{daily[2].weather.map(x=>{return x.main})}</>:<>..</>}</span>
							</div>
							<div className="h-full flex justify-center items-center text-lg lg:text-2xl font-black" style={{'fontSize':'1.4rem'}}>
							{daily[4].choveAmanha ?  <>{daily[4].choveAmanha.toFixed(0)}%
					/ {daily[4].temperaturaAr.toFixed(0)}</>:<>...</>}<sup>o</sup>C
							</div>
						</div>
					</div>
        </>
        )
}