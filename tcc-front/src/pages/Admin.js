import {useState} from "react"
import FileLog from "../components/FileLog"
import Users from "../components/Users"
import Upload from "../components/Upload"
import AdminGraph from "../components/AdminGraph"
import {useNavigate} from "react-router-dom"

export default function Admin (){
    const navigate=useNavigate()
    
    const navigateToLoginSignUp = () => {
        navigate("/adminloginsignup")
    }
    
    return (
        <>
            <header className="max-w-[850px] h-auto flex justify-between px-2 md:px-0 py-2 font-bold m-4 md:mx-auto  md:w-[700px] lg:w-[850px]">
				<h1>Weather Forecast</h1>
				<p onClick={navigateToLoginSignUp} className="cursor-pointer">Login / SignUp</p>
            </header>
				{/*main body*/}
				<main className="max-w-[850px] h-auto grid overflow-hidden md:grid-rows-2 md:grid-cols-2 grid-rows-4 grid-cols-1 md:gap-4 px-2 md:px-0 secondaryFont m-4 lg:mx-auto gap-16 md:m-[20px]" >
				    {/*wrapper 1*/}
				    <div className="scrollbarHide overflow-y-scroll h-full w-full sm:w-[300px] md:w-[500px] flex flex-col justify-center md:block items-center">
				        <FileLog/>
				    </div>
				    <div className="flex flex-col md:justify-end justify-center md:items-end items-center h-[350px]">
				        <Upload/>
				    </div>
				    <div className=" scrollbarHide h-full max-w-[400px] sm:w-[300px] md:w-[500px] flex flex-col justify-center md:block items-center overflow-y-scroll">
				        <Users/>
				    </div>
				    <div className="md:h-[300px] h-auto flex flex-col justify-center items-center md:items-end w-auto">
				        <AdminGraph/>
				    </div>
				</main>
        </>
        )
}