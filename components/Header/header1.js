"use client";

import React from "react";
import styles from "./styles.module.css";
import Link from "next/link";

export default function HeaderOne({
  handleClick,
  about,
  other2,
  reference,
  blogs,
  contact,
}) {
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <Link href={"/"}>
            <div className={styles.logoImg}>
              Port<span style={{ color: "#FFB52E" }}>folio</span>
            </div>
          </Link>
        </div>
        <div className={styles.headings}>
          <div onClick={() => handleClick(reference)}>Home</div>
          <div onClick={() => handleClick(other2)}>Skills</div>
          <div onClick={() => handleClick(blogs)}>Blogs</div>
          <div onClick={() => handleClick(about)}>About Me</div>
          <div onClick={() => handleClick(contact)}>Contact</div>
        </div>
        <div className={styles.Icons} />
      </div>
    </>
  );
}
