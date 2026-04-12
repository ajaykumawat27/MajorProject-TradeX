import { useState } from "react";
import axios from "axios";

// small popup message using toast library
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import "./SignupLogin.css";

function Signup() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  // handle submit
  const handleSubmit = async (event) => {
    event.preventDefault(); // page reload ko rokta hai

    // Frontend validation
    if (!email || !username || !password) {
      return toast.error("All fields are required");
    }

    //it will send data in JSON (everything after ["http://localhost:8080/auth/signup"] is data) to (/auth/signup)
    // axios connects our frontend to backend
    try {
      const res = await axios.post(
        "https://tradexbackend-u8se.onrender.com/auth/signup",
        {
          email,
          username,
          password,
        },
        { withCredentials: true },
      );
      toast.success(`Welcome ${res.data.user.username} 🎉`);
    }
    catch (err) {
      // handle response from backend - user already exist! or internal server err
      if (err.response.status === 400) {
        toast.error(err.response.data.message);
      }
      else if (err.response.status === 500) {
        toast.error(err.response.data.message);
      }
      else {
      // network error / backend down
      toast.error("Server not responding");
  }
    }
  };

  return (
    <div className="form_container">
      <h2>Signup Account</h2>
      <form onSubmit={handleSubmit}>
        <ToastContainer />
        <div>
          <label>Email:</label>
          <input
            type="email"
            value={email}
            // onchange - event listner (event is an obj)
            onChange={(event) => setEmail(event.target.value)}
          />
        </div>

        <div>
          <label>Username:</label>
          <input
            type="text"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
          />
        </div>

        <div>
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
          />
        </div>

        <br />
        <button type="submit">Signup</button>
      </form>
    </div>
  );
}

export default Signup;
