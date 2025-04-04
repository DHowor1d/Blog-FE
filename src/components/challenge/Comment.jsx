import React from "react";

export const Comment = ({ nickname, content, createdAt, profileImage }) => {
  const formattedDate = new Date(createdAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
  return (
    <div>
      <div className="flex flex-row items-center my-2">
        <img
          className="size-16 rounded-full"
          src="https://images.unsplash.com/photo-1551963831-b3b1ca40c98e"
          alt=""
        />
        <div className="flex flex-col px-4">
          <div className="text-xl font-bold mx-1">{content}</div>
          <div flex flex-row>
            <span className="text-lg mx-1 mr-10">{nickname}</span>
            <span className="text-lg mx-3 mr-10 ">{formattedDate}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
