import { useState } from "react";
import signin from "./assets/sign-up.png";

const SignIn = () => {
  const [user, setUser] = useState({
    name: "",
    mob: "",
    email: "",
    password: "",
  });

  const [userError, setuserError] = useState({})

  const handleChange = (e) => {
    setUser({...user,[e.target.name]:e.target.value});
  };

  const handleSubmit = (e)=>{
    e.preventDefault()
    const newError = {}
    if (user.name == '') {
      newError.name = 'please enter your name'
    }else if (user.mob == '') {
      newError.mob = 'please enter your mobile number'
    }else if(isNaN(user.mob)){
      newError.mob = 'please enter digit only'
    }else if(!(user.mob.length ==10)){
      newError.mob = 'please enter valid mobile number'
    }else if (user.email == '') {
      newError.email = 'please enter your email '
    }else if(user.email.indexOf("@")<=0){
      newError.email = '"@" invalid position'
    }else if((user.email.charAt(user.email.length - 4)!=".")&&(user.email.charAt(user.email.length - 3)!=".")){
      newError.email = '"." invalid position'
    }else if (user.password == '') {
      newError.password = 'please enter your password '
    }else if(!(user.password.length >= 8)){
      newError.password = 'password should be greater than 8'
    }else{
    setUser({
    name: "",
    mob: "",
    email: "",
    password: "",
    })
    }

    setuserError(newError)
  }

  return (
    <section className="mt-10 ">
      <div className=" w-full sm:px-5 md:px-20 py-10 mx-auto flex gap-5 md:flex-row sm:flex-col justify-between items-center ">
        <div className=" w-full md:w-1/2 ">
          <img className=" w-full" src={signin} />
        </div>
        <div className=" bg-[#cad2c5]  rounded-lg sm:p-4 md:p-8 flex flex-col md:ml-auto md:w-1/2 relative z-10 shadow-md">
          <h2 className="text-gray-900 text-3xl mb-1 font-medium title-font">
            Sign Up
          </h2>
          <p className="leading-relaxed mb-5 text-gray-900">
            or{" "}
            <span className=" text-orange-600 font-semibold">
              login to your account
            </span>
          </p>
          <form onSubmit={handleSubmit}>
            <div className="relative mb-4">
              <label
                htmlFor="name"
                className="leading-7 text-lg text-gray-900 "
              >
                Full Name :
              </label>
              <input
                type="text"
                id="name"
                name="name"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
                value={user.name}
              />
              <p className=" font-semibold text-red-600">{userError.name }</p>
            </div>
            <div className="relative mb-4">
              <label htmlFor="mob" className="leading-7 text-lg text-gray-900 ">
                Mobile :
              </label>
              <input
                type="text"
                id="mob"
                name="mob"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
                value={user.mob}
              />
              <p className=" font-semibold text-red-600">{userError.mob }</p>
            </div>
            <div className="relative mb-4">
              <label
                htmlFor="email"
                className="leading-7 text-lg text-gray-900 "
              >
                Email :
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
                value={user.email}
              />
              <p className=" font-semibold text-red-600">{userError.email }</p>
            </div>

            <div className="relative mb-4">
              <label
                htmlFor="password"
                className="leading-7 text-lg text-gray-900 "
              >
                Password :
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-900 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                onChange={handleChange}
                value={user.password}
              />
              <p className=" font-semibold text-red-600">{userError.password }</p>
            </div>

            <button className="text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:bg-orange-500 rounded text-lg">
              Sign Up
            </button>
          </form>
          <p className="text-sm text-gray-900 mt-3">
            By creating an account, I accept the
            <span className=" font-semibold">
              Terms & Conditions & Privacy Policy
            </span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default SignIn;
