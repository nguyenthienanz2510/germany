import classNames from "classnames/bind";
import styles from "./Header.module.scss";
import images from "../../../../assets/images";
import { NavLink } from "react-router-dom";

const cx = classNames.bind(styles);

export default function Header() {
  return (
    <header className={cx("wrapper")}>
      <div className=" container h-full mx-auto">
        <div className={cx("logo")}>
          <img src={images.logo} alt="logo" />
          <h1 className="px-2">GERMANY</h1>
        </div>
        <div className={cx("nav-bar")}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
