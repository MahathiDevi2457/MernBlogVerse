import {Link} from 'react-router-dom'
const NavBar=()=>{
    return(
        <div className="flex justify-around h-16p items-center border-1 py-3 border-gray-100 w-full">
            <h2 className="font-bold text-sm md:text-lg">BlogVerse</h2>
            <Link to="/Home" className="text-sm md:text-lg text-gray-500 font-semibold px-2 py-2 md:px-7 md:py-3 rounded-xl hover:bg-gray-200 hover:">Home</Link>
            <div className="flex gap-3">
                <Link to="/SignIn" className="font-semibold text-gray-700 text-sm mt-1 md:text-lg mb-1 ">SignIn</Link>
                     <Link to="/SignUp" className="bg-blue-600 text-white text-sm px-1 mt-0.5 md:text-lg md:px-2 md:py-0.5 rounded-md md:font-semibold hover:bg-blue-900 cursor-pointer">SignUp</Link>
            </div>
        </div>
    )
}
export default NavBar