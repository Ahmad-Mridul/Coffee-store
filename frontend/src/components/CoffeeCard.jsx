import { FaEdit } from "react-icons/fa";
import { IoEye } from "react-icons/io5";
import { RiDeleteBinFill } from "react-icons/ri";

const CoffeeCard = ({ coffee }) => {
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
            <div className="text-2xl space-y-4">
                <IoEye />
                <FaEdit />
                <RiDeleteBinFill />
            </div>
        </div>

    );
};

export default CoffeeCard;
