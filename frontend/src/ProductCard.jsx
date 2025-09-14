const ProductCard=()=>{
return(
    <div className="border-2 border-black w-[300px] flex flex-col items-center gap-2 pt-4 pb-15 rounded-2xl bg-blue-100">
        <img src="chocolate.jpg" className="w-[150px] h-[150px] border-1 border-black  rounded-full"></img>
       <div className="flex flex-col gap-2 items-center ">
        <h2 className="font-extrabold text-lg text-amber-950 font-sans">CHOCOLATE</h2>
        <p className="text-cyan-950 text-center px-4">This ia a delicious snack and it is good for heart</p>
        <p className="font-semibold text-xl font-serif">199/-</p>
        </div>
        <button className="bg-green-400 border-black border-2 w-[80%] py-0.5 rounded-full cursor-pointer hover:bg-emerald-700">Add to Cart</button>
    </div>
)
}

export default ProductCard