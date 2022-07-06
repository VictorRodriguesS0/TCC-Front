import icon from "../upload_icon.svg"

export default function Upload (){
    return (
        <>
            {/* heading */}
			<h3 className="text-lg text-start font-bold pb-2 md:w-[60%] w-full">Upload</h3>
			{/* heading cnt-2 upload cnt */}
		    <div className="flex flex-col justify-center items-center h-full md:w-[60%] w-full rounded-xl primaryBColor secondaryFont">
		    <img src={icon} alt="icon"></img>
		    <form  className="flex flex-col lg:flex-row justify-between items-center p-3 w-full">
		        <label className="w-fit  p-2 secondaryBColor hover:bg-white rounded-xl text-lg cursor-pointer">
				Upload
				<input 
		            type="file"
		            name="Upload"
					className="hidden"
		        />
				</label>
		        <input
		            type='submit'
		            className="px-3 py-2 bg-white  hover:bg-gray-400 rounded-xl cursor-pointer"
		        />
		    </form>
		    </div>
        </>
        )
}