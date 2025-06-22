import { useNavigate } from "react-router";
import bg from "../assets/more/11.png";
import { FaArrowLeftLong } from "react-icons/fa6";
const AddCoffee = () => {
    const navigate = useNavigate();
    return (
        <div
            style={{
                backgroundImage: `url(${bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="py-5"
        >
            <div className=" w-11/12 mx-auto">
                <button className="btn bg-coffee" onClick={() => navigate(-1)}>
                    <FaArrowLeftLong />
                    Back to Home
                </button>
                <div className=" px-50 bg-[#F4F3F0] py-20">
                    <h2 className="text-coffee font-rancho text-center text-2xl">
                        Add New Coffee
                    </h2>
                    <p className="text-coffee font-raleway text-center text-[12px]">
                        It is a long established fact that a reader will be
                        distraceted by the readable content of a page when
                        looking at its layout. The point of using Lorem Ipsum is
                        that it has a more-or-less normal distribution of
                        letters, as opposed to using Content here.
                    </p>
                    <div className="">
                        <form>
                            <div className="flex gap-2 mb-3">
                                <div className="w-6/12">
                                    <label
                                        htmlFor="coffeeName"
                                        className="text-coffee"
                                    >
                                        Coffee Name
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        className="border w-full text-black border-coffee rounded p-2  "
                                        name="coffeeName"
                                        required
                                        placeholder="Name"
                                    />
                                </div>
                                <div className="w-6/12">
                                    <label
                                        htmlFor="coffeeName"
                                        className="text-coffee"
                                    >
                                        Chef
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        className="border w-full text-black border-coffee rounded p-2  "
                                        name="coffeeName"
                                        required
                                        placeholder="Chef Name"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-2 mb-3">
                                <div className="w-6/12">
                                    <label
                                        htmlFor="coffeeName"
                                        className="text-coffee"
                                    >
                                        Supplier
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        className="border w-full text-black border-coffee rounded p-2  "
                                        name="coffeeName"
                                        required
                                        placeholder="Supplier Name"
                                    />
                                </div>
                                <div className="w-6/12">
                                    <label
                                        htmlFor="coffeeName"
                                        className="text-coffee"
                                    >
                                        Taste
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        className="border w-full text-black border-coffee rounded p-2  "
                                        name="coffeeName"
                                        required
                                        placeholder="Taste"
                                    />
                                </div>
                            </div>
                            <div className="flex gap-2 mb-3">
                                <div className="w-6/12">
                                    <label
                                        htmlFor="coffeeName"
                                        className="text-coffee"
                                    >
                                        Category
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        className="border w-full text-black border-coffee rounded p-2  "
                                        name="coffeeName"
                                        required
                                        placeholder="Category"
                                    />
                                </div>
                                <div className="w-6/12">
                                    <label
                                        htmlFor="coffeeName"
                                        className="text-coffee"
                                    >
                                        Details
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        className="border w-full text-black border-coffee rounded p-2  "
                                        name="coffeeName"
                                        required
                                        placeholder="Details"
                                    />
                                </div>
                            </div>
                            <div className="">
                                <div className="">
                                    <label
                                        htmlFor="coffeeName"
                                        className="text-coffee"
                                    >
                                        Photo
                                    </label>
                                    <br />
                                    <input
                                        type="text"
                                        className="border w-full text-black border-coffee rounded p-2  "
                                        name="coffeeName"
                                        required
                                        placeholder="Photo URL"
                                    />
                                </div>
                            </div><br />
                            <button className="btn w-full bg-[#331A15]">Add Coffee</button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AddCoffee;
