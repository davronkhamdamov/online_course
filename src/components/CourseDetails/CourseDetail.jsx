import React from "react"
import "./CourseDetail.css"
import { AiFillStar, AiOutlineCheck, AiOutlineStar } from "react-icons/ai"
import { BsPlay, BsListTask } from "react-icons/bs"
import { Link } from "react-router-dom"
import { BiTimeFive } from "react-icons/bi"
import { GiDuration, GiTrophyCup, GiWorld } from "react-icons/gi"
import { FaUserGraduate } from "react-icons/fa"

const CourseDetail = () => {
  return (
    <div>
      <h2>Course details</h2>
      <div className="course_details_wrapper">
        <div className="course_heading">
          <h3>The Complete 2023 Web Development Bootcamp</h3>
          <p>
            Become a Full-Stack Web Developer with just ONE course. HTML, CSS,
            Javascript, Node, React, MongoDB, Web3 and DApps
          </p>
          <div className="d-flex gap-2 align-items-center">
            <span className="rating_title">Rating</span>
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
          <br />
          <div className="d-flex align-items-center gap-2">
            <FaUserGraduate />
            <p className="m-0">
              Created by <Link> Dr. Angela Yu</Link>
            </p>
          </div>
          <div className="d-flex align-items-center gap-2">
            <GiWorld />
            <p className="m-0">Language : English</p>
          </div>
          <br />
          <div className="learn_course">
            <h3>What you'll learn</h3>
            <div className="learn_course_items">
              <div className="item">
                <AiOutlineCheck />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
              <div className="item">
                <AiOutlineCheck />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
              <div className="item">
                <AiOutlineCheck />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
              <div className="item">
                <AiOutlineCheck />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
              <div className="item">
                <AiOutlineCheck />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
              <div className="item">
                <AiOutlineCheck />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="course_right">
          <div className="course_img">
            <img
              src="https://img-c.udemycdn.com/course/240x135/2776760_f176_10.jpg"
              alt=""
              width="350"
              height="200"
            />
            <button className="course_preview_icon">
              <BsPlay color="#eee" fontSize="30px" />
            </button>
            <span>Preview this course </span>
          </div>
          <div className="course_details">
            <div className="d-flex gap-3 align-items-center">
              <p className="course_price_text">Price :</p>
              <span className="course_price">$19.99</span>
            </div>
            <div className="course-buy-button">
              <button>Buy</button>
              <button>Save to Cart</button>
            </div>
            <div className="course_includes_wrapper">
              <p style={{ fontSize: "17px", fontWeight: "700", margin: "0" }}>
                This course includes :
              </p>
              <div className="d-flex align-items-center gap-2">
                <BiTimeFive fontSize="20px" />
                <p className="m-0 fw-medium">40 hour videos</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <BsListTask fontSize="20px" />
                <p className="m-0 fw-medium">Assignments</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <GiDuration fontSize="20px" />
                <p className="m-0 fw-medium">Full lifetime access</p>
              </div>
              <div className="d-flex align-items-center gap-2">
                <GiTrophyCup fontSize="20px" />
                <p className="m-0 fw-medium">Certificate of completion</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CourseDetail
