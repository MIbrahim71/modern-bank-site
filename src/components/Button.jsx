import React from "react";

export default function Button({ styles, name }) {
  return (
    <button
      type="button"
      className={`py-4 px-6 bg-blue-gradient font-poppins font-medium text-[16px] text-primary outline-none ${styles}`}
    >
      {name}
    </button>
  );
}
