import { Link } from "react-router-dom"
import "./Category.css"

const Category = () => {
  return (
    <Link to="course/1" className="category_item">
      <div className="image_wrappar">
        <img
          src="https://s.udemycdn.com/home/top-categories/lohp-category-design-v2.jpg"
          alt=""
        />
      </div>
      <p>Design</p>
    </Link>
  )
}

export default Category
