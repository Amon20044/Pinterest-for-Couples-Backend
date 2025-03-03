import { useState } from "react";
import { loginUser } from "../services/api";

const Login = ({ setToken }) => {
    console.log("Login Component Loaded");

    const [form, setForm] = useState({ email: "", password: "" });
    const [message, setMessage] = useState("");

    const handleChange = (e) => {
        const updatedForm = { ...form, [e.target.name]: e.target.value };
        setForm(updatedForm);
        console.log("Updated Form:", updatedForm);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("Submitting...");
        console.log("Form Data:", form);

        try {
            const res = await loginUser(form);
            setToken(res.data.token);
            setMessage("Login successful!");
        } catch (error) {
            console.error("Login Error:", error.response || error.message);
            setMessage(error.response?.data?.message || "Login failed");
        }
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleSubmit}>
                <input 
                    type="email" 
                    name="email" 
                    placeholder="Email" 
                    value={form.email} 
                    onChange={handleChange} 
                    required 
                />
                <input 
                    type="password" 
                    name="password" 
                    placeholder="Password" 
                    value={form.password} 
                    onChange={handleChange} 
                    required 
                />
                <button type="submit">Login</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Login;
