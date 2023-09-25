import React from 'react'

interface ButtonProps {
    value: string,
    variant: "Primary" | "outline";
    onClick: ()=> void;
}

export default function Button({ value, variant }: ButtonProps) {
    if(variant === "Primary") {
        return (
            <button className="mr-4 px-10 py-2 rounded-lg bg-[#2F80ED] text-white">
              {value}
            </button>
          );
    } else {
        return (
          <button className=" px-10 py-2 rounded-lg border-[#2F80ED] border-2 text-[#2F80ED]">
            {value}
          </button>
        );
    }
}
