"use client";

import React from "react";
import styles from "./contact.module.css";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { Button, Input } from "antd";

function Contact({ contact }) {
  return (
    <main ref={contact} className={styles.contact}>
      <h2>
        Contact <span>Me</span>
      </h2>
      <h4>
        Just a quick chat? - DM me on LinkedIn{" "}
        <a
          target="_blank"
          href="https://www.linkedin.com/in/muhammad-talha-35173b1ab"
        >
          /in/muhammad-talha/
        </a>
      </h4>
      <div className={styles.form}>
        <div>
          <Formik
            initialValues={{ name: "", email: "", message: "" }}
            validate={(values) => {
              const errors = {};
              if (!values.email) {
                errors.email = "Required Email!";
              } else if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = "Invalid email address!";
              }
              return errors;
            }}
            onSubmit={(values, { setSubmitting }) => {
              setTimeout(() => {
                alert(JSON.stringify(values, null, 2));
                setSubmitting(false);
              }, 400);
            }}
          >
            {({
              values,
              errors,
              touched,
              handleChange,
              handleBlur,
              handleSubmit,
              isSubmitting,
              /* and other goodies */
            }) => (
              <form onSubmit={handleSubmit} className={styles.mainForm}>
                <div>
                  <Input
                    type="name"
                    name="name"
                    placeholder="Your Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.name}
                    className={styles.name}
                  />
                  <span style={{ color: "#f9b028" }}>
                    {errors.name && touched.name && errors.name}
                  </span>
                </div>
                <div>
                  <Input
                    type="email"
                    name="email"
                    className={styles.name}
                    placeholder="Your Email"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.email}
                  />
                  <span style={{ color: "#f9b028" }}>
                    {errors.email && touched.email && errors.email}
                  </span>
                </div>
                <div>
                  <Input
                    className={styles.message}
                    type="message"
                    name="message"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    value={values.message}
                    placeholder="Your Message"
                    style={{ paddingBottom: "4rem" }}
                  />
                  {errors.message && touched.message && errors.message}
                </div>
                <div>
                  <Button type="primary" disabled={isSubmitting}>
                    Submit
                  </Button>
                </div>
              </form>
            )}
          </Formik>
        </div>
      </div>
    </main>
  );
}
export default Contact;
