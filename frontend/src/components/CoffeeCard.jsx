import { FaEdit } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";
import { Link } from "react-router";
import Swal from "sweetalert2";
import { Button,Modal } from "antd";
import { useState } from "react";
const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
	const [isModalOpen, setIsModalOpen] = useState(false);
	const showModal = () => {
		setIsModalOpen(true);
	};
	const handleOk = () => {
		setIsModalOpen(false);
	};
	const handleCancel = () => {
		setIsModalOpen(false);
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
						console.log(data);
						if (data.deletedCount > 0) {
							Swal.fire({
								title: "Deleted!",
								text: "Your item has been deleted.",
								icon: "success",
							});
							const remaining = coffees.filter(
								(coffee) => coffee._id !== _id
							);
							setCoffees(remaining);
						}
					});
			}
		});
	};

	// end of delete handler
	return (
		<div className="text-coffee bg-[#f3f3] flex items-center justify-between gap-4 p-4 rounded-lg shadow-md mb-4 z-20">
			<div className="">
				<img src={coffee.photo} alt={coffee.coffeeName} />
			</div>
			<div className="">
				<h3>{coffee.coffeeName}</h3>
				<p>{coffee.details}</p>
			</div>
			<div className="text-2xl space-y-4 grid grid-cols-subgrid">
				<Link
					to={`/coffees/${coffee._id}`}
					className="btn bg-coffee border border-transparent hover:border-coffee hover:text-coffee hover:bg-transparent"
				>
					<IoEye />
				</Link>
				<button onClick={showModal} className="btn bg-coffee border border-transparent hover:border-coffee hover:text-coffee hover:bg-transparent">
					<FaEdit />
				</button>
				<button
					onClick={() => handleDelete(coffee._id)}
					className="btn bg-coffee border border-transparent hover:border-coffee hover:text-coffee hover:bg-transparent"
				>
					<RiDeleteBinFill />
				</button>
			</div>
			<>
				<Modal
					title="Basic Modal"
					closable={{ "aria-label": "Custom Close Button" }}
					open={isModalOpen}
					onOk={handleOk}
					onCancel={handleCancel}
				>
					<p>Some contents...</p>
					<p>Some contents...</p>
					<p>Some contents...</p>
				</Modal>
			</>
		</div>
	);
};

export default CoffeeCard;
