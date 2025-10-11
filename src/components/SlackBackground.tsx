import { useEffect } from 'react';

declare global {
  interface Window {
    particlesJS: any;
  }
}

const SlackBackground = () => {
  useEffect(() => {
    // Load particles.js script
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/particles.js/2.0.0/particles.min.js';
    script.async = true;
    
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS("particles-js", {
          particles: {
            number: {
              value: 80,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
            },
            shape: {
              type: ["circle"],
              stroke: {
                width: 0,
                color: "#fff"
              },
              polygon: {
                nb_sides: 5
              }
            },
            opacity: {
              value: 1,
              random: false,
              anim: {
                enable: false,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 8,
              random: true,
              anim: {
                enable: false,
                speed: 10,
                size_min: 10,
                sync: false
              }
            },
            line_linked: {
              enable: true,
              distance: 150,
              color: "#808080",
              opacity: 0.4,
              width: 1
            },
            move: {
              enable: true,
              speed: 5,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: true,
                mode: "grab"
              },
              onclick: {
                enable: true,
                mode: "push"
              },
              resize: true
            },
            modes: {
              grab: {
                distance: 140,
                line_linked: {
                  opacity: 1
                }
              },
              bubble: {
                distance: 400,
                size: 40,
                duration: 2,
                opacity: 8,
                speed: 3
              },
              repulse: {
                distance: 200,
                duration: 0.4
              },
              push: {
                particles_nb: 4
              },
              remove: {
                particles_nb: 2
              }
            }
          },
          retina_detect: true
        });
      }
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup
      const particlesContainer = document.getElementById('particles-js');
      if (particlesContainer) {
        particlesContainer.innerHTML = '';
      }
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
    };
  }, []);

  return (
    <>
      <div className="fixed inset-0 w-full h-full" style={{ background: '#1a1a1a' }}>
        <div id="particles-js" className="absolute h-full w-full" />
      </div>
      
      {/* Slack Logo in center */}
      <div className="fixed inset-0 flex justify-center items-center pointer-events-none" style={{ zIndex: 1 }}>
        <img 
          className="h-24 md:h-32 opacity-20" 
          src="https://assets.brandfolder.com/pl546j-7le8zk-btwjnu/view@2x.png?v=1586891797" 
          alt="Slack Logo"
        />
      </div>
    </>
  );
};

export default SlackBackground;

