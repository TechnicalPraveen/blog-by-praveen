import "./topbar.css";
// import image from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { Context } from "../../context/Context";
export default function TopBar() {
  const { user, dispatch } = useContext(Context);
  const PF = "https://praveen-blog-website.herokuapp.com/images/";
  const handleLogout = () => {
    dispatch({ type: "LOGOUT" });
  };
  // console.log(user.profilePic);
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-facebook-square"></i>
        <i className="topIcon fa-brands fa-twitter-square"></i>
        <i className="topIcon fa-brands fa-pinterest-square"></i>
        <i className="topIcon fa-brands fa-instagram-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <Link className="link" to="/">
            <li className="topListItem">HOME</li>
          </Link>
          <Link className="link" to="/sidebar">
            <li className="topListItem">ABOUT</li>
          </Link>
          <Link className="link" to="/contact">
            <li className="topListItem">CONTACT</li>
          </Link>
          <Link className="link" to="/write">
            <li className="topListItem">WRITE</li>
          </Link>
          <li className="topListItem" onClick={handleLogout}>
            {user && "LOGOUT"}
          </li>
        </ul>
      </div>
      <div className="topRight">
        {user ? (
          <Link to="/settings">
            <img className="topImg" src={user.profilePic} alt="" />
          </Link>
        ) : (
          <ul className="topList">
            <li className="topListItem">
              <Link className="link" to="/login">
                LOGIN
              </Link>
            </li>
            <li className="topListItem">
              <Link className="link" to="/register">
                REGISTER
              </Link>
            </li>
          </ul>
        )}

        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
