import { useState } from "react";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import axios from "axios";

const ForgotPassword = () => {
  const styles = {
    backgroundImage: `url(${process.env.PUBLIC_URL}/images/his1.jpg)`,
    display: "flex",
    alignItems: "center",
    height: "100vh",
    margin: "0px",
  };

  const [email, setEmail] = useState("");

  const ProceedLogin = async (e) => {
    e.preventDefault();
    if (validate()) {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_SECRET_KEY}/forgotPassword?email=` +
            email,
          {
            headers: {
              "ngrok-skip-browser-warning": "true",
            },
          }
        );
        console.log("API response:", response);
        toast.success("Password reset link sent successfully.");
      } catch (error) {
        console.error("Error:", error);
        toast.error("An error occurred. Please try again later.");
      }
    }
  };

  const validate = () => {
    if (!email) {
      toast.warning("Please enter your email.");
      return false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      toast.warning("Please enter a valid email.");
      return false;
    }
    return true;
  };

  return (
    <div className="row" style={styles}>
      <form
        className="container"
        style={{ width: "30%", backgroundColor: "transparent" }}
      >
        <div
          className="card"
          style={{
            backgroundColor: "transparent",
            border: "1px solid rgba(0, 0, 0, 0)",
          }}
        >
          <div
            className="card-header"
            style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
          >
            <h2>Reset Password</h2>
          </div>
          <div className="card-body">
            <div className="form-group">
              <label>
                Email <span className="errmsg">*</span>
              </label>
              <input
                className="form-control"
                style={{
                  backgroundColor: "transparent",
                  borderColor: "rgba(0, 0, 0, 0.2)",
                }}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div
            className="card-footer"
            style={{ backgroundColor: "rgba(255, 255, 255, 0)" }}
          >
            <button
              type="submit"
              className="btn btn-primary"
              onClick={ProceedLogin}
              style={{ marginRight: "10px" }}
            >
              Reset Password
            </button>
            <button className="btn btn-primary">
              <Link
                to="/login"
                style={{ color: "white", textDecoration: "none" }}
              >
                Login
              </Link>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ForgotPassword;
