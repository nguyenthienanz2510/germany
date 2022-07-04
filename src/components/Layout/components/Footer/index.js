import classNames from "classnames/bind";
import styles from "./Footer.module.scss";

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <footer className={cx("wrapper")}>
      <div className="container h-full mx-auto flex items-center justify-center">
        <p className="">We are champion - from VietNam</p>
      </div>
    </footer>
  );
}
