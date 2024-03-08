import "./Navigation.css"
import { userimg } from "../../../assets"
const Navigation = (profiledata) => {
  return (
    <div className="userNav">
      <div className="profileImg">
        <img src={userimg} alt="" />
        <p> Hello Same</p>
      </div>
      <div className="navElement">
      
          <li onClick={(e) => profiledata("Myprofile")}>My Profile</li>
          <li onClick={(e) => profiledata("Myorder")}>My Order</li>
          <li onClick={(e) => profiledata("Mywishlist")}>My Wishlist</li>
          <li >Logout</li>
      
      </div>
    </div>
  )
}

export default Navigation
