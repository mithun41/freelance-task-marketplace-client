import React, { useContext } from "react";
import { FcGoogle } from "react-icons/fc";
import { Link, useNavigate } from "react-router";
import { AuthContext } from "../../AuthContext/AuthContext";
import { toast } from "react-toastify";

const SignUp = () => {
  const { googleSignIn, createUser, setUser, updateUser } =
    useContext(AuthContext);
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
  // Google Login
  const handleGoogleSignIn = () => {
    googleSignIn()
      .then((result) => {
        const user = result.user;
        saveUserToDB(user);
        setUser(user);

        navigate("/");
        // console.log(result.user);
        toast("Successfully Login");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
  // Email and Password Sign Up

  const handleCreateUser = (e) => {
    e.preventDefault();
    console.log("Sign In Cliked");
    const name = e.target.name.value;
    const photoURL = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, photoURL, email, password);
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;

    if (passwordRegex.test(password)) {
      // toast("successfully login");
    } else {
      return toast.error(
        "Invalid password. Must contain at least one uppercase letter, one lowercase letter, and be at least 6 characters long."
      );
    }
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        updateUser({ displayName: name, photoURL: photoURL })
          .then(() => {
            saveUserToDB(user);
            setUser({ ...user, displayName: name, photoURL: photoURL });
            navigate("/");
            toast("successfully login");
          })
          .catch((err) => toast.error(err.message));
      })

      .catch((error) => {
        toast.error(error.message);
      });
  };
  return (
    <div className="card bg-base-100  max-w-sm mx-auto my-16 shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-5xl font-bold">Sign Up now!</h1>
        <button
          onClick={handleGoogleSignIn}
          className="btn bg-white text-black border-[#e5e5e5] my-6"
        >
          <FcGoogle size={20} />
          Login with Google
        </button>
        <form onSubmit={handleCreateUser}>
          <label className="label">Name</label>
          <input type="text" name="name" className="input" placeholder="Name" />

          <label className="label">Photo URL</label>
          <input
            type="text"
            name="photo"
            className="input"
            placeholder="Photo URL"
          />
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
              Already have an account?
              <Link
                to={"/signin"}
                rel="noopener noreferrer"
                href="#"
                className="ml-2  underline dark:text-violet-600"
              >
                Sign In
              </Link>
            </p>
          </div>
          <button className="btn btn-neutral mt-4">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
