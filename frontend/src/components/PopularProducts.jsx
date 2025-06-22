import { Link } from "react-router";
import { SlCup } from "react-icons/sl";

const PopularProducts = () => {
    return (
        <div className="w-11/12 mx-auto py-5">
            <Link
                to="/add-coffee"
                className="btn font-thin text-[16px] bg-coffee font-rancho"
            >
                Add new coffee
                <SlCup />
            </Link>
        </div>
    );
};

export default PopularProducts;
