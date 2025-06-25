import React from "react";
import { useLoaderData, useNavigate } from "react-router";

const CoffeeDetail = () => {
    const navigate = useNavigate();
	const detailedCoffee = useLoaderData();
	const {
		coffeeName,
		chefName,
		supplierName,
		taste,
		category,
		details,
		photo,
	} = detailedCoffee;
	console.log(detailedCoffee);
	return (
		<div className="text-white text-center font-rancho py-20">
            <button className="btn font-rancho bg-coffee text-3xl font-thin" onClick={()=>navigate(-1)}>Go back</button>
			<div className="w-[600px] mx-auto border p-5 rounded-2xl">
				<img className="mx-auto" src={photo} alt="" />
				<h1 className="text-6xl">{coffeeName}</h1>
				<p className="text-2xl font-raleway">
					<span className="font-bold text-3xl">Coffee Name</span>: {coffeeName}
				</p>
				<p className="text-2xl font-raleway"><span className="font-bold text-3xl">Chef</span>: {chefName}</p>
				<p className="text-2xl font-raleway">
					<span className="font-bold text-3xl">Supplier</span>: {supplierName}
				</p>
				<p className="text-2xl font-raleway"><span className="font-bold text-3xl">Taste</span>: {taste}</p>
				<p className="text-2xl font-raleway"><span className="font-bold text-3xl">Category</span>: {category}</p>
				<p className="text-2xl font-raleway"><span className="font-bold text-3xl">Description</span>:{details}</p>
			</div>
		</div>
	);
};

export default CoffeeDetail;
