import React from "react";
import { Link } from "react-router-dom";
import Login from "./login";
import { useForm } from "react-hook-form";

const SignUp = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data); // `data` is a plain object with your form fields
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
                  {...register("name", { required: true })}
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
