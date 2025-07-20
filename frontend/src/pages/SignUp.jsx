import { Link } from "react-router";
import { AuthContext } from "../utils/context/ContextApi";
import { useContext, useState } from "react";

const SignUp = () => {
    const { createUser, createUserWithGoogle } = useContext(AuthContext);
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");
    const [name, setName] = useState("");
    const handleSignUp = (e) => {
        e.preventDefault();
		const newUser = {
			name,
			email
		}
		createUser(email,pass)
		.then(result=>{
			console.log(result.user);
			fetch("http://localhost:3000/users",{
				method:"POST",
				headers:{
					"Content-Type":"application/json"
				},
				body:JSON.stringify(newUser)
			})
			.then(res=>res.json())
			.then(data=>console.log(data))
		})
		.catch(err=>{
			console.log(err.message);
		})
    };
    return (
        <div className="card bg-base-300 mx-auto my-20 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <fieldset className="fieldset">
                    <label className="label">Name</label>
                    <input
                        name="name"
                        type="name"
                        className="input"
                        placeholder="Name"
						value={name}
						onChange={e=>setName(e.target.value)}
                    />
                    <label className="label">Email</label>
                    <input
                        name="email"
                        type="email"
                        className="input"
                        placeholder="Email"
						value={email}
						onChange={e=>setEmail(e.target.value)}
                    />
                    <label className="label">Password</label>
                    <input
                        name="password"
                        type="password"
                        className="input"
                        placeholder="Password"
						value={pass}
						onChange={e=>setPass(e.target.value)}
                    />
                    <button
                        className="btn btn-neutral mt-4"
                        onClick={handleSignUp}
                    >
                        SignUp
                    </button>
                </fieldset>
                <div>
                    <Link to="/login" className="link link-hover">
                        Already have an account? LogIn
                    </Link>
                </div>
                <hr />
                <span className="mx-auto">OR</span>
                <hr />
                <button className="btn btn-primary" onClick={()=>createUserWithGoogle()}>SignUp with Google</button>
            </div>
        </div>
    );
};

export default SignUp;
