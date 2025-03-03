import { useState } from "react";
import { registerUser } from "../services/api";

const Register = () => {
    const [form, setForm] = useState({ name_1: "", name_2: "", partner1_email: "", partner2_email: "", password: "" });
    const [message, setMessage] = useState("");

    const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const res = await registerUser(form);
            setMessage(res.data.message);
        } catch (error) {
            setMessage(error.response?.data?.message || "Registration failed");
        }
    };

    return (
        <div>
            <h2>Register</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name_1" placeholder="Your Name" onChange={handleChange} required />
                <input type="text" name="name_2" placeholder="Partner's Name" onChange={handleChange} required />
                <input type="email" name="partner1_email" placeholder="Your Email" onChange={handleChange} required />
                <input type="email" name="partner2_email" placeholder="Partner's Email" onChange={handleChange} required />
                <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
                <button type="submit">Register</button>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
};

export default Register;
