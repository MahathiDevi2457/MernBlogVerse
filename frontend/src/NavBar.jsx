const NavBar=()=>{
    return(
        <div className="flex justify-around h-16p items-center border-1 py-3 border-gray-100">
            <h2 className="font-bold">BlogVerse</h2>
            <button className="text-sm text-gray-500 font-semibold px-5 py-1 rounded-xl hover:bg-blue-100">Home</button>
            <div className="flex gap-3">
                <button className="font-semibold text-gray-700">SignIn</button>
                     <button className="bg-blue-600 text-white px-2 py-0.5 rounded-md font-semibold hover:bg-red-900 cursor-pointer">SignUp</button>
            </div>
        </div>
    )
}
export default NavBar