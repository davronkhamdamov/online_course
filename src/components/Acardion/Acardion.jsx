import { useState } from "react"
import "./Acardion.css"
import { BsChevronLeft } from "react-icons/bs"
import { MdVideoLibrary } from "react-icons/md"

const Acardion = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="acardion_item">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="d-flex align-items-center gap-2 p-3"
      >
        <BsChevronLeft
          style={{
            transform: `rotate(${isOpen ? "90deg" : "-90deg"})`,
            transition: "0.3s"
          }}
        />
        <p className="m-0 fw-medium" style={{ fontSize: "18px" }}>
          Acardion name
        </p>
      </div>
      {isOpen &&
        new Array(5).fill("4").map((e, i) => {
          return (
            <div className="acardion_items">
              <MdVideoLibrary />
              <p className="m-0">Course part {i + 1}</p>
              <p className="m-0 ms-auto">{i + 10}:00</p>
            </div>
          )
        })}
    </div>
  )
}

export default Acardion
