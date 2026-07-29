import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Singup.css";

const Singup = () => {
    const navigate = useNavigate();

    const [inputValue, setInputValue] = useState({
        fullName: "",
        email: "",
        password: "",
    });

    const { fullName, email, password } = inputValue;

    const handleChange = (e) => {
        setInputValue({
            ...inputValue,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!fullName || !email || !password) {
            toast.error("Please fill all fields");
            return;
        }

        try {
            const { data } = await axios.post(
                "https://zerodha-backend-j83m.onrender.com/api/auth/signup",
                inputValue
            );

            if (data.success) {
                toast.success(data.message);

                setInputValue({
                    fullName: "",
                    email: "",
                    password: "",
                });

                setTimeout(() => {
                    navigate("/login");
                }, 1500);
            } else {
                toast.error(data.message);
            }
        } catch (error) {
            toast.error(
                error.response?.data?.message || "Something went wrong"
            );
        }
    };

    return (
        <>
            <ToastContainer position="top-right" autoClose={2000} />

            <div className="signup-page">

                {/* Left Side */}
                <div className="signup-left">

                    <img
                        src="https://zerodha.com/static/images/account_open.svg"
                        alt="Signup"
                    />

                    <h1>Open a free demat and trading account</h1>

                    <p>
                        Start investing in stocks, mutual funds and more with a modern
                        trading experience.
                    </p>

                </div>

                {/* Right Side */}

                <div className="signup-right">

                    <div className="signup-card">

                        <h2>Create Account</h2>

                        <p>
                            Join Zerodha in less than a minute.
                        </p>

                        <form onSubmit={handleSubmit}>

                            <input
                                type="text"
                                name="fullName"
                                placeholder="Full Name"
                                value={fullName}
                                onChange={handleChange}
                            />

                            <input
                                type="email"
                                name="email"
                                placeholder="Email Address"
                                value={email}
                                onChange={handleChange}
                            />

                            <input
                                type="password"
                                name="password"
                                placeholder="Password"
                                value={password}
                                onChange={handleChange}
                            />

                            <button type="submit">
                                Create Account
                            </button>

                        </form>

                        <p className="login-text">
                            Login page coming soon...
                        </p>

                    </div>

                </div>

            </div>
        </>
    );
};

export default Singup;