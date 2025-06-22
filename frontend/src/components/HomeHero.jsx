import hero_bg from "../assets/more/3.png";
const HomeHero = () => {
    return (
        <div
            style={{
                backgroundImage: `url(${hero_bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
            className="flex py-50 pr-10"
        >
            <div className="w-2/4"></div>
            <div className="w-2/4">
                <h2 className="font-rancho text-4xl">Would you like a Cup of Delicious Coffee?</h2>
                <p className="font-raleway">It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.</p>
                <button className="btn font-rancho text-[18px] bg-[#E3B577] text-black font-light">Learn More</button>
            </div>
        </div>
    );
};

export default HomeHero;
