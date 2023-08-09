import { MdExpandMore } from "react-icons/md"
import Acardion from "../Acardion/Acardion"
import "./CourseContent.css"

const CourseContent = () => {
  return (
    <div className="courseContentWrapper">
      <h3>Course content</h3>
      <br />
      <div className="d-flex flex-column gap-3">
        {new Array(6).fill("#").map((e, i) => {
          return <Acardion />
        })}
        <button className="loadMoreBtn">
          Load More <MdExpandMore fontSize="25px" />
        </button>
      </div>
    </div>
  )
}

export default CourseContent
