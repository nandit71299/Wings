import React from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <header>
      <nav>
        <div
          className={`${styles.mainContainer} d-flex justify-content-between align-items-center`}
        >
          <div className={`${styles.logoImgContainer}`}>
            <Link to={"/"}>
              <img
                className={`${styles.logoImg}`}
                src="https://www.wingstechsolutions.com/wp-content/uploads/2021/07/wings-changes-logo-3-white-v-2.png"
                alt="Logo Image"
              />
            </Link>
          </div>
          <div>
            <ul className="nav-links d-flex gap-5 m-0 px-3">
              <li>
                <a
                  className="text-decoration-none text-white"
                  href="/who-are-we"
                >
                  Who are we
                </a>
              </li>
              <li>
                <a
                  href="/what-we-do"
                  className="text-decoration-none text-white"
                >
                  What we do
                </a>
              </li>
              <li>
                <a href="/careers" className="text-decoration-none text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="/contact" className="text-decoration-none text-white">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
