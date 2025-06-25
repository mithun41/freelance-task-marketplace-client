import React, { use } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";
import { toast } from "react-toastify";

const SignIn = () => {
  const { signInUser, setUser, googleSignIn } = use(AuthContext);
  const navigate = useNavigate();
  const saveUserToDB = (user) => {
    const userInfo = {
      name: user.displayName,
      email: user.email,
      photo: user.photoURL,
      createdAt: new Date(),
    };

    fetch("https://freelance-task-marketplace-server-gilt.vercel.app/users", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then(() => {
        // console.log("✅ User saved to MongoDB", data);
      });
  };
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        saveUserToDB(result.user);
        setUser(result.user);
        navigate("/");
        // console.log(result.user);
        toast("Successfully Login");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    // console.log("Sign In Cliked");
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInUser(email, password)
      .then((result) => {
        setUser(result.user);
        navigate("/");
        // console.log(result.user);
      })
      .catch((error) => toast.error(error.message));
  };
  return (
    <div className="card bg-base-100  max-w-sm mx-auto my-16 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign In now!</h1>
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white text-black border-[#e5e5e5] my-6"
        >
          <FcGoogle size={20} />
          Login with Google
        </button>
        <form onSubmit={handleSignIn}>
          <label className="label">Email</label>
          <input
            type="email"
            name="email"
            className="input"
            placeholder="Email"
          />
          <label className="label">Password</label>
          <input
            type="password"
            name="password"
            className="input"
            placeholder="Password"
          />
          <div>
            <p className="text-sm  dark:text-gray-600">
              Don't have an account yet?
              <Link
                to={"/signup"}
                rel="noopener noreferrer"
                href="#"
                className="ml-2  underline dark:text-violet-600"
              >
                Sign Up
              </Link>
            </p>
          </div>

          <button className="btn btn-neutral mt-4">Sign In</button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
