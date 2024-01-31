"use client";

import React from "react";
import styles from "./footer.module.css";

function Footer() {
  return (
    <main className={styles.footerMain}>
      <div>
        <div className={styles.copyRight}>
          Copyright © 2023 Muhammad Talha | All Rights Reserved
        </div>
        <div className={styles.made}>Made with 💖 by Me!</div>
      </div>
    </main>
  );
}
export default Footer;
