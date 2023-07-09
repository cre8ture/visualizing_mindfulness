import React from "react";
import Particles from "react-particles-js";

export default function App() {
  return (
    <Particles
      params={{
        particles: {
          number: {
            value: 80
          },
          size: {
            value: 3
          },
          shape: {
            type: "circle"
          },
          color: {
            value: "#ffffff"
          },
          opacity: {
            value: 0.5
          },
          move: {
            enable: true,
            speed: 3
          }
        },
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push"
            },
            onHover: {
              enable: true,
              mode: "repulse"
            }
          }
        },
        detectRetina: true
      }}
    />
  );
}
