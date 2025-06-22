const FooterContactForm = () => {
    return (
        <div>
            <form>
                <input
                    className="border mb-3 rounded text-black"
                    type="text"
                    name="name"
                    placeholder="Name"
                />
                <br />
                <input
                    className="border mb-3 rounded text-black"
                    type="email"
                    name="email"
                    placeholder="Email"
                />
                <br />
                <textarea
                    cols="23"
                    className="border mb-3 rounded text-black"
                    name="message"
                    placeholder="Message"
                ></textarea>
                <br />
                <button class="border border-[#331A15] text-[#331A15] hover:bg-[#331A15] hover:text-white font-medium py-2 px-4 rounded">
                    Send a message
                </button>
            </form>
        </div>
    );
};

export default FooterContactForm;
