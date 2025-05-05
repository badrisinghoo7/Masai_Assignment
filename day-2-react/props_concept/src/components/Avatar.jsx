import React from "react";

const Avatar = ({ src, alt }) => {
  return (
    <div>
      <img
        style={{ width: "150px", height: "150px", borderRadius: "50%" }}
        src={src}
        alt={alt}
      />
    </div>
  );
};

export default Avatar;
