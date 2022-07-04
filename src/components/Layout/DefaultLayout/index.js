import classNames from "classnames/bind";
import styles from "./DefaultLayout.module.scss";
import Footer from "../components/Footer";
import Header from "../components/Header";

const cx = classNames.bind(styles);

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Header />
      <div className={cx("wrapper")}>{children}</div>
      <Footer />
    </div>
  );
}
