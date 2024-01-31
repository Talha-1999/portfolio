"use client";

import React, { useEffect } from "react";
import { CheckCircleOutlined, CheckSquareOutlined } from "@ant-design/icons";
import styles from "./about.module.css";
import Aos from "aos";
import "aos/dist/aos.css";

function About({ about }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <main ref={about}>
      <div className={styles.text}>
        <h2>
          About <span>Me</span>
        </h2>
      </div>
      <div className={styles.main}>
        <div className={styles.image}>
          <div data-aos="flip-right">
            <img src="/mypic.jpeg" className={styles.Pic} />
          </div>
        </div>
        <div className={styles.info}>
          <div className={styles.info1}>
            <div className={styles.project}>
              <div>
                <p>
                  <CheckSquareOutlined />
                </p>
                <p>10+</p>
                <p>Projects Completed</p>
              </div>
            </div>
            <div className={styles.exp}>
              <div>
                <p>
                  <CheckCircleOutlined />
                </p>
                <p>3</p>
                <p>Years experience</p>
              </div>
            </div>
            <div className={styles.exp}>
              <div>
                <p>
                  <CheckCircleOutlined />
                </p>
                <p>50+</p>
                <p>Customer Reviews</p>
              </div>
            </div>
          </div>
          <div className={styles.info2}>
            <div>
              <p>
                My main focus these days is building products and leading
                projects for our clients at Upstatement. In my free time I've
                also released an online video course that covers everything you
                need to know to build a web app with the API.
                <br />
                In building JavaScript applications, I'm equipped with just the
                right tools, and can absolutely function independently of them
                to deliver fast, resilient solutions optimized for scale —
                performance and scalabilty are priorities on my radar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
export default About;
