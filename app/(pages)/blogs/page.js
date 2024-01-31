"use client";

import React, { useState } from "react";
import styles from "./blogs.module.css";
import { maindata } from "@/components/data/local";

function Blogs({ blogs }) {
  const [menuName, setMenuName] = useState(maindata[0].type);
  const [data, setData] = useState(maindata[0].websites);

  const handleMenu = (val) => {
    setMenuName(val);
    const res = maindata.filter((item) => {
      return item.type == val;
    });
    res.length && setData(res[0].websites);
  };

  return (
    <main className={styles.body} ref={blogs}>
      <h2>
        My <span>Blogs</span>
      </h2>
      <div className={styles.menu}>
        <div className={styles.Mainmenu}>
          <div>
            {maindata.map((val) => (
              <div
                style={{
                  backgroundColor: menuName == val.type ? "orange" : "",
                }}
                onClick={() => handleMenu(val.type)}
              >
                {val.type}
              </div>
            ))}
          </div>
        </div>
        <div className={styles.Blogs}>
          {data.map((val) => (
            <div>
              <div style={{ margin: 10 }}>
                <img
                  className={styles.BlogImg}
                  alt="Not Found"
                  src={val.image}
                />
              </div>
              <div style={{ marginLeft: 10 }}>
                <span>{val.title}</span>
                <p>{val.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
export default Blogs;
