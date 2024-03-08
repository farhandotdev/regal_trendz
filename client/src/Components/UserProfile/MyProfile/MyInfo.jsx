import { userimg } from "../../../assets";
import "./myProfile.css"

const userInfo = {
  name: "John Doe",
  email: "john.doe@example.com",
  age: 30,
  address: "123 Main Street, Anytown, USA",
};

const MyInfo = () => {
  return (
    <div className="InfoContainer">
      <div className="ProfileImage">
        <img src={userimg} alt="" />
      </div>
      
      <div className="personalInfo">
        <h3>User Profile <button>Edit </button></h3>
        <table>
          <tbody>
            <tr>
              <td>Name: </td>
              <td>{userInfo.name}</td>
            </tr>
            <tr>
              <td>Email:</td>
              <td>{userInfo.email}</td>
            </tr>
            <tr>
              <td>Age:</td>
              <td>{userInfo.age}</td>
            </tr>
            <tr>
              <td>Address:</td>
              <td>{userInfo.address}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyInfo;
