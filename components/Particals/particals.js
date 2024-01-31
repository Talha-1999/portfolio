"use client";

import React, { useCallback } from "react";
const { default: Particles } = require("react-tsparticles");
import { loadFull } from "tsparticles";

function ParticalsContainer() {
  const particalsInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  //   const particalsLoaded = useCallback(async () => {}, []);
  return (
    <Particles
      style={{
        height: "100vh",
        width: "100vw",
        position: "absolute",
        // zIndex: -2,
      }}
      id="tsparticals"
      init={particalsInit}
      //   loaded={particalsLoaded}
      options={{
        fullScreen: {
          enable: false,
        },
        background: {
          color: {
            value: "",
          },
        },
        fps_limit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: false,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 90,
            },
            repulse: {
              distance: 80,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#e68e2e",
          },
          links: {
            color: "#f5d393",
            distance: 150,
            enable: true,
            opacity: 0.5,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
          },
        },
        detectRetina: true,
      }}
    />
  );
}

export default ParticalsContainer;
