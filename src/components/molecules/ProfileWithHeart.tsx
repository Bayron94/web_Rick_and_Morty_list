import React from "react";
import HeartOutlineIcon from "../atoms/icons/HeartOutlineIcon";
import HeartFilledIcon from "../atoms/icons/HeartFilledIcon";

interface ProfileWithHeartProps {
  imageUrl: string;
  size?: number;
  isStarred?: boolean;
}

const ProfileWithHeart: React.FC<ProfileWithHeartProps> = ({
  imageUrl,
  size = 75,
  isStarred = false,
}) => {
  const heartSize = size * 0.45;

  return (
    <div className="relative" style={{ width: size, height: size }}>
      <img
        src={imageUrl}
        alt="Profile"
        className="rounded-full object-cover"
        style={{ width: size, height: size }}
      />

      <div
        className="absolute bottom-1 right-0 bg-white rounded-full flex items-center justify-center"
        style={{
          width: heartSize,
          height: heartSize,
          transform: "translate(30%, 10%)",
        }}
      >
        {isStarred ? <HeartFilledIcon /> : <HeartOutlineIcon />}
      </div>
    </div>
  );
};

export default ProfileWithHeart;
