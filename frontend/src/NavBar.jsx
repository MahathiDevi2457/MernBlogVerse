import {Link} from 'react-router-dom'
const NavBar=()=>{
    return(
        <div className="flex justify-around h-16p items-center border-1 py-3 border-gray-100 w-full">
            <h2 className="font-bold">BlogVerse</h2>
            <button className="text-md text-gray-500 font-semibold px-7 py-3 rounded-xl  hover:bg-gray-200 hover:">Home</button>
            <div className="flex gap-3">
                <Link to="/SignIn" className="font-semibold text-gray-700">SignIn</Link>
                     <Link to="/SignUp" className="bg-blue-600 text-white px-2 py-0.5 rounded-md font-semibold hover:bg-blue-900 cursor-pointer">SignUp</Link>
            </div>
        </div>
    )
}
export default NavBar