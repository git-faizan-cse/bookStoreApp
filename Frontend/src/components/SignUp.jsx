import React from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import { useForm } from "react-hook-form";
import axios from "axios";
import toast from "react-hot-toast";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo = {
      fullname: data.fullname,
      email: data.email,
      password: data.password,
    };

    await axios
      .post("http://localhost:3000/user/signup", userInfo)
      .then((response) => {
        console.log(response.data);
        // Handle successful registration (e.g., show a success message, redirect, etc.)
        if (response.status === 201) {
          // alert("Registration successful! Please log in.");
          toast.success("Registration successful! Please log in.");
          // window.location.href = "/";
        }
        localStorage.setItem("user", JSON.stringify(response.data.user));
      })
      .catch((error) => {
        console.error("There was an error registering the user!", error);
        // Handle registration error (e.g., show an error message)
        // alert("Registration failed! " + error.response.data.message);
        toast.error("Registration failed! \n" + error.response.data.message);
      });
  };

  return (
    <>
      <div className="flex h-screen items-center justify-center modal modal-open">
        <div className="modal-box">
          <div className="" method="">
            {/* <form method="div"> */}
            <form onSubmit={handleSubmit(onSubmit)}>
              {/* if there is a button in form, it will close the modal */}
              <Link
                to="/"
                className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
              >
                ✕
              </Link>
              {/* </form> */}
              <h3 className="font-bold text-lg">Sign Up</h3>

              {/* <form onSubmit={handleSubmit(onSubmit)}> */}
              {/* Name */}
              <div className="mt-4">
                <span>Name</span>
                <br />
                <input
                  className="input mt-1"
                  type="text"
                  required
                  placeholder="Enter your Full Name"
                  {...register("fullname", { required: true })}
                />
              </div>
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
                <button className="btn btn-soft btn-secondary mt-8">
                  Sign Up
                </button>
                <div className="mt-10">
                  Have an Account?{" "}
                  <button
                    className="underline text-blue-500 cursor-pointer"
                    onClick={() =>
                      document.getElementById("my_modal_3").showModal()
                    }
                  >
                    Login
                  </button>
                  <Login />
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
