import Category from "../../components/Category/Category"
import "./Home.css"
const Home = () => {
  return (
    <div className="mb-5">
      <div className="heading">
        <img
          src="https://img-c.udemycdn.com/notices/web_carousel_slide/image/e6cc1a30-2dec-4dc5-b0f2-c5b656909d5b.jpg"
          alt="heading"
        />
        <div className="heading_text">
          <h2>Learning that gets you</h2>
          <p>Skills for your present (and your future). Get started with us.</p>
        </div>
      </div>
      <br />
      <br />
      <h2>Top categories</h2>
      <div
        className="w-100 d-flex flex-wrap gap-4 align-items-center"
        style={{ margin: "30px 0 100px" }}
      >
        {new Array(8).fill("#").map((e, i) => {
          return <Category />
        })}
      </div>
      <div className="d-flex align-items-center justify-content-around">
        <div>
          <img
            src="https://res.cloudinary.com/didddubfm/image/upload/v1691617656/instructor-1x-v3_vabmj3.jpg"
            width="500px"
            height="500px"
            alt=""
          />
        </div>
        <div className="instructorWrapper">
          <h2>Become an instructor</h2>
          <p>
            Instructors from around the world teach millions of students on
            Udemy. We provide the tools and skills to teach what you love.
          </p>
          <button>Start Teaching today</button>
        </div>
      </div>
    </div>
  )
}
export default Home
