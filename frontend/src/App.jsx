import { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Albums from "./components/Albums";

const App = () => {
    const [token, setToken] = useState(null);
    const [userId, setUserId] = useState(null);

    return (
        <div>
            <h1>Simple Photo Album App</h1>
            {!token ? (
                <>
                    <Register />
                    <Login setToken={setToken} />
                </>
            ) : (
                <Albums token={token} userId={userId} />
            )}
            
        </div>
    );
};

export default App;
