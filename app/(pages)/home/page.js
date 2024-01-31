"use client";
import React, { useEffect } from "react";
import styles from "./home.module.css";
import ReactTyped from "react-typed";
import Character from "@/components/Avatar/character";
import { Canvas } from "@react-three/fiber";
import { Button } from "antd";
import { PaperClipOutlined } from "@ant-design/icons";
import ParticalsContainer from "@/components/Particals/particals";
import Aos from "aos";
import "aos/dist/aos.css";

function MainHome({ reference, about, handleClick }) {
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch("resume.pdf").then((response) => {
      response.blob().then((blob) => {
        // Creating new object of PDF file
        const fileURL = window.URL.createObjectURL(blob);
        // Setting various property values
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "resume.pdf";
        alink.click();
      });
    });
  };
  return (
    <main ref={reference} className={styles.main}>
      <div className={styles.description}>
        <ParticalsContainer />
        <div className={styles.info} data-aos="fade-left">
          <div className={styles.InfoDiv}>
            <span>Hey!</span>
            <div className={styles.Name}>
              I'm <span>Talha</span>
            </div>
            <span>
              <ReactTyped
                className={styles.Text}
                strings={["Web Developer", "Software Engineer"]}
                typeSpeed={80}
                loop
                backSpeed={70}
                cursorChar=""
                showCursor={true}
              />
            </span>
          </div>
          <div className={styles.about}>
            <text>
              I have a passion for technology.I like to craft solid and scalable
              frontend products & Backend API with great user experiences.
            </text>
          </div>
          <div className={styles.aboutme}>
            <span style={{ fontSize: 15 }}>
              <span style={{ color: "#f9b028", marginRight: 5 }}>
                Know more
              </span>
              <PaperClipOutlined
                onClick={() => handleClick(about)}
                style={{ color: "lightgray", marginRight: 10 }}
              />
              <span style={{ color: "lightgray" }}>about me</span>
            </span>
          </div>
          
          <div className={styles.Buttons}>
            <div>
              <Button onClick={onButtonClick} type="primary">
                Download Resume
              </Button>
            </div>
          </div>
        </div>
        <div className={styles.avatar}>
          <Canvas style={{ zIndex: 0 }} dpr={[0, 2]}>
            <Character />
          </Canvas>
        </div>
      </div>
    </main>
  );
}
export default React.memo(MainHome);
