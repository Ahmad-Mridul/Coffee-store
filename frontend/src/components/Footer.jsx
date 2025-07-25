import footer_bg from "../assets/more/13.jpg";
import logo from "../assets/more/logo1.png";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { BsTelephoneFill } from "react-icons/bs";
import { IoMdMail } from "react-icons/io";
import { FaLocationDot } from "react-icons/fa6";
import FooterContactForm from "./FooterContactForm";
import header_bg from "../assets/more/15.jpg";
const Footer = () => {
    return (
        <>
            <div
                style={{
                    backgroundImage: `url(${footer_bg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                }}
                className="flex items-center justify-around py-5"
            >
                <div className="space-y-3">
                    <img className="w-1/9" src={logo} alt="" />
                    <h2 className="font-rancho text-3xl text-[#331A15]">
                        Espresso Emporium
                    </h2>
                    <p className="text-black text-[12px]">
                        Always ready to be your friend. Come & Contact with us
                        to share your<br></br> memorable moments, to share with
                        your best companion.
                    </p>
                    <div className="text-[#331A15] flex gap-3 text-2xl">
                        <FaFacebook />
                        <FaTwitter />
                        <FaInstagram />
                        <FaLinkedin />
                    </div>
                    <h2 className="font-rancho text-3xl text-[#331A15]">
                        Get in touch
                    </h2>
                    <div className="">
                        <div className="text-[#1b1a1a] flex gap-2 items-center">
                            <BsTelephoneFill />
                            <p>+88 01533 333 333</p>
                        </div>
                        <div className="text-[#1b1a1a] flex gap-2 items-center">
                            <IoMdMail />
                            <p>info@gmail.com</p>
                        </div>
                        <div className="text-[#1b1a1a] flex gap-2 items-center">
                            <FaLocationDot />
                            <p>72, Wall street, King Road, Dhaka</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h2 className="font-rancho text-3xl text-[#331A15]">
                        Connect with Us
                    </h2>
                    <FooterContactForm></FooterContactForm>
                </div>
            </div>
            <div className="">
                <div
                    style={{
                        backgroundImage: `url(${header_bg})`,
                        backgroundSize: "cover",
                        backgroundPosition: "center",
                        width: "100%",
                    }}
                    className="flex justify-center items-center py-2"
                >
                    <p className="font-rancho">Copyright Espresso Emporium ! All Rights Reserved</p>
                </div>
            </div>
        </>
    );
};

export default Footer;
