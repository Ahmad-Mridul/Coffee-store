import { Link } from "react-router";
import { SlCup } from "react-icons/sl";
import bg_left from "../assets/more/4.png";
import bg_right from "../assets/more/5.png";
import { CoffeeContext } from "../utils/context/ContextApi";
import CoffeeCard from "./CoffeeCard";
import { useEffect, useState } from "react";
const PopularProducts = () => {
	const [coffees, setCoffees] = useState([]);
    useEffect(()=>{
        fetch("http://localhost:3000/coffees/")
        .then(res=>res.json())
        .then(data=>setCoffees(data))
    },[])
	return (
		<div className=" bg-white relative py-10 ">
			<div className="w-11/12 mx-auto">
				<div className="absolute z-10 top-0 left-0">
					<img src={bg_left} alt="" />
				</div>

				<div className="text-center space-y-4">
					<p className="text-black">--- Sip & Savor ---</p>
					<h2 className="font-rancho text-4xl text-coffee">
						Our Popular Products
					</h2>
					<Link
						to="/add-coffee"
						className="btn font-thin text-[16px] bg-coffee font-rancho"
					>
						Add new coffee
						<SlCup />
					</Link>
				</div>
				<div className="absolute z-10 right-0 bottom-0">
					<img src={bg_right} className="h-[500px]" alt="" />
				</div>
				<div className="grid grid-cols-2 gap-2 py-5">
					{coffees.map((coffee) => (
						<CoffeeCard
							key={coffee._id}
							coffees={coffees}
                            setCoffees={setCoffees}
							coffee={coffee}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default PopularProducts;
