import Stories from "./Stories";
import Posts from "./Posts";
import SideBar from "./SideBar";

const Body = () => {
  return(
    <div className="corpo">
      <div className="esquerda">
        <Stories />
        <Posts />
      </div>
      <SideBar />
    </div>
  )
}

export default Body