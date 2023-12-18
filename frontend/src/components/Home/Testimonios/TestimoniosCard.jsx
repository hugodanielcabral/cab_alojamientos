import React from "react";

export const TestimoniosCard = ({ name, avatar, opinion }) => {
  return (
    <div className="max-w-md mx-auto mb-4 overflow-hidden rounded-md bg-[#1D232A] shadow-black shadow-lg border border-gray-700 mt-10">
      <div className="p-4">
        <div className="flex items-center">
          <div className="avatar">
            <div className="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
              <img src={avatar} />
            </div>
          </div>
          <div className="ml-2">
            <p className="text-lg font-medium text-secondary">{name}</p>
          </div>
        </div>
        <div className="mt-4">
          <p className="text-primary">{opinion}</p>
        </div>
      </div>
    </div>
  );
};
