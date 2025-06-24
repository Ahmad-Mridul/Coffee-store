import header_bg from "../assets/more/15.jpg"
import logo from "../assets/more/logo1.png"
const Header = () => {
    return (
        <div style={{
            backgroundImage:`url(${header_bg})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            width: "100%"
        }}
        className="flex justify-center items-center py-2">
            <img className="h-[100px]" src={logo} alt="" />
            <h2 className="font-rancho text-2xl">Espresso Emporium</h2>
        </div>
    );
};

export default Header;
