import React from "react";
import { Link } from "react-router";

const LogIn = () => {
    return (
        <div className="card bg-base-300 mx-auto my-20 w-full max-w-sm shrink-0 shadow-2xl">
            <div className="card-body">
                <fieldset className="fieldset">
                    <label className="label">Email</label>
                    <input type="email" className="input" placeholder="Email" />
                    <label className="label">Password</label>
                    <input
                        type="password"
                        className="input"
                        placeholder="Password"
                    />
                    <div>
                        <a className="link link-hover">Forgot password?</a>
                    </div>
                    <button className="btn btn-neutral mt-4">LogIn</button>
                </fieldset>
                    <div>
                        <Link to="/signup" className="link link-hover">Don't have an account? SignUp</Link>
                    </div>
            </div>
        </div>
    );
};

export default LogIn;
