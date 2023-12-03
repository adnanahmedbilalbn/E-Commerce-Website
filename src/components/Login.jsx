import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const Navigate = useNavigate();
  const [loginError, setLoginError] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {

    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Hardcoded login logic
    const userMail = "user@gmail.com";
    const userPass = "user";
    const adminMail = "admin@gmail.com";
    const adminPass = "admin";

    if (formData.email === userMail && formData.password === userPass) {
      setLoginError(null);
      Navigate("/")
    }
    else if (formData.email === adminMail && formData.password === adminPass) {
      setLoginError(null);
      Navigate("/admin")
    }
    else {
      alert("Invalid email or password. Please try again.");
      setLoginError("Invalid email or password. Please try again.");

    }
  };

  return (
    <div className="container my-3 py-3">
      <h1 className="text-center">Login</h1>
      <hr />
      <div className="row my-4 h-100">
        <div className="col-md-4 col-lg-4 col-sm-8 mx-auto">
          <form onSubmit={handleSubmit}>
            <div className="my-3">
              <label htmlFor="floatingInput">Email address</label>
              <input
                type="email"
                className="form-control"
                id="floatingInput"
                placeholder="name@example.com"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="my-3">
              <label htmlFor="floatingPassword">Password</label>
              <input
                type="password"
                className="form-control"
                id="floatingPassword"
                placeholder="Password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
              />
            </div>
            <div className="my-3">
              <p>
                New Here?{" "}
                <Link to="/register" className="text-decoration-underline text-info">
                  Register
                </Link>{" "}
              </p>
              {loginError && <p className="text-danger">{loginError}</p>}
            </div>
            <div className="text-center">
              <button className="my-2 mx-auto btn btn-dark" type="submit">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
