import Card from "../../components/Card/Card"

const Home = () => {
  return (
    <div
      className="w-100 d-flex flex-wrap gap-4 align-items-center"
      style={{ margin: "60px 0 100px" }}
    >
      {new Array(110).fill("#").map((e, i) => {
        return <Card />
      })}
    </div>
  )
}
export default Home
