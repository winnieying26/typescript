import React, { useState } from "react";
import { use } from "react";

const RegisterForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  return (
    <form className="register">
      <h1>Register Form</h1>
      <div>
        <label>username:</label>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
      </div>

      <div>
        <label>email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div>
        <label>password</label>
        <input
        type="password" 
        placeholder="Enter your password"
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        required />
      </div>
      <div>
        <label>confirm password</label>
        <input type="password" placeholder="Confirm your password" 
         value={confirmPassword}
        onChange={(e)=>setConfirmPassword(e.target.value)}
        required />
      </div>
      <button>Register</button>
    </form>
  );
};

export default RegisterForm;
