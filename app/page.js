"use client";

import React, { useRef, useEffect, useState } from "react";
import Loading from "@/components/Loading/page";
import Header from "@/components/Header/header";
import Footer from "@/components/Footer/footer";
import Contact from "./(pages)/contact/page";

const About = React.lazy(() => import("./(pages)/about/page"), { ssr: false });
const MainHome = React.lazy(() => import("@/app/(pages)/home/page"), {
  ssr: false,
});
const Skills = React.lazy(() => import("./(pages)/skills/page"), {
  ssr: false,
});
const Blogs = React.lazy(() => import("./(pages)/blogs/page"), {
  ssr: false,
});

export default function Home() {
  const [loading, setLoading] = useState(true);
  const main = useRef(null);
  const about = useRef(null);
  const other2 = useRef(null);
  const blogs = useRef(null);
  const contact = useRef(null);

  const handleClick = (event) => {
    window.scrollTo({
      top: event.current.offsetTop - 55,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    const time = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000);
    };
    time();

    return () => {
      clearTimeout(time);
    };
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <>
          <Header
            handleClick={handleClick}
            about={about}
            other2={other2}
            reference={main}
            blogs={blogs}
            contact={contact}
          />
          <MainHome reference={main} about={about} handleClick={handleClick} />
          <About about={about} />
          <div
            ref={other2}
            style={{
              backgroundColor: "black",
              width: "100vw",
            }}
          >
            <Skills />
          </div>
          <Blogs blogs={blogs} />
          <Contact contact={contact} />
          <Footer />
        </>
      )}
    </>
  );
}
