import React from "react";
import { Button } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useAuth } from "../../hooks/useAuth";
import { deleteLike, deleteTIL, postLike } from "../../api/detail";
import { useNavigate } from "react-router-dom";
import { useGetTILDetail } from "../../hooks/useGetTILDetail";

const InfoBar = ({
  tilId,
  isOwner,
  updatedAt,
  writerNickname,
  likeCount = 0,
  liked = false,
}) => {
  const navigate = useNavigate();
  const { refetch } = useGetTILDetail({ postId: tilId });

  const formattedDate = new Date(updatedAt).toLocaleDateString("ko-KR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const { isLoggedIn } = useAuth();
  // const [likedCount, setLikedCount] = React.useState(likeCount);
  // const [isLiked, setIsLiked] = React.useState(liked);
  const { data } = useGetTILDetail({ postId: tilId });

  const handleLike = () => {
    if (data?.liked) {
      deleteLike({ tilId: tilId }).then((res) => {
        refetch();
      });
    } else {
      postLike({ tilId: tilId }).then((res) => {
        refetch();
      });
    }
  };

  const handleDeletePost = () => {
    deleteTIL({ tilId: tilId }).then((res) => {
      navigate("/");
    });
  };

  const handlePatchPost = () => {
    navigate(`/posts/${tilId}`);
  };

  // useEffect(() => {
  //   setIsLiked(liked);
  // }, [isLiked]);

  return (
    <div>
      <div className="flex justify-between items-center">
        <div>
          <span className="font-bold" style={{ marginRight: "1rem" }}>
            {writerNickname}
          </span>
          <span>{formattedDate}</span>
        </div>
        <div>
          {/* 로그인 여부에 따라 버튼 노출 달라짐 */}
          {isOwner ? (
            <div className="flex">
              <Button variant="outlined" onClick={handleDeletePost}>
                삭제
              </Button>
              <Button variant="outlined" onClick={handlePatchPost}>
                수정
              </Button>
            </div>
          ) : (
            <Button
              size="medium"
              variant="outlined"
              color={data?.liked ? "#F20789" : "black"}
              startIcon={<FavoriteIcon sx={{ color: "#F20789" }} />}
              sx={{ borderRadius: "1rem" }}
              disabled={!isLoggedIn}
              onClick={handleLike}
            >
              {data?.likeCounts}
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default InfoBar;
