import React from "react";

export default function InputField({value,onChange,type,placeholder}){
    return (
        <div className="bg-pink-200 m-2 border p-4 rounded-md shadow-md w-[480px]">
            <input type={type}
            className="w-full p-3 bg-white"
            value={value}
            onChange={onChange} placeholder={placeholder}
            />
        </div>
    )
}