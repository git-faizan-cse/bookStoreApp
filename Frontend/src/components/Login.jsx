import React from "react";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import axios from "axios";
import { toast } from "react-hot-toast";

const Login = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:3000/user/login", userInfo)
      .then((response) => {
        console.log(response.data);
        // Handle successful registration (e.g., show a success message, redirect, etc.)
        if (response.status === 200) {
          setTimeout(() => {
            toast.success("Login successful!");
          }, 500);
          // toast.success("Login successful!");
          const modal = document.getElementById("my_modal_3");
          if (modal) {
            modal.close();
          } else {
            console.warn("Modal element not found");
          }
          // alert("Login successful!");
          // window.location.href = "/";
          setTimeout(() => {
            window.location.reload();
          }, 2000);
        }
        localStorage.setItem("user", JSON.stringify(response.data.user));
      })
      .catch((error) => {
        console.error("There was an error in logging in the user!", error);
        // Handle registration error (e.g., show an error message)
        toast.error("Login failed! \n" + error.response.data.message);
        // alert("Login failed! " + error.response.data.message);
      });
  };

  return (
    <div>
      <dialog id="my_modal_3" className="modal">
        <div className="modal-box">
          <form method="dialog">
            {/* <form onSubmit={handleSubmit(onSubmit)}> */}
            {/* if there is a button in form, it will close the modal */}
            {location.pathname === "/" ? (
              <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                ✕
              </button>
            ) : (
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
            )}
          </form>

          <form onSubmit={handleSubmit(onSubmit)}>
            <h3 className="font-bold text-lg">Login</h3>
            {/* Email */}
            <div className="mt-4">
              <span>Email</span>
              <br />
              <input
                className="input validator mt-1"
                type="email"
                required
                placeholder="mail@site.com"
                {...register("email", { required: true })}
              />
              <div className="validator-hint">Enter valid email address</div>
            </div>
            {/* Password */}
            <div className="mt-4">
              <span>Password</span>
              <br />
              <input
                type="password"
                className="input validator mt-1"
                required
                placeholder="Password"
                minLength="8"
                pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
                title="Must be more than 8 characters, including number, lowercase letter, uppercase letter"
                {...register("password", { required: true })}
              />
              <p className="validator-hint">
                Must be more than 8 characters, including
                <br />
                At least one number
                <br />
                At least one lowercase letter
                <br />
                At least one uppercase letter
              </p>
            </div>
            {/* Button */}
            <div className="flex justify-around flex-row">
              <button className="btn btn-soft btn-secondary mt-8">Login</button>
              <p className="mt-10">
                Not Registered?{" "}
                <Link
                  to="/signUp"
                  className="underline text-blue-500 cursor-pointer"
                >
                  Signup
                </Link>
              </p>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Login;
