import {useNavigate} from "react-router-dom"

export default function PageNotFound (){
    const navigate = useNavigate()
    const homePage = () => {
        navigate("/")
    }
    return (
        <div className="w-screen h-screen flex flex-col justify-center items-center">
            <h1>OOP'S you went wrong way</h1>
            <p className="underline font-light" onClick={homePage}>Go to home page</p>
        </div>
        )
}