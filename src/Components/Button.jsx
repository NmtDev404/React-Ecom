import React from "react";

const Button = (props) => {
  const {btnName} = props;
  return (
    <>
      <div>
        <button
          type="submit"
          className="py-3 px-10 font-normal text-[14px] cursor-pointer text-white tracking-widest rounded-sm hover:bg-red-500 duration-300 bg-zinc-900  ease-linear"
          
        >
          {btnName}
        </button>
      </div>
    </>
  );
};

export default Button;
