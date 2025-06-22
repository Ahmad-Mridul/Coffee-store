const FooterContactForm = () => {
    return (
        <div>
            <form>
                <input className="border mb-3 rounded text-black" type="text" name="name" placeholder="Name" /><br />
                <input className="border mb-3 rounded text-black" type="email" name="email" placeholder="Email" /><br />
                <textarea className="border mb-3 rounded text-black" name="message" placeholder="Message"></textarea>
            </form>
        </div>
    );
};

export default FooterContactForm;