import Swal from "sweetalert2";

const EditModal = ({ coffee, coffees, setCoffees, setIsModalOpen }) => {
    const {
        coffeeName,
        chefName,
        supplierName,
        taste,
        category,
        details,
        photo
    } = coffee;

    const handleUpdateCoffee = (e) => {
        e.preventDefault();

        const form = e.target;
        const updatedCoffee = {
            coffeeName: form.coffeeName.value,
            chefName: form.chefName.value,
            supplierName: form.supplierName.value,
            taste: form.taste.value,
            category: form.category.value,
            details: form.details.value,
            photo: form.photo.value
        };

        fetch(`http://localhost:3000/coffees/${coffee._id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(updatedCoffee)
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    Swal.fire("Updated!", "Coffee information updated.", "success");

                    const updatedCoffees = coffees.map((c) =>
                        c._id === coffee._id ? { ...c, ...updatedCoffee } : c
                    );
                    setCoffees(updatedCoffees);

                    setIsModalOpen(false);
                }
            })
            .catch((err) => console.error(err));
    };

    return (
        <form onSubmit={handleUpdateCoffee}>
            <div className="flex gap-2 mb-3">
                <div className="w-6/12">
                    <label htmlFor="coffeeName" className="text-coffee">
                        Coffee Name
                    </label>
                    <br />
                    <input
                        type="text"
                        className="border w-full text-black border-coffee rounded p-2"
                        name="coffeeName"
                        defaultValue={coffeeName}
                    />
                </div>
                <div className="w-6/12">
                    <label htmlFor="chefName" className="text-coffee">
                        Chef
                    </label>
                    <br />
                    <input
                        type="text"
                        className="border w-full text-black border-coffee rounded p-2"
                        name="chefName"
                        defaultValue={chefName}
                    />
                </div>
            </div>

            <div className="flex gap-2 mb-3">
                <div className="w-6/12">
                    <label htmlFor="supplierName" className="text-coffee">
                        Supplier
                    </label>
                    <br />
                    <input
                        type="text"
                        className="border w-full text-black border-coffee rounded p-2"
                        name="supplierName"
                        defaultValue={supplierName}
                    />
                </div>
                <div className="w-6/12">
                    <label htmlFor="taste" className="text-coffee">
                        Taste
                    </label>
                    <br />
                    <input
                        type="text"
                        className="border w-full text-black border-coffee rounded p-2"
                        name="taste"
                        defaultValue={taste}
                    />
                </div>
            </div>

            <div className="flex gap-2 mb-3">
                <div className="w-6/12">
                    <label htmlFor="category" className="text-coffee">
                        Category
                    </label>
                    <br />
                    <input
                        type="text"
                        className="border w-full text-black border-coffee rounded p-2"
                        name="category"
                        defaultValue={category}
                    />
                </div>
                <div className="w-6/12">
                    <label htmlFor="details" className="text-coffee">
                        Details
                    </label>
                    <br />
                    <input
                        type="text"
                        className="border w-full text-black border-coffee rounded p-2"
                        name="details"
                        defaultValue={details}
                    />
                </div>
            </div>

            <div className="">
                <label htmlFor="photo" className="text-coffee">
                    Photo
                </label>
                <br />
                <input
                    type="text"
                    className="border w-full text-black border-coffee rounded p-2"
                    name="photo"
                    defaultValue={photo}
                />
            </div>

            <br />

            <button className="btn w-full bg-[#331A15] text-white">
                Update Coffee
            </button>
        </form>
    );
};

export default EditModal;
