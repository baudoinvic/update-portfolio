import React from 'react'

const RightBanner = () => {
  return (
    <div className="w-full lgl:w-1/2 flex justify-center items-center relative">
      <img
        className="w-[300px] h-[400px] lgl:w-[550px] lgl:h-[480px] z-10"
        src="https://www.barackm.me/static/media/project2.aa85a1d7.png"
        alt="bannerImg"
        style={{
          boxShadow: "0 4px 8px rgba(173, 216, 230, 0.5)",
          background: "rgba(255, 255, 255, 0.8)",
        }}
      />
    </div>
  );
}

export default RightBanner