import { AiFillStar, AiOutlineStar } from "react-icons/ai"

const Card = () => {
  return (
    <div
      style={{
        maxWidth: "300px",
        boxShadow: "0 0 10px 3px rgba(0,0,0,0.03)",
        borderRadius: "8px",
        overflow: "hidden"
      }}
    >
      <div>
        <img
          src="https://img-c.udemycdn.com/course/240x135/1565838_e54e_16.jpg"
          alt=""
          width="300"
          height="160"
          style={{ objectFit: "contain" }}
        />
      </div>
      <div className="p-2">
        <div>
          <h5>The Complete 2023 Web Development Bootcamp</h5>
        </div>
        <div>
          <p style={{ margin: "0" }}>Dr. Angela Yu</p>
          <div className="d-flex gap-2 align-items-center">
            <p style={{ margin: "0", fontWeight: "700", fontSize: "20px" }}>
              4.5
            </p>
            <div className="d-flex align-items-center">
              <AiFillStar color="#b46901" />
              <AiFillStar color="#b46901" />
              <AiFillStar color="#b46901" />
              <AiFillStar color="#b46901" />
              <AiOutlineStar />
            </div>
          </div>
          <p style={{ margin: "0", fontSize: "20px", fontWeight: "700" }}>
            $16.99
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card
