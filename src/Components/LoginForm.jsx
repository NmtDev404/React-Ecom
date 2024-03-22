import React from 'react'
import Button from './Button';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const formSubmit = (data) => {
    console.log(data);
  };

  return (
    <>

<div className='flex justify-center items-center gap-4 pt-10 pr-16'>
        <Link to="/"><span>Home</span></Link>
        <span>/</span>
        <Link to="/signup"><span>Sign up</span></Link>
    
    </div>
      <div>
        <div
          id="main-container"
          className=" max-w-[1440px ] mt-10 bg-white m-auto flex flex-col md:flex-row items-center justify-center gap-5  "
        >
        

          <div id="form-container" className=" w-full lg:w-[50%] md:w-[50%] grid items-center justify-center relative">
            <div>
              <h1 className="text-4xl font-bold block ">Sign in</h1>
            </div>

            <div className="mt-5">
              <form onSubmit={handleSubmit(formSubmit)}>
              

                <div className=" grid grid-row-2 py-3 gap-6">
                  
                  <div>
                    <label className="font-bold text-xs tracking-widest block py-2">
                      EMAIL
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors.email ? "border-red-500" : ""
                      }`}
                      type="text"
                      placeholder="johndoe@gmail.com"
                      name="email"
                      {...register("email", {
                        required: "Input field is required",
                        pattern: {
                          value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                    <p className=" mt-2  text-red-500 font-medium ">
                      {errors.email?.message}
                    </p>
                  </div>
             
                  <div>
                    <label className="font-bold text-xs tracking-widest block py-2">
                      PASSWORD
                    </label>
                    <input
                      className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline ${
                        errors.password ? "border-red-500" : ""
                      }`}
                      type="password"
                      placeholder="**********"
                      name="password"
                      {...register("password", {
                        required: "Input field required",
                        minLength: {
                          value: 6,
                          message: "Password must be at least 6 characters",
                        },
                        pattern: {
                          value:
                            /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=]).{8,}$/,
                          message:
                            "Password must contain at least one uppercase letter, one lowercase letter, one digit, and one special character",
                        },
                      })}
                    />
                    <p className="text-red-500 font-medium">
                      {errors.password?.message}
                    </p>
                  </div>

                 
                </div>

                <div className="btn&remeber flex justify-center items-center mt-10 gap-16">
                  <div>
                    <Button btnName="Sign In" />
                  </div>
                  <div className="flex  ">
                    <input
                      id="checkbox"
                      type="checkbox"
                      className="w-4 h-4 mt-1 text-blue-600  bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                    />
                    <label className="ms-2 text-base font-medium text-gray-400 dark:text-black">
                      Remeber me{" "}
                    </label>
                  </div>
                </div>
              </form>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};


export default LoginForm
