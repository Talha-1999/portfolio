"use client";

import { useState } from "react";
import styles from "./styles.module.css";
import { UnorderedListOutlined } from "@ant-design/icons";

export default function MobileHeader({
  handleClick,
  about,
  other2,
  reference,
  blogs,
  contact
}) {
  const [visible, setVisible] = useState(true);
  return (
    <>
      <div className={styles.header}>
        <div className={styles.logo}>
          <div className={styles.logoImg}>
            Port<span style={{ color: "#FFB52E" }}>folio</span>
          </div>
        </div>
        <div
          className={styles.Icon}
          onClick={() => {
            setVisible(!visible);
          }}
        >
          <UnorderedListOutlined />
        </div>
        <div className={styles.MobileheaderMenu} hidden={visible}>
          <div>
            <div onClick={() => handleClick(reference)}>Home</div>
            <div onClick={() => handleClick(other2)}>Skills</div>
            <div onClick={() => handleClick(blogs)}>Blogs</div>
            <div onClick={() => handleClick(about)}>About Me</div>
            <div onClick={() => handleClick(contact)}>Contact</div>
          </div>
        </div>
      </div>
    </>
  );
}
