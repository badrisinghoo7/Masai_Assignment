import React from "react";
import Avatar from "./Avatar";
import UserInfo from "./UserInfo";

const UserProfile = ({ src, alt, name, email, bio }) => {
  return (
    <div>
      <Avatar src={src} alt={alt} />
      <UserInfo name={name} email={email} bio={bio} />
    </div>
  );
};

export default UserProfile;
