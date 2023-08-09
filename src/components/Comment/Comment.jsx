import { useState } from "react"
import "./Comment.css"
import {
  AiFillStar,
  AiOutlineDislike,
  AiOutlineLike,
  AiOutlineStar,
  AiFillLike,
  AiFillDislike
} from "react-icons/ai"
import { BiDotsVerticalRounded } from "react-icons/bi"
const Comment = () => {
  const [isLiked, setIsLiked] = useState(false)
  const [DisLiked, setDIsLiked] = useState(false)
  return (
    <div className="comment_item">
      <div className="d-flex align-items-center gap-3 mb-3">
        <div className="user_profile">RF</div>
        <div>
          <p className="comment_user_name">Rajesh V.</p>
          <div className="d-flex align-items-center">
            <AiFillStar fontSize="15" color="#b46901" />
            <AiFillStar fontSize="15" color="#b46901" />
            <AiFillStar fontSize="15" color="#b46901" />
            <AiFillStar fontSize="15" color="#b46901" />
            <AiOutlineStar />
            <p className="m-0 ms-3">3 days ago</p>
          </div>
        </div>
        <button className="moreButton">
          <BiDotsVerticalRounded fontSize="20px" />
        </button>
      </div>
      <p>
        This Course is awesome with all good learning stuff with challenges to
        practiceThanks for a giving a wonderful learning experience.
      </p>
      <div className="d-flex align-items-center gap-3">
        <span style={{ fontSize: "14px" }}>Helpful?</span>
        <div className="comment_like_btn">
          <button
            onClick={() => {
              if (DisLiked && !isLiked) {
                setIsLiked(!isLiked)
                setDIsLiked(!DisLiked)
              }
              setIsLiked(!isLiked)
            }}
          >
            {isLiked ? <AiFillLike /> : <AiOutlineLike />}
          </button>
          <button
            onClick={() => {
              if (!DisLiked && isLiked) {
                setIsLiked(!isLiked)
                setDIsLiked(!DisLiked)
              }
              setDIsLiked(!DisLiked)
            }}
          >
            {DisLiked ? <AiFillDislike /> : <AiOutlineDislike />}
          </button>
        </div>
      </div>
    </div>
  )
}
export default Comment
