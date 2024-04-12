import React from "react";

export const Loading = () => {
  return (
    <div className="flex justify-center items-center h-screen z-50">
      <div className="animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-gray-900"></div>
    </div>
  );
};
