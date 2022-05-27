/**
 *  APP PORTFOLIO
 * created by Adrián Araque
 * 2021 
 */

/* Variables */

const brandtext = document.querySelector('#brand-text');

/* Classes */

class UI{
    proceduralText(){
        const str = 'Adrián Araque';
        const str2 = 'Nunca pares de aprender'
        let arrayFromString = str.split('');
        let i = 0;

        let printStr = setInterval(()=>{
            brandtext.textContent += arrayFromString[i];
            i++
            if(i === arrayFromString.length){
                clearInterval(printStr);
                //puntoBucle();
            }
        }, 80);

    }
}

/* Instances */
const ui = new UI;

/* Events */
document.addEventListener('DOMContentLoaded', () => {
    setTimeout(()=>{
        if(brandtext.textContent.length == 0){
            ui.proceduralText();
        }
    }, 400)
});

/* Functions */
function puntoBucle(){
    let cont = 0;

    let printDot = setInterval(()=>{
        if(brandtext.textContent[14] === ' '){
            brandtext.textContent = brandtext.textContent.replace('  ', '|');
            cont++
            console.log(cont+'poner');
            if(cont >= 11){
                clearInterval(printDot);
            }
        }else if(brandtext.textContent[13] === '|'){
            brandtext.textContent = brandtext.textContent.replace('|', '  ');
            cont++
            console.log(cont+'quitar');
            if(cont >= 11){
                brandtext.textContent = 'Adrián Araque';
                clearInterval(printDot);
            }
        }
    }, 120);
}







// PARTICLES.JS //
particlesJS('particles-js',
  
{
    "particles": {
      "number": {
        "value": 52,
        "density": {
          "enable": false,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.22885642810356918,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3.9458004845442964,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 30.405405405405382,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1.666902811231592,
        "direction": "left",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": false
  }

);

particlesJS('content-particles',
  
{
    "particles": {
      "number": {
        "value": 52,
        "density": {
          "enable": false,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.22885642810356918,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 3.9458004845442964,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 30.405405405405382,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": false,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 1.666902811231592,
        "direction": "left",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "bounce": false,
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": false,
          "mode": "repulse"
        },
        "onclick": {
          "enable": false,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200,
          "duration": 0.4
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": false
  }

);