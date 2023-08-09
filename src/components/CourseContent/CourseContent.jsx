import Acardion from "../Acardion/Acardion"
import "./CourseContent.css"

const CourseContent = () => {
  return (
    <div className="courseContentWrapper">
      <h3>Course content</h3>
      <br />
      <div className="d-flex flex-column gap-3">
        {new Array(10).fill("#").map((e, i) => {
          return <Acardion />
        })}
      </div>
    </div>
  )
}

export default CourseContent
