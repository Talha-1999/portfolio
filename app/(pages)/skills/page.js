"use client";

import React from "react";
import styles from "./skills.module.css";

function MySkills() {
  return (
    <section className={styles.skills}>
      <h2>
        My <span>Skills</span>
      </h2>
      <div className={styles.skills_row}>
        <div className={styles.skills_column}>
          <h3 className={styles.title}>Coding Skills</h3>
          <div className={styles.skills_box}>
            <div className={styles.skills_content}>
              <div className={styles.progress}>
                <h3>
                  HTML / CSS<span>80%</span>
                </h3>
                <div className={styles.bar}>
                  <span></span>
                </div>
              </div>

              <div className={styles.progress}>
                <h3>
                  JavaScript / Typescript <span>70%</span>
                </h3>
                <div className={styles.bar}>
                  <span></span>
                </div>
              </div>

              <div className={styles.progress}>
                <h3>
                  Redux / Redux-Saga <span>65%</span>
                </h3>
                <div className={styles.bar}>
                  <span></span>
                </div>
              </div>

              <div className={styles.progress}>
                <h3>
                  Python <span>50%</span>
                </h3>
                <div className={styles.bar}>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.skills_column}>
          <h3 className={styles.title}>Professional Skills</h3>
          <div className={styles.skills_box}>
            <div className={styles.skills_content}>
              <div className={styles.progress}>
                <h3>
                  ReactJS / NextJS<span>80%</span>
                </h3>
                <div className={styles.bar}>
                  <span></span>
                </div>
              </div>

              <div className={styles.progress}>
                <h3>
                  NestJs / Express<span>50%</span>
                </h3>
                <div className={styles.bar}>
                  <span></span>
                </div>
              </div>

              <div className={styles.progress}>
                <h3>
                  Postgresql <span>50%</span>
                </h3>
                <div className={styles.bar}>
                  <span></span>
                </div>
              </div>

              <div className={styles.progress}>
                <h3>
                  AWS <span>50%</span>
                </h3>
                <div className={styles.bar}>
                  <span></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
export default MySkills;
