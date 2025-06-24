import cup from "../assets/icons/1.png"
import badge from "../assets/icons/2.png"
import grades from "../assets/icons/3.png"
import proper from "../assets/icons/4.png"
const UnderHero = () => {
    return (
        <div className="bg-[#ECEAE3] flex justify-around py-10 px-5">
            <div className="">
                <img src={cup} alt="" />
                <h2 className="text-2xl text-coffee font-rancho">Awesome Aroma</h2>
                <p className="text-[12px] font-raleway text-black">You will definitely be a fan of the design<br></br> & aroma of your coffeeAwesome Aroma</p>
            </div>
            <div className="">
                <img src={badge} alt="" />
                <h2 className="text-2xl text-coffee font-rancho">High Quality</h2>
                <p className="text-[12px] font-raleway text-black">We served the coffee to you maintaining <br></br>the best quality</p>
            </div>
            <div className="">
                <img src={grades} alt="" />
                <h2 className="text-2xl text-coffee font-rancho">Pure Grades</h2>
                <p className="text-[12px] font-raleway text-black">The coffee is made of the green coffee <br></br>beans which you will love</p>
            </div>
            <div className="">
                <img src={proper} alt="" />
                <h2 className="text-2xl text-coffee font-rancho">Proper Roasting</h2>
                <p className="text-[12px] font-raleway text-black">Your coffee is brewed by first roasting <br></br>the green coffee beans</p>
            </div>
        </div>
    );
};

export default UnderHero;