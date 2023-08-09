import CourseContent from "../../components/CourseContent/CourseContent"
import CourseDetail from "./../../components/CourseDetails/CourseDetail"
import "./courseDetails.css"
import { BiRadioCircle } from "react-icons/bi"
import { AiFillStar } from "react-icons/ai"
import Comment from "../../components/Comment/Comment"

const CourseDetails = () => {
  return (
    <>
      <CourseDetail />
      <CourseContent />
      <br />
      <div>
        <h2>Requirements</h2>
        <div className="requirement_list pt-2">
          {[
            `No programming experience needed - I'll teach you everything you need to know`,
            "A computer with access to the internet",
            "No paid software required",
            "I'll walk you through, step-by-step how to get all the software installed and set up"
          ].map((e) => {
            return (
              <div className="d-flex gap-2 align-items-center mt-1">
                <BiRadioCircle />
                <p className="m-0 fs-6">{e}</p>
              </div>
            )
          })}
        </div>
        <br />
        <br />
        <div>
          <h2>Description</h2>
          <p>
            Welcome to the Complete Web Development Bootcamp, the only course
            you need to learn to code and become a full-stack web developer.
            With 150,000+ ratings and a 4.8 average, my Web Development course
            is one of the HIGHEST RATED courses in the history of Udemy! We'll
            take you step-by-step through engaging video tutorials and teach you
            everything you need to know to succeed as a web developer. The
            course includes over 65 hours of HD video tutorials and builds your
            programming knowledge while making real-world websites and web apps.
          </p>
        </div>
        <div className="mt-5">
          <div className="d-flex gap-3 align-items-center">
            <AiFillStar fontSize="30px" color="#b46901" />
            <h4 className="m-0 fw-bold">
              4.7 course rating <span style={{ opacity: "0.6" }}>•</span> 310K
              ratings
            </h4>
          </div>
          <div className="comment_wrapper">
            {new Array(5).fill("2").map(() => {
              return <Comment />
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default CourseDetails
