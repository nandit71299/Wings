import React from "react";
import styles from "./ContactForm.module.css";
import { Form } from "react-router-dom";
import certifications from "../../assets/imgAssets/certifications.png";
import useIsMobile from "../../hooks/useIsMobile";

function ContactForm() {
  const isMobile = useIsMobile();
  return (
    <div className="d-flex flex-column justify-content-between align-items-center p-5">
      <div
        className={`d-flex justify-content-between w-100 ${
          isMobile ? "flex-wrap" : ""
        }`}
      >
        {/* Left Content */}
        <div
          className="d-flex flex-column justify-content-between "
          style={{ flexGrow: 1 }}
        >
          <h1 className={styles.heading}>
            Let's
            <p style={{ color: "var(--text-yellow)" }}>Connect</p>
          </h1>
          <div>
            <p className={`${styles.supportEmail}`}>
              {" "}
              support@wingstechsolutions.com
            </p>
          </div>
          <div className={styles.socialsContainer}></div>
        </div>

        {/* Form on the right */}
        <div
          className="d-flex flex-column justify-content-start"
          style={{ flexGrow: 1 }}
        >
          <Form className="w-100 d-flex flex-column">
            <div className="form-group">
              <div className="row">
                <div className="col-6">
                  <input
                    type="text"
                    className={`${styles.inputField} w-100`}
                    placeholder="Name"
                    name="name"
                    required
                  />
                </div>
                <div className="col-6">
                  <input
                    type="email"
                    className={`${styles.inputField} w-100`}
                    placeholder="Email"
                    name="email"
                    required
                  />
                </div>
                <div className="col-12 mt-3">
                  <input
                    type="number"
                    className={`${styles.inputField} w-100`}
                    placeholder="Phone"
                    name="phone"
                    required
                  />
                </div>
              </div>
            </div>

            <div className="form-group mt-3">
              <div className="row">
                <div className="col-12">
                  <textarea
                    className={`${styles.textareaField} w-100`}
                    placeholder="Message"
                    rows="5"
                    required
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              className={`${styles.submitBtn} mt-3`}
              style={{ width: isMobile ? "100%" : "" }}
            >
              Send Message
            </button>
          </Form>
        </div>
      </div>
      <div
        style={{ width: isMobile ? "100%" : "" }}
        className={styles.certificationsContainer}
      >
        <img
          src={certifications}
          alt="Certifications"
          className={styles.certifications}
        />
      </div>
    </div>
  );
}

export default ContactForm;
