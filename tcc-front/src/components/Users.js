export default function Users(){
    return (
        <>
            {/* heading */}
			<div className="text-lg font-bold pb-2 w-full  text-start secondaryFont flex justify-around items-center">
			    <h3>Users</h3>
			    <input
			        type="text"
			        name="search"
			        placeholder="search user"
			        className="px-4 py-2 primaryBColor rounded-lg w-1/2"
			    />
			</div>
			{/* heading cnt-1 users info */}
            <div className="flex flex-col justify-center items-center w-full md:w-[400px] lg:w-[500px]">
                <div className="flex justify-around items-center w-full p-2 text-center primaryBColor rounded-xl mb-2 overflow-x-scroll scrollbarHide cursor-pointer">
                    <div className='w-1/3'>UserName</div>
                    <div className='w-1/3'>elonmusk@gmail.com</div>
                </div>
                <div className="flex justify-around items-center w-full p-2 text-center primaryBColor rounded-xl mb-2 overflow-x-scroll scrollbarHide cursor-pointer">
                    <div className='w-1/3'>UserName</div>
                    <div className='w-1/3'>elonmusk@gmail.com</div>
                </div>
                <div className="flex justify-around items-center w-full p-2 text-center primaryBColor rounded-xl mb-2 overflow-x-scroll scrollbarHide cursor-pointer">
                    <div className='w-1/3'>UserName</div>
                    <div className='w-1/3'>elonmusk@gmail.com</div>
                </div>
                <div className="flex justify-around items-center w-full p-2 text-center primaryBColor rounded-xl mb-2 overflow-x-scroll scrollbarHide cursor-pointer">
                    <div className='w-1/3'>UserName</div>
                    <div className='w-1/3'>elonmusk@gmail.com</div>
                </div>
                <div className="flex justify-around items-center w-full p-2 text-center primaryBColor rounded-xl mb-2 overflow-x-scroll scrollbarHide cursor-pointer">
                    <div className='w-1/3'>UserName</div>
                    <div className='w-1/3'>elonmusk@gmail.com</div>
                </div>
            </div>
        </>
        )
}
