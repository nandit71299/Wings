import React, { useState } from "react";
import styles from "./Header.module.css";
import { Link } from "react-router-dom";
import useIsMobile from "../../../hooks/useIsMobile";

function Header() {
  const isMobile = useIsMobile();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header>
      <nav>
        <div
          className={`${styles.mainContainer} d-flex justify-content-between align-items-center`}
        >
          <div
            className={`${styles.logoImgContainer}`}
            style={{
              height: isMobile ? "100%" : "50%",
              width: isMobile ? "100%" : "50%",
            }}
          >
            <Link to={"/"}>
              <img
                className={`${styles.logoImg}`}
                src="https://www.wingstechsolutions.com/wp-content/uploads/2021/07/wings-changes-logo-3-white-v-2.png"
                alt="Logo Image"
              />
            </Link>
          </div>

          {!isMobile && (
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
                    className="text-decoration-none text-white"
                    href="/what-we-do"
                  >
                    What we do
                  </a>
                </li>
                <li>
                  <a
                    className="text-decoration-none text-white"
                    href="/careers"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="text-decoration-none text-white"
                    href="/contact"
                  >
                    Contact Us
                  </a>
                </li>
              </ul>
            </div>
          )}

          {isMobile && (
            <button className={styles.menuButton} onClick={toggleMenu}>
              ☰
            </button>
          )}
        </div>
      </nav>

      {isMobile && isMenuOpen && (
        <div className={styles.mobileMenu}>
          <button className={styles.closeButton} onClick={toggleMenu}>
            ×
          </button>
          <ul className="nav-links d-flex flex-column align-items-center">
            <li>
              <a className="text-decoration-none text-white" href="/who-are-we">
                Who are we
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-white" href="/what-we-do">
                What we do
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-white" href="/careers">
                Careers
              </a>
            </li>
            <li>
              <a className="text-decoration-none text-white" href="/contact">
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
