import React from "react";
import styles from "./Footer.module.css";
import useIsMobile from "../../hooks/useIsMobile";

const footerData = {
  menu: [
    {
      title: "Services",
      items: [
        {
          label: "Web Application Development",
          href: "/services/web-application-development",
        },
        {
          label: "Mobile App Development",
          href: "/services/mobile-app-development",
        },
        {
          label: "E-commerce Development",
          href: "/services/ecommerce-development",
        },
        {
          label: "Software Testing & QA",
          href: "/services/software-testing-qa",
        },
        { label: "SEO", href: "/services/seo" },
        { label: "Digital Marketing", href: "/services/digital-marketing" },
      ],
    },
    {
      title: "Outsourcing",
      items: [
        {
          label: "Laravel Developers",
          href: "/outsourcing/laravel-developers",
        },
        {
          label: "Angular Developers",
          href: "/outsourcing/angular-developers",
        },
        { label: "Next.js Developers", href: "/outsourcing/nextjs-developers" },
        {
          label: "React.js Developers",
          href: "/outsourcing/reactjs-developers",
        },
        {
          label: "Flutter Developers",
          href: "/outsourcing/flutter-developers",
        },
        {
          label: "Android Developers",
          href: "/outsourcing/android-developers",
        },
      ],
    },
    {
      title: "About Us",
      items: [
        { label: "About Us", href: "/who-are-we/about-us" },
        { label: "Contact Us", href: "/who-are-we/contact-us" },
        { label: "Privacy Policy", href: "/who-are-we/privacy-policy" },
        { label: "Terms of Services", href: "/who-are-we/terms-of-services" },
      ],
    },
    {
      title: "Work Life",
      items: [
        { label: "Careers", href: "/work-life/careers" },
        { label: "HR Policy", href: "/work-life/hr-policy" },
        { label: "Life @ Wings", href: "/work-life/life-at-wings" },
        { label: "Our Team", href: "/work-life/our-team" },
      ],
    },
  ],
};

function Footer() {
  const isMobile = useIsMobile();
  return (
    <div className={`${isMobile ? "p-1" : "pe-5"}`}>
      <footer
        className={`${styles.footerContainer} ${
          isMobile ? "p-5" : "p-3"
        } pb-5 `}
      >
        <div
          className={`px-5 ${styles.footerItemsContainer} ${
            isMobile ? "flex-wrap gap-5 w-100 p-0" : ""
          } `}
        >
          {footerData.menu.map((section, index) => (
            <div key={index}>
              <h4 className={styles.sectionTitle}>{section.title}</h4>
              <ul className={styles.list}>
                {section.items.map((item, idx) => (
                  <li key={idx} className={styles.listItem}>
                    <a href={item.href}>{item.label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
      <div className="text-center">
        <p className={styles.copyright}>
          Copyright © 2024 Wings Tech Solutions Pvt. Ltd. All rights reserved.
        </p>
        <div className={styles.dateAndTime}>
          <p>India</p>
          <p>•</p>
          <p>
            {new Date()
              .toLocaleString("en-IN", {
                hour: "2-digit",
                minute: "2-digit",
                second: "2-digit",
                hour12: true, // Optional: Use 12-hour format (AM/PM)
              })
              .toUpperCase()}
          </p>
          <p>•</p>
          <p>22° C</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
