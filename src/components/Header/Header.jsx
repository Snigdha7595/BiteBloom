import "./Header.css";
import headerImg from "../../assets/header_img1.jpeg";

const Header = () => {
  return (
    <div className="header" style={{ backgroundImage: `url(${headerImg})` }}>
      <div className="header-contents">
        <h2>Where every bite tells a story</h2>
        <p>
          Deliciously crafted, thoughtfully delivered. Meals that make you
          pause… for the right reasons.
        </p>
        <button>View Menu</button>
      </div>
    </div>
  );
};

export default Header;
