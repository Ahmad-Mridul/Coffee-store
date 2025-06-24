import { useContext } from "react";
import { FaEdit } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";
import Swal from "sweetalert2";
import { CoffeeContext } from "../utils/context/ContextApi";
const CoffeeCard = ({ coffee }) => {
	const {coffees,setCoffees} = useContext(CoffeeContext);
	const handleEdit = (_id) => {
		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				console.log(_id);

				Swal.fire({
					title: "Deleted!",
					text: "Your file has been deleted.",
					icon: "success",
				});
			}
		});
	};
	// end of edit handler
	const handleDelete = (_id) => {

		Swal.fire({
			title: "Are you sure?",
			text: "You won't be able to revert this!",
			icon: "warning",
			showCancelButton: true,
			confirmButtonColor: "#3085d6",
			cancelButtonColor: "#d33",
			confirmButtonText: "Yes, delete it!",
		}).then((result) => {
			if (result.isConfirmed) {
				fetch(`http://localhost:3000/coffees/${_id}`, {
					method: "DELETE",
				})
					.then((res) => res.json())
					.then((data) => {
						if (data.deletedCount > 0) {
							const remainingCoffees = coffees?.filter(coffee => coffee._id.toString() !==_id.toString());
							setCoffees(remainingCoffees);
							Swal.fire({
								title: "Deleted!",
								text: "Your file has been deleted.",
								icon: "success",
							});
						}
					});
			}
		});
	};
	// end of delete handler
	return (
		<div className="text-coffee bg-[#f3f3] flex items-center justify-between gap-4 p-4 rounded-lg shadow-md mb-4">
			<div className="">
				<img
					src={`http://localhost:3000/${coffee?.photoPath?.replace(
						/\\/g,
						"/"
					)}`}
					alt={coffee.coffeeName}
				/>
			</div>
			<div className="">
				<h3>{coffee.coffeeName}</h3>
				<p>{coffee.details}</p>
			</div>
			<div className="text-2xl space-y-4 grid grid-cols-subgrid">
				<button
					onClick={() => handleEdit(coffee._id)}
					className="btn bg-coffee border border-transparent hover:border-coffee hover:text-coffee hover:bg-transparent"
				>
					<IoEye />
				</button>
				<button className="btn bg-coffee border border-transparent hover:border-coffee hover:text-coffee hover:bg-transparent">
					<FaEdit />
				</button>
				<button
					onClick={() => handleDelete(coffee._id)}
					className="btn bg-coffee border border-transparent hover:border-coffee hover:text-coffee hover:bg-transparent"
				>
					<RiDeleteBinFill />
				</button>
			</div>
		</div>
	);
};

export default CoffeeCard;
